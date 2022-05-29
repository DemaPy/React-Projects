import CardHeader from "../CardHeader";
import Footer from "../Footer";
import Product from "../Product";
import "./style.scss"
import data from "./../../data"
import {useState, useEffect} from 'react'

const Card = () => {
    const [card, setCard] = useState(data);
    const [total, setTotal] = useState({
        price: card.reduce((prev, curr) => {
            return prev + curr.priceTotal
        }, 0),
        count: card.reduce((prev, curr) => {
            return prev + curr.count
        }, 0)
    })

    useEffect(() => {
        setTotal({
            price: card.reduce((prev, curr) => {
                return prev + curr.priceTotal
            }, 0),
            count: card.reduce((prev, curr) => {
                return prev + curr.count
            }, 0)
        })
    }, [card])
    

    const deleteProduct = (id) => {
        setCard(card =>  card.filter(product =>  id !== product.id))
        console.log(`Id ${id} has been deleted`)
    }

    const increase = (id) => {
        console.log('Increase', id);
        setCard(card => card.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    count: ++item.count,
                    priceTotal: ++item.count * item.price
                }
            }
            return item
        }))
    }

    const decrease = (id) => {
        console.log('Decrease', id)
        setCard(card => card.map(item => {
            if (item.id === id) {
                const newCount = item.count - 1 > 1 ? item.count - 1 : 1
                return {
                    ...item,
                    count: newCount, 
                    priceTotal: newCount * item.price
                }
            }
            return item
        }))
    }

    const changeValue = (id, value) => {
        setCard(card => card.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    count: value,
                    priceTotal: value * item.price
                }
            }
            return item
        }))
    }

    const products = card.map(item => {
        return (
            <Product 
                product={item} 
                key={item.id} 
                deleteProduct={deleteProduct} 
                increase={increase} 
                decrease={decrease}
                changeValue={changeValue}
            />
        )
    })

    return (
        <section className="cart">
            <CardHeader></CardHeader>
            {products}
            <Footer total={total}></Footer>
        </section>
    );
}
 
export default Card;
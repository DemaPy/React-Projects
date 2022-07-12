import './_vars.scss'
import './_base.scss'
import './_reset.scss'
import Title from '../Title/Title';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';
import data from '../../data'
import { useEffect, useState } from 'react';



function App() {
  const [items, setItems] = useState(data)
  const [total, setTotal] = useState({
    price: items.reduce((prev,curr) => prev+curr.priceTotal, 0),
    count: items.reduce((prev,curr) => prev+curr.count,0)
  })

  useEffect(() => {
    setTotal({
      price: items.reduce((prev,curr) => prev+curr.priceTotal, 0),
      count: items.reduce((prev,curr) => prev+curr.count,0)
    })
  }, [items])

  const deleteItem = (id) => {
    setItems(items => items.filter(i => i.id !== id))
  }

  const increase = (id) => {
    setItems(items => items.map(item => item.id === id ? {...item, count: ++item.count, priceTotal: item.count * item.price} : item))
  }

  const decrease = (id) => {
    setItems(items => items.map(item => item.id === id ? {...item, count: --item.count, priceTotal: item.count * item.price} : item))
  }

  return (
      <div className="App">
              <section className="section-cart">
          <header className="section-cart__header">
              <div className="container">
                  <Title/>
              </div>
          </header>
          <div className="section-cart__body">
              <div className="container">
                  <section className="cart">
                      <Header/>
                      {items.map(i => <Product items={i} key={i.id} deleteItem={deleteItem} increase={increase} decrease={decrease}/>)}
                      <Footer total={total}/>
                  </section>

              </div>
          </div>
      </section>
      </div>
  );
}

export default App;

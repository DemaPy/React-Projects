import Counter from '../Counter/Counter';
import './style.scss'


const Product = ({items, deleteItem, increase, decrease}) => {
    const {id, name, count, priceTotal, img} = items

    const priceFormatter = new Intl.NumberFormat()

    return ( 
    <section className="product">
        <div className="product__img"><img src={`./img/products/${img}`} alt={name} /></div>
        <div className="product__title">{name}</div>
        <div className="product__count">
            <Counter count={count} increase={increase} id={id} decrease={decrease}/>
        </div>
        <div className="product__price">{priceFormatter.format(priceTotal)} pln</div>
        <div className="product__controls">
            <button type="button">
                <img onClick={()=> deleteItem(id)} src="./img/icons/cross.svg" alt="Delete"/>
            </button>
        </div>
    </section>
     );
}
 
export default Product;
import Count from "../Count";
import "./style.scss"

const Product = ({product, deleteProduct, increase, decrease, changeValue}) => {
    const {id, img, title, priceTotal, count} = product

    const priceFormat = new Intl.NumberFormat()

    return ( 
        <section className="product">
            <div className="product__img"><img src={`./img/products/${img}`} alt={title} /></div>
            <div className="product__title">{title}</div>
            <div className="product__count">
            <Count count={count} increase={increase} decrease={decrease} id={id} changeValue={changeValue}></Count>
            </div>
            <div className="product__price">{priceFormat.format(priceTotal)} руб.</div>
            <div className="product__controls">
                <button type="button" onClick={() => deleteProduct(id)} >
                    <img src="./img/icons/cross.svg" alt="Delete" />
                </button>
            </div>
        </section>
     );
}
 
export default Product;
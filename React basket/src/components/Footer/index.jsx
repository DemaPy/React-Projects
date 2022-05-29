import "./style.scss"

const Footer = ({total}) => {
    const {count, price} = total
    const priceFormat = new Intl.NumberFormat()
    return ( 
        <footer className="cart-footer">
            <div className="cart-footer__count">{count} шт.</div>
            <div className="cart-footer__price">{priceFormat.format(price)} руб.</div>
        </footer>
     );
}
 
export default Footer;
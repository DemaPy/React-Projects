import './style.scss'

const Footer = ({total}) => {
    const {price, count} = total
    const priceFormatter = new Intl.NumberFormat()
    return ( 
    <footer className="cart-footer">
        <div className="cart-footer__count">{count} szt.</div>
        <div className="cart-footer__price">{priceFormatter.format(price)}</div>
    </footer>
     );
}
 
export default Footer;
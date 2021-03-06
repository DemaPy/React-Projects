import './style.scss'

const Counter = ({count, increase, id, decrease}) => {
    return ( 
    <div className="count">
        <div className="count__box">
            <input type="number" className="count__input" min="1" max="100" value={count}/>
        </div>
        <div className="count__controls">
            <button type="button" className="count__up">
                <img onClick={() => increase(id)} src="./img/icons/icon-up.svg" alt="Increase"/>
            </button>
            <button type="button" className="count__down">
                <img onClick={() => decrease(id)} src="./img/icons/icon-down.svg" alt="Decrease"/>
            </button>
        </div>
    </div>
     );
}
 
export default Counter;
import "./_vars.scss"
import "./_base.scss"
import "./_reset.scss"
import "./_section-cart.scss"
import Title from "../Title"
import Card from "../Card"

function App() {
  return (
    <section className="section-cart">
        <header className="section-cart__header">
            <div className="container">
                <Title></Title>
            </div>
        </header>
        <div className="section-cart__body">
            <div className="container">
                <Card></Card>
            </div>
        </div>
    </section>
  );
}

export default App;

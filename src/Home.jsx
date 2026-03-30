import Header from "./Header";
import CardPizza from "./CardPizza";

function Home() {
    return (
        <div id='home'>
            <Header />
            <div id='pizzas-container'>
                <CardPizza
                    name="Napolitana"
                    price={5950}
                    ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                    img="https://easyways.cl/storage/20210208143331pizza-napolitana.jpg"
                />
                <CardPizza
                    name="Española"
                    price={6950}
                    ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                    img="https://sultanalpaso.cl/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-24-at-4.23.42-PM-11.jpeg"
                />
                <CardPizza
                    name="Pepperoni"
                    price={6950}
                    ingredients={["mozzarella", "pepperoni", "orégano"]}
                    img="https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"
                />
            </div>
        </div>
    )    
};

export default Home
const CardPizza = (pizza) => {
    return (
        <div id='product-card'>
            <div id='head-product'>
                <img id='product-img' src={pizza.img}></img>
                <h3>{pizza.name}</h3>
                <h4>Ingredientes:</h4>
                <p>{pizza.ingredients}</p>
                <h3>Precio: {pizza.price}</h3>
            </div>
            <div id='footer-product'>
                <button>Ver más</button>
                <button>Añadir</button>
            </div>
        </div>
    );
};

export default CardPizza;
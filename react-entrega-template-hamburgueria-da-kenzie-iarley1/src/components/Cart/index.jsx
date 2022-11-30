import { StyleCart } from "./styles.js"


export function Cart ({listProducts, deleteProduct, deleteAllProducts}) {

    const sum = listProducts.reduce((acc, acumalator) => acc + acumalator.price, 0)

    if(listProducts.length === 0){
        return (
            <StyleCart>
                <h3>Carinho de comprar</h3>
                <ul>
                   <h4>Sua sacola esta vazia</h4>
                   <p>Adicione itens</p>
                </ul>
            </StyleCart>
        )
    }

    return (
        <StyleCart>
            <h3>Carinho de comprar</h3>
            <ul>
                {listProducts.map((product, index) => (
                     <li key={index}>
                        <img src={product.img} alt={product.name} />
                        <div>
                           <h2>{product.name}</h2>
                           <p>{product.category}</p>
                        </div>
                        <button onClick={() => deleteProduct(product.id)} type="button" >Remover</button>
                     </li> 
                ))}
                <div>
                   <div>
                       <p>Total</p>
                       <span>{sum.toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</span>
                   </div>
                   <button onClick={() => deleteAllProducts()} type="button">Remover Todos</button>
                </div>
            </ul>
            
        </StyleCart>
    )
}
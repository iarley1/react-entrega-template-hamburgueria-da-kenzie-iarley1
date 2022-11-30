import { toast } from "react-toastify"
import { StyleCardProduct } from "./styles"

export function CardProduct ({product, handleClick}) {
    
    return (
        <StyleCardProduct>
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <span>{product.price.toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</span>
            <button onClick={() => {handleClick(product.id); }}>Adicionar</button>
        </StyleCardProduct>
    )
}
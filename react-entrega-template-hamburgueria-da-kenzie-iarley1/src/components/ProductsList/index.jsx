import { CardProduct } from "../CardProduct"
import { StyleProductList } from "./styles"

export function ProductsList ({products, handleClick, check}) {
    if(products.length === 0 && check){
        return (
            <StyleProductList>
                 <h5>Nenhum produto foi encontrado</h5>
            </StyleProductList>
        )
    }
    return (
        <StyleProductList>
            {products.map((product, index) => (
               <CardProduct key={index} product={product} handleClick={handleClick}/>
               
            ))}
        </StyleProductList>
    )
}
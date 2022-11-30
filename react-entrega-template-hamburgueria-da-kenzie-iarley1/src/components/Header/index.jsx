import { StyleHeader } from "./style";


export function Header ({showProducts}) {
    return (
        <StyleHeader>
           <div className="div-header">
              <h1>Burguer <span>Kenzie</span></h1>
              <div>
                <input type="text" onChange={showProducts} placeholder="Digitar pesquisa"/>
                <button type="button">Pesquisar</button>
              </div>
           </div>
      </StyleHeader>
    )
}
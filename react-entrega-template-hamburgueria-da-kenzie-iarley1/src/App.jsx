import { useEffect, useState } from "react"
import { Cart } from "./components/Cart"
import { Header } from "./components/Header"
import { ProductsList } from "./components/ProductsList"
import { api } from "./services/api.js"
import { Container } from "./styles/container"

import 'react-toastify/dist/ReactToastify.min.css'
import { toast } from "react-toastify"

function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [listProducts, setListProducts] = useState([])

  const [loading, setLoading] = useState(true)
  const [check, setCheck] = useState(false)

  

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await api.get("products")
        setProducts(res.data);
        setFilteredProducts(res.data)
        if(res.status === 200){
          setCheck(true)
        }
      } catch (error) {
        
      } finally {
        setLoading(false)
      }
    }
    getProducts();
  }, []);

  function handleClick(id) {
    const productsCart  = [...products] 

    const product = productsCart.find(product => product.id === id)

    const productSome =  listProducts.some((item) => item.id === product.id)
    if(productSome){
      toast.error('O item ja foi adicionado', {autoClose: 1000})
    }else{
      setListProducts([...listProducts, product])
      toast.success('Adicionado com sucesso',{autoClose: 1000})
    }
  }
  
  function showProducts(event) {
    if (!event.target.value) {
      return setFilteredProducts(products)
    }

    const filterProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().includes(event.target.value.toLowerCase()) || product.category.toLowerCase().includes(event.target.value.toLowerCase())

    }
      
    )

    setFilteredProducts(filterProducts)
  }

  function deleteProduct(ProductId) {
    const list = listProducts.filter((product) => product.id !== ProductId)
    setListProducts(list)
  }

  function deleteAllProducts() {
    const list = []
    setListProducts(list)
  }

  return (
    <Container>
      <div className="box">
        <Header showProducts={showProducts}/>
        <div>
           {loading && <div className="spinner"></div>}
           <ProductsList products={filteredProducts} handleClick={handleClick} check={check}/>
           <Cart listProducts={listProducts}
            deleteProduct={deleteProduct}
            deleteAllProducts={deleteAllProducts}/>
        </div>
      </div>
      
    </Container>
  );
}

export default App

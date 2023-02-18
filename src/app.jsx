import ProductContainer from "./components/ProductContainer";
import Product from "./components/Product";
import './App.css'
const App = () => {
    return(
        
        
        <ProductContainer>
        <Product 
        name="Camisa" 
        oldPrice = "250"
        Price= "350"
        />
        <Product name="Zapatos" />
        <Product name="Jersey"/>
        <Product name="Chaqueta"/>
        <Product name="Chandal"/>
        <Product name="Sudadera"/>
        </ProductContainer>
    
    )
}
export default App


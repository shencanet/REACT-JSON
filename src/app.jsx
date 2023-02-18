import ProductContainer from "./components/ProductContainer";
import Product from "./components/Product";
import './App.css'
import data from './products.json'
const App = () => {
    return(
        
        
        <ProductContainer>

            {data.map(product=> 

                <Product 
                key={product.name}
                discount={product.discount}
                name={product.name} 
                oldPrice ={product.price}
                Price={product.price - ((product.price * product.discount)/100)}
                />

             )}

        
        
       
        </ProductContainer>
    
    )
}
export default App


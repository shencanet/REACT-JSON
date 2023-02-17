import  ReactDOM  from "react-dom/client";
import App from "./App";
import ProductContainer from "./components/ProductContainer";
const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement);
console.log(root)


root.render(
    <>
    <h1>hola mundo</h1>
    <App />
    <ProductContainer />
    </>
)
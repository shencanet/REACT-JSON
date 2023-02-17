import  ReactDOM  from "react-dom/client";
import App from "./App";
import './index.css'
const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement);
console.log(root)


root.render(
    <>
    
    <App />
    
    </>
)
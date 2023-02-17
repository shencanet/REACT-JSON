import  ReactDOM  from "react-dom/client";

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement);
console.log(root)


root.render(
    <h1>hola mundo</h1>
)
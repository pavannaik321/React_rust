
import ProductList from "./components/ProductList";
import SideBar from "./components/SideBar";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductById from "./components/ProductById";
import ProductByprice from "./components/ProductByPrice";
import { useState } from "react";
import ProductDelete from "./components/ProductDelete";


// axios.defaults.baseURL = 'http://13.60.37.157:8080';

function App() {
    const components = [<ProductList/>,<ProductForm/>,<ProductById/>,<ProductByprice />,<ProductDelete/>]
    const [select, setSelected] = useState(0)

    const handleDataFromChild = (data) =>{
        console.log(data)
        setSelected(data)
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <aside>
                <SideBar  sendDataToParent={handleDataFromChild} />
            </aside>
            {components[select]}
        </main>
    );
}

export default App;

import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';

const ProductList = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/products");
                console.log("response data : ", response.data);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="product-list w-full">
            <h2 className="align-center">Products</h2>
            <ul className="flex-column  ">
                {data.map((product, index) => (
                    <li
                        key={index}
                        className="flex justify-between bg-stone-700  text-white p-5 mb-5"
                    >
                        <p>{product.id}</p>
                        <strong>{product.name}</strong>
                        {product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

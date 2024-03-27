import axios from 'axios';
import React, { useState } from 'react';

const ProductByprice = () => {
    const [price, setPrice] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePrice = async () => {
        const newPrice = parseInt(price, 10);

        try {
            setLoading(true);
            const response = await axios.get(`/api/price/${newPrice}`);
            setData(response.data);
            setLoading(false);
            setError(null);
            console.log(response.data);
        } catch (error) {
            console.log("Error", error);
            setLoading(false);
            setError("Failed to fetch data");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Product Less than Price</h1>
            <div className="mb-4">
                <label htmlFor="productprice" className="block text-sm font-medium text-gray-700">Enter Price:</label>
                <input
                    type="text"
                    id="productprice"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button
                onClick={handlePrice}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
                Search
            </button>
            {loading ? <p className="mt-4">Loading...</p> : (
                <div className="mt-4">
                    {error ? <p className="text-red-600">{error}</p> : (
                        <div>
                            {data ? (data.map((product, index) => (
                    <li
           
                        className="flex justify-between bg-stone-700  text-white p-5 mb-5"
                    >
            
                        <strong>{product.name}</strong>
                        {product.price.toFixed(2)}
                    </li>
                ))) : <p>No product found</p>}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductByprice;

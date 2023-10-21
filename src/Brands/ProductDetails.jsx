import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const products = useLoaderData();
    const { _id } = useParams();
    const idInt = parseInt(_id);

    const product = products.find(product => product._id === idInt);
    console.log(product);
    return (
        <div>
            Product details
        </div>
    );
};

export default ProductDetails;
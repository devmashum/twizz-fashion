
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import Nike from './Nike';

const AllProducts = () => {


    const products = useLoaderData();


    return (
        <div>

            <div className=' grid md:grid-cols-3 gap-5 m-5'>   {products.map(product => (
                <SingleProduct key={product.id} product={product} />
            ))}</div>

        </div>
    );
};
export default AllProducts;
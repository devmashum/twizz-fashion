
import { Link } from 'react-router-dom';

const Events = ({ event }) => {

    console.log(event)

    const { name, image, description, price, id } = event;



    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                {
                    description.length > 150 ? <p>{description.slice(0, 150)} <Link to={`/event/${id}`} className="text-blue-600 font-bold">Details</Link></p>
                        : <p>{description}</p>
                }

                <hr />

                <div className="card-actions justify-end mt-5">
                    <p className='text-2xl'>Price: ${price}</p>
                    <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Events;
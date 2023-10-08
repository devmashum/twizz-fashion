
import { useLoaderData } from 'react-router-dom';

const Event = () => {




    const events = useLoaderData();
    const { name, image, description, price } = events;
    console.log(events);
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-5">

            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <h1>{description}</h1>

                <hr />

                <div className="card-actions justify-end mt-5">
                    <p className='text-2xl'>Price: ${price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Event;
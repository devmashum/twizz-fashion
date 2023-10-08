

import { useLoaderData, useParams } from 'react-router-dom';


const Event = () => {

    const events = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const event = events.find(event => event.id === idInt);
    console.log(event);

    return (

        <div className="card  bg-base-100 shadow-xl mbq-5">

            <figure><img src={event.image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <p>{event.description}</p>
                <hr />
                <div className="card-actions justify-end mt-5">
                    <p className='text-2xl'>Price: ${event.price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Event;

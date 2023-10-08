

const Service = ({ service }) => {
    const { title, image, price, date } = service;

    return (
        <div className="card card-side bg-base-100 shadow-xl my-5 px-5">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <hr />
                <p>{date}</p>
                <hr />
                <p>Price: ${price}</p>


            </div>
        </div>
    );
};

export default Service;
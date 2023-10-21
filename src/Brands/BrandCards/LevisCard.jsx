
import Swal from 'sweetalert2';

const LevisCard = ({ product }) => {
    const { _id, brandname, name, type, price, image, rating, description } = product;


    const handleAdd = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Add this!'
        })
            .then((result) => {
                if (result.isConfirmed) {



                    fetch(`http://localhost:3000/nike`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Added!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mbq-5">

                <figure><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <hr />
                    <div className="flex justify-center items-center">
                        <p className='text-2xl'>Price: ${price}</p>
                        <button onClick={() => { handleAdd(_id) }} className='btn btn-primary'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LevisCard;
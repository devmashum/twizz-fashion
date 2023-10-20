
import Swal from 'sweetalert2'
const AddProducts = () => {

    const handleAddProducts = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const newProducts = { name, brandname, type, price, description, rating, image };
        console.log(newProducts);
        // send Data to the server
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className="bg-blue-100 p-24">

            <h3 className="text-3xl font-extrabold text-center mb-10">Add Products</h3>
            <form onSubmit={handleAddProducts}>

                <div className="md:flex gap-5 mb-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brandname" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className=" gap-5">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input className="btn btn-block mt-3" type="submit" value="Add Coffee" />

            </form>
        </div>
    );
};

export default AddProducts;
import { useLoaderData } from "react-router-dom";
import MyCartView from "./MyCartView";


const MyCart = () => {
    const myCarts = useLoaderData();

    return (
        <div>
            <h3> Total Products in Cart:{myCarts.length}</h3>
            <div className=" lg:grid grid-cols-3 gap-3 my-3">
                {
                    myCarts.map(myCart => <MyCartView key={myCart._id} myCart={myCart}></MyCartView>)
                }
            </div>
        </div>
    );
};

export default MyCart;
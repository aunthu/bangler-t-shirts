import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
const Home = () => {
    const tshirts=useLoaderData();
    console.log(tshirts);
    return (
        <div>
            this is home compo{tshirts.length}
            {
                tshirts.map(tshirt=><Tshirt key={tshirt._id}></Tshirt>)
            }
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Chef from '../chef/Chef';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    console.log(chefs);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res=> res.json())
        .then(data => setChefs(data))
    },[])
    return (
        <div className='my-10'>
            
            <div className='grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4'>
            {
               chefs.map(chef => <Chef key={chef.id} chef={chef} />)
            }
            </div>
        </div>
    );
};

export default Chefs;
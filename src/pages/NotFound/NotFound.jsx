import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        
            <div className="mx-auto w-1/2 mt-10">
                <div className='text-center'>
                    <img src="https://img.freepik.com/vector-premium/man-get-page-not-found-error_198530-2544.jpg?w=2000"/>
                    
                    <p className="text-center">You may have mis-typed the URL.

                        Or the page has been removed.<br />

                        Actually, there is nothing to see here...

                        Click on the links below to do something,<br /> Thanks!</p>

                    
                        <button className="btn-back-home"><Link className="text-decoration-none text-light" to="/"><span className='btn btn-primary mt-5'>Back Home</span> </Link></button>
                </div>

          
        </div>

    );
};

export default NotFound;
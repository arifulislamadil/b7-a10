import React from 'react';

const Blogs = () => {
    return (
       <div className='mb-20'>
        <h1 className="text-4xl text-center font-bold ">Blog</h1>
         <div className=''>
            <h1 className='text-center text-4xl text-blue-600 font-bold mt-6'>Question And Answer</h1>
            <div className='mt-6'>
                <h3 className='text-2xl'><span className='font-bold'>Q</span>: What is the different Between uncontrolled and controlled component? </h3>
                <p><span className='font-bold'>A</span>: <span className='font-bold text-orange-900'>Controlled</span> components are components that are tightly controlled by React. They are defined by state variables that are passed down as props from their parent components <br/> <span className='font-bold text-orange-900 ml-5'>Uncontrolled</span> components are components that manage their own state internally. They use the DOM as the source of truth for their state rather than relying on React..</p>
            </div>
            <div className='mt-6'>
                <h3 className='text-2xl'><span className='font-bold'>Q</span>: How to validate React props using PropTypes? </h3>
                <p><span className='font-bold'>A</span>: PropTypes is a built-in library in React that allows you to validate the props passed to a component, helping to ensure that they have the expected type and format.</p>
            </div>
            <div className='mt-6'>
                <h3 className='text-2xl'><span className='font-bold'>Q</span>: Tell us the difference between nodejs and express js ? </h3>
                <p><span className='font-bold'>A</span>: Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code outside of a web browser. It provides a set of built-in modules for developing server-side applications in JavaScript.</p>
            </div>
            <div className='mt-6'>
                <h3 className='text-2xl'><span className='font-bold'>Q</span>: What is a custom hook, and why will you create a custom hook?? </h3>
                <p><span className='font-bold'>A</span>: In React, a custom hook is a function that allows you to reuse stateful logic across multiple components. Custom hooks are functions that can use the built-in React hooks</p>
            </div>
        </div>
       </div>
    );
};

export default Blogs;
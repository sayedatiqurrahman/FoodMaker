import React, { createRef } from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = createRef();
    return (
        <div className='p-[130px]'>
            <div className='text-center'>

                <Pdf targetRef={ref} className="mx-auto" filename="code-example.pdf">
                    {({ toPdf }) => <button className='text-2xl drop-shadow-md transition-all duration-200 border-2 border-gray-400 px-10 rounded-full text-lg font-bold py-1 mt-4 bg-gray-700 hover:bg-gray-400 hover:text-gray-900 font2' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref} className=' py-[130px] px-10 max-w-3xl mx-auto text-gray-400'>



                <div className='mt-8'>
                    <h1 className='text-2xl font2'>1) What is the Differences between uncontrolled and controlled components?</h1>
                    <p className='mt-4'>
                        <b>Differences between uncontrolled and controlled components: <br /></b>
                        In a controlled component, the React state determines the value of the component, and any change to that value will cause the component to be re-rendered. In an uncontrolled component, the DOM determines the value of the component, and React has no control over it.


                    </p>
                </div>

                <div className='mt-8'>
                    <h1 className='text-2xl font2'>2) How to validate React props using PropTypes?</h1>
                    <p className='mt-4'>
                        <b>Validate React props using PropTypes: <br /></b>

                        PropTypes is a type-checking library that is built into React. It is used to validate the props that are passed to a React component. To use PropTypes, you need to import it from the 'prop-types' package and then define the propTypes object on your component.</p>
                </div>


                <div className='mt-8'>
                    <h1 className='text-2xl font2'>3) What is the difference between nodejs and express js?</h1>
                    <div className='mt-4'>
                        <b>difference between nodejs and express js: <br /></b>

                        <p>
                            <b>Node.js is a server-side JavaScript runtime environment</b>, which allows JavaScript code to run on the server-side. It provides a set of core modules that allow you to do things like reading and writing files, handling HTTP requests, and working with the file system.
                        </p><p>
                            <b>Express.js, on the other hand, is a web application framework built on top of Node.js.</b> It provides a set of features and tools that make it easier to build web applications and APIs. It simplifies the process of handling HTTP requests, routing, and middleware integration.
                        </p><p>
                            <b>In summary,</b> Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js.
                        </p>
                    </div>
                </div>

                <div className='mt-8'>
                    <h1 className='text-2xl font2'>4) What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='mt-4'>
                        <b> Custom React hooks are an essential tool that let I add special, unique functionality to my React applications. <br /></b>

                        In many cases, if I want to add a certain feature to my application, I can simply install a third-party library that is made to solve my problem. But if such a library or hook doesn't exist, what do I do?

                        As a React developer, it's important to learn the process of creating custom hooks to solve problems or add missing features within my own React projects.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;
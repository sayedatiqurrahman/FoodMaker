import { Carousel } from 'flowbite-react';
import React from 'react';

const Header = () => {
    return (
        <div className="h-[calc(100vh-77px)] mt-5 ">
            <Carousel>
                <div className='h-full relative border-b border-b-gray-400'>
                    <img
                        className='h-auto md:h-[450px] z-10 lg:h-[600px] absolute bottom-0 left-2'
                        src="https://i.ibb.co/jkk4x08/image.png"
                        alt="..."
                    />
                    <div className='absolute top-5 lg:left-[330px] z-20 max-w-xl w-full shadow-lg'>
                        <h1 className='fontScript drop-shadow-lg'>Welcome</h1>

                        <div className='flex items-center textShadow'>
                            to
                            <img className='w-20' src="https://i.ibb.co/JHcw0GL/1-image-removebg-preview-1.png" alt="" />
                            <h4 className='text-3xl font2 textShadow drop-shadow-2xl textShadow'>Food Maker</h4>

                        </div>
                        <hr className='w-36 border-yellow-300 border' />
                        <p className='textShadow' >Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.</p>
                    </div>


                    <img className='absolute top-1/2 z-0 -translate-y-1/2 -right-6' src="https://i.ibb.co/vLdbbqP/pattern-blackboard-drawn-chalk-gastronomy-icons-vector-cuisine-fast-food-cafe-bright-background-menu.png" alt="" />

                </div>
                <div className='h-full relative  border-b border-b-gray-400'>
                    <img
                        className='h-auto md:h-[450px] z-10 lg:h-[600px] absolute bottom-0 left-2'
                        src="https://i.ibb.co/jkk4x08/image.png"
                        alt="..."
                    />
                    <div className='absolute top-5 lg:left-[330px] z-20 max-w-xl w-full'>
                        <h1 className='fontScript'>Welcome</h1>

                        <div className='flex items-center'>
                            to
                            <img className='w-20' src="https://i.ibb.co/JHcw0GL/1-image-removebg-preview-1.png" alt="" />
                            <h4 className='text-3xl font2 textShadow textShadow'>Food Maker</h4>

                        </div>
                        <hr className='w-36 border-yellow-300 border' />
                        <p className='textShadow' >Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.</p>
                    </div>


                    <img className='absolute top-1 z-0 -translate-y-1/2 -right-6' src="https://i.ibb.co/vLdbbqP/pattern-blackboard-drawn-chalk-gastronomy-icons-vector-cuisine-fast-food-cafe-bright-background-menu.png" alt="" />

                </div>
                <div className='h-full relative border-b border-b-gray-400'>
                    <img
                        className='h-auto md:h-[450px] z-10 lg:h-[600px] absolute bottom-0 left-2'
                        src="https://i.ibb.co/jkk4x08/image.png"
                        alt="..."
                    />
                    <div className='absolute top-5 lg:left-[330px] z-20 max-w-xl w-full'>
                        <h1 className='fontScript'>Welcome</h1>

                        <div className='flex items-center'>
                            to
                            <img className='w-20' src="https://i.ibb.co/JHcw0GL/1-image-removebg-preview-1.png" alt="" />
                            <h4 className='text-3xl font2 textShadow'>Food Maker</h4>

                        </div>
                        <hr className='w-36 border-yellow-300 border' />
                        <p className='textShadow' >Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.</p>
                    </div>


                    <img className='absolute bottom-0 z-0  -right-6' src="https://i.ibb.co/vLdbbqP/pattern-blackboard-drawn-chalk-gastronomy-icons-vector-cuisine-fast-food-cafe-bright-background-menu.png" alt="" />

                </div>
                <div className='h-full relative border-b border-b-gray-400'>
                    <img
                        className='h-auto md:h-[450px] z-10 lg:h-[600px] absolute bottom-0 left-2'
                        src="https://i.ibb.co/jkk4x08/image.png"
                        alt="..."
                    />
                    <div className='absolute top-5 lg:left-[330px] z-20 max-w-xl w-full'>
                        <h1 className='fontScript'>Welcome</h1>

                        <div className='flex items-center'>
                            to
                            <img className='w-20' src="https://i.ibb.co/JHcw0GL/1-image-removebg-preview-1.png" alt="" />
                            <h4 className='text-3xl font2 textShadow'>Food Maker</h4>

                        </div>
                        <hr className='w-36 border-yellow-300 border' />
                        <p className='textShadow' >Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.</p>
                    </div>


                    <img className='absolute top-1/2 z-0 -translate-y-1/2 -right-6' src="https://i.ibb.co/vLdbbqP/pattern-blackboard-drawn-chalk-gastronomy-icons-vector-cuisine-fast-food-cafe-bright-background-menu.png" alt="" />

                </div>
            </Carousel>
        </div>
    );
};

export default Header;
import React from 'react'
import './hero.css'
import HeroImg from '../../assets/images/hero-img.svg'

const Hero = () => {
    return (
        <div className={"hero grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 sm:mx-8 md:mx-12 lg:mx-16 mt-5"} style={{maxWidth: '1440px'}}>
            <div className={"mt-2 md:mt-16"}>
                <h1 className="text-4xl sm:text-5xl font-bold">
                    Amazing <br />Experiences from Our Wonderful Customers
                </h1>
                <p className={"mt-3 text-gray-light"}>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div className={"right"}>
                <img src={HeroImg} alt={"hero"} className={"hero-img"} />
            </div>
        </div>
    )
}

export default Hero;

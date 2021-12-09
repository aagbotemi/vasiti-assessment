import React from 'react'
import { Link } from "react-router-dom";
import Banner from '../../assets/images/subscribe-banner.svg'
import LinkedIn from  '../../assets/images/in.svg'
import Facebook from  '../../assets/images/fb.svg'
import Twitter from  '../../assets/images/tw.svg'
import Instagram from  '../../assets/images/ig.svg'

import './footer.css'

const Footer = () => {
    return (
        <div className='bg-black-variant'>
            <div
                className='grid md:grid-cols-2 pt-12 md:px-24 px-12'
            >
                <div className="order-2 md:order-1 relative md:-top-24 mt-12 md:mt-0">
                    <img src={Banner} className="h-72 w-full" alt="subscribed banner" />
                </div>
                <div className={'order-1 md:order-2 text-white'}>
                    <h1 className='text-4xl'>Be a  member <br/>
                        of our community 🎉</h1>
                    <p className='my-3'>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                    <form>
                        <div className='form-control relative'>
                            <input 
                            type='text' placeholder='enter your email' 
                            className='rounded p-2 h-11' />
                            <button type='submit' className="bg-white absolute mt-1 h-9 rounded text-black-light right-28 top-0 px-2 text-xs font-,edium">SUBSCRIBE</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-5 md:px-24 px-12 text-white mt-10 md:mt-0'>
                <div className='mb-6'>
                    <h4 className='mb-2'>Company</h4>
                    <ul className="text-sm">
                        <li className="mb-1">
                            <Link to='/'>About us</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Term of Use</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Privacy Policy</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Press & Media</Link>
                        </li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h4 className='mb-2'>Products</h4>
                    <ul className="text-sm">
                        <li className="mb-1">
                            <Link to='/'>Marketplace</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Magazine</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Seller</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Wholesale</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Services</Link>
                        </li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h4 className='mb-2'>Careers</h4>
                    <ul className="text-sm">
                        <li className="mb-1">
                            <Link to='/'>Become a Campus Rep</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Become a Vasiti Influencer</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Become a Caampus writer</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Become an Affiliate</Link>
                        </li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h4 className='mb-2'>Get in touch</h4>
                    <ul className="text-sm">
                        <li className="mb-1">
                            <Link to='/'>Contact us</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Partner with us</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Advertise with us</Link>
                        </li>
                        <li className="mb-1">
                            <Link to='/'>Help/FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h4 className='mb-2'>Join our community</h4>
                    <div className='flex my-4'>
                        <Link to='/'>
                            {" "}
                            <img src={LinkedIn} alt='Vasiti Linkedin' />
                        </Link>
                        <Link to='/' className="mx-3">
                            {" "}
                            <img src={Facebook} alt='Vasiti Facebook' />
                        </Link>
                        <Link to='/'>
                            {" "}
                            <img src={Instagram} alt='Vasiti Instagram' />
                        </Link>
                        <Link to='/' className="ml-3">
                            {" "}
                            <img src={Twitter} alt='Vasiti Twittter' />
                        </Link>
                    </div>

                    <ul className="text-sm">
                        <li className="mb-1">
                            <Link to='/'>Email Newsletter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

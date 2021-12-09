import React from 'react'

const Testimonials = ({
    userImage,
    username,
    userLocation,
    userTestimony,
    userType
}) => {
    return (
        <div className=''>
            <div className=''>
                <img src={userImage} alt='Vasiti User' />
            </div>
            <div className='my-6'>
                <h4 className='text-2xl font-semibold mb-1 text-gray-faint'>{username}</h4>
                <p>
                {" "}
                <span className='text-sm text-gray-faintextra'>{userLocation}</span>{" "}
                <span
                    className={`font-medium text-xs px-2 py-1 ${userType === "CUSTOMER" ? "bg-blue-faint text-blue-light" : "bg-green-faint text-green-light"}`}
                >
                    {userType}
                </span>{" "}
                </p>
            </div>
            <p className='text-gray-faint'>{userTestimony}</p>
        </div>
    )
}

export default Testimonials

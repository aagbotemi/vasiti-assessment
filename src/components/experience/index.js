import React from 'react'
import { Link } from "react-router-dom";
import Border from '../../assets/images/border-bottom.svg'

const Experience = ({
  experienceTitle,
  experienceText,
  userType,
  experienceImage,
  isDark,
  handleOpen
}) => {
  return (
    <div
      className='experience'
      style={{
        background: `${isDark ? "#222222" : "#FFF8F5"}`,
        color: `${isDark ? "#FFFFFF" : "#242120"}`,
      }}
    >
      <div
        className='grid md:grid-cols-2'
      >
        <div className={`pt-12 md:pl-16 md:pr-8 ${isDark ? "order-2 md:order-1" : "order-1 md:order-2"}`}
        >
          <img src={experienceImage} className='w-full' alt='Vasiti Experience' />
        </div>
        <div
          className={`pt-12 md:pr-16 md:pl-8 px-8 ${isDark ? "order-1 md:order-2" : "order-2 md:order-1"}`}
        >
          <h3 className='text-2xl font-semibold'>{experienceTitle}</h3>
          <div
            className={"my-3"}
          >
            <span
              className={`${isDark ? "border-white" : "border-gold-light text-gold-light"} border px-2 py-1 rounded text-xs`}>
              {userType}
            </span>
          </div>
          <p>{experienceText}</p>
          <div className='my-7'>
            <Link
              to='/'
              className={`${!isDark && "text-gold-light"} uppercase`}
              onClick={handleOpen}
            >
              Share Your Own Story!
              <img src={Border} alt="border" className='w-48' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

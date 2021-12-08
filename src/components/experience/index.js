import React from 'react'

import { Link } from "react-router-dom";
import "./Experience.css";

const Experience = ({
  experienceTitle,
  experienceText,
  userType,
  experienceImage,
  isDark,
  handleOpen,
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
        className='container'
        style={{ flexDirection: `${!isDark && "row-reverse"}` }}
      >
        <div className='experience__left'>
          <img src={experienceImage} alt='Vasiti Experience' />
        </div>
        <div
          className='experience__right'
          style={{ margin: `${isDark ? "0 0 0 70px" : "0 70px 0 0"}` }}
        >
          <h3>{experienceTitle}</h3>
          <div className={`experience__user ${!isDark && "vendor__color"}`}>
            {userType}
          </div>
          <p>{experienceText}</p>
          <div className='experience__share'>
            <Link
              to='/'
              className={`${!isDark && "vendor__color"}`}
              onClick={handleOpen}
            >
              Share Your Own Story!
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Experience

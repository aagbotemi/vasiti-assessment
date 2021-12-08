import React from 'react'
import './secondHeader.css'

const SecondHeader = () => {
    return (
        <div className={"second-header md:flex items-center w-full justify-center h-14 hidden"}>
            <p className={"mx-4"}>MARKETPLACE</p>
            <p className={"mx-4"}>WHOLESALE CENTER</p>
            <p>SELLER CENTER</p>
            <p className={"mx-4"}>SERVICES</p>
            <p className={"mx-4"}>INTERNSHIPS</p>
            <p className={"mx-4"}>EVENTS</p>
        </div>
    )
}

export default SecondHeader

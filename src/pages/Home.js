import React from 'react'
import Experience from '../components/experience'
import Hero from "./../components/hero"
import TwoLadies from './../assets/images/black-beautiful-ladies.png'

const Home = () => {
    return (
        <div className={''}>
            <Hero />
            <Experience
                experienceImage={TwoLadies}
                isDark
                experienceTitle='Tolu & Joy’s Experience'
                experienceText='I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!'
                userType='CUSTOMER'
                // handleOpen={handleOpen}
            />
        </div>
    )
}

export default Home

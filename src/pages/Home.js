import React, { useEffect, useState } from 'react'
import StoryModal from '../components/storyModal'
import Experience from '../components/experience'
import Hero from "./../components/hero"
import TwoLadies from './../assets/images/black-beautiful-ladies.png'
import WomanShoppingBag from './../assets/images/woman-shoppingbag-card.svg'
import WomanBagMobile from './../assets/images/woman-bag-mobile.png'
import Testimonials from '../components/testimonials'
import { testimonial1, testimonial2 } from '../dummyData'

const Home = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(true);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    let autoResize = () => {
        if (window.innerWidth > 768) {
            setIsMobileScreen(false)
        } else{
            setIsMobileScreen(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', autoResize)
        autoResize();  
    }, [])
    
    return (
        <div className={''}>
            <Hero />

            <Experience
                experienceImage={TwoLadies}
                isDark
                experienceTitle='Tolu & Joy’s Experience'
                experienceText='I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back!'
                handleOpen={handleOpen}
                userType='CUSTOMER'
            />

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 mx-16 my-16">
                {
                    testimonial1.map(testimonial => {
                        const {
                            userImage,
                            username,
                            userLocation,
                            userTestimony,
                            userType
                        } = testimonial;
                        return (
            <Testimonials
                userImage={userImage}
                username={username}
                userLocation={userLocation}
                userTestimony={userTestimony}
                userType={userType}
            />
                        )
                    })
                }
            </div>

            <Experience
                experienceImage={isMobileScreen ? WomanBagMobile : WomanShoppingBag }
                experienceTitle='Josiah’s Experience'
                experienceText='I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definitely be coming back!'
                userType='VENDOR'
                handleOpen={handleOpen}
            />

            

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 mx-16 mt-16 mb-24">
                {
                    testimonial2.map((testimonial, index) => {
                        const {
                            userImage,
                            username,
                            userLocation,
                            userTestimony,
                            userType
                        } = testimonial;
                        return (
                            <Testimonials
                                key={index}
                                userImage={userImage}
                                username={username}
                                userLocation={userLocation}
                                userTestimony={userTestimony}
                                userType={userType}
                            />
                        )
                    })
                }
            </div>

            {
                open && <StoryModal handleClose={handleClose} />
            }

        </div>
    )
}

export default Home

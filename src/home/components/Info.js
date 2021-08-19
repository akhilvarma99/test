// libraries
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// css
import '../../css/info.css';

// imgs
import discover from '../../assets/discover.jpg';
import ecofriendly from '../../assets/ecofriendly.jpg';
import medal from '../../assets/medal.jpg';

// constants
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};




function Info() {
    return (
        <div>
            <div class="container info">
                <div class="row">
                    <div class="col-12 col-md-6 info-pictures">
                        <Carousel responsive={responsive} 
                         autoPlay={true}
                         infinite={true}
                         autoPlaySpeed={3000}
                         keyBoardControl={true}
                         customTransition="all .5"
                         transitionDuration={500}
                         >
                            <div className = 'carousel-inner'><img src={discover} alt='discover' /></div>
                            <div className = 'carousel-inner'><img src={medal} alt='medal' /></div>
                            <div className = 'carousel-inner'><img src={ecofriendly} alt='ecofriendly' /></div>

                        </Carousel>
                    </div>
                    <div class="col-12 col-md-6 info-text">
                        <div className='info-text-bold'>Rescue delicious food and protect your planet</div>
                        <div className='info-text-light'>Everyday, many eateries end up with perfectly edible food that remain unsold.
                            <br />
                            <br />
                            Rescue them before they are discarded. And did we mention...get up to 70% OFF.</div>
                        <button className='info-text-button'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info

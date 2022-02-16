import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AnimationStyles from 'react-awesome-slider/src/styled/fall-animation';
import 'react-awesome-slider/dist/styles.css';
import IconSlide1 from './Slide1_ICON.png'
import IconSlide2 from './Slide2_ICON.png'
import IconsSlid3 from './Slide3_ICON.png'
import './SliderStyle.css'

export default React.memo(function SiginSlider ()
{
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const slider = (
        <AutoplaySlider

            animation='fallAnimation'
            bullets={false}
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            className='aws-btn'
        >

            <div className='Slide1'>
                <div className='RightItems'>
                    <img alt={'communication anywhere'} src={IconSlide1}/>
                </div>
                <div className='LeftItems'>

                    <h2>communication anywhere </h2>
                    <p>You can share your favorite content anywhere in the world</p>
                    <button>GET STARTED</button>
                </div>
            </div>


            <div className='Slide2'>
                <div className='RightItems'>
                    <img alt={'Online Business'} src={IconSlide2}/>
                </div>
                <div className='LeftItems'>

                    <h2>Online Business</h2>
                    <p>You can start your business in the shortest time using Facebook</p>
                    <button>GET STARTED</button>
                </div>
            </div>

            <div className='Slide3'>
                <div className='RightItems'>
                    <img alt={'Find new friends'} src={IconsSlid3}/>
                </div>
                <div className='LeftItems'>

                    <h2>Find new friends</h2>
                    <p>With Facebook you can meet new people and meet them</p>
                    <button>GET STARTED</button>
                </div>
            </div>



        </AutoplaySlider>
    );

    return (

        slider

    )
})
import Apps from '../Images/app-store-1.svg'
import Google from '../Images/google-play-4.svg'
import './Footer.css'
import {StateValue} from "../Context/Context";

export default function Footer ()
{

    const {DarkMood} = StateValue()

    return (
        <div className='MainFooter'>
            <footer className={DarkMood ? 'DarkFooter' : 'Footer'}>

                <div className={'Brand'}>
                    Facebook 2022
                </div>


                <ul className={'Topics'}>
                    <li>Privacy</li>
                    <li>Coookies</li>
                    <li>Ad Choices</li>
                    <li>Terms</li>
                    <li>Help</li>
                </ul>


                <div className={'DownloadServes'}>

                    <img src={Apps} className={'App-Store'} alt={''}/>
                    <img src={Google} className={'Google-Store'} alt={''}/>
                </div>

            </footer>

        </div>
    )
}
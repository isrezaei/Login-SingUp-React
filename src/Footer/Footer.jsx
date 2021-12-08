import Apps from '../Images/Apps.png'
import './Footer.css'
import {StateValue} from "../Context/Context";

export default function Footer ()
{

    const {DarkMood} = StateValue()

    return (
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
                <img src={Apps} alt={''}/>
            </div>

        </footer>
    )
}
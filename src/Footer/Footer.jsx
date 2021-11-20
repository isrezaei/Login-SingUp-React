
import Apps from '../Images/Apps.png'
import './Footer.css'

export default function Footer ()
{
    return (
        <footer className={'Footer'}>

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
                <img src={Apps}/>
            </div>

        </footer>
    )
}
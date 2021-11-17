import TypeWriter from "./TypeWriter";
import IMGPeopleHeader from "../../Images/7403.png"

import './PageElements.css'

export default function LoginPageElement ()
{
    return (
        <div className={'TypewriterANDPeopleImage'}>
            <p className={'Typewrite'}> <TypeWriter/> </p>
            <img className={'PeopleImage'} src={IMGPeopleHeader} alt={'IMGPeopleHeader'}/>
        </div>
    )
}
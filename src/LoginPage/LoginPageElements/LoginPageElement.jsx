import TypeWriter from "./TypeWriter";
import IMGPeopleHeader from "../../Images/LoginPic.png"
import './PageElements.css'

export default function LoginPageElement ()
{

    return (
        <div className={'TypewriterANDPeopleImage'}>
            <p className={'Typewrite'}> <TypeWriter/> </p>
            <img draggable={false} className={'PeopleImage'} src={IMGPeopleHeader} alt={'IMGPeopleHeader'}/>
        </div>
    )
}
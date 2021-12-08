import TypeWriter from "./TypeWriter";
import IMGPeopleHeader from "../../Images/LoginPic.png"
import IMGDarkPeopleHeader from "../../Images/DarkHeaderImage.png"
import './PageElements.css'
import {StateValue} from "../../Context/Context";


export default function LoginPageElement ()
{

    const {DarkMood} = StateValue()

    return (
        <div className={'TypewriterANDPeopleImage'}>
            <div className={DarkMood ? 'DarkTypewrite' : 'Typewrite'}> <TypeWriter/> </div>
            <img draggable={false} className={'PeopleImage'} src={DarkMood ? IMGDarkPeopleHeader :  IMGPeopleHeader} alt={'IMGPeopleHeader'}/>
        </div>
    )
}
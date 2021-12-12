import LightRecentlyLogo from "./Style/Image/Light_RecentlyLogo.svg";
import DarkRecentlyLogo from "./Style/Image/Dark_RecentlyLogo.svg"
import {StateValue} from "../../Context/Context";

export default function WellcomeMessage ()
{

    const {DarkMood} = StateValue()

    return (
        <div className={'WellcomeMessage'}>
            <img draggable={false} alt={''} className={'UserLogo'} src={DarkMood ? DarkRecentlyLogo : LightRecentlyLogo}/>
            <h4 className={'WellcomeText'}>Hello my dear friend Please login or create an account </h4>
        </div>
    )
}
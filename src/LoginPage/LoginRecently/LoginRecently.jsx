import {GlobalRef} from "../../Context/Context";
import RecentlyLocalStorage from "./RecentlyLocalStorage";
import ScrollXRecently from "./ScrollXRecently";
import RecentlyLoader from '../../Images/RecentlySpinner.gif'
import WellcomeMessage from "./WellcomeMessage";
import './Style/LoginRecently.css'

export default function LoginRecently ()
{
    const {RecentlyRef} = GlobalRef()
    const {ShowRecently , Loading , Recently} = RecentlyLocalStorage()
    const {MouseDown , MouseMove , MouseUpAdnMouseLeave , DragCursor} = ScrollXRecently()
    const RecentlyLength = Recently.LocalUser.length === 0


    return (
        <>
            {!RecentlyLength && <h3 className={'RecentlyLoginText'}> Recently Login {Loading && <img alt={''} className={'RecentlySpinner'} src={RecentlyLoader}/>}</h3> }

            <div
                ref={RecentlyRef}
                onMouseDown={MouseDown}
                onMouseUp={MouseUpAdnMouseLeave}
                onMouseMove={MouseMove}
                onMouseLeave={MouseUpAdnMouseLeave}
                className={ Recently.LocalUser.length <= 1 ?  'LoginRecentlyForOnePerson' : 'LoginRecently' }
                id={DragCursor && 'DragCursor'}>

                {
                    !RecentlyLength ? ShowRecently : <WellcomeMessage/>
                }
            </div>

        </>
    )
}
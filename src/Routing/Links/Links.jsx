import {Link} from "react-router-dom";
import {BsFacebook , BsMoonStarsFill} from 'react-icons/bs'
import {FaSun} from 'react-icons/fa'
import {ChangeStateValue , StateValue} from "../../Context/Context";

import './Links.css'

export const Links = () =>
{


    const {DarkMood} = StateValue()
    const {SetDarkMood} = ChangeStateValue()


    return (
        <div className={DarkMood ? 'DarkLinks' : 'Links'}>


            <ul>



                <li>
                    <Link className='LinkTag' to='/Login'>Login</Link>
                </li>


                {DarkMood ? <FaSun onClick={()=> SetDarkMood(!DarkMood)} className={'LightLogo'}/> :  <BsMoonStarsFill onClick={()=> SetDarkMood(!DarkMood)} className={'DarkLogo'}/>}



            </ul>
        </div>
    )
}
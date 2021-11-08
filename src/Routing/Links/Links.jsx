import {Link} from "react-router-dom";
import {BsFacebook} from 'react-icons/bs'
import './Links.css'

export const Links = () =>
{
    return (
        <div className='Links'>


            <div className='LogoDiv'>
                <BsFacebook className='Logo'/>
            </div>


            <ul>
                <li>
                    <Link className='LinkTag' to='/'>Home</Link>
                </li>

                <li>
                    <Link className='LinkTag' to='/About'>About us</Link>
                </li>

                <li>
                    <Link className='LinkTag' to='/Support'>Support</Link>
                </li>

                <li>
                    <Link className='LinkTag' to='/Login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}
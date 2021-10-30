import {Link} from "react-router-dom";
import Home from "../PublicPage/Home";
import About from "../PublicPage/About";
import Support from "../PublicPage/Support";
import UserPanel from "../PrivatePage/UserPanel";

export const Links = () =>
{
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/About'>About us</Link>
            </li>

            <li>
                <Link to='/Support'>Support</Link>
            </li>

            <li>
                <Link to='/UserPanel'>User Panel</Link>
            </li>


        </ul>
    )
}
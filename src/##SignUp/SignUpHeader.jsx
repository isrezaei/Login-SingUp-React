import React from "react";
import './Header.scss'
export default React.memo(function SignUpHeader ()
{
    return (
        <>
            <p className='Title'>Create a new account</p>
            <p className='Text'>Join Facebook and connect with 2.4 billion users around the world</p>
        </>
    )
})
export default function Regex ()
{
    const EmailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
    const PhoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]+$/
    const PasswordRegex = /(?=.*[0-9])+(?=.*[a-z])/

    return {EmailRegex , PhoneRegex , PasswordRegex}
}
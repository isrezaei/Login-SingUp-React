export default function ServerSigin (FirstName , LastName , PhoneAndEmail , NewPassword)
{

    const EmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const PhoneValid = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    const PasswordValid = /(?=.*[0-9])+(?=.*[a-z])/

    const Name = FirstName !== ''
    const Family = LastName !== ''
    const EmailAndPhone = EmailValid.test(PhoneAndEmail) || PhoneValid.test(PhoneAndEmail)
    const Password = PasswordValid.test(NewPassword)


    return new Promise((resolve, reject) => {

        if ( Name && Family && EmailAndPhone && Password )
        {
            setTimeout(()=>{
                resolve({
                    FirstName : FirstName,
                    LastName : LastName,
                    PhoneAndEmail : PhoneAndEmail
                })
            } , 2000)
        }

        return setTimeout(()=>{

            reject(new Error('Your condition is false'))

        } , 2000)

    })
        .then(Response => Response)
        .catch(Response => Response)
}
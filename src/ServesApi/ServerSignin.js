export default function ServerSignin (FirstName , LastName , PhoneAndEmail , NewPassword)
{

    const EmailValid = /[a-z0-9]\@+[a-z]+\.+[a-z]/
    const PhoneValid = /[0-9]/
    const PasswordValid = /[a-z]+[0-9]/

    const Name = FirstName !== ''
    const Family = LastName !== ''
    const EmailAndPhone = EmailValid.test(PhoneAndEmail) || PhoneValid.test(PhoneAndEmail)
    const Password = PasswordValid.test(NewPassword)


    return new Promise((resolve, reject) => {

        if ( Name && Family && EmailAndPhone && Password )
        {
            setTimeout(()=>{
                resolve({
                    firstname : FirstName,
                    lastname : LastName,
                    email_phone : PhoneAndEmail
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
export const Server = (username , OldPassword , AllRecentlyNameFamily , AllRecentlyPassword) =>
{

    const UserName = AllRecentlyNameFamily.includes(username)
    const Password = AllRecentlyPassword.includes(OldPassword)

    console.log(UserName)
    console.log(Password)

    return new Promise((resolve, reject) => {

        if (UserName && Password)
        {
            setTimeout(resolve , 2000)
        }

        return(
            setTimeout(reject , 2000)
        )
    })

        .then(()=> {
            return {
                Access : 'Pane is Access'
            }
        })
        .catch(()=> {
           return {
                Error : 'Password or Username is wrong'
            }
        })
}
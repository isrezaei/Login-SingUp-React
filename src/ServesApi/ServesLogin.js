export const Server = (username , OldPassword) =>
{
    return new Promise((resolve, reject) => {

        if (username === 'admin' && OldPassword === 'admin')
        {
            setTimeout(resolve , 2000)
        }

        return(
            setTimeout(reject , 2000)
        )
    })

        .then(()=> {
            return {
                id : 1,
                username,
                email : 'hello@test.com'
            }
        })
        .catch(()=> {
           return {
                Error : 'Password or Username is wrong'
            }
        })
}
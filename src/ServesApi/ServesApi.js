// const Wait = Time => new Promise(resolve  =>  setTimeout(resolve , Time))
//
// export const Server = (username , password) =>
// {
//     return Wait(2000).then(()=> {
//         if (username === 'admin' & password === 'admin')
//         {
//             return {
//                 id : 1,
//                 username,
//                 email : 'hello@test.com'
//             }
//         }
//
//             return {
//                 Error : 'username or password is wrong'
//             }
//     })
// }


export const Server = (username , password) =>
{
    return new Promise((resolve, reject) => {

        if (username === 'admin' && password === 'admin')
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
const Wait = Time => new Promise(resolve => setTimeout(resolve , Time))

export const Server = (username , password) =>
{
    return Wait(2000).then(()=> {
        if (username === 'hello' & password === 123)
        {
            return {
                id : 1,
                username,
                email : 'hello@test.com'
            }
        }
        throw new Error('Server Have Bug')
    })
}
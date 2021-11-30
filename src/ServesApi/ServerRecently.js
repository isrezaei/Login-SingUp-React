export default function ServerRecently (RecentlyNameFamily)
{
    return new Promise(resolve => {
           RecentlyNameFamily && setTimeout(()=> resolve({Access : 'Access To Panel'}) , 2000)
    })
        .then(Response=> Response.Access)
}
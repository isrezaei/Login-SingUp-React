import {useEffect , useState} from "react";

export default function RecentlyTime () {


    const [Recently , SetRecently] = useState()

    const [StartTime , SetStartTime] = useState()




    const Start = setTimeout(()=>{

        const Time = new Date()

        StartTime ? clearTimeout(Start) : SetStartTime(Time)


    } , 1000)



    //
    //
    // setInterval(()=>{
    //
    //     let End  = new Date();
    //
    //     var timeDiff = End - StartTime;
    //
    //     timeDiff /= 1000;
    //
    //
    //     var seconds = Math.round(timeDiff);
    //
    //
    //     SetRecently(seconds)
    //
    //
    // } , 2000 )
    //
    //
    // console.log(Recently)



    return (
        <>
            {Recently !== undefined ? <p>{Recently}</p> : 'Now'}

        </>
    )

}
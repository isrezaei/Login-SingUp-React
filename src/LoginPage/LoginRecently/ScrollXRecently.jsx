import {GlobalRef} from "../../Context/Context";
import {useState} from "react";

export default function ScrollXRecently ()
{
    const {RecentlyRef} = GlobalRef()
    const [MouseDownBoolean , SetMouseDownBoolean] = useState()
    const [MouseDownPosition , SetMouseDownPosition] = useState()
    const [RecentlyScrollLeft , SetRecentlyScrollLeft] = useState()
    const [DragCursor ,SetDragCursor] = useState(false)

    const MouseDown = (e) => {
        SetMouseDownBoolean(true)
        SetMouseDownPosition( e.pageX - RecentlyRef.current.offsetLeft)
        SetRecentlyScrollLeft(RecentlyRef.current.scrollLeft)
        SetDragCursor(true)
    }

    const MouseUpAdnMouseLeave = () => {
        SetMouseDownBoolean(false)
        SetDragCursor(false)
    }


    const MouseMove = (e) => {
        const MouseMovePositon = e.pageX - RecentlyRef.current.offsetLeft
        const SpeedMove = MouseMovePositon - MouseDownPosition

        if (!MouseDownBoolean) {
            return null
        }

        SetDragCursor(true)
        RecentlyRef.current.scrollLeft = RecentlyScrollLeft - SpeedMove

    }

    return {MouseDown , MouseUpAdnMouseLeave , MouseMove , DragCursor}
}
import PleaseSigin from "../../Images/PleaseSigin.gif";

export default function WellcomeMessage ()
{
    return (
        <div className={'WellcomeMessage'}>
            <img draggable={false} alt={''} className={'UserLogo'} src={PleaseSigin}/>
            <h4 className={'WellcomeText'}>Hello my dear friend Please login or create an account </h4>
        </div>
    )
}
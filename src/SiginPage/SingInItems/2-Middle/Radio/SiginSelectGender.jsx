import {StateValue} from "../../../../Context/Context";

export default function SiginSelectGender ({SetGender , Gender})
{

    const {DarkMood} = StateValue()

    return (
        <div className={DarkMood ? 'Dark_GenderInfo' : 'GenderInfo'}>

            <div className='Gender'>
                <p>Gender</p>
            </div>

            <div className='RadioInput'>
                <section>
                    <p>Female</p>
                    <input checked={'Female' === Gender} type="radio" onChange={()=> SetGender('Female')}/>
                </section>


                <section>
                    <p>Male</p>
                    <input checked={'Male' === Gender} type="radio" onChange={()=> SetGender('Male')}/>
                </section>


                <section>
                    <p>Custom</p>
                    <input checked={'Custom' === Gender} type="radio" onChange={()=> SetGender('Custom')}/>
                </section>
            </div>
        </div>
    )
}
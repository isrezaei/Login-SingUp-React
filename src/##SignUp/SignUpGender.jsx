export default function SignUpGender ({GetSignUpInfo , CheckOnBlur , GetOnBlurBoolean , WrongValidate})
{

    return (
        <div className={'GenderInfo'}>

            <div className='Gender'>
                <p>Gender</p>
            </div>

            <div className='RadioInput'>
                <section>
                    <p>Female</p>
                    <input name='Gender' value={'Female'} type="radio" onChange={GetSignUpInfo} onClick={GetOnBlurBoolean}/>
                </section>

                <section>
                    <p>Male</p>
                    <input name='Gender' value={'Male'}  type="radio" onChange={GetSignUpInfo} onClick={GetOnBlurBoolean}/>
                </section>

                <section>
                    <p>Custom</p>
                    <input name='Gender' value={'Custom'} type="radio" onChange={GetSignUpInfo} onClick={GetOnBlurBoolean}/>
                </section>
            </div>

            {WrongValidate.Gender && CheckOnBlur.Gender && <span>{WrongValidate.Gender}</span>}



        </div>
    )
}
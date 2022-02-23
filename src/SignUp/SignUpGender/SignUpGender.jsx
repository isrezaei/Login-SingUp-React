import './Gender.css'

export default function SignUpGender ({GetSignUpInfo , CheckOnBlur , GetOnBlurBoolean , WrongValidate})
{

    return (
        <div className={'GenderInfo'}>

            <div className='Gender'>
                <p>Gender</p>
            </div>

            <div className='RadioInput'>
                <section className={(WrongValidate.Gender && CheckOnBlur.Gender) ? 'RedBorder' : ''}>
                    <p>Female</p>
                    <input name='Gender' value={'Female'} type="radio" onChange={GetSignUpInfo} onClick={GetOnBlurBoolean}/>
                </section>

                <section className={(WrongValidate.Gender && CheckOnBlur.Gender) ? 'RedBorder' : ''}>
                    <p>Male</p>
                    <input name='Gender' value={'Male'}  type="radio" onChange={GetSignUpInfo} onClick={GetOnBlurBoolean}/>
                </section>

                <section className={(WrongValidate.Gender && CheckOnBlur.Gender) ? 'RedBorder' : ''}>
                    <p>Custom</p>
                    <input name='Gender' value={'Custom'} type="radio" onChange={GetSignUpInfo} onClick={GetOnBlurBoolean}/>
                </section>
            </div>

            {WrongValidate.Gender && CheckOnBlur.Gender && <span className='ErrorText'>{WrongValidate.Gender}</span>}



        </div>
    )
}
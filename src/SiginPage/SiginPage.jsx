import './SiginPage.css'

export default function SiginPage()
{


    const Months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const Days = () =>
    {
        let Number = []
        for (let i = 1 ; i <= 31 ; i++)
        {
            Number.push(i)
        }

        return Number
    }

    const Years = () =>
    {
        let Number = []
        for (let i = 1901 ; i <= 2022 ; i++)
        {
            Number.push(i)
        }

        return Number
    }







    return (
        <div className='SiginPanel'>

            <p className='Title'>Create a new account</p>
            <p className='Alert'>Join Facebook and connect with 2.4 billion users around the world</p>

            <form>

                <div className='NameInfo'>
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name'  />
                </div>

                <input type='text' placeholder='Mobile number or email'/>

                <input type='text' placeholder='New Password'/>

                <div className='BrithdayInfo'>

                    <div className='Birthday'>
                        <p>Birthday</p>
                    </div>

                    <div className='Options'>
                        <select>
                            {
                                Days().map((value , index)=> {
                                        return <option key={index}>{value}</option>
                                    }
                                )
                            }
                        </select>
                        <select>
                            {
                                Years().map((value, index) => {
                                        return <option key={index}>{value}</option>
                                    }
                                )
                            }
                        </select>
                        <select>
                            {
                                Months.map((value, index) => {
                                        return <option key={index}>{value}</option>
                                    }
                                )
                            }
                        </select>
                    </div>
                </div>

                <div className='GenderInfo'>


                    <div className='Gender'>
                        <p>Gender</p>
                    </div>


                    <div className='RadioInput'>
                        <section>
                            <p>Female</p>
                            <input type="radio"/>
                        </section>


                        <section>
                            <p>Male</p>
                            <input type="radio"/>
                        </section>


                        <section>
                            <p>Custom</p>
                            <input type="radio"/>
                        </section>
                    </div>


                </div>

                <p className='Summary'>
                    By clicking Sign Up, you agree to our <span style={{color : "#03a9f4" }}>Terms , Data ,
                    Policy</span>  You may receive SMS Notifications from us and can opt out any time.
                </p>

                <button className='LoginButton'>Sign in</button>






            </form>

        </div>
    )
}
import Typewriter from 'typewriter-effect';

export default function TypeWriter ()
{
    return (
        <Typewriter
            options={{
                autoStart: true,
                loop: false,
            }}
            onInit={(typewriter) => {
                typewriter.typeString('Connect & Share and react with people in your life. ')
                    .pauseFor(2500)
                    .start()
            }}
        />
    )
}
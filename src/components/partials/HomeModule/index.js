import React from 'react';
import Button from '../../elements/Button';

export default function partialHomeModule() {
    const showModul = () => {
        // eslint-disable-next-line no-console
        console.log('oke');
    };

    return (
        <section>
            <div className="py-12">
                <h1 className="text-center font-bold text-2xl">Are you ready to discover something ?</h1>
                <p className="text-center pt-2 font-normal text-lg text-gray-400">Let's go join us for free</p>
                <div className="flex justify-center items-center pt-7">
                    <Button className="bg-main-dark_green-half filter drop-shadow-2xl text-white font-bold text-sm rounded-lg px-4 py-2" type="link" to="/dashboard">
                        Go to
                        <span style={{ color: '#06CDC1' }}>
                    &nbsp;|
                        </span>
                        Music
                        <span style={{ color: '#06CDC1' }}>
                            Play
                        </span>
                    </Button>
                </div>
                <div className="flex justify-center items-center text-gray-400 pt-2 ">
                    <Button type="button" onClick={showModul}>Create Account</Button>
                    &nbsp;|&nbsp;
                    <Button type="button" onClick={showModul}>Sign in</Button>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import Button from '../../elements/Button';

function partialHero() {
    return (
        <section className="">
            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero_0.png)`, objectFit: 'contain', backgroundRepeat: 'no-repeat' }} className="pb-72 pt-64">
                <h1 className="flex justify-center items-center font-bold text-3xl">
                    Start Listening to
                    <span style={{ color: '#06CDC1' }}>
                    &nbsp;|
                    </span>
                    MUSIC
                    <span style={{ color: '#06CDC1' }}>
                        PLAY
                    </span>
                </h1>
                <p className="text-center text-xl pt-3">
                    Place you can hear all music from around the world. Discover the
                    <br />
                    {' '}
                    music you like
                    from artist you may know or never heard before
                </p>
                <div className="flex justify-center items-center pt-5">
                    <Button className=" bg-main-dark_green-half filter drop-shadow-2xl text-white font-semibold rounded-lg px-7 py-2" type="link" to="/dashboard"> Start listen </Button>
                </div>
            </div>
        </section>
    );
}

export default partialHero;

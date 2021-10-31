import React from 'react';

function partialBanner() {
    return (
        <section>
            <div className="flex py-14" style={{ backgroundColor: '#102130' }}>
                <div className="flex-1 flex justify-center items-center">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/ilu.png`} alt="" className="h-96" />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="pl-10">
                        <h2 className="flex-1 font-bold text-2xl">
                            Enjoy every
                            {' '}
                            <br />
                            minute you have
                        </h2>
                        <p className="flex-1 pt-5 pr-60">
                            Enjoy every minute you have listening to your
                            favorite song in any device you have. Song came
                            from various creator.  We help you find type of
                            music you like to help ensure you so you  can enjoy here.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default partialBanner;

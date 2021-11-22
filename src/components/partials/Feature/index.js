import React from 'react';

function partialFeature() {
    return (
        <section className="py-20">
            <div className="flex px-44">
                <div id="feature1" className="flex-1 px-2">
                    <div className="h-14">
                        <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/assets/img/ic_feature_listen.svg`}
                            className="h-full rounded-full bg-main-dark_green-half p-2"
                        />
                    </div>
                    <h2 className="pt-5 font-bold text-xl">
                        Listen music
                        <br />
                        everywhere
                    </h2>
                    <p className="pt-3 text-gray-400">
                        Listen music everywhere with your device, using any
                        browser you have or your favorite one, and keep up to
                        date with popular track rn.
                    </p>
                </div>
                <div id="feature2" className="flex-1 px-2">
                    <div className="h-14">
                        <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/assets/img/ic_feature_star.svg`}
                            className="h-full rounded-full bg-main-dark_green-half p-2"
                        />
                    </div>
                    <h2 className="pt-5 font-bold text-xl">
                        Follow artist
                        <br />
                        you like
                    </h2>
                    <p className="pt-3 text-gray-400">
                        Keep up to date with your favorite creator, listen to
                        their newest track. Don’t forget to give a follow to new
                        creator you find yourself feel good.
                    </p>
                </div>
                <div id="feature3" className="flex-1 px-2">
                    <div className="h-14">
                        <img
                            alt=""
                            src={`${process.env.PUBLIC_URL}/assets/img/ic_feature_community.svg`}
                            className="h-full rounded-full bg-main-dark_green-half p-2"
                        />
                    </div>
                    <h2 className="pt-5 font-bold text-xl">
                        Join to
                        <br />
                        community
                    </h2>
                    <p className="pt-3 text-gray-400">
                        Join the community and share your favorite track or
                        playlist that you made, getting update with new tracks
                        by people in the community.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default partialFeature;

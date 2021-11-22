import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default function ListTrack({ dataDashboard }) {
    const { Chill } = dataDashboard.items;

    const [data, setData] = useState();

    useEffect(() => {
        setData(Chill);
    }, [Chill]);

    console.log(data);

    const pathSvgArrow = 'M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM9.79289 8.70711C9.40237 8.31658 9.40237 7.68342 9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L11.2071 16.7071C10.8166 17.0976 10.1834 17.0976 9.79289 16.7071C9.40237 16.3166 9.40237 15.6834 9.79289 15.2929L13.0858 12L9.79289 8.70711Z';

    return (
        <section className="mt-5">
            <h2 className="font-bold text-white text-3xl">Top Track</h2>
            <p className="font-light text-main-bold_gray-lite mb-5 mt-1">
                Tranding tracks from MusicPlay community
            </p>
            <div>
                <Splide
                    options={{
                        pagination: false,
                        perPage: 4,
                        autoWidth: true,
                        padding: '1rem',
                        arrowPath: pathSvgArrow,
                    }}
                    className="ml-2"
                >
                    <SplideSlide>
                        <div className=" p-4 flex justify-center items-center">
                            <div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/elijahwho-1.png`}
                                    alt="pict"
                                    style={{ height: 200, width: 'auto' }}
                                />
                                <p className="pt-2 font-bold text-white ">
                                    Bento
                                </p>
                                <p className=" font-light text-main-bold_gray-lite  text-sm">
                                    Club2Tokyo
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className=" p-4 flex justify-center items-center">
                            <div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/elijahwho-1.png`}
                                    alt="pict"
                                    style={{ height: 200, width: 'auto' }}
                                />
                                <p className="pt-2 font-bold text-white ">
                                    Bento
                                </p>
                                <p className=" font-light text-main-bold_gray-lite  text-sm">
                                    Club2Tokyo
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className=" p-4 flex justify-center items-center">
                            <div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/elijahwho-1.png`}
                                    alt="pict"
                                    style={{ height: 200, width: 'auto' }}
                                />
                                <p className="pt-2 font-bold text-white ">
                                    Bento
                                </p>
                                <p className=" font-light text-main-bold_gray-lite  text-sm">
                                    Club2Tokyo
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className=" p-4 flex justify-center items-center">
                            <div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/elijahwho-1.png`}
                                    alt="pict"
                                    style={{ height: 200, width: 'auto' }}
                                />
                                <p className="pt-2 font-bold text-white ">
                                    Bento
                                </p>
                                <p className=" font-light text-main-bold_gray-lite  text-sm">
                                    Club2Tokyo
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className=" p-4 flex justify-center items-center">
                            <div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/elijahwho-1.png`}
                                    alt="pict"
                                    style={{ height: 200, width: 'auto' }}
                                />
                                <p className="pt-2 font-bold text-white ">
                                    Bento
                                </p>
                                <p className=" font-light text-main-bold_gray-lite  text-sm">
                                    Club2Tokyo
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    );
}

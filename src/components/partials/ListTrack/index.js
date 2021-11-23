import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {
    faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default function ListTrack({ dataGenre, genreItem }) {
    const pathSvgArrow = 'M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM9.79289 8.70711C9.40237 8.31658 9.40237 7.68342 9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L11.2071 16.7071C10.8166 17.0976 10.1834 17.0976 9.79289 16.7071C9.40237 16.3166 9.40237 15.6834 9.79289 15.2929L13.0858 12L9.79289 8.70711Z';

    function doThis(e) {
        e.currentTarget.classList.add('img-item');
        e.currentTarget.childNodes[0].classList.remove('hidden');
    }

    function doThat(e) {
        e.currentTarget.classList.remove('img-item');
        e.currentTarget.childNodes[0].classList.add('hidden');
    }

    return (
        <section className="mt-6">
            <h2 className="font-bold text-white text-3xl">{dataGenre}</h2>
            <p className="font-light text-main-bold_gray-lite mb-2 mt-1">
                Tranding tracks from MusicPlay community
            </p>
            <div>
                <Splide
                    options={{
                        pagination: false,
                        perPage: 4,
                        autoWidth: true,
                        padding: '0rem',
                        arrowPath: pathSvgArrow,
                        lazyLoad: 'nearby',
                        breakpoints: {
                            height: '10rem',
                        },
                    }}
                    className="ml-2"
                >
                    {
                        genreItem.map((item) => (
                            <SplideSlide key={item.id}>
                                <div className=" p-4 flex justify-center items-center">
                                    <div>
                                        <div className="relative" onMouseEnter={doThis} onMouseLeave={doThat}>
                                            <div className="tag m-2 text-white hidden">
                                                <FontAwesomeIcon
                                                    icon={faPlayCircle}
                                                    className="text-main-dark_green-soft my-auto mr-5 cursor-pointer transition duration-200 ease-in-out transform scale-100 hover:scale-110 active:scale-90"
                                                    size="4x"
                                                    onClick={() => console.log(item.id)}
                                                />
                                            </div>
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/img/loading.png`}
                                                data-splide-lazy={`http://13.229.67.95:5000/songs/${item.image_url}`}
                                                alt="pict"
                                                style={{ height: 220, width: 'auto' }}
                                            />
                                        </div>
                                        <p className="pt-2 font-bold text-white overflow-hidden overflow-ellipsis truncate w-44">
                                            {item.name}
                                        </p>
                                        <p className=" font-light text-main-bold_gray-lite  text-sm">
                                            {item.artistName}
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
        </section>
    );
}

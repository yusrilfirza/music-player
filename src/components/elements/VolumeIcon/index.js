import React, { useState } from 'react';
import { createPopper } from '@popperjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

export const VolumeIcon = (props) => {
    const { onChange } = props;
    const [isShowed, setIsShowed] = useState(false);

    const volume = document.querySelector('.volume');
    const tooltip = document.querySelector('.tooltip');

    createPopper(volume, tooltip, {
        placement: 'top',
    });

    return (
        <div
            aria-describedby="tooltip"
            className="my-auto cursor-pointer volume"
            onMouseEnter={() => setIsShowed(!isShowed)}
            onMouseLeave={() => setIsShowed(!isShowed)}
        >
            <FontAwesomeIcon
                icon={faVolumeUp}
                className="my-auto text-white"
                size="sm"
            />
            <div
                role="tooltip"
                className={`pb-2 px-2 rounded-md tooltip bg-black ${
                    isShowed ? '' : 'hidden'
                } focus:outline-none text-white`}
            >
                <input onChange={onChange} type="range" className="h-0.5" />
            </div>
        </div>
    );
};

export default VolumeIcon;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const LayoutModal = ({
    children, open, onExited, ...rest
}) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (open) setShowModal(true);
    }, [open]);

    const closeModal = () => { // eslint-disable-line
        setShowModal(false);
        onExited();
    };

    return (
        <div>
            <div
                {...rest}
                className={`${showModal ? '' : 'hidden'} fixed top-0 left-0 w-full h-full flex items-center justify-center`}
                style={{
                    zIndex: 1300,
                }}
            >
                <div
                    className="backdrop absolute w-full h-full bg-black_blue-100 bg-opacity-50"
                    style={{
                        zIndex: -1,
                    }}
                    key="modal-backdrop"
                    aria-hidden="true"
                    data-testid="modal-backdrop"
                />
                <div
                    className="modal-inner mx-auto rounded-lg shadow-lg bg-secondary-white"
                >
                    <div className="flex justify-end">
                        <button type="button" onClick={closeModal} className="focus:outline-none mr-4 mt-3 mb-1">
                            <FontAwesomeIcon icon={faTimes} className="text-main-granite_grey" />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutModal;

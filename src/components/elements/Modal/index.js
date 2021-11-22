import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from '../Button';

function ModalLogin(props) {
    const { iniOpen, gantiOpen, whichBtn } = props;

    return (
        <>
            <Transition appear show={iniOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => gantiOpen(false)}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-main-bold_gray-soft shadow-xl border border-main-dark_green-soft">
                                <form className="bg-main-bold_gray-soft rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4">
                                        <label
                                            className="block text-white text-sm font-bold mb-2"
                                            htmlFor="username"
                                        >
                                            Username
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="username"
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                    {whichBtn === 'signup' ? (
                                        <div className="mb-4">
                                            <label
                                                className="block text-white text-sm font-bold mb-2"
                                                htmlFor="fullname"
                                            >
                                                Fullname
                                            </label>
                                            <input
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="fullname"
                                                type="text"
                                                placeholder="Fullname"
                                            />
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                    <div className="mb-4">
                                        <label
                                            className="block text-white text-sm font-bold mb-2"
                                            htmlFor="password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                        {/* <p className="text-red-500 text-xs italic">
                                            Please choose a password.
                                        </p> */}
                                    </div>
                                    <Button
                                        type="button"
                                        className="bg-main-dark_green-soft hover:bg-main-dark_green-half  w-full filter drop-shadow-2xl text-white font-semibold rounded-lg px-7 py-2"
                                        onClick={() => ''}
                                    >
                                        Continue
                                    </Button>
                                    <p className="text-white text-xs mt-4 leading-relaxed">
                                        When registering, you agree that we may
                                        use your provided data for the
                                        registration and to send you
                                        notifications on our products and
                                        services. You can unsubscribe from
                                        notifications at any time in your
                                        settings. For additional info please
                                        refer to our
                                        {' '}
                                        <span className="font-bold">
                                            Privacy Policy
                                        </span>
                                        .
                                    </p>
                                </form>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default ModalLogin;

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from '../Button';
import { TextField } from './TextField';
import { postRegisterData } from './action';

function ModalLogin(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const { iniOpen, gantiOpen, whichBtn } = props;
    const validateSignup = yup.object({
        username: yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        fullname: yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    });

    const validateLogin = yup.object({
        username: yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    });

    const FormSignup = () => (
        <Formik
            initialValues={{
                username: '',
                fullname: '',
                password: '',
            }}
            validationSchema={validateSignup}
            onSubmit={(values) => dispatch(postRegisterData(values, history))}
        >
            {() => (
                <div>
                    <Form className="bg-main-bold_gray-soft rounded px-8 pt-6 pb-8 mb-4">
                        <TextField label="username" name="username" type="text" placeholder="Username" />
                        <TextField label="password" type="password" name="password" placeholder="password" />
                        <TextField label="Full Name" name="fullname" type="text" placeholder="fullname" />
                        <Button
                            type="submit"
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
                    </Form>
                </div>
            )}
        </Formik>
    );

    const FormLogin = () => (
        <Formik
            initialValues={{
                userName: '',
                password: '',
            }}
            validationSchema={validateLogin}
            onSubmit={(values) => console.log(values)}
        >
            {() => (
                <div>
                    <Form className="bg-main-bold_gray-soft rounded px-8 pt-6 pb-8 mb-4">
                        <TextField label="Username" name="userName" type="text" placeholder="Username" />
                        <TextField label="password" type="password" name="password" placeholder="password" />
                        <Button
                            type="submit"
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
                    </Form>
                </div>
            )}
        </Formik>
    );

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
                                {whichBtn === 'signup' ? FormSignup() : FormLogin()}
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default ModalLogin;

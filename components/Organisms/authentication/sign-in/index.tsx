// @flow 
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InputForm } from './InputForm';
type Props = {

};
export const FormSignIn = (props: Props) => {
    return (
        <form action="">
            <div className="container mx-auto">
                <div className="pb-50">
                    <Link legacyBehavior href={'/'}>
                        <a className="navbar-brand">
                            <Image src={'assets/icon/logo.svg'} alt="logo" width={60} height={60} />
                        </a>
                    </Link>
                </div>
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">
                    Sign In
                </h2>
                <p className="text-lg color-palette-1 m-0">
                    Masuk untuk melakukan proses top up
                </p>

                {/* Input form */}
                <InputForm className='pt-50' type='email' label='Email Address' placeHolder='Enter your email address' />
                <InputForm className='pt-30' type='password' label='password' placeHolder='Your password' />

                <div className="button-group d-flex flex-column mx-auto pt-50">
                    <Link legacyBehavior href={'/'}>
                        <a
                            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                            role="button"
                        >
                            Continue to Sign In
                        </a>
                    </Link>
                    {/* <!-- <button type="submit"
                                className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                                role="button">Continue to Sign In</button> --> */}
                    <Link legacyBehavior href={'/sign-up'}>
                        <a
                            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                            role="button"
                        >
                            Sign Up
                        </a>
                    </Link>
                </div>
            </div>
        </form >
    );
};
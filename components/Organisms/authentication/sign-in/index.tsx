// @flow 
import * as React from 'react';
import Image from 'next/image';
import { InputForm } from './InputForm';
type Props = {

};
export const FormSignIn = (props: Props) => {
    return (
        <form action="">
            <div className="container mx-auto">
                <div className="pb-50">
                    <a className="navbar-brand" href="../index.html">
                        <Image src={'assets/icon/logo.svg'} alt="logo" width={60} height={60} />
                    </a>
                </div>
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">
                    Sign In
                </h2>
                <p className="text-lg color-palette-1 m-0">
                    Masuk untuk melakukan proses top up
                </p>

                {/* Input form */}
                <InputForm type='email' label='Email Address' placeHolder='Enter your email address' />
                <InputForm type='password' label='password' placeHolder='Your password' />

                <div className="button-group d-flex flex-column mx-auto pt-50">
                    <a
                        className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                        href="../index.html"
                        role="button"
                    >
                        Continue to Sign In
                    </a>
                    {/* <!-- <button type="submit"
                                className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                                role="button">Continue to Sign In</button> --> */}
                    <a
                        className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                        href="../src/sign-up.html"
                        role="button"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </form>
    );
};
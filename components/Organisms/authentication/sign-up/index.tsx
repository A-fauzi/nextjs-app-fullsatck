// @flow 
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InputFormSignUp } from './InputFormSignUp';
import { ButtonNavigation } from './ButtonNavigation';
type Props = {

};
export const FormSignUp = (props: Props) => {
    return (
        <form action="">
            <div className="pb-50">
                <a className="navbar-brand" href="../index.html">
                    <Image src={'assets/icon/logo.svg'} alt="logo" width={60} height={60} />
                </a>
            </div>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
            <p className="text-lg color-palette-1 m-0">
                Daftar dan bergabung dengan kami
            </p>

            {/* Input Form */}
            <InputFormSignUp className='pt-50' type='name' label='Full Name' placeholder='Enter your name' />
            <InputFormSignUp className='pt-30' type='email' label='Email Address' placeholder='Enter your email address' />
            <InputFormSignUp className='pt-30' type='password' label='Password' placeholder='Your password' />
            <div className="button-group d-flex flex-column mx-auto pt-50">
                {/* Button Navigation */}
                <ButtonNavigation url={'/sign-up-photo'} className={'btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16'} title='Continue' />
                {/* <!-- <button type="submit" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                        role="button">Continue</button> --> */}
                <ButtonNavigation url={'/sign-in'} className={'btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill'} title='Sign In' />

            </div>
        </form>
    );
};
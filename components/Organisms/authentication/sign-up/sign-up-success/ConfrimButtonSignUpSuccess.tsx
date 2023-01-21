// @flow 
import * as React from 'react';
import Link from 'next/link';
type Props = {

};
export const ConfrimButtonSignUpSuccess = (props: Props) => {
    return (
        <div className="button-group d-flex flex-column mx-auto">
            <Link legacyBehavior href={'/'}>
                <a
                    className="btn btn-top-up fw-medium text-lg text-white rounded-pill"
                    role="button"
                >
                    Top Up
                </a>
            </Link>
        </div>
    );
};
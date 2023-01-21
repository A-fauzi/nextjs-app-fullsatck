// @flow 
import * as React from 'react';
import Link from 'next/link';
type Props = {

};
export const ConfirmationButton = (props: Props) => {
    return (
        <div className="button-group d-flex flex-column mx-auto">
            <Link legacyBehavior href={'/sign-up-success'}>
                <a
                    className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                    role="button"
                >
                    Create My Account
                </a>
            </Link>
            {/* <!-- <button type="submit" className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                            role="button">Create My Account</button> --> */}
            <Link legacyBehavior href={'/#'}>
                <a
                    className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"

                    role="button"
                >
                    Terms & Conditions
                </a>
            </Link>
        </div>
    );
};
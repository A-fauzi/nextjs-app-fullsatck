// @flow 
import * as React from 'react';
import Link from 'next/link';
type Props = {

};
export const CheckoutConfirmation = (props: Props) => {
    return (
        <>
            <label className="checkbox-label text-lg color-palette-1">
                I have transferred the money
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <div className="d-md-block d-flex flex-column w-100 pt-50">
                <Link legacyBehavior href={'/complete-checkout'}>
                    <a
                        className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
                        role="button"
                    >
                        Confirm Payment
                    </a>
                </Link>
            </div>
        </>
    );
};
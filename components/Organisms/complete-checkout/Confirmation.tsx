// @flow 
import * as React from 'react';
import Link from 'next/link';
type Props = {

};
export const Confirmation = (props: Props) => {
    return (
        <div className="button-group d-flex flex-column mx-auto">
            <Link legacyBehavior href={'/member'}>
                <a
                    className="btn btn-dashboard fw-medium text-lg text-white rounded-pill mb-16"
                    role="button"
                >
                    My Dashboard
                </a>
            </Link>
            <a
                className="btn btn-whatsapp fw-medium text-lg color-palette-1 rounded-pill"
                href="#"
                role="button"
            >
                WhatsApp ke Admin
            </a>
        </div>
    );
};
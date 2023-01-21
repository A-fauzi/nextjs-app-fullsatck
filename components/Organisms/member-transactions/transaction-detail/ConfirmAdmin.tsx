// @flow 
import * as React from 'react';
import Link from 'next/link';

type Props = {

};
export const ConfirmAdmin = (props: Props) => {
    return (
        <div className="d-md-block d-flex flex-column w-100">
            <Link legacyBehavior href={"https://wa.me/081317100603?text=Halo%2Admin,%20Ada%20masalah%20dengan%20transaction%20detail%20saya."}>
                <a
                    className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                    role="button"
                >
                    WhatsApp ke Admin
                </a>
            </Link>
        </div>
    );
};
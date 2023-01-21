// @flow 
import * as React from 'react';
import Link from 'next/link';
type Props = {

};
export const ConfirmTopUp = (props: Props) => {
    return (
        <div className="d-sm-block d-flex flex-column w-100">
            <Link legacyBehavior href={'/checkout'}>
                <a
                    type="submit"
                    className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
                >
                    Continue
                </a>
            </Link>
            {/* <!-- <button type="submit"
                              className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Continue</button> --> */}
        </div>
    );
};
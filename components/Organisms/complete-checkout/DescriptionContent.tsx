// @flow 
import * as React from 'react';
type Props = {

};
export const DescriptionContent = (props: Props) => {
    return (
        <div className="pt-70 pb-50">
            <h2 className="text-4xl fw-bold text-center color-palette-1 mb-10">
                Checkout Completed
            </h2>
            <p className="text-lg text-center color-palette-1 m-0">
                Kami akan periksa pembayaran Anda
                <br className="d-sm-block d-none" /> dan menghubungi via WhatsApp
            </p>
        </div>
    );
};
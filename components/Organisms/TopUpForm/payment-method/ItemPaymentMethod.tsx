// @flow 
import * as React from 'react';
import Image from 'next/image';

type ItemPaymentMethodProps = {
    itemType: string,
    methodPayment: string,
    provider: string,
};
export const ItemPaymentMethod = (props: ItemPaymentMethodProps) => {

    const { itemType, methodPayment, provider } = props

    return (
        <label
            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor={itemType}
        >
            <input
                className="d-none"
                type="radio"
                id={itemType}
                name="paymentMethod"
                value={itemType}
            />
            <div className="detail-card">
                <div className="d-flex justify-content-between">
                    <p className="text-3xl color-palette-1 fw-medium m-0">
                        {methodPayment}
                    </p>
                    <Image src={'assets/icon/check-icon.svg'} alt='' width={20} height={20} id='icon-check' />
                </div>
                <p className="text-lg color-palette-1 m-0">
                    {provider}
                </p>
            </div>
        </label>
    );
};
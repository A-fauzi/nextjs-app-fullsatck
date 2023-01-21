// @flow 
import * as React from 'react';
import { ItemPaymentMethod } from './ItemPaymentMethod';
type Props = {

};
export const PaymentMethod = (props: Props) => {
    return (
        <div className="pb-md-50 pb-20">
            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
                Payment Method
            </p>
            <fieldset id="paymentMethod">
                <div className="row justify-content-between">

                    {/* Item Payment Method */}
                    <ItemPaymentMethod itemType='transfer' methodPayment='Transfer' provider='Worldwide Available' />
                    <ItemPaymentMethod itemType='visa' methodPayment='Visa' provider='Credit Card' />

                    <div className="col-lg-4 col-sm-6">
                        {/* <!-- Blank --> */}
                    </div>
                </div>
            </fieldset>
        </div>
    );
};
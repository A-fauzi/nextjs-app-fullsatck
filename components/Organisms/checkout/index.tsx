// @flow 
import * as React from 'react';
import Link from 'next/link';
import { GameItem } from './GameItem';
import { Purchase } from './Purchase';
import { Payment } from './Payment';
import { CheckoutConfirmation } from './CheckoutConfirmation';
type Props = {

};
export const Checkout = (props: Props) => {
    return (
        <>
            {/* Game checkout */}
            <GameItem />

            <hr />

            {/* Purchase */}
            <Purchase />

            {/* Payment */}
            <Payment />

            {/* Checkout confirmation */}
            <CheckoutConfirmation />
        </>
    );
};
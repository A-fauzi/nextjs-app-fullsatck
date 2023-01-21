// @flow 
import * as React from 'react';
import { VerifyIdInput } from './VerifyIdInput';
import { NominalTopUp } from './nominal-top-up';
import { PaymentMethod } from './payment-method';
import { BankAccountName } from './BankAccountName';
import { ConfirmTopUp } from './ConfirmTopUp';
type Props = {

};
export const TopUpForm = (props: Props) => {
    return (
        <form action="/checkout" method="POST">
            {/* Verify ID Input */}
            <VerifyIdInput />

            {/* Nominal TopUp */}
            <NominalTopUp />

            {/* Payment Method */}
            <PaymentMethod />

            {/* Bank Akun Name */}
            <BankAccountName />

            {/* Btn Confirmation */}
            <ConfirmTopUp />
        </form>
    );
};
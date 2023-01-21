// @flow 
import * as React from 'react';
type Props = {

};
export const BankAccountName = (props: Props) => {
    return (
        <div className="pb-50">
            <label
                htmlFor="bankAccount"
                className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
                Bank Account Name
            </label>
            <input
                type="text"
                className="form-control rounded-pill text-lg"
                id="bankAccount"
                name="bankAccount"
                aria-describedby="bankAccount"
                placeholder="Enter your Bank Account Name"
            />
        </div>
    );
};
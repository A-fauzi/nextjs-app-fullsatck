// @flow 
import * as React from 'react';
import { LatestTransactionMainContent } from './main-content';
type Props = {

};
export const LatestTransactions = (props: Props) => {
    return (
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
            </p>

            {/* Main Content */}
            <LatestTransactionMainContent />
        </div>
    );
};
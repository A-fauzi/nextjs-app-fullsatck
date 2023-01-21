// @flow 
import * as React from 'react';
import { RowContentLatestTransaction } from './RowContentLatestTransaction';
import { ColumnContentLatestTransaction } from './column-content-latest-transactions';
type Props = {

};
export const LatestTransaction = (props: Props) => {
    return (
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
                Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                    {/* Row content */}
                    <RowContentLatestTransaction />

                    {/* Column content */}
                    <ColumnContentLatestTransaction />
                </table>
            </div>
        </div>
    );
};
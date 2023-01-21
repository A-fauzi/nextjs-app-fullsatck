// @flow 
import * as React from 'react';
import { MemberSpent } from './MemberSpent';
import { CategoryStatusTransaction } from './category-status-transaction';
import { LatestTransaction } from './LatestTransaction';
type Props = {

};
export const MemberTransactionComponent = (props: Props) => {
    return (
        <div className="ps-lg-0">
            {/* Text Transaction */}
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                My Transactions
            </h2>

            {/* Member Spent */}
            <MemberSpent />

            {/* Category status transaction */}
            <CategoryStatusTransaction />

            {/* Latest transaction */}
            <LatestTransaction />
        </div>
    );
};
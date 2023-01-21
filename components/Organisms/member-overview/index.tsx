// @flow 
import * as React from 'react';
import { TopUpCategories } from './topup-categories';
import { LatestTransactions } from './latest-transactions';
type Props = {

};
export const MemberOverview = (props: Props) => {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>

                {/*Topup Categories */}
                <TopUpCategories />


                {/* Latest Transactions */}
                <LatestTransactions />

            </div>
        </main>
    );
};
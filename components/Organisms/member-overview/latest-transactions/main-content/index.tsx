// @flow 
import * as React from 'react';
import { ContentRow } from './ContentRow';
import { ContentColumn } from './content-column';
type Props = {

};
export const LatestTransactionMainContent = (props: Props) => {
    return (
        <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
                {/* Row */}
                <ContentRow />

                {/* Column */}
                <ContentColumn />

            </table>
        </div>
    );
};
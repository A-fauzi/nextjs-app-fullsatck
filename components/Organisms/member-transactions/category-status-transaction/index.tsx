// @flow 
import * as React from 'react';
import { Sidebar } from '../../member-sidebar';
import { ItemComponent } from './ItemComponent';
type Props = {

};
export const CategoryStatusTransaction = (props: Props) => {
    return (
        <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
                {/* Item button */}
                <div id="list_status_title">
                    {/* Item Component */}
                    <ItemComponent dataFilter='*' url='#' title='All Trx' btnActive />
                    <ItemComponent dataFilter='success' url='#' title='Success' />
                    <ItemComponent dataFilter='pending' url='#' title='Pending' />
                    <ItemComponent dataFilter='failed' url='#' title='Failed' />
                </div>
            </div>
        </div>
    );
};
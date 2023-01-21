// @flow 
import * as React from 'react';
import { ItemLatestContent } from './ItemLatestContent';
type Props = {

};
export const ColumnContentLatestTransaction = (props: Props) => {
    return (
        <tbody id="list_status_item">
            {/* Item latest transactions */}
            <ItemLatestContent image='overview-1' title='Mobile Legends: The New Battle 2021' category='Desktop' item='200 Gold' price='Rp 290.000' status='Pending' />
            <ItemLatestContent image='overview-2' title='Call of Duty:Modern: The New Battle 2021' category='Desktop' item='550 Gold' price='Rp 740.000' status='Success' />
            <ItemLatestContent image='overview-3' title='Clash of Clans' category='Mobile' item='100 Gold' price='Rp 120.000' status='Failed' />
            <ItemLatestContent image='overview-4' title='The Royal Game' category='Mobile' item='225 Gold' price='Rp 200.000' status='Success' />

        </tbody>
    );
};
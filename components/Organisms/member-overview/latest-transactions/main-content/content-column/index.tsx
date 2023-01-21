// @flow 
import * as React from 'react';
import { ItemLatestTransaction } from './ItemLatestTransaction';
type Props = {

};
export const ContentColumn = (props: Props) => {
    return (
        <tbody>
            {/* Item Latest Transaction */}
            <ItemLatestTransaction image='overview-1' title='Mobile Legends: The New Battle 2021' category='Desktop' item='200 Gold' price='Rp 290.000' status='Pending' />
            <ItemLatestTransaction image='overview-2' title='Call of Duty:Modern' category='Desktop' item='550 Gold' price='Rp 740.000' status='Success' />
            <ItemLatestTransaction image='overview-3' title='Clash of Clans' category='Mobile' item='100 Gold' price='Rp 120.000' status='Failed' />
            <ItemLatestTransaction image='overview-4' title='The Royal Game' category='Mobile' item='225 Gold' price='Rp 200.000' status='Success' />
        </tbody>
    );
};
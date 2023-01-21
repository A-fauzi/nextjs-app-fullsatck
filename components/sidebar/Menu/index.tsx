// @flow 
import * as React from 'react';
import { ItemMenu } from './ItemMenu';
import Image from 'next/image';
type Props = {

};
export const MenuSidebar = (props: Props) => {
    return (
        <div className="menus">
            {/* Item menu */}
            <ItemMenu title='Overview' icon='item-menu-1-overview' active />
            <ItemMenu title='Transactions' icon='item-menu-2-transactions' />
            <ItemMenu title='Message' icon='item-menu-3-message' />
            <ItemMenu title='Card' icon='item-menu-4-card' />
            <ItemMenu title='Rewards' icon='item-menu-5-rewards' />
            <ItemMenu title='Settings' icon='item-menu-6-settings' />
            <ItemMenu title='Logout' icon='item-menu-7-logout' />
        </div>
    );
};
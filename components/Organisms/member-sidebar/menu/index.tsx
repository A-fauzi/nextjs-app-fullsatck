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
            <ItemMenu title='Overview' icon='item-menu-1-overview' active url='/member' />
            <ItemMenu title='Transactions' icon='item-menu-2-transactions' url='/member' />
            <ItemMenu title='Message' icon='item-menu-3-message' url='/member' />
            <ItemMenu title='Card' icon='item-menu-4-card' url='/member' />
            <ItemMenu title='Rewards' icon='item-menu-5-rewards' url='/member' />
            <ItemMenu title='Settings' icon='item-menu-6-settings' url='/member/edit-profile' />
            <ItemMenu title='Logout' icon='item-menu-7-logout' url='/sign-in' />
        </div>
    );
};
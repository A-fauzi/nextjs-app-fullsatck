// @flow 
import * as React from 'react';
import Image from 'next/image';
import { Profile } from './Profile';
import { MenuSidebar } from './menu';
import { FooterSidebar } from './FooterSidebar';
type Props = {

};
export const Sidebar = (props: Props) => {
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                {/* Profile member */}
                <Profile />

                {/* Menu Sidebar */}
                <MenuSidebar />

                {/* Footer Sidebar */}
                <FooterSidebar />
            </div>
        </section>
    );
};
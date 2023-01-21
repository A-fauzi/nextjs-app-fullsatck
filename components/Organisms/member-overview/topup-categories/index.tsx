// @flow 
import * as React from 'react';
import Image from 'next/image';
import { ItemTopUpCategories } from './ItemTopUpCategories';
type Props = {

};
export const TopUpCategories = (props: Props) => {
    return (
        <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
                Top Up Categories
            </p>
            <div className="main-content">
                <div className="row">
                    {/* Item Topup Categories */}
                    <ItemTopUpCategories icon='topup-1-game-desktop' totalSpent='Rp 18.000.500'>Game <br /> Desktop</ItemTopUpCategories>
                    <ItemTopUpCategories icon='topup-2-game-mobile' totalSpent='Rp 8.455.000' >Game <br /> Mobile</ItemTopUpCategories>
                    <ItemTopUpCategories icon='topup-1-game-desktop' totalSpent='Rp 5.000.000'>Other <br /> Categories</ItemTopUpCategories>

                </div>
            </div>
        </div>
    );
};
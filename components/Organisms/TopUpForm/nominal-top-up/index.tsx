// @flow 
import * as React from 'react';
import { ItemNominalTopUp } from './ItemNominalTopUp';
type Props = {

};
export const NominalTopUp = (props: Props) => {
    return (
        <div className="pt-md-50 pb-md-50 pt-30 pb-20">
            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
                Nominal Top Up
            </p>
            <div className="row justify-content-between">
                {/* Item Nominal TopUp */}
                <ItemNominalTopUp typeItem='topup1' totalGold={125} price='Rp 3.250.000' />
                <ItemNominalTopUp typeItem='topup2' totalGold={225} price='Rp 3.250.000' />
                <ItemNominalTopUp typeItem='topup3' totalGold={350} price='Rp 3.250.000' />
                <ItemNominalTopUp typeItem='topup4' totalGold={550} price='Rp 3.250.000' />
                <ItemNominalTopUp typeItem='topup5' totalGold={750} price='Rp 3.250.000' />

                <div className="col-lg-4 col-sm-6">
                    {/* <!-- Blank --> */}
                </div>
            </div>
        </div>
    );
};
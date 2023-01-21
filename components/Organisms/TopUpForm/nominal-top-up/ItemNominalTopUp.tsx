// @flow 
import * as React from 'react';
import Image from 'next/image';
type ItemNominalTopUpProps = {
    typeItem: string,
    totalGold: number,
    price: string,
};
export const ItemNominalTopUp = (props: ItemNominalTopUpProps) => {

    const { typeItem, totalGold, price } = props

    return (
        <label
            className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
            htmlFor={typeItem}
        >
            <input
                className="d-none"
                type="radio"
                id={typeItem}
                name="topup"
                value={typeItem}
            />
            <div className="detail-card">
                <div className="d-flex justify-content-between">
                    <p className="text-3xl color-palette-1 m-0">
                        <span className="fw-medium">{totalGold}</span>
                        Gold
                    </p>
                    <Image src={'assets/icon/check-icon.svg'} alt='' width={20} height={20} id='icon-check' />
                </div>
                <p className="text-lg color-palette-1 m-0">
                    {price}
                </p>
            </div>
        </label>
    );
};
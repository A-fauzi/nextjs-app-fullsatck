// @flow 
import * as React from 'react';
import cx from 'classnames'
import Image from 'next/image';

type ItemTransactionsProps = {
    image: string,
    title: string,
    category: string,
    item: string,
    price: string,
    status: 'Success' | 'Pending' | 'Failed'
};
export const ItemLatestTransaction = (props: Partial<ItemTransactionsProps>) => {

    const { image, title, category, item, price, status } = props

    const classStatus = cx({
        'float-start icon-status': true,
        'success': status === 'Success',
        'pending': status === 'Pending',
        'failed': status === 'Failed'
    })

    return (
        <>
            <tr className="align-middle text-center">
                <th scope="row">
                    <img
                        className="float-start me-3 mb-lg-0 mb-3"
                        src={`/assets/img/${image}.png`}
                        width="80"
                        height="60"
                        alt=""
                    />
                    <div className="game-title-header">
                        <p className="game-title fw-medium text-start color-palette-1 m-0">
                            {title}
                        </p>
                        <p className="text-xs fw-normal text-start color-palette-2 m-0">
                            {category}
                        </p>
                    </div>
                </th>
                <td>
                    <p className="fw-medium text-start color-palette-1 m-0">
                        {item}
                    </p>
                </td>
                <td>
                    <p className="fw-medium text-start color-palette-1 m-0">
                        {price}
                    </p>
                </td>

                <td>
                    <div>
                        <span className={classStatus}></span>
                        <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                            {status}
                        </p>
                    </div>
                </td>
            </tr>

        </>
    );
};
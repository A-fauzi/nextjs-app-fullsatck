// @flow 
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames'

type ItemLatestContentProps = {
    image: string,
    title: string,
    category: string,
    item: string,
    price: string,
    status: 'Success' | 'Pending' | 'Failed',
};
export const ItemLatestContent = (props: ItemLatestContentProps) => {

    const { image, title, category, item, price, status } = props

    const className = cx({
        'float-start icon-status': true,
        'success': status === 'Success',
        'pending': status === 'Pending',
        'failed': status === 'Failed'
    })

    return (
        <tr data-category="pending" className="align-middle">
            <th scope="row">
                <Image
                    className="float-start me-3 mb-lg-0 mb-3"
                    src={`/assets/img/${image}.png`}
                    width={80}
                    height={60}
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
                <p className="fw-medium color-palette-1 m-0">{item}</p>
            </td>
            <td>
                <p className="fw-medium color-palette-1 m-0">
                    {price}
                </p>
            </td>
            <td>
                <div>
                    <span className={className}></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {status}
                    </p>
                </div>
            </td>
            <td>
                <Link legacyBehavior href={'/member/transactions/detail'}>
                    <a
                        className="btn btn-status rounded-pill text-sm"
                    >
                        Details
                    </a>
                </Link>
            </td>
        </tr>
    );
};
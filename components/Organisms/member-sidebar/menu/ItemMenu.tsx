// @flow 
import * as React from 'react';
import Image from 'next/image';
import cx from 'classnames'
import Link from 'next/link';

type ItemMenuProps = {
    title: string,
    icon: string,
    active?: boolean,
    url: string
};
export const ItemMenu = (props: Partial<ItemMenuProps>) => {
    const { title, icon, active, url } = props
    const classNames = cx({
        'item': true,
        'active': active,
        'mb-30': true
    })
    return (
        <div className={classNames}>
            <div className='me-3'>
                <Image src={`/assets/icon/${icon}.svg`} alt='icon' width={25} height={25} />
            </div>
            <p className="item-title m-0">
                <Link legacyBehavior href={url}>
                    <a className="text-lg text-decoration-none">
                        {title}
                    </a>
                </Link>
            </p>
        </div>
    )
};
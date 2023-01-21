// @flow 
import * as React from 'react';
import cx from 'classnames'
type ItemComponentProps = {
    dataFilter: string,
    url: string,
    title: string,
    btnActive?: boolean
};
export const ItemComponent = (props: Partial<ItemComponentProps>) => {

    const { dataFilter, url, title, btnActive } = props

    const className = cx({
        "btn btn-status rounded-pill text-sm me-3": true,
        'btn-active': btnActive
    })

    return (
        <a
            data-filter={dataFilter}
            href={url}
            className={className}
        >
            {title}
        </a>


    );
};
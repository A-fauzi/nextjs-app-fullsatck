// @flow 
import * as React from 'react';

interface DataCountProps {
    count: string,
    title: string,
    className?: string
}
export default function DataCount(props: Partial<DataCountProps>) {
    const { count, title, className } = props
    return (
        <>
            <div className={className}>
                <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
                    {count}
                </p>
                <p className="text-lg text-lg-start text-center color-palette-2 m-0">
                    {title}
                </p>
            </div>

        </>
    );
};
// @flow 
import * as React from 'react';
import Image from 'next/image';

type StepComponentProps = {
    img: string,
    title: string,
    desc: string
};
export const StepComponent = (props: StepComponentProps) => {
    const { img, title, desc } = props
    return (
        <div className="col-lg-4">
            <div className="card feature-card border-0">
                <Image className='mb-5' src={img} width={80} height={80} alt='icon' />
                <p className="fw-semibold text-2xl mb-2 color-palette-1">
                    {title}
                </p>
                <p className="text-lg color-palette-1 mb-0">
                    {desc}
                </p>
            </div>
        </div>
    );
};


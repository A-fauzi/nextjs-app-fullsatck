// @flow 
import * as React from 'react';
import Image from 'next/image';
type Props = {

};
export const Profile = (props: Props) => {
    return (
        <div className="user text-center pb-50 pe-30">
            <Image
                src={'/assets/img/avatar-1.png'}
                width={90}
                height={90}
                className="img-fluid mb-20"
                alt='img'
            />
            <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
            <p className="color-palette-2 m-0">shayna@anne.com</p>
        </div>
    );
};
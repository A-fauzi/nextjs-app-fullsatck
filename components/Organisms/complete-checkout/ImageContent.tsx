// @flow 
import * as React from 'react';
import Image from 'next/image';
type Props = {

};
export const ImageContent = (props: Props) => {
    return (
        <div className="text-center">
            <Image src={'/assets/img/complete-checkout.svg'} alt="img" width={343} height={300} />
        </div>
    );
};
// @flow 
import * as React from 'react';
import Image from 'next/image';
type Props = {

};
export const ImageContentSignUpSuccess = (props: Props) => {
    return (
        <div className="text-center">
            <Image src={'/assets/img/sign-up-success.svg'} alt="img" width={316} height={300} />
        </div>
    );
};
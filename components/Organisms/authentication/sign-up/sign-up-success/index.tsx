// @flow 
import * as React from 'react';
import Image from 'next/image';
import { ImageContentSignUpSuccess } from './ImageContentSignUpSuccess';
import { DescriptionContentSignUpSuccess } from './DescriptionContentSignUpSuccess';
import { ConfrimButtonSignUpSuccess } from './ConfrimButtonSignUpSuccess';
type Props = {

};
export const SignUpSuccessComponent = (props: Props) => {
    return (
        <div className="container-fluid">
            {/* Image Content */}
            <ImageContentSignUpSuccess />

            {/* Description Content */}
            <DescriptionContentSignUpSuccess />

            {/* Confirm Button */}
            <ConfrimButtonSignUpSuccess />
        </div>
    );
};
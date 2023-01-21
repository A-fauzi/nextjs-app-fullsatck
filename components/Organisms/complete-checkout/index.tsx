// @flow 
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImageContent } from './ImageContent';
import { DescriptionContent } from './DescriptionContent';
import { Confirmation } from './Confirmation';
type Props = {

};
export const CompleteCheckoutComponent = (props: Props) => {
    return (
        <div className="container-fluid">
            {/* Image Content */}
            <ImageContent />

            {/* Description Content */}
            <DescriptionContent />

            {/* Confirmation */}
            <Confirmation />
        </div>
    );
};
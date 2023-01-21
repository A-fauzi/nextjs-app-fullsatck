// @flow 
import * as React from 'react';
import { UploadProfile } from './UploadProfile';
import { ConfirmButtonUploadProfile } from './ConfirmButtonUploadProfile';
type Props = {

};
export const SignUpPhotoComponent = (props: Props) => {
    return (
        <div className="container mx-auto">
            <form action="">
                <div className="form-input d-md-block d-flex flex-column">
                    {/* Upload photo and choose favourite game */}
                    <UploadProfile />

                    {/* Confirm Button */}
                    <ConfirmButtonUploadProfile />
                </div>
            </form>
        </div>
    );
};
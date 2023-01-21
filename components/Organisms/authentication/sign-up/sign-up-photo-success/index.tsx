// @flow 
import * as React from 'react';
import { Profile } from './Profile';
import { ConfirmationButton } from './ConfirmationButton';
type Props = {

};
export const SignUpPhotoSuccessComponent = (props: Props) => {
    return (
        <div className="container mx-auto">
            <form action="">
                <div className="form-input d-md-block d-flex flex-column">
                    {/* Profile and Choose Favourite Game */}
                    <Profile />

                    {/* Confirmation Button */}
                    <ConfirmationButton />
                </div>
            </form>
        </div>
    );
};
// @flow 
import * as React from 'react';
type InputFormProps = {
    type: string,
    label: string,
    placeHolder: string

};
export const InputForm = (props: InputFormProps) => {
    const { type, label, placeHolder } = props
    return (
        <>
            <div className="pt-50">
                <label
                    htmlFor={type}
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                    {label}
                </label>
                <input
                    type={type}
                    className="form-control rounded-pill text-lg"
                    id={type}
                    name={type}
                    aria-describedby={type}
                    placeholder={placeHolder}
                />
            </div>
        </>
    );
};
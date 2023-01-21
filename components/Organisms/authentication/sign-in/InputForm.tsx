// @flow 
import * as React from 'react';
type InputFormProps = {
    type: string,
    label: string,
    placeHolder: string,
    className?: string

};
export const InputForm = (props: Partial<InputFormProps>) => {
    const { type, label, placeHolder, className } = props
    return (
        <>
            <div className={className}>
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
// @flow 
import * as React from 'react';
type FormSignUpProps = {
    type: string,
    className?: string,
    label: string,
    placeholder: string
};
export const InputFormSignUp = (props: Partial<FormSignUpProps>) => {
    const { type, className, label, placeholder } = props
    return (
        <div className={className}>
            <label
                htmlFor={type}
                className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
                {label}
            </label>
            <input
                type="text"
                className="form-control rounded-pill text-lg"
                id={type}
                name={type}
                aria-describedby={type}
                placeholder={placeholder}
            />
        </div>
    );
};
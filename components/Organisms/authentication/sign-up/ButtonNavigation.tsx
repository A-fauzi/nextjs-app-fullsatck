// @flow 
import * as React from 'react';
import Link from 'next/link';
type ButtonNavLinkProps = {
    url: string,
    className?: string,
    title: string
};
export const ButtonNavigation = (props: Partial<ButtonNavLinkProps>) => {
    const { url, className, title } = props
    return (
        <Link legacyBehavior href={url}>
            <a
                className={className}
                role="button"
            >
                {title}
            </a>
        </Link>
    );
};
// @flow 
import * as React from 'react';
type Props = {

};
export const ContentRow = (props: Props) => {
    return (
        <thead>
            <tr className="color-palette-1">
                <th className="text-start" scope="col">
                    Game
                </th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
    );
};
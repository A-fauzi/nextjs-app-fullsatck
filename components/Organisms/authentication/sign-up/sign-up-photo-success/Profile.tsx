// @flow 
import * as React from 'react';
type Props = {

};
export const Profile = (props: Props) => {
    return (
        <div>
            <div className="mb-20">
                <div className="image-upload text-center">
                    <label htmlFor="file-input">
                        <img
                            src="../assets/img/avatar-1.png"
                            width="120"
                            height="120"
                            className="rounded-circle"
                            alt=""
                        />
                    </label>
                    <input id="file-input" type="file" />
                </div>
            </div>
            <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                Shayna Anne
            </h2>
            <p className="text-lg text-center color-palette-1 m-0">
                shayna@anne.com
            </p>
            <div className="pt-50 pb-50">
                <label
                    htmlFor="category"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                    Favorite Game
                </label>
                <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                >
                    <option value="" disabled selected>
                        Select Category
                    </option>
                    <option value="fps">First Person Shoter</option>
                    <option value="rpg">Role Playing Game</option>
                    <option value="arcade">Arcade</option>
                    <option value="sport">Sport</option>
                </select>
            </div>
        </div>
    );
};
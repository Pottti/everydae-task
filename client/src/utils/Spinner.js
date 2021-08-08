import React,{ useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;
   

    return (
        <div>
            <ClipLoader color={color} loading={loading} css={override} size={150} />
        </div>
    )
}

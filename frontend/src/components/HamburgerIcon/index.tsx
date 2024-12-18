import * as React from "react";
const HamburgerIcon = (props: any) => (
    <div onClick={props.onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" height={48} width={48}>
        <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" fill="white" />
    </svg>
    </div>
);
export default HamburgerIcon;
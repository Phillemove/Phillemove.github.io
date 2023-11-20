import React from "react";

const Nav = (props) => {
    return (
        <span key={props.page} className='App-click' onClick={props.onClick}>
            {props.page}
        </span>
    );
};

export default Nav;
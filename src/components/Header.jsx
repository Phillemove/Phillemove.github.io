import React from "react";
import Nav from "./Nav";

const Header = (props) => {
    return (
        <div className='App-header'>
            <h1>Jan-Philipp Andresen - Software Developer</h1>
            {props.pages.map((page) =>
                <Nav
                    page={page}
                    onClick={() => props.onClick(page)}
                    key={page}
                />
            )}
        </div>
    );
}

export default Header;

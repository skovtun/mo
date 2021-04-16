import React from 'react';
import './header.scss'

function Header(props) {
    return (
        <header>
            <div className="logo"><span style={{color: "orange"}}>Mailbox</span>Onboarding</div>
            <div className="user-account">
                <div className="user__name">Welcome User!</div>
                <div className="user__avatar"></div>
            </div>
        </header>
    );
}

export default Header;

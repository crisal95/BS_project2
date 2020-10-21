import React from 'react';
import "./header.css";


const Header = () => {
    return (
<div className="header">
    <div className="title">
        <h1>Do you want to play a game?</h1>
    </div>
    <div className="heroContent">
<p>This a game similar to Who wants to be millionaire! Choose a category and let's start!</p>
<button>Game rules</button>
    </div>
</div>
    );
}

export default Header;
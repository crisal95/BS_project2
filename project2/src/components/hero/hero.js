import React from 'react';
import "./hero.css";
import Modal from "../modal/modal";
import ModalText from "../../data/text";


const Hero = () => {
    return (
<div className="hero">
    <div className="title">
        <h1>Do you want to play a game?</h1>
    </div>
    <div className="heroContent">
<p>This a game similar to Who wants to be millionaire! Choose a category and let's start!</p>
<Modal title={"Game rules"} text={ModalText}/>
    </div>
</div>
    );
}

export default Hero;
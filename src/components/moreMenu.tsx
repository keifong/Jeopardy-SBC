import React, { useState } from "react";

const moreMenu = () => {
    // setting default as true so it will show up on bootup
    const [isOpen, setIsOpen] = useState(true);

    // functions start here
    const handleClick = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }


    return (
        <>
        <div className="card" id="moreMenu">
            {/* onClick has errors */}
            <img src="\public\menu.svg"  onClick={handleClick} />
        </div>

        {isOpen && (
            <div className="card-background">
                <div id="popup-card-menu">
                    <div id="menu-contents">
                        <div id="div_flex">
                            <h2>Creator: Kei Fong</h2>
                            <img src="\public\x-square.svg" onClick={handleClose} id="cancel_button"></img>
                        </div>
                        <p>Finalised date: 18 June 2025</p>
                        <p>Event: Singapore Baptist Church Retreat 2025 Day 1</p>
                        <p>Game led by: Kei Yin</p>
                        <hr></hr>
                        <p style={{fontSize:"90%"}}>Thank you for visiting Jeopardy SBC, click <a href="https://docs.google.com/document/d/1tdUnvfjr4LfuWGUIWmrJDqTkJfCjHPNtsqXYGOOiGpk/edit?usp=sharing" id="link_toDoc" target="blank" style={{fontSize:'150%'}}>here</a> for the full report for the creation of this game</p>

                        <p><a style={{fontSize: '150%'}}>How to Play: </a><br/>Seperate your group into smaller teams, each taking 1 colour.<br/>In turns, each team on their turn gets to pick a card associated with its points value.<br/>The larger the points shown on the card, the more difficult its question.<br/>Upon selecting on the picked card, the team will have 20 seconds to answer the question.<br/>If the team answers correctly, they win the points shown on the card.<br/>Now they have the option to either, end their turn or sabotage the next team by picking them a card.<br/>If the opponent team is unable to answer their question card, they do not win any points.<br/>However, if they are able to answer it, not only do they win the points on the card, the team that sabotaged them will lose half their current total points.<br/>After all the cards have been revealed, the team with the highest points wins.</p>
                        <h5 style={{alignSelf: "center"}}>Enjoy your game!</h5>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default moreMenu;

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <header className="NavBar">
            <Link className="logo" to="/">MOVIE DB REACT</Link>
            <button 
                className="ham-icon"
                dangerouslySetInnerHTML={{__html: `<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>`}}
                onClick={props.showSideMenuHandler}
            >
            </button>
            <div 
                className="side-menu" 
                style={
                    props.visible ? {
                        transform:  'translateX(0)' 
                    } : null
                }
            >
                <button 
                    className="close-icon" 
                    dangerouslySetInnerHTML={{__html: `<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>`}}
                    onClick={props.closeSideMenuHandler}
                    >
                </button>
                <nav>
                    <ul>
                        <li>
                            <Link 
                                to="/"
                                onClick={props.closeSideMenuHandler}
                                activeClassName="active"
                            >Home</Link>
                        </li>
                        <li>
                            <Link 
                                to="#/"
                                onClick={props.closeSideMenuHandler}
                                activeClassName="active"
                            >About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
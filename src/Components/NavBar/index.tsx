import React from 'react';
import './nav.styles.css'

export const NavBar = () => {
    return (
        <header className="header">
            <div id="header-container" className="header-container">
                <h1 className="title">Book Club</h1>
                <form>
                    <div className="search-bar">
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Search for books..."
                            required
                        />
                        <button id="searchButton" className="searchButton">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input type="checkbox" id="check" />
                        <label htmlFor="check" className="button"></label>
                    </div>
                </form>
                <nav className="nav-menu">
                    <ul>
                        <li className="nav-item">
                            <a id="homePage" href="#header-container" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a id="savedReviewLink" href="#header-container" className="nav-link">Saved Review</a>
                        </li>
                        <li className="nav-item">
                            <a id="favoritesLink" href="#header-container" className="nav-link">Favorites</a>
                        </li>
                        <li className="nav-item">
                            <a id="contacts" href="#footer-section-three" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

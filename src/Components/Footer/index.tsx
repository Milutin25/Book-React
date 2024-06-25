import React from 'react';
import './footer.styles.css'


export const Footer = () => {
    return (
        <>
            <button id="scrollToTopBtn">&#8593;</button>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We are passionate about books and aim to create a community where book lovers can share reviews and discover new reads.</p>
                    </div>
                    <div id="footer-section-two" className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Browse Books</a></li>
                            <li><a href="#">Submit Review</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div id="footer-section-three" className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: <a href="mailto:info@bookclub.com">info@bookclub.com</a></p>
                        <p>Phone: <a href="tel:123-456-7890">(123) 456-7890</a></p>
                    </div>
                </div>
            </footer>
        </>
    );
};

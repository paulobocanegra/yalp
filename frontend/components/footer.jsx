import React from 'react'

class FooterComponent extends React.Component {
    render(){
        return (
            <div className="footer-div">
                <div>
                    <div className="footer-section">
                        <div className="footer-ul">
                            <h3 className="footer-title">About</h3>
                            <ul>
                                <li className="footer-li"><a target="_blank" className="footer-link" href="https://github.com/paulobocanegra/yalp">About Yalp</a></li>
                                <li className="footer-li"><a target="_blank" className="footer-link" href="https://www.linkedin.com/in/paulo-bocanegra-a89b641b9/">Developer</a></li>
                            </ul>
                        </div>
                        <div className="footer-ul">
                            <h3 className="footer-title">Contact</h3>
                            <ul className="contact-text">
                                <li className="footer-li">Phone: (925) 395 7377</li>
                                <li className="footer-li">Email: paulobocanegra@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            )  
        }
}

export default FooterComponent;
import React from "react";
import './Header.css';
const Header = () => {
    return(
       <>
            <div>
                <div className="header">
                    <div className="left-section">
                        <img src="images\Logo.png" />
                    </div>
                    <div className="middle-section">
                        {[
                            {name:'Home',diffStyles:{color:'#3056D3'}},
                            {name:'About Us',diffStyles:{}},
                            {name:'Services',diffStyles:{}},
                            {name:'Contact Us',diffStyles:{}}
                        ].map((value)=>{
                            return(
                                    <div style={{...value.diffStyles}}>
                                        {value.name}
                                    </div>
                            )

                        })}
                        {/* <div style={{color:'#3056D3'}}>Home</div>
                        <div>About Us</div>
                        <div>Sevices</div>
                        <div>Contact Us</div> */}
                    </div>
                    <div className="right-section">
                        <p>EN</p>
                        <img src="images\Vector (Stroke).png" />
                        <button>Schedule a Call</button>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Header;
import React from "react";
import './Clients.css'

const Clients =()=>{
    return(
        
        <div className="clients">
            <img src="public\Vector 4.png"/>
            <div className="clients-text">
                <div>Trusted by Leading Organizations</div>
                <p style={{marginBottom:'0'}}>Our 4,000+ team has expertise in almost</p>
                <p style={{margin:'0'}}> every programming language.</p>
            </div>
            <div className="companies">
                {[
                    {src:'public\\Vector.png',diffStyles:{height:'30px'}},
                    {src:'public\\logos_microsoft.png',diffStyles:{height:'52px'}},
                    {src:'public\\logos_google.png',diffStyles:{height:'56px'}},
                    {src:'public\\Vector (1).png',diffStyles:{height:'45px'}},
                    {src:'public\\simple-icons_lg.png',diffStyles:{height:'100px'}},
                    {src:'public\\simple-icons_sony.png',diffStyles:{height:'150px'}}
                ].map((values,index)=>{
                    return(
                        <div className="companies">
                            <img src={values.src} style={values.diffStyles} />
                        </div>
                    )
                })}
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <button className="report">Our full repertorie</button>
            </div>
        </div>
    )
}

export default Clients;
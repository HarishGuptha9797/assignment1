import React from "react";
import './Clients.css'

const Clients =()=>{
    return(
        <>
            <div>
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
                <div>
                    <div className="reviews-class">
                        <div className="snap">
                            <img src="public\Intersect.png"/>
                            <div className="bg-img3">
                                <img src="public\Vector 4.png"/>
                            </div>
                            <div className="bg-img4">
                                <img src="public\Vector 6.png" alt="" />
                            </div>
                        </div>
                        <div className="description">
                            <div>We've stopped counting. Over 500 brands count on us.</div>
                            <p>Our 4,000+ team has expertise in almost every programming language.</p>
                        </div>
                        <div className="reviews">
                            {[
                                {
                                    div:'"Exceptional Solutions, Exceeded Expectations!"',
                                    p:`
                                        "Working with Nearshore has been an absolute pleasure.
                                        Their team took the time to understand our unique needs and delivered a solution that not only
                                        met but exceeded our expectations.
                                        Their expertise and commitment to excellence are truely commandable."
                                    `,
                                    imgSrc:'public\\vec.png',
                                    reviewByCompany:'Mary Johnson',
                                    position:'CEO of TechCraft Solutions',
                                    diffStyles:{marginTop:'30px'},
                                    diffStyles2:{marginBottom:'30px'}
                                },
                                {
                                    div:'"Transformed Our Business with Innovative Tech!',
                                    p:`
                                        "We owe a significant part of our success to [Company Name]. 
                                        Their custom software solution streamlined our processes, 
                                        saving us time and resources. Their team's dedication to innovation and 
                                        problem-solving is unmatched. We're grateful for their partnership."
                                    `,
                                    imgSrc:"public\\Imagotipo 1 PNG 2.png",
                                    reviewByCompany:'Mark Williams',
                                    position:'CEO of InnovateNow Inc',
                                    diffStyles:{marginTop:'18px'},
                                    diffStyles2:{marginBottom:'10px'}
                                },
                                {
                                    div:'"Sculpted User Experiences Beyond Imagination!"',
                                    p:`
                                        "The UI/UX design crafted by [Company Name] turned our app into a masterpiece.
                                        The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers.
                                        Their design expertise has taken our brand to a whole new level."
                                    `,
                                    imgSrc:'public\\Dovetail.png',
                                    reviewByCompany:'Emily Clark',
                                    position:'CMO of Visionary Apps',
                                    diffStyles:{marginTop:'18px'},
                                    diffStyles2:{marginBottom:'10px'}
                                },
                            ].map((values)=>{
                                    return(
                                        <div className="review1">
                                            <img src="public\Stars.png"/>
                                            <div style={values.diffStyles}>{values.div}</div>
                                            <p style={values.diffStyles2}>{values.p}</p>
                                            <div className="review-by">
                                                <img src= {values.imgSrc} />
                                                <div style={{lineHeight:'30px'}}>
                                                    <div style={{fontSize:'20px'}}>  {values.reviewByCompany} </div>
                                                    <div style={{fontSize:'14px',color:'#525252'}}>{values.position}</div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                            })}
                            {/* <div className="review1">
                                {/* <span style={{fontSize:'25px'}}>⭐⭐️⭐️⭐️⭐️️</span> *}
                                <img src="public\Stars.png"/>
                                <div>"Exceptional Solutions, Exceeded Expectations!"</div>
                                <p>
                                    "  
                                        Working with Nearshore has been an absolute pleasure.
                                        Their team took the time to understand our unique needs and delivered a solution that not only
                                        met but exceeded our expectations.
                                        Their expertise and commitment to excellence are truely commandable.
                                    "
                                </p>
                                <div className="review-by">
                                    <img src="public\vec.png"/>
                                    <div style={{lineHeight:'30px'}}>
                                        <div style={{fontSize:'20px'}}>Mary Johnson</div>
                                        <div style={{fontSize:'14px'}}>CEO of TechCraft Solutions</div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Clients;
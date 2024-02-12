import React from "react";
import './Content.css';
const Content = () => {
    return(
        <>
            <div>
                <div className="content">
                    <div className="ad-image">
                        <img src="\public\pexels-canva-studio-3153201 1.png" />
                        <div className="tech-services">
                            {/* <div style={{}}>
                                TECH SERVICES
                            </div> */}
                            {[
                                {name:"TECH SERVICES",diffStyles:{fontFamily:'Roboto+Flex',fontSize:'20px',color:'orange',marginBottom:'30px',letterSpacing:'2px'}},
                                {name:"TechSynergy:",diffStyles:{}},
                                {name :"Innovate,",diffStyles:{}},
                                {name:"Create,Elevate",diffStyles:{marginBottom:'40px'}},
                                {name: 'Unlocking Possibilities, One Code at a Time' , diffStyles:{fontSize: '19px' ,color:'#3d3d3d',marginBottom:'50px'}}
                            ].map((value)=>{
                                return(
                                    <div style={{fontSize:'65px',fontWeight:'500',color:'#3D3D3D',...value.diffStyles}}>
                                        {value.name}
                                    </div>
                                )
                            })}
                            {/* <div style={{fontSize:'65px',fontWeight:'500',color:'#3D3D3D',marginBottom:'15px'}}>
                                TechSynergy:
                            </div>
                            <div style={{fontSize:'65px',fontWeight:'500',color:'#3D3D3D',marginBottom:'15px'}}>
                                Innovate,
                            </div>
                            <div style={{fontSize:'65px',fontWeight:'500',color:'#3D3D3D',marginBottom:'40px'}}>
                                Create,Elevate
                            </div> */}
                            {/* <div style={{fontSize: '19px' ,color:'#3d3d3d',fontWeight:'500',marginBottom:'50px'}}>
                                Unlocking Possibilities, One Code at a Time
                            </div> */}
                            <button>See projects</button>
                        </div>
                    </div>
                    <div className="about-teams">
                        <div>
                            We have multidisciplinary teams to meet any <span>challenge.</span>
                        </div>
                    </div>
                    <div className="teams">
                        {[
                            {class : 'Front-end',src:"public\\monitor.png",text:'Our frontend developers understand the delicate balanace between aesthetics and functionality.'},
                            {class :'Back-end',src:'public\\simcard.png',text:'Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.'},
                            {class :'Data-Analytics',src:'public\\driver.png',text:'Our data analysts team is a blend of mathematicians, statisticians, and technology enthusiasts.'},
                        ].map((value)=>{
                            return(
                                <div className={value.class}>
                                    <img src={value.src} />
                                    <div style={{fontSize:'30px',fontWeight:'500'}}>{value.class}</div>
                                    <p style={{color:'#525252'}}>{value.text}</p>
                                </div>
                            )
                        })}
                        {/* <div className="front-end">
                            <img src="public\monitor.png" />
                            <div style={{fontSize:'30px',fontWeight:'500'}}>Front-end</div>
                            <p>Our frontend developers understand the delicate balanace between aesthetics and functionality.</p>
                        </div>
                        <div className="back-end">
                            <img src="public\simcard.png" />
                            <div style={{fontSize:'30px',fontWeight:'500'}}>Back-end</div>
                            <p>Our backend developers are the architects of efficiency and security. They design and build the databases and APIs.</p>
                        </div>
                        <div className="data-analytics">
                            <img src="public\driver.png" />
                            <div style={{fontSize:'30px',fontWeight:'500'}}>Data Analysts</div>
                            <p>Our data analysts team is a blend of mathematicians, statisticians, and technology enthusiasts.</p>
                        </div> */}
                    </div>
                    <div className="ad-image2">
                        <img src="public\Vector 6.png" />
                        <div>Empowering Your Digital vision:Our<br /> Comprehensive Tech Services.</div>
                    </div>
                    <div className="services">
                        {[
                            {   
                                src:'public\\document-code.png',
                                name:'Custom SoftwareDevelopment',
                                diffStyles:{textDecorationColor:'gray'},
                                text:`Create custom software tailored for your unique needs, including front-end, and core back-end technology.`
                            },
                            {   
                                src:'public\\document-code.png',
                                name:'QA and Testing',
                                diffStyles:{textDecorationColor:'gray'},
                                text:'Create custom software tailored for your unique needs, including front-end, and core back-end technology.',
                                stylesImg: {marginBottom:'80px'}
                            },
                            {   
                                src:'public\\document-code.png',
                                name:'AI and Data Science',
                                diffStyles:{textDecorationColor:'gray'},
                                text:'Use leading AI, machine learning, and data engineering technologies to unlock bussiness value.',
                                stylesImg: {marginBottom:'80px'}
                            },
                            {   
                                src:'public\\document-code.png',
                                name:'UX/UI Design',
                                diffStyles:{textDecorationColor:'gray'},
                                text:'Create beautiful, pixel-perfect, and easy-to-use designs that delight your end users.'
                            },
                            {   
                                src:'public\\document-code.png',
                                name:'Mobile App Development',
                                diffStyles:{textDecorationColor:'gray'},
                                text:'Build performant, scalable, and secure mobile applications for iOS and Android devices.'
                            },
                            {   
                                src:'public\\document-code.png',
                                name:'Platform and Infrastructure',
                                diffStyles:{textDecorationColor:'gray'},
                                text:'Ensure applications are secure, fault tolerant and highly available with our DevOps and Security engineers.'
                            }
                        ].map((value)=>{
                            return(
                                <div class='service1'>
                                    <img src={value.src}/>
                                    <div className="service-text">
                                        <div> {value.name} </div>
                                        <p>{value.text}</p>
                                    </div>
                                </div>
                            )
                            
                        })}
                        {/* <div class='service1'>
                            <img src="public\document-code.png"/>
                            <div>Custom SoftwareDevelopment</div>
                            <p>Create <u style={{textDecorationColor:'gray'}}>custom software</u> tailored for your unique needs, including <u style={{textDecorationColor:'gray'}}>front-end</u>, and core <u style={{textDecorationColor:'gray'}}>back-end</u> technology.</p>
                        </div> */}
                    </div>
                </div>
        
            </div>
        </>
    )
}
export default Content;
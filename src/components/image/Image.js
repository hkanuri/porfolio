import React from 'react';
import profile from './profile.jpg'

function Image() {
    return (
        <container>
        <div className="container"> </div>
            <div className="row"> </div>
                <div className="col-lg-12"> </div>
                    <img className="img-responsive" src={profile}
                        alt="profile"/>
                            
                    <div className="intro-name"> </div>
                        <span className="name"> Hemanth Kanuri</span>
                        <hr></hr>
                        <span className="skill">QA Engineer</span>
                
                        </container>
         
        
    )
}

export default Image

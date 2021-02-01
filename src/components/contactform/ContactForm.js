import React from 'react'

function ContactForm() {
    return (
        <div>
            <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h2 className="contact">Contact Me</h2>
                <hr></hr>
                <div className="row">
                    <div className="col-lg-8">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp"/> 
                                <small id="emailHelp" className="form-text text-muted">
                                </small>
                            </div>
                            <div className="form-group"> 
                                <label for="exampleInputPassword1">Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"/> 
                            
                            <div className="form-group"> </div>
                                <label for="exampleFormControlTextarea1">Enter your Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
                <br/> 
                <div className="row">
                    <div className="col-lg-6">
                        <a href="mailto:hkanuri27@gmail.com"> " Or Click Here" Hemanth</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
}

export default ContactForm

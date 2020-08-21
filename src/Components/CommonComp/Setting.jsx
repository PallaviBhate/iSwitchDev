import React,{Component,Fragment} from 'react'
import HeaderAll from './HeaderAll'
import Footer from './Footer'

class Setting extends Component{
    render(){
        return(
            <Fragment>
            <div className="content">
                <HeaderAll></HeaderAll>
                <div className="content_section main">
                    {/* Content on the page */} 
                    <div className="mt-3">
                        <p className="mb-0">Email Notification Preferences</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                        <section className="white-middle-section mt-4">
                            <div class="row">
                                <div class="col-md-6 offset-md-3">
                                    {/* Allow Notication */}
                                    <div class="d-flex justify-content-between border-bottom-thick mb-4">
                                        <h5>Allow Notification</h5>
                                        <div>
                                        <label class="switch ">
                                            <input type="checkbox" class="primary"/>
                                            <span class="slider round"></span>
                                        </label>
                                        </div>
                                    </div>
                                    {/* Successful job post */}
                                    <div class="d-flex justify-content-between mb-3">
                                        <div>Successful job post</div>
                                        <div>
                                        <label class="switch ">
                                            <input type="checkbox" class="primary"/>
                                            <span class="slider round"></span>
                                        </label>
                                        </div>
                                    </div>
                                    {/* New Application */}
                                    <div class="d-flex justify-content-between mb-3">
                                        <div> New application posted job</div>
                                        <div>
                                        <label class="switch ">
                                            <input type="checkbox" class="primary"/>
                                            <span class="slider round"></span>
                                        </label>
                                        </div>
                                    </div>
                                    {/* Interview accepted/declined */}
                                    
                                    <div class="d-flex justify-content-between mb-3">
                                        <div>Interview accepted/declined</div>
                                        <div>
                                        <label class="switch ">
                                            <input type="checkbox" class="primary"/>
                                            <span class="slider round"></span>
                                        </label>
                                        </div>
                                    </div>
                                    {/* Offers accepted/declined */}
                                    
                                    <div class="d-flex justify-content-between mb-3">
                                        <div>Offers accepted/declined</div>
                                        <div>
                                        <label class="switch ">
                                            <input type="checkbox" class="primary"/>
                                            <span class="slider round"></span>
                                        </label>
                                        </div>
                                    </div>
                                    {/* New matches alert */}
                                    
                                    <div class="d-flex justify-content-between mb-3">
                                        <div>New matches alert</div>
                                        <div>
                                        <label class="switch ">
                                            <input type="checkbox" class="primary"/>
                                            <span class="slider round"></span>
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </Fragment>
        )
    }
}

export default Setting
import React from 'react'
const Header = ()=>{
    return(
		/*Login and Signup Header */
        <div className="Header login_header_bottom">
			<div className="float-left col-xl-2">
				<img src="../../images/login/logo.png" className="logo"/>
			</div>
			<ul>
				<li><img src="../images/login/iconfinder_phone.svg"/><span className="header_telephone marL5">58000 45000</span></li>
				<li className="marL0 marR0">|</li>
				<li><img src="../images/login/iconfinder_icon-email_211660.svg"/><a href="#" target="_blank"><span className="header_email marL5"></span>info@jobzilla.com</a></li>
			</ul>
		</div>
		/*Login and Signup Header */        
    )
}   
export default Header
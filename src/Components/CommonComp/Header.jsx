import React from 'react'
const Header = ()=>{
    return(
		/*Login and Signup Header */
        <div class="Header login_header_bottom">
			<div class="float-left col-xl-2">
				<img src="../../images/login/logo.png" class="logo"/>
			</div>
			<ul>
				<li><img src="../images/login/iconfinder_phone.svg"/><span class="header_telephone marL5">58000 45000</span></li>
				<li class="marL0 marR0">|</li>
				<li><img src="../images/login/iconfinder_icon-email_211660.svg"/><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@jobzilla.com&su=SUBJECT&body=BODY" target="_blank"><span class="header_email marL5"></span>info@jobzilla.com</a></li>
			</ul>
		</div>
		/*Login and Signup Header */        
    )
}   
export default Header
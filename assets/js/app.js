/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../scss/app.scss');

let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
	let currentScrollPos = window.pageYOffset;
	if(Math.ceil(document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight)
  	{
  		document.querySelector("header").style.top = "0";
  	}
  	else 
  	{
		if (prevScrollpos > currentScrollPos) {
			document.querySelector("header").style.top = "0";
		} 
		else 
		{
			document.querySelector("header").style.top = "-50px";
		}
		prevScrollpos = currentScrollPos;
	}
}


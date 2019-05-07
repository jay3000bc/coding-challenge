/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../scss/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

//console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
var prevScrollpos = window.pageYOffset;
//console.log('prevScrollpos:'+prevScrollpos);
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	//console.log('currentScrollPos:'+currentScrollPos);
	//console.log('prevScrollpos:'+prevScrollpos);
	// console.log('1:'+ (document.documentElement.scrollTop + window.innerHeight));
	// console.log('2:'+ document.documentElement.scrollHeight);
	// console.log('3:'+ window.innerHeight);
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


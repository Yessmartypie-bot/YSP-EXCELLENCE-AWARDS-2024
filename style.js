		$(document).ready(function(){
			 	$('div#preloaded-intro').removeAttr('id');
		 });
		var intro = document.getElementById("preloaded-intro");
		 window.addEventListener('load', function(){
			intro.style.display = 'none';
			})

		function intro(){
			intro.style.display = 'none';
		};
		function themechange() {
			const body = document.querySelector('body');
			const currentTheme = body.getAttribute('data-bs-theme');
			const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
			body.setAttribute('data-bs-theme', newTheme);
		}
		
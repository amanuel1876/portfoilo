// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
<footer class="footer">
	<section class="flex">
		<div class="box">
				
			<a  href="tel:+251955436917"><i class="fas fa-phone"></i><span>+251 955436917</span></a>

			<a  href="mailto: amanedesaleng@gmail.com"><i class="fas fa-envelope"></i><span>amanedesaleng@gmail.com</span></a>
			<a  href='https://www.google.com/maps/@9.0079232,38.7678208,12z?entry=ttu'><i class="fas fa-map-market-alt"></i><span>Addis Ababa,Ethiopia</span></a>

		</div>
		<div class="box">
			<a href='/Home'><span>home</span></a>
			<a href='/About'><span>about</span></a>
			<a href='/Contact'><span>contact</span></a>
		</div>
		<div class="box">
			<a href='https://facebook.com'><span>facebook</span><i class="fas fa-facebook-f"></i></a>
			<a href='https://twitter.com/AmaneDesaleng'><span>twitter</span><i class="fas fa-twitter"></i></a>
			<a href='https://www.instagram.com/amanedesaleng?igsh=bXAyamJ5dDg3cTNs'><span>instagram</span><i class="fas fa-instagram"></i></a>
		</div>
	</section>
	<div class="credit">&copy copyright @ 2024 by <span>student.Amanuel</span> all rights reserved!</div>
	
</footer>
  );
}

export default Footer;

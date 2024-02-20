import React from 'react';
import './App.css'

function Footer() {
  return (
    <footer className='footer'>
    
      <div className="Foo-div2">
{/* list-1 */}

    <div className='list-1'>
        <p>POPULAR CATEGORIES</p>
<li>Car</li>
<li>Flat for rent</li>
<li>Mobile phones</li>
<li>Jobs</li>

</div>
{/* list-2 */}

<div className='list-2'>
    <p>TRENDING SEARCHES
</p>

<li>Bikes</li>
<li>Watches</li>
<li>Books</li>
<li>Dogs</li>
</div>

{/* list-3 */}

<div className='list-3'>
<p>ABOUT US</p>

    <li>Dubizzle group</li>
<li>OLX Blog</li>
<li>Contact Us</li>
<li>OLX for bussiness</li>
</div>
{/* list-4 */}

<div className='list-4'>
<p>OLX</p>

    <li>Help</li>
<li>Sitemap</li>
<li>Terms of use</li>
<li>Privacy Policy</li>
</div>
</div>

<div>&copy; 2024 OLX. All rights reserved.</div>
      <div className="footer-links">
        <a href="#" className="footer-link">Terms of Use</a>
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="#" className="footer-link">Help & Contact</a>
      </div>
      <div className="social-icons">
        <img src="https://img.freepik.com/premium-vector/facebook-instagram-twitter-icon_469489-856.jpg?w=740" alt="Facebook" className="icon" />
        
        
      </div>

    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Gardening Hub</h3>
          <p className="text-green-200">
            Your one-stop community for gardening tips, events, and resources.
            Join us and grow your green thumb!
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-green-400 cursor-pointer"><Link to={"/"}>Home</Link></li>
            <li className="mb-2 hover:text-green-400 cursor-pointer"><Link to={"/gardening-tips"}>Gardening Tips</Link></li>
            <li className="mb-2 hover:text-green-400 cursor-pointer"><Link to={"/resources"}>Resources</Link></li>
            <li className="mb-2 hover:text-green-400 cursor-pointer">Events</li>
            <li className="mb-2 hover:text-green-400 cursor-pointer"><Link to={"/profile"}>Profile</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:support@gardeninghub.com" className="underline hover:text-green-400">arif@gardeninghub.com</a></p>
          <p>Phone: <a href="tel:+880123456789" className="underline hover:text-green-400">+67649165</a></p>
          <p className="mt-4 text-green-300 italic">Follow us on social media!</p>
          <div className="flex space-x-6 mt-2 text-3xl">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-green-400">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 mt-8 pt-4 text-center text-green-300 text-sm">
        &copy; {new Date().getFullYear()} Gardening Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

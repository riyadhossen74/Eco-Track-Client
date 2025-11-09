import React from 'react';
import { FaFacebookF, FaInstagram,  FaLeaf } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
       <footer className="bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white mt-10 py-5 pt-10 px-6">
      <div className=" mx-auto grid justify-between px-5 md:px-30 grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              className="md:w-[50px] w-8 ml-1.5"
              src="/Eco_track.png"
              alt="Eco_Track"
            />
            <h2 className="text-2xl font-bold tracking-wide">Eco-Track</h2>
          </div>
          <p className="text-sm opacity-90 leading-relaxed">
            Track your eco-journey, reduce waste, join challenges, and build a greener future. 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-300 transition">Challenges</a></li>
            <li><a href="#" className="hover:text-green-300 transition">Dashboard</a></li>
            <li><a href="#" className="hover:text-green-300 transition">About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-300 transition">Blog</a></li>
            <li><a href="#" className="hover:text-green-300 transition">Tips & Guides</a></li>
            <li><a href="#" className="hover:text-green-300 transition">Community</a></li>
            <li><a href="#" className="hover:text-green-300 transition">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm opacity-90 mb-4">
            Get eco-friendly tips and challenge updates every week.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-b-emerald-800 rounded-l-full text-gray-800 focus:outline-none"
            />
            <button className="bg-green-300 hover:bg-green-400 text-green-900 px-4 rounded-r-full font-semibold transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-green-300 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm opacity-90">&copy; {new Date().getFullYear()} Eco-Track. All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
            <FaInstagram />
          </a>
          <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
           <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
    );
};

export default Footer;
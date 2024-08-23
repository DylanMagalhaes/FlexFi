import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 w-full">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 w-full">

        {/* FlexFi Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h5 className="text-white font-semibold">FlexFi</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <h5 className="text-white font-semibold">Resources</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">API Reference</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-4">
          <Image src="/logo/flexIcon.webp" alt="FlexFi Logo" width={64} height={64} />
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col space-y-4 text-center md:text-right">
          <h5 className="text-white font-semibold">Follow Us</h5>
          <p className="text-gray-400">Stay connected with FlexFi for the latest updates and news.</p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-8 border-t border-gray-700 pt-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 FlexFi. All rights reserved</p>
          <div className="space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:underline">Contact</a>
            <a href="#" className="text-sm text-gray-400 hover:underline">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
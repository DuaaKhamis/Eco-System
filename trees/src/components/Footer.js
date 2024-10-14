"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Youtube, href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Events", href: "/event" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-white text-gray-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] mt-2">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              GreenHope
            </h3>
            <p className="mb-4">
              Together we plant a greener future for generations to come.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-green-700">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.slice(0, 3).map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:text-green-500 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
              {quickLinks.slice(3).map((item, index) => (
                <Link
                  key={index + 3}
                  href={item.href}
                  className="hover:text-green-500 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-green-700">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-green-600 hover:text-green-800 transition duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; 2024 GreenHope. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

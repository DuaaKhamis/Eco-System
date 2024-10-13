// "use client";

// import React from "react";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const Footer = () => {
//   const socialIcons = [
//     { Icon: Facebook, href: "#" },
//     { Icon: Twitter, href: "#" },
//     { Icon: Instagram, href: "#" },
//     { Icon: Youtube, href: "#" },
//   ];

//   return (
//     <footer className="bg-white text-gray-600 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] mt-2">
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-2xl font-bold text-green-800 mb-4">
//               GreenHope
//             </h3>
//             <p className="mb-4">
//               Together we plant a greener future for generations to come.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <h4 className="text-lg font-semibold mb-4 text-green-700">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               {["Home", "Shop", "Event", "About Us", "Contact Us"].map(
//                 (item, index) => (
//                   <li key={index}>
//                     <a
//                       href="#"
//                       className="hover:text-green-500 transition duration-300"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 )
//               )}
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h4 className="text-lg font-semibold mb-4 text-green-700">
//               Contact Us
//             </h4>
//             <div className="space-y-2">
//               <p className="flex items-center">
//                 <Mail size={18} className="mr-2 text-green-600" />
//                 info@greenhope.org
//               </p>
//               <p className="flex items-center">
//                 <Phone size={18} className="mr-2 text-green-600" />
//                 +1 234 567 8900
//               </p>
//               <p className="flex items-center">
//                 <MapPin size={18} className="mr-2 text-green-600" />
//                 123 Green Street, Earth City
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <h4 className="text-lg font-semibold mb-4 text-green-700">
//               Follow Us
//             </h4>
//             <div className="flex space-x-4">
//               {socialIcons.map(({ Icon, href }, index) => (
//                 <motion.a
//                   key={index}
//                   href={href}
//                   className="text-green-600 hover:text-green-800 transition duration-300"
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <Icon size={24} />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           className="mt-8 pt-8 border-t border-gray-200 text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <p>&copy; 2024 GreenHope. All rights reserved.</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





'use client'
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Youtube, href: "#", label: "Youtube" },
  ];

  const quickLinks = ["Home", "Shop", "Events", "About Us", "Contact Us"];

  return (
    <footer className="bg-gradient-to-b from-white to-green-50 text-gray-600 shadow-lg mt-12">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold text-green-800">GreenHope</h3>
            </div>
            <p className="text-gray-600 max-w-xs">
              Together we plant a greener future for generations to come. Join us in our mission to create a sustainable world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-green-700">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-green-500 transition duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-green-700">Contact Us</h4>
            <div className="space-y-4">
              <p className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-600" />
                <span>info@greenhope.org</span>
              </p>
              <p className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span>+1 234 567 8900</span>
              </p>
              <p className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>123 Green Street, Earth City</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-6 text-green-700">Follow Us</h4>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  aria-label={label}
                  className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-200 hover:text-green-800 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-green-100 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} GreenHope. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


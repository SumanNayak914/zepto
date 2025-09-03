
// import React, { useState, useRef } from 'react';
// import { Search, User, ShoppingCart, ChevronDown, MapPin } from 'lucide-react';
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation, useNavigate } from 'react-router-dom';

// // Import your existing cart components
// import CartHeader from "../components/cart/CartHeader";
// import CartItem from "../components/cart/CartItem";
// import CartRecommendations from "../components/cart/CartRecommendations";
// import CartSavings from "../components/cart/CartSavings";
// import CartSummary from "../components/cart/CartSummary";

// const CartDrawer = ({ isOpen, onClose }) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop with blur */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
//           />
          
//           {/* Cart Drawer - Your existing cart page */}
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'tween', duration: 0.3 }}
//             className="fixed top-0 right-0 w-full md:w-96 h-full bg-gray-100 z-50 shadow-xl overflow-y-auto"
//           >
//             {/* Close button overlay */}
//             <button 
//               onClick={onClose}
//               className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
//             >
//               <ChevronDown className="w-5 h-5 rotate-90" />
//             </button>

//             {/* Your existing cart page content */}
//             <div className="min-h-screen">
//               <CartHeader />
//               <CartItem />
//               <CartSavings />
//               <CartRecommendations />
//               <CartSummary />
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// const Header = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeZepto, setActiveZepto] = useState('zepto');
//   const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(0); // Track selected category by index
  
//   // Refs for scroll containers
//   const mobileScrollRef = useRef(null);
//   const desktopScrollRef = useRef(null);
  
//   const location = useLocation();

//   const searchPlaceholders = [
//     "amul butter",
//     "maggi noodles", 
//     "coca cola",
//     "dairy milk",
//     "basmati rice",
//     "sunflower oil",
//     "colgate paste",
//     "tata salt"
//   ];

//   // index auto-change
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [searchPlaceholders.length]);

//   const categories = [
//     { 
//       name: 'All', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/96bb6a90-8919-4fee-8094-2a18409e6573.png",
//       purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png",
//       route: '/'
//     },
//     { 
//       name: 'Cafe', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png",
//       purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/ff372990-cc4b-4673-b857-72acc6df492d.png",
//       route: '/cafe'
//     },
//     { 
//       name: 'Home', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png",
//       purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/1f04fdba-e5bd-4a5e-a1b2-0b0ee4b925da.png",
//       route: '/home'
//     },
//     { 
//       name: 'Toys', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png",
//       purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/18785bac-3538-46b9-9177-d02fa47ea27d.png",
//       route: '/toy'
//     },
//     { 
//       name: 'Fresh', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png",
//       purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/2fcecf63-fa18-4380-8388-1ba33ceed983.png",
//       route: '/fresh'
//     },
//     { 
//       name: 'Electronics', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png",
//       purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/6cf6f28a-8583-4da3-b5af-8c486f85c2df.png",
//       route: '/electronics'
//     },
//     { 
//       name: 'Mobiles', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png",
//       purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/604fdf4e-50b0-48a3-8bd0-83b18f558235.png",
//       route: '/mobiles'
//     },
//     { 
//       name: 'Beauty', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png",
//       purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/fa6f0806-d6c5-4892-911b-6e08a736aea5.png",
//       route: '/beauty'
//     },
//     { 
//       name: 'Fashion', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png",
//       purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/a7a956c8-606d-4205-8684-7986b5e5ecb2.png",
//       route: '/fashion'
//     }
//   ];

//   const mobileCategories = [
//     { 
//       name: 'All', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png",
//       blackImage: "https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png",
//       headerBg: 'bg-blue-100',
//       textColor: 'text-blue-800',
//       route: '/'
//     },
//     { 
//       name: 'Cafe', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png",
//       blackImage: "https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png",
//       headerBg: 'bg-orange-100',
//       textColor: 'text-orange-800',
//       route: '/cafe'
//     },
//     { 
//       name: 'Home', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png",
//       blackImage: "https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png",
//       headerBg: 'bg-green-100',
//       textColor: 'text-green-800',
//       route: '/home'
//     },
//     { 
//       name: 'Toys', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png",
//       blackImage: "https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png",
//       headerBg: 'bg-pink-100',
//       textColor: 'text-pink-800',
//       route: '/toy'
//     },
//     { 
//       name: 'Fresh', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png",
//       blackImage: "https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png",
//       headerBg: 'bg-emerald-100',
//       textColor: 'text-emerald-800',
//       route: '/fresh'
//     },
//     { 
//       name: 'Electronics', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png",
//       blackImage: "https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png",
//       headerBg: 'bg-indigo-100',
//       textColor: 'text-indigo-800',
//       route: '/electronics'
//     },
//     { 
//       name: 'Mobiles', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png",
//       blackImage: "https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png",
//       headerBg: 'bg-cyan-100',
//       textColor: 'text-cyan-800',
//       route: '/mobiles'
//     },
//     { 
//       name: 'Beauty', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png",
//       blackImage: "https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png",
//       headerBg: 'bg-rose-100',
//       textColor: 'text-rose-800',
//       route: '/beauty'
//     },
//     { 
//       name: 'Fashion', 
//       grayImage: "https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png",
//       blackImage: "https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png",
//       headerBg: 'bg-white',
//       textColor: 'text-black',
//       route: '/fashion'
//     }
//   ];

//   // Function to scroll category to center
//   const scrollCategoryToCenter = (categoryIndex, isMobile = false) => {
//     const scrollRef = isMobile ? mobileScrollRef : desktopScrollRef;
//     if (!scrollRef.current) return;

//     const container = scrollRef.current;
//     const categoryElement = container.children[categoryIndex];
    
//     if (categoryElement) {
//       const containerWidth = container.clientWidth;
//       const categoryLeft = categoryElement.offsetLeft;
//       const categoryWidth = categoryElement.offsetWidth;
      
//       // Calculate scroll position to center the category
//       const scrollLeft = categoryLeft - (containerWidth / 2) + (categoryWidth / 2);
      
//       // Smooth scroll to calculated position
//       container.scrollTo({
//         left: scrollLeft,
//         behavior: 'smooth'
//       });
//     }
//   };

//   // Handle category navigation with auto-scroll
//   const handleCategoryClick = (categoryIndex, route) => {
//     setSelectedCategory(categoryIndex);
//     navigate(route);
    
//     // Auto-scroll to center the selected category
//     // Use setTimeout to ensure DOM is updated
//     setTimeout(() => {
//       // Check if mobile view
//       const isMobile = window.innerWidth < 768;
//       scrollCategoryToCenter(categoryIndex, isMobile);
//     }, 100);
//   };

//   // Get current mobile category for header background
//   const currentMobileCategory = mobileCategories[selectedCategory];

//   return (
//     <>
//       {/* Main header container with responsive backgrounds */}
//       <div className={`${currentMobileCategory ? currentMobileCategory.headerBg : 'bg-[#EEBF65]'} md:bg-gradient-to-b md:from-purple-100 md:to-white shadow-sm transition-colors duration-300`}>
        
//         {/* Desktop and Tablet Header */}
//         <div className="hidden md:block">
//           <div className="px-4">
           
//             <div className="flex items-center justify-between py-3  ">
              
//               <div className="flex items-center space-x-3 pl-12 ">
//                 <div 
//                   className="text-white font-semibold text-2xl bg-purple-600 rounded-full py-2 px-5 text-center cursor-pointer"
//                   onClick={() => navigate('/')}
//                 >
//                   zepto
//                 </div>
//                 <div className="bg-gray-100 text-green-600 px-3 py-1.5 rounded-full text-xs font-medium">
//                   Super Saver
//                 </div>
//               </div>

//               {/* Location Selector */}
//               <div className="flex items-center space-x-2 cursor-pointer">
//                 <MapPin className="w-5 h-5 text-black" />
//                 <span className="text-gray-700 font-medium">Location</span>
//                 <ChevronDown className="w-4 h-4 text-black" />
//               </div>

//               {/* Search Bar */}
//               <div className="flex-1 max-w-2xl mx-4">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                   />
                  
//                   {searchQuery === '' && (
//                     <div className="absolute left-10 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
//                       <div className="flex items-center">
//                         <span className="text-sm">Search for </span>
//                         <div className="relative overflow-hidden h-5 mx-1 w-28">
//                           <AnimatePresence mode="wait">
//                             <motion.span
//                               key={currentPlaceholderIndex}
//                               initial={{ y: 20, opacity: 0 }}
//                               animate={{ y: 0, opacity: 1 }}
//                               exit={{ y: -20, opacity: 0 }}
//                               transition={{ duration: 0.6 }}
//                               className="absolute inset-0 flex items-center font-medium text-gray-500 whitespace-nowrap text-sm"
//                             >
//                               "{searchPlaceholders[currentPlaceholderIndex]}"
//                             </motion.span>
//                           </AnimatePresence>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* User Actions */}
//               <div className="flex items-center space-x-6 pr-6">
//                 <div className="flex items-center space-x-1 cursor-pointer">
//                   <User className="w-5 h-5 text-black" />
//                   <span className="text-gray-700 font-medium">Login</span>
//                 </div>
//                 <div 
//                   className="flex items-center space-x-1 cursor-pointer"
//                   onClick={() => setIsCartOpen(true)}
//                 >
//                   <ShoppingCart className="w-5 h-5 text-black" />
//                   <span className="text-gray-700 font-medium">Cart</span>
//                 </div>
//               </div>
//             </div>

//             {/* Desktop Categories */}
//             <div className="max-w-7xl mx-auto px-4 border-t border-gray-100 py-4">
//               <div 
//                 ref={desktopScrollRef}
//                 className="flex items-center space-x-8 overflow-x-auto whitespace-nowrap scrollbar-hide"
//               >
//                 {categories.map((category, index) => {
//                   const isActive = selectedCategory === index;
//                   return (
//                     <div
//                       key={index}
//                       onClick={() => handleCategoryClick(index, category.route)}
//                       className={`relative flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-lg transition-all duration-300 flex-shrink-0 ${
//                         isActive 
//                           ? 'text-purple-600 bg-purple-50' 
//                           : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
//                       }`}
//                     >
//                       <img 
//                         src={isActive ? category.purpleImage : category.grayImage} 
//                         alt={category.name} 
//                         className="w-5 h-5 transition-all duration-300"
//                       />
//                       <span className="font-medium">{category.name}</span>
                      
//                       {/* Purple underline */}
//                       {isActive && (
//                         <motion.div
//                           layoutId="underline"
//                           className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
//                           initial={false}
//                           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                         />
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Header */}
//         <div className="md:hidden">
//           <div className="px-4 py-3">
//             {/* Zepto Buttons - Centered and Wider */}
//             <div className="flex justify-center mb-4">
//               <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 w-72 max-w-full">
//                 <div className="flex">
//                   <button
//                     onClick={() => setActiveZepto('zepto')}
//                     className={`flex-1 py-2.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 ${
//                       activeZepto === 'zepto'
//                         ? 'bg-purple-600 text-white shadow-lg'
//                         : `text-gray-600 hover:text-purple-600 ${currentMobileCategory?.textColor}`
//                     }`}
//                   >
//                     zepto
//                   </button>
//                   <button
//                     onClick={() => setActiveZepto('super-saver')}
//                     className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
//                       activeZepto === 'super-saver'
//                         ? 'bg-green-600 text-white shadow-lg'
//                         : 'text-green-600 hover:text-green-700'
//                     }`}
//                   >
//                     zepto Super Saver
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Location */}
//             <div className="flex items-center space-x-2 mb-3 cursor-pointer">
//               <MapPin className={`w-4 h-4 ${currentMobileCategory?.textColor || 'text-black'}`} />
//               <span className={`text-sm font-medium ${currentMobileCategory?.textColor || 'text-gray-700'}`}>Select Location</span>
//               <ChevronDown className={`w-3 h-3 ${currentMobileCategory?.textColor || 'text-black'}`} />
//             </div>

//             {/* Mobile Search Bar */}
//             <div className="mb-4">
//               <div className="relative bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-9 pr-4 py-2.5 bg-transparent border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
//                 />
                
//                 {!searchQuery && (
//                   <div className="absolute left-9 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                     <div className="flex items-center text-sm text-gray-400">
//                       <span>Search for </span>
//                       <div className="relative overflow-hidden h-5 mx-1 w-24">
//                         <AnimatePresence mode="wait">
//                           <motion.span
//                             key={currentPlaceholderIndex}
//                             initial={{ y: 20, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             exit={{ y: -20, opacity: 0 }}
//                             transition={{ duration: 0.6 }}
//                             className="absolute inset-0 flex items-center font-medium text-gray-500 whitespace-nowrap"
//                           >
//                             "{searchPlaceholders[currentPlaceholderIndex]}"
//                           </motion.span>
//                         </AnimatePresence>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Mobile Categories with Auto-scroll */}
//             <div 
//               ref={mobileScrollRef}
//               className="flex items-center space-x-6 overflow-x-auto whitespace-nowrap scrollbar-hide"
//             >
//               {mobileCategories.map((category, index) => {
//                 const isActive = selectedCategory === index;
//                 return (
//                   <div
//                     key={index}
//                     onClick={() => handleCategoryClick(index, category.route)}
//                     className="flex items-center space-x-2 cursor-pointer min-w-0 flex-shrink-0 py-2 px-2 transition-all duration-300"
//                   >
//                     <img 
//                       src={isActive ? category.blackImage : category.grayImage} 
//                       alt={category.name} 
//                       className="w-5 h-5 transition-all duration-300"
//                       style={{ filter: isActive ? 'brightness(0)' : 'none' }}
//                     />
//                     <span className={`text-sm font-medium transition-colors duration-300 ${
//                       isActive ? 'text-black' : 'text-gray-500'
//                     }`}>
//                       {category.name}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Mobile Cart Button - Fixed bottom right */}
//             {location.pathname !== "/" && (
//               <button
//                 onClick={() => setIsCartOpen(true)}
//                 className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-30 md:hidden"
//               >
//                 <ShoppingCart className="w-6 h-6" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Cart Drawer with your existing components */}
//       <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//     </>
//   );
// };

// export default Header;
import React, { useState, useRef } from 'react';
import { Search, User, ShoppingCart, ChevronDown, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';

// Import your existing cart components
import CartHeader from "../components/cart/CartHeader";
import CartItem from "../components/cart/CartItem";
import CartRecommendations from "../components/cart/CartRecommendations";
import CartSavings from "../components/cart/CartSavings";
import CartSummary from "../components/cart/CartSummary";

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
          
          {/* Cart Drawer - Your existing cart page */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-full md:w-96 h-full bg-gray-100 z-50 shadow-xl overflow-y-auto"
          >
            {/* Close button overlay */}
            <button 
              onClick={onClose}
              className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
            >
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>

            {/* Your existing cart page content */}
            <div className="min-h-screen">
              <CartHeader />
              <CartItem />
              <CartSavings />
              <CartRecommendations />
              <CartSummary />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeZepto, setActiveZepto] = useState('zepto');
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0); // Track selected category by index
  
  // Refs for scroll containers
  const mobileScrollRef = useRef(null);
  const desktopScrollRef = useRef(null);
  
  const location = useLocation();

  const searchPlaceholders = [
    "amul butter",
    "maggi noodles", 
    "coca cola",
    "dairy milk",
    "basmati rice",
    "sunflower oil",
    "colgate paste",
    "tata salt"
  ];

  // index auto-change
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prev) => (prev + 1) % searchPlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [searchPlaceholders.length]);

  const categories = [
    { 
      name: 'All', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/96bb6a90-8919-4fee-8094-2a18409e6573.png",
      purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png",
      route: '/'
    },
    { 
      name: 'Cafe', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png",
      purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/ff372990-cc4b-4673-b857-72acc6df492d.png",
      route: '/cafe'
    },
    { 
      name: 'Home', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png",
      purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/1f04fdba-e5bd-4a5e-a1b2-0b0ee4b925da.png",
      route: '/home'
    },
    { 
      name: 'Toys', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png",
      purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/18785bac-3538-46b9-9177-d02fa47ea27d.png",
      route: '/toy'
    },
    { 
      name: 'Fresh', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png",
      purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/2fcecf63-fa18-4380-8388-1ba33ceed983.png",
      route: '/fresh'
    },
    { 
      name: 'Electronics', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png",
      purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/6cf6f28a-8583-4da3-b5af-8c486f85c2df.png",
      route: '/electronics'
    },
    { 
      name: 'Mobiles', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png",
      purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/604fdf4e-50b0-48a3-8bd0-83b18f558235.png",
      route: '/mobiles'
    },
    { 
      name: 'Beauty', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png",
      purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/fa6f0806-d6c5-4892-911b-6e08a736aea5.png",
      route: '/beauty'
    },
    { 
      name: 'Fashion', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png",
      purpleImage: "https://cdn.zeptonow.com/production/inventory/banner/a7a956c8-606d-4205-8684-7986b5e5ecb2.png",
      route: '/fashion'
    }
  ];

  const mobileCategories = [
    { 
      name: 'All', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png",
      blackImage: "https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png",
      headerBg: 'bg-blue-100',
      textColor: 'text-blue-800',
      route: '/'
    },
    { 
      name: 'Cafe', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png",
      blackImage: "https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png",
      headerBg: 'bg-orange-100',
      textColor: 'text-orange-800',
      route: '/cafe'
    },
    { 
      name: 'Home', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png",
      blackImage: "https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png",
      headerBg: 'bg-green-100',
      textColor: 'text-green-800',
      route: '/home'
    },
    { 
      name: 'Toys', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png",
      blackImage: "https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png",
      headerBg: 'bg-pink-100',
      textColor: 'text-pink-800',
      route: '/toy'
    },
    { 
      name: 'Fresh', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png",
      blackImage: "https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png",
      headerBg: 'bg-emerald-100',
      textColor: 'text-emerald-800',
      route: '/fresh'
    },
    { 
      name: 'Electronics', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png",
      blackImage: "https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png",
      headerBg: 'bg-indigo-100',
      textColor: 'text-indigo-800',
      route: '/electronics'
    },
    { 
      name: 'Mobiles', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png",
      blackImage: "https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png",
      headerBg: 'bg-cyan-100',
      textColor: 'text-cyan-800',
      route: '/mobiles'
    },
    { 
      name: 'Beauty', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png",
      blackImage: "https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png",
      headerBg: 'bg-rose-100',
      textColor: 'text-rose-800',
      route: '/beauty'
    },
    { 
      name: 'Fashion', 
      grayImage: "https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png",
      blackImage: "https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png",
      headerBg: 'bg-white',
      textColor: 'text-black',
      route: '/fashion'
    }
  ];

  // Function to scroll category to center
  const scrollCategoryToCenter = (categoryIndex, isMobile = false) => {
    const scrollRef = isMobile ? mobileScrollRef : desktopScrollRef;
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const categoryElement = container.children[categoryIndex];
    
    if (categoryElement) {
      const containerWidth = container.clientWidth;
      const categoryLeft = categoryElement.offsetLeft;
      const categoryWidth = categoryElement.offsetWidth;
      
      // Calculate scroll position to center the category
      const scrollLeft = categoryLeft - (containerWidth / 2) + (categoryWidth / 2);
      
      // Smooth scroll to calculated position
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Handle category navigation with auto-scroll
  const handleCategoryClick = (categoryIndex, route) => {
    setSelectedCategory(categoryIndex);
    navigate(route);
    
    // Auto-scroll to center the selected category
    // Use setTimeout to ensure DOM is updated
    setTimeout(() => {
      // Check if mobile view
      const isMobile = window.innerWidth < 768;
      scrollCategoryToCenter(categoryIndex, isMobile);
    }, 100);
  };

  // Get current mobile category for header background
  const currentMobileCategory = mobileCategories[selectedCategory];

  return (
    <>
      <style jsx>{`
        /* Hide scrollbar for webkit browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Desktop Header - Sticky */}
      <div className="hidden md:block sticky top-0 z-50 bg-gradient-to-b from-purple-100 to-white shadow-sm">
        <div className="px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3 pl-12">
              <div 
                className="text-white font-semibold text-2xl bg-purple-600 rounded-full py-2 px-5 text-center cursor-pointer"
                onClick={() => navigate('/')}
              >
                zepto
              </div>
              <div className="bg-gray-100 text-green-600 px-3 py-1.5 rounded-full text-xs font-medium">
                Super Saver
              </div>
            </div>

            {/* Location Selector */}
            <div className="flex items-center space-x-2 cursor-pointer">
              <MapPin className="w-5 h-5 text-black" />
              <span className="text-gray-700 font-medium">Location</span>
              <ChevronDown className="w-4 h-4 text-black" />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                
                {searchQuery === '' && (
                  <div className="absolute left-10 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                    <div className="flex items-center">
                      <span className="text-sm">Search for </span>
                      <div className="relative overflow-hidden h-5 mx-1 w-28">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={currentPlaceholderIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 flex items-center font-medium text-gray-500 whitespace-nowrap text-sm"
                          >
                            "{searchPlaceholders[currentPlaceholderIndex]}"
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6 pr-6">
              <div className="flex items-center space-x-1 cursor-pointer">
                <User className="w-5 h-5 text-black" />
                <span className="text-gray-700 font-medium">Login</span>
              </div>
              <div 
                className="flex items-center space-x-1 cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5 text-black" />
                <span className="text-gray-700 font-medium">Cart</span>
              </div>
            </div>
          </div>

          {/* Desktop Categories */}
          <div className="max-w-7xl mx-auto px-4 border-t border-gray-100 py-4">
            <div 
              ref={desktopScrollRef}
              className="flex items-center space-x-8 overflow-x-auto whitespace-nowrap scrollbar-hide"
            >
              {categories.map((category, index) => {
                const isActive = selectedCategory === index;
                return (
                  <div
                    key={index}
                    onClick={() => handleCategoryClick(index, category.route)}
                    className={`relative flex items-center space-x-2 cursor-pointer py-2 px-3 rounded-lg transition-all duration-300 flex-shrink-0 ${
                      isActive 
                        ? 'text-purple-600 bg-purple-50' 
                        : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    <img 
                      src={isActive ? category.purpleImage : category.grayImage} 
                      alt={category.name} 
                      className="w-5 h-5 transition-all duration-300"
                    />
                    <span className="font-medium">{category.name}</span>
                    
                    {/* Purple underline */}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        {/* Top section - This will scroll away */}
        <div className={`${currentMobileCategory ? currentMobileCategory.headerBg : 'bg-[#EEBF65]'} px-4 py-4 transition-colors duration-300`}>
          {/* Zepto Buttons - Centered and Wider */}
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 w-72 max-w-full">
              <div className="flex">
                <button
                  onClick={() => setActiveZepto('zepto')}
                  className={`flex-1 py-2.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeZepto === 'zepto'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : `text-gray-600 hover:text-purple-600 ${currentMobileCategory?.textColor}`
                  }`}
                >
                  zepto
                </button>
                <button
                  onClick={() => setActiveZepto('super-saver')}
                  className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    activeZepto === 'super-saver'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-green-600 hover:text-green-700'
                  }`}
                >
                  zepto Super Saver
                </button>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <MapPin className={`w-4 h-4 ${currentMobileCategory?.textColor || 'text-black'}`} />
            <span className={`text-sm font-medium ${currentMobileCategory?.textColor || 'text-gray-700'}`}>Select Location</span>
            <ChevronDown className={`w-3 h-3 ${currentMobileCategory?.textColor || 'text-black'}`} />
          </div>
        </div>
      </div>

      {/* Sticky Search Bar and Categories - Only for Mobile */}
      <div className={`md:hidden sticky top-0 z-50 ${currentMobileCategory ? currentMobileCategory.headerBg : 'bg-[#EEBF65]'} px-4 py-3 shadow-lg border-t border-white/30 transition-colors duration-300`}>
        {/* Mobile Search Bar */}
        <div className="mb-4">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-transparent border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
            
            {!searchQuery && (
              <div className="absolute left-9 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <div className="flex items-center text-sm text-gray-400">
                  <span>Search for </span>
                  <div className="relative overflow-hidden h-5 mx-1 w-24">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPlaceholderIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 flex items-center font-medium text-gray-500 whitespace-nowrap"
                      >
                        "{searchPlaceholders[currentPlaceholderIndex]}"
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Categories with Auto-scroll and Underline */}
        <div 
          ref={mobileScrollRef}
          className="flex items-center space-x-6 overflow-x-auto whitespace-nowrap scrollbar-hide"
        >
          {mobileCategories.map((category, index) => {
            const isActive = selectedCategory === index;
            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(index, category.route)}
                className="relative flex items-center space-x-2 cursor-pointer min-w-0 flex-shrink-0 py-2 px-2 transition-all duration-300"
              >
                <img 
                  src={isActive ? category.blackImage : category.grayImage} 
                  alt={category.name} 
                  className="w-5 h-5 transition-all duration-300"
                  style={{ filter: isActive ? 'brightness(0)' : 'none' }}
                />
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-gray-500'
                }`}>
                  {category.name}
                </span>

                {/* Mobile underline */}
                {isActive && (
                  <motion.div
                    layoutId="mobile-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
        
      {/* Mobile Cart Button - Fixed bottom right */}
      {location.pathname !== "/" && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="md:hidden fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-30"
        >
          <ShoppingCart className="w-6 h-6" />
        </button>
      )}

      {/* Cart Drawer with your existing components */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Share2, Heart, Star, Truck, RotateCcw } from 'lucide-react';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://cdn.zeptonow.com/production/tr:w-403,ar-980-980,pr-true,f-auto,q-80/cms/product_variant/2fef1f3e-3a76-42ea-84e6-9751280036e5.jpeg',
    'https://via.placeholder.com/400x400/2a2a2a/ffffff?text=Side+View',
    'https://via.placeholder.com/400x400/3a3a3a/ffffff?text=Back+View',
    'https://via.placeholder.com/400x400/4a4a4a/ffffff?text=Ports+View',
    'https://via.placeholder.com/400x400/5a5a5a/ffffff?text=Cable+View',
    'https://via.placeholder.com/400x400/6a6a6a/ffffff?text=Size+Compare'
  ];

  const highlights = [
    { label: 'Brand', value: 'URBN' },
    { label: 'Product Type', value: 'Power Bank' },
    { label: 'Model Name', value: 'Nano Link' },
    { label: 'No Of Ports', value: '3' },
    { label: 'Colour Name', value: 'Black' },
    { label: 'Battery Capacity', value: '10000 mAh' },
    { label: 'Wattage', value: '22.5 W' },
    { label: 'Recharge Time', value: '2.5 hours' },
    { label: 'Material Type', value: 'Plastic' },
    { label: 'Connectivity', value: 'USB, USB Type C, and USB Type A' },
    { label: 'Key Features', value: '22.5W fast charging, compact and portable, built-in USB-C cable, universal compatibility' },
    { label: 'Item Included', value: '1 x Main Unit, 1 x USB Cable, 1 x User Manual' }
  ];

  const coupons = [
    { icon: '💳', text: 'Get ₹749 with coupon offers', bank: 'HDFC FIRST SWYPE Credit Card' },
    { icon: '💳', text: 'Get 5% discount with AU Bank Credit Card', bank: 'AU Bank' },
    { icon: '💰', text: 'Get Upto ₹50 Cashback on using Amazon Pay Balance', bank: 'Amazon Pay' },
    { icon: '💸', text: 'Assured ₹10 - ₹300 Cashback on using Paytm UPI', bank: 'Paytm UPI' },
    { icon: '🏦', text: 'Get up to ₹300 cashback using CRED', bank: 'CRED' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-6">
        
        {/* Mobile First: Single Column Layout */}
        <div className="block lg:hidden">
          {/* Mobile Image Section */}
          <div className="bg-white rounded-lg p-3 mb-4">
            {/* Main image first */}
            <div className="relative mb-4">
              <img 
                src={images[selectedImage]} 
                alt="Product"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md">
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            {/* Horizontal scrolling thumbnails BELOW main image */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg border-2 overflow-hidden ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Product Details */}
          <div className="bg-white rounded-lg p-3">
            {/* Product Title and Rating */}
            <div className="mb-4">
              <span className="text-blue-600 font-medium text-sm">URBN</span>
              <h1 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                Urbn 10000 mAh Nano Link - Black
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
                  <span className="font-semibold">4.3</span>
                  <Star className="w-3 h-3 ml-1 fill-current" />
                </div>
                <span className="text-gray-500 text-sm">(302)</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl font-bold text-gray-900">₹799</span>
                <span className="text-green-600 font-semibold text-sm">27% OFF</span>
              </div>
              <div className="text-gray-500 text-sm">
                MRP: <span className="line-through">₹1,099</span> (incl. of all taxes)
              </div>
              <div className="mt-2">
                <span className="text-green-600 font-semibold text-sm">Get it for ₹799</span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4">
              Add To Cart
            </button>

            {/* Delivery Info */}
            <div className="mb-4 grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <RotateCcw className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-xs">Same Day</p>
                  <p className="text-xs text-gray-500">Exchange</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <Truck className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-xs">Fast Delivery</p>
                  <p className="text-xs text-gray-500">Delivery</p>
                </div>
              </div>
            </div>

            {/* Coupons & Offers */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-xs mr-2">OFFERS</span>
                Coupons & Offers
              </h3>
              
              <div className="space-y-2">
                {coupons.slice(0, 2).map((coupon, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm">{coupon.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs text-gray-700">{coupon.text}</p>
                      <p className="text-xs text-gray-500">{coupon.bank}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-blue-600 text-xs mt-2 hover:underline">
                View all offers
              </button>
            </div>

            {/* Key Features */}
            <div className="mb-4">
              <h3 className="font-bold text-base text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>22.5W Super Fast Charging</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>10000 mAh High Capacity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Built-in USB-C Cable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Ultra Compact Design</span>
                </li>
              </ul>
            </div>

            {/* Highlights */}
            <div className="mb-4">
              <h3 className="font-bold text-base text-gray-900 mb-3">Product Details</h3>
              <div className="space-y-2">
                {highlights.slice(0, 6).map((highlight, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium text-sm">{highlight.label}</span>
                    <span className="text-gray-900 font-semibold text-right text-sm">
                      {highlight.value}
                    </span>
                  </div>
                ))}
              </div>
              <button className="text-blue-600 text-xs mt-2 hover:underline">
                View all specifications
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Two Column */}
        <div className="hidden lg:flex gap-8">
          {/* Left Side - Image Section */}
          <div className="w-2/5 sticky top-6 self-start">
            <div className="bg-white rounded-lg p-6">
              {/* Product Images */}
              <div className="mb-6">
                <div className="flex gap-4">
                  {/* Vertical Thumbnails */}
                  <div className="flex flex-col space-y-2">
                    {images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden ${
                          selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  
                  {/* Main Product Image */}
                  <div className="flex-1 relative">
                    <img 
                      src={images[selectedImage]} 
                      alt="Product"
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Add To Cart
              </button>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="w-3/5">
            <div className="bg-white rounded-lg p-6">
              {/* Product Title and Rating */}
              <div className="mb-4">
                <span className="text-blue-600 font-medium">URBN</span>
                <h1 className="text-2xl font-bold text-gray-900 mt-1 mb-2">
                  Urbn 10000 mAh Nano Link - Black
                </h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
                    <span className="font-semibold">4.3</span>
                    <Star className="w-3 h-3 ml-1 fill-current" />
                  </div>
                  <span className="text-gray-500 text-sm">(302)</span>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl font-bold text-gray-900">₹799</span>
                  <span className="text-green-600 font-semibold">27% OFF</span>
                </div>
                <div className="text-gray-500">
                  MRP: <span className="line-through">₹1,099</span> (incl. of all taxes)
                </div>
                <div className="mt-2">
                  <span className="text-green-600 font-semibold">Get it for ₹799</span>
                </div>
              </div>

              {/* Coupons & Offers */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs mr-2">OFFERS</span>
                  Coupons & Offers
                  <ChevronRight className="w-4 h-4 ml-2 text-gray-400" />
                </h3>
                
                <div className="space-y-2">
                  {coupons.map((coupon, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-lg">{coupon.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">{coupon.text}</p>
                        <p className="text-xs text-gray-500">{coupon.bank}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 mt-1" />
                    </div>
                  ))}
                </div>
                <button className="text-blue-600 text-sm mt-2 hover:underline">
                  View all coupons
                </button>
              </div>

              {/* Delivery Info */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <RotateCcw className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="font-semibold text-sm">Same Day</p>
                    <p className="text-xs text-gray-500">Exchange</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Truck className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="font-semibold text-sm">Fast Delivery</p>
                    <p className="text-xs text-gray-500">Delivery</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Highlights</h3>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">{highlight.label}</span>
                      <span className="text-gray-900 font-semibold text-right max-w-xs">
                        {highlight.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">About this item</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The URBN 10000 mAh Nano Link is a compact and powerful portable charger designed for modern lifestyles. With its sleek black finish and ultra-portable design, this power bank is perfect for keeping your devices charged throughout the day.
                  </p>
                  <p>
                    Featuring 22.5W fast charging capability, it can quickly charge your smartphones, tablets, and other USB-powered devices. The built-in USB-C cable eliminates the need to carry extra cables, making it incredibly convenient for travel and daily use.
                  </p>
                  <p>
                    With universal compatibility and multiple charging ports, you can charge multiple devices simultaneously. The compact nano design fits easily in your pocket or bag, making it the perfect companion for work, travel, or outdoor activities.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>22.5W Super Fast Charging</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>10000 mAh High Capacity Battery</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Built-in USB-C Cable</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Ultra Compact Nano Design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Universal Device Compatibility</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Multiple Safety Protections</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>LED Battery Indicator</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Premium Build Quality</span>
                  </li>
                </ul>
              </div>

              {/* Compatibility */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Device Compatibility</h3>
                <p className="text-gray-700 mb-3">
                  Compatible with all smartphones, tablets, earbuds, smartwatches, and USB-powered devices from:
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>• iPhone series</div>
                  <div>• Samsung Galaxy</div>
                  <div>• OnePlus devices</div>
                  <div>• Xiaomi/Redmi</div>
                  <div>• Realme devices</div>
                  <div>• OPPO/Vivo</div>
                  <div>• Google Pixel</div>
                  <div>• iPad series</div>
                  <div>• And many more...</div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Input:</span>
                    <span className="text-gray-900">5V/3A, 9V/2A (USB-C)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Output:</span>
                    <span className="text-gray-900">5V/3A, 9V/2.5A, 12V/1.87A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Output:</span>
                    <span className="text-gray-900">22.5W</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimensions:</span>
                    <span className="text-gray-900">90 x 63 x 25 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight:</span>
                    <span className="text-gray-900">220g (approx)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Warranty:</span>
                    <span className="text-gray-900">12 months</span>
                  </div>
                </div>
              </div>

              {/* What's in the Box */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">What's in the Box</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>1 x URBN 10000 mAh Nano Link Power Bank</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>1 x USB Charging Cable</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>1 x User Manual</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>1 x Warranty Card</span>
                  </li>
                </ul>
              </div>

              {/* Customer Reviews */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="font-semibold text-sm">Rajesh Kumar</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Excellent product! Very compact and charges my phone super fast. The built-in cable is very convenient. Highly recommended!"
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-100 pb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="font-semibold text-sm">Priya Singh</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Perfect size for travel. Fits easily in my purse and the charging speed is impressive. Great value for money!"
                    </p>
                  </div>

                  <div className="pb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[1,2,3,4].map(star => (
                          <Star key={star} className="w-4 h-4 fill-current" />
                        ))}
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                      <span className="font-semibold text-sm">Amit Sharma</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      "Good product overall. Charges devices quickly and the build quality feels premium. Would buy again."
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">How many times can it charge my phone?</h4>
                    <p className="text-sm text-gray-700">
                      With 10000 mAh capacity, it can charge most smartphones 2-3 times depending on your device's battery capacity.
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Is it compatible with iPhone?</h4>
                    <p className="text-sm text-gray-700">
                      Yes, it's fully compatible with all iPhone models. You can use the built-in USB-C cable with a Lightning adapter or use your own Lightning cable.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">How long does it take to fully charge the power bank?</h4>
                    <p className="text-sm text-gray-700">
                      With the provided cable and a 22.5W adapter, it takes approximately 2.5 hours to fully charge from 0% to 100%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
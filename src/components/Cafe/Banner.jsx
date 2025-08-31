import React from 'react'


const Banner = () => {
  return (
    <>
      {/* Desktop banner */}
      <div className="mt-6 max-w-7xl mx-auto hidden sm:block px-4">
        <div className="rounded-xl overflow-hidden border-gray-300 border">
          <img
            src="https://cdn.zeptonow.com/production/tr:w-640,ar-1441-417,pr-true,f-auto,q-80/inventory/banner/c08285d3-9270-4f19-a2fe-612d0d5c520f.png"
            alt="Desktop Banner"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* Mobile banner */}
      <div className="mt-6 mx-2  block sm:hidden">
        <div className="rounded-xl overflow-hidden border-gray-300 border">
          <img
            src="https://cdn.zeptonow.com/production/tr:w-640,ar-1441-417,pr-true,f-auto,q-80/inventory/banner/c08285d3-9270-4f19-a2fe-612d0d5c520f.png"
            alt="Mobile Banner"
            className="w-full h-30 object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default Banner

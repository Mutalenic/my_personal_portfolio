import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between item-center w-full h-full px-2 2xl:px-16">
            <Image src="/../public/assets/logo.png" alt="Logo" width="125" height="50" />
            </div>

    </div>
  )
}

export default Navbar
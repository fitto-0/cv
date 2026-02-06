"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const MyImage = ({className} : {className?: string}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const originalSrc = '/images/her2.png';
  const popupSrc = '/images/her1.png';
  
  return (
    <>
      <div 
        className={`overflow-hidden cursor-pointer transition-transform active:scale-95 duration-200 ${className}`}
        onClick={() => setIsOpen(true)}
        title="Click to view more"
      >
        <Image src={originalSrc} 
              alt="Profile Picture"
              width={693}
              height={693}
              className="w-full h-full object-cover"
              priority
              />        
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
            <Image 
              src={popupSrc}
              alt="Enlarged Profile"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default MyImage
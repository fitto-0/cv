import React from 'react'
import Image from 'next/image'

const MyImage = ({className} : {className?: string}) => {
  
  return (
    <div>
      <Image src='/images/her.png' 
            alt="myPhoto"
            width={693}
            height={693}
            className={className}
            />        
    </div>
  )
}

export default MyImage
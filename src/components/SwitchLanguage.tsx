'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import UK from './svg/UK'
import FR from './svg/FR'

const SwitchLanguage = () => {
    const params = usePathname();
    
  return (
    <Link
    href={params === '/en' ? "/fr" : "en"}>
        <Button
        className="cursor-pointer"
        size="icon"
        variant='ghost'>
            {params === '/en' ? <FR/> : <UK/>}
        </Button>
    </Link>
  )
}

export default SwitchLanguage
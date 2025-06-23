import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const MaxWidthWrapper = ({ children, className } : { children : ReactNode, className?: string }) => {
  return (
    <div className={ cn('relative flex flex-col w-full max-w-xl mx-auto px-4 ', className) }>
        {children}
    </div>
  )
}

export default MaxWidthWrapper
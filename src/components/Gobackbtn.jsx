import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Gobackbtn = () => {
  return (
      <Link to='/' className={buttonVariants({variant: 'secondary', className: 'group'})}>
         <ArrowLeft className='mr-2 h-5 opacity-95 group-hover:-translate-x-1 duration-300'/> 
         Go back
      </Link>
  )
}

export default Gobackbtn

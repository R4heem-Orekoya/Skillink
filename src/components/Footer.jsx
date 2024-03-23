import { Twitter, Github, Instagram } from 'lucide-react'

const Footer = () => {
  return (
      <footer className="border-t border-t-zinc-200 shadow-sm text-center py-6">
         <h3 className="text-2xl font-semibold text-zinc-800">REDOXX</h3>
         <ul className='flex justify-center items-center gap-6 mt-6 text-zinc-700'>
            <li><a href="https://twitter.com/Redoxx_Code"><Twitter size={26} className='hover:text-zinc-800'/></a></li>
            <li><a href="https://github.com/R4heem-Orekoya"><Github size={26} className='hover:text-zinc-800'/></a></li>
            <li><a href="https://www.instagram.com/redoxx.code/"><Instagram size={26} className='hover:text-zinc-800'/></a></li>
         </ul>
      </footer>
  )
}

export default Footer

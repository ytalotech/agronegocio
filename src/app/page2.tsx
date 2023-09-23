import { Home as HomeIcon, ShoppingCart, Briefcase, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
     
      <div className="flex flex-1">
        
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button>
              <ChevronLeft className='rounded-full bg-black/20 p-1' />
            </button>
            <button>
              <ChevronRight className='rounded-full bg-black/20 p-1' />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Parceiros</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-black/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/images/caju.jpeg" width={104} height={104} alt='Sitio Matheus' />
              <strong>Sitio Matheus</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-black/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/images/caju.jpeg" width={104} height={104} alt='Sitio Matheus' />
              <strong>Sitio Matheus</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-black/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/images/caju.jpeg" width={104} height={104} alt='Sitio Matheus' />
              <strong>Sitio Matheus</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-black/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/images/caju.jpeg" width={104} height={104} alt='Sitio Matheus' />
              <strong>Sitio Matheus</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-black/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/images/caju.jpeg" width={104} height={104} alt='Sitio Matheus' />
              <strong>Sitio Matheus</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-black/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/images/caju.jpeg" width={104} height={104} alt='Sitio Matheus' />
              <strong>Sitio Matheus</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Vagas</h1>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href="" className='bg-black/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/images/caju.jpeg" className='w-full' width={120} height={120} alt='Sitio Matheus' />
              <strong className='font-semibold'>Sitio Ducaju</strong>
              <span className='text-sm text-zinc-500'>2 - Apanhadores de castanha</span>
            </a>
            <a href="" className='bg-black/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/images/caju.jpeg" className='w-full' width={120} height={120} alt='Sitio Matheus' />
              <strong className='font-semibold'>Sitio Ducaju</strong>
              <span className='text-sm text-zinc-500'>2 - Apanhadores de castanha</span>
            </a>
            <a href="" className='bg-black/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/images/caju.jpeg" className='w-full' width={120} height={120} alt='Sitio Matheus' />
              <strong className='font-semibold'>Sitio Ducaju</strong>
              <span className='text-sm text-zinc-500'>2 - Apanhadores de castanha</span>
            </a>
            <a href="" className='bg-black/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/images/caju.jpeg" className='w-full' width={120} height={120} alt='Sitio Matheus' />
              <strong className='font-semibold'>Sitio Ducaju</strong>
              <span className='text-sm text-zinc-500'>2 - Apanhadores de castanha</span>
            </a>
            <a href="" className='bg-black/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/images/caju.jpeg" className='w-full' width={120} height={120} alt='Sitio Matheus' />
              <strong className='font-semibold'>Sitio Ducaju</strong>
              <span className='text-sm text-zinc-500'>2 - Apanhadores de castanha</span>
            </a>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}

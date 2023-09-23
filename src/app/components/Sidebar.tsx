import { Briefcase, HomeIcon, ShoppingCart } from "lucide-react";

export function Sidebar(){
    return (
        <aside className="w-64 bg-zinc-300 p-6">
          <nav className='space-y-5'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-600'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-600'>
              <ShoppingCart />
              Parceiros
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-600'>
              <Briefcase />
              Vagas
            </a>
          </nav>
        </aside>
    )
}
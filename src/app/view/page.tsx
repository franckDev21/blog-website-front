import HomeLayout from '@/components/pages/Layouts/HomeLayout'
import { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <HomeLayout>
      <div className=' grid grid-cols-2 w-[700px] text-center gap-4'>
        <Link href='/' className=' p-6 bg-primary text-white text-3xl rounded-md'>Accueil</Link>
        <Link href='/blog' className=' p-6 bg-primary text-white text-3xl rounded-md'>Mon Blog</Link>
        <Link href='/' className=' p-6 bg-primary text-white text-3xl rounded-md'>Mon CV</Link>
        <Link href='/' className=' p-6 bg-primary text-white text-3xl rounded-md'>Website</Link>
      </div>
    </HomeLayout>
  )
}

export default Index
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center bg-red-800 px-8 py-3'>
        <Link href = {"/"} className='text-white font-bold'>Basic CRUD</Link>
    <Link href={"/addTopic"} className='bg-white p-2'>Add Topic</Link>
    </nav>
  )
}

'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const NewUserPage = () => {
  const router = useRouter();

  return (
    <button 
      className='btn btn-primary'
      onClick={() => router.push('/users')}>Create</button>
  )
}

export default NewUserPage
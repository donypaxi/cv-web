import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <h2 className='text-3xl font-bold'>DonyDev</h2>
      </Link>
    </>
  )
}

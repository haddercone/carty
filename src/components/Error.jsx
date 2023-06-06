import React from 'react'
import { useRouteError, Link } from 'react-router-dom';

export default function Error() {
    const errorResponse = useRouteError()
  return (

    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='font-bold text-9xl'>{errorResponse.status}</h1>
        <p className='font-light text-7xl'>{errorResponse.statusText}</p>
        <p className='font-light mt-12'>{errorResponse.data}</p>
        <Link to ="/">
            <button type="button" className='mt-8  border-2 rounded-sm p-3'>Go home</button>
        </Link>


    </div>
  )
}

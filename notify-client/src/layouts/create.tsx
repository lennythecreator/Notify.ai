import React from 'react'
import { Widget } from '../components/ui/widget'

export const Create = () => {
  return (
    <Widget>
        <h1 className="text-left text-xl">Create</h1>
       <div className='flex items-center'>
             
        <input type="file" name="" id="" placeholder='upload document' />
        <button className='text-white'>Generate Note</button>
       </div>
    </Widget>
  )
}

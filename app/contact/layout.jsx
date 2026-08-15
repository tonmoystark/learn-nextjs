import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
        <h1 className='text-center bg-olive-700'>Layout especially for contact</h1>
        {children}
        
    </div>
  )
}

export default layout
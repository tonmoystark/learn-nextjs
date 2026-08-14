import React from 'react'

const individualUser = async ({ params }) => {
   
    const { indUser } = await params
   
  return (
    <div>Individual User { indUser }</div>
  )
}

export default individualUser
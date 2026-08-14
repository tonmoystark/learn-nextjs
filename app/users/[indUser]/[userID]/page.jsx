import React from 'react'

const UserID = async ({ params }) => {
    
     const { indUser, userID } = await params
  return (
    <div>User name is { indUser } and ID is { userID }</div>
  )
}

export default UserID
import React, { type CSSProperties } from 'react'
import UserPage from './Pages/users/UserPage'

function Playground() {
  return (
    <div style={styles}>
      <UserPage />
    </div>
  )
}

export default Playground

const styles:CSSProperties = {
  display:'flex',
  flexDirection:'column',
  gap:20
}
import React from 'react'
import { truncateText } from '@/learn/about-purity';
import AvatarListPage from '@/pages/AvatarList';
import '@/styles/main.css'
import { avatarData } from '@/data/data';


function App() {
  return (
    <div>
      <AvatarListPage list={avatarData}/>
    </div>
  )
}

export default App
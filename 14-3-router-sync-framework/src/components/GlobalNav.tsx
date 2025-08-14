import { NAV } from "@/utils/nav-config"
import { useEffect, useState } from "react"
import { NavLink } from "react-router"


function GlobalNav() {

  const S = {
    display:'flex',
    gap:'1rem',
    listStyle:'none'
  }

  // const navList = extractNavItems(routes.routes);

  const [mounted, setMounted] = useState(false)
  
  useEffect(()=>{
    if(mounted){
      // 로컬스토리지를 수정한다거나 등의 동작은 마운트된 이후에 수행되어야 함.
    }
  })

  return (
    <header style={{ padding:8, border: '1px solid #eee'} }>
      <nav style={{display:'flex', gap:12}}>
        {
          NAV.map(({to, label}) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))
        }
      </nav>
    </header>
  )
}
export default GlobalNav
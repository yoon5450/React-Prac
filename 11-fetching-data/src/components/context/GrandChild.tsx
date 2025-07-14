import { useContext } from "react"
import { UserContext } from "./App"

function GrandChild() {

  const {userName} = useContext(UserContext)

  return (
    <div style={{
      border:'1px solid gray',
      padding:'10px'
    }}>
    <h4>바뀐다3333</h4>
    <p>안녕하세요 {userName}</p>
    </div>
  )
}

export default GrandChild
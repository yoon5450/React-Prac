import { Outlet } from "react-router"
import Header from "./component/Header"
import Footer from "./component/Footer"
import GlobalNav from "./component/GlobalNav"

function Root() {
  return (
    <div className="h-screen bg-indigo-50/30 flex flex-col">
      <Header/>
      <GlobalNav/>

      <main className="flex-1 m-4">
        <Outlet></Outlet>
      </main>

      <Footer/>
    </div>
  )
}
export default Root
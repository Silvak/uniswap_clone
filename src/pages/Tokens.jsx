import { Outlet } from "react-router"
import Markets from "../components/Markets"


const Tokens = () => {
  return (
    <div className="wrapper-container">
    <Markets/>
    <Outlet/>
    </div>
  )
}

export default Tokens 
import { NavLink } from "react-router-dom";

export default function Router() {
  return (
    <nav>
      <ul>
        <li><NavLink to={'/'}>PostData</NavLink></li>
        <li><NavLink to={'GetData'}>GetData</NavLink></li>
      </ul>
    </nav>
  )
}
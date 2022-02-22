import { Link } from "react-router-dom"
import { BsDownload, BsClipboardData } from "react-icons/bs"
import { BiBarChartAlt2 } from "react-icons/bi"
import { useState } from "react"

const NavBar = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false)

  return (
    <>
    <div className="navbar bg-base-100 text-slate-400 shadow-md">
      <div className="navbar-start">
        <div className="dropdown" onClick={() => setToggleSideMenu(!toggleSideMenu)}>
          <label className="btn btn-ghost lg:hidden" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        </div>
        <a className="btn btn-ghost normal-case hidden md:flex">
          <img src="/images/logo_theyta_01_colour.svg" className="w-full h-8" />
        </a>
      </div>
      
      {/* The main menu when lg */}
      {/* <div className="navbar-center lg:flex text-xl font-medium">
        <a className="btn btn-ghost normal-case lg:hidden">
          <img src="/images/logo_theyta_01_colour.svg" className="w-full h-8" />
        </a>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">About TheyTa</Link>
            </li>
            <li tabIndex="0">
              <a>
                Features
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-white/50">
                <li>
                  <a>Create Graphs</a>
                </li>
                <li>
                  <a>Share Graphs</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div> */}
                
      <div className="navbar-end hidden lg:flex">
        <a className="btn btn-outline btn-accent">Download App</a>
      </div>
        
    </div>

    {toggleSideMenu ?
      (<aside className="w-15 md:hidden bg-base-100/50 text-slate-400 flex-col mt-2 align-middle self-center">
      <div className="px-3 py-4 overflow-y-auto rounded bg-base-100">
        <ul className="space-y-2">
          <li>
            <a href="#hero" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
              <BsClipboardData />
              <span className="ml-3">About TheyTa</span>
            </a>
          </li>
          <li>
            <a href="#features" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
              <BiBarChartAlt2 />
              <span className="ml-3">Features</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
              <BsDownload />
              <span className="ml-3">Download App</span>
            </a>
          </li>
        </ul>
      </div>     
      </aside>) : null
    }      
    </>
  )
}

export default NavBar
import React from 'react'
import { FaGift } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

import "../css/Header.css"

export default function Header() {
  return (
    <div className='header'>
      <nav className="header-content ">
        <a className="navbar-brand"><img src='https://app.dem.chat/static/media/logo.65431d916d61d1168ef29f5b0f6b4b5c.svg'></img></a>
        <form className="d-flex w-search" role="search">
          <div className="input-group mb-3">
            <span class="input-group-text"><IoSearchOutline /></span>
            <input
              className="form-control me-2 q"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </form>
        <div className='d-flex'>
          <div className='iconBox'><FaGift className='icon' /></div>
          <div className='iconBox'><IoMdAdd className='icon' /></div>
          <div className='iconBox'><GoBell className='icon' /></div>
        </div>
      </nav>

    </div>
  )
}

import React from "react";
import Container from "../Container/Container";
import Logo from "../Logo";
import LogoutBtn from "./LogoutBtn";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () =>{

  const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
          name: 'Home',
          slug: "/home",
          active: authStatus,
        }, 
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
        },
      {
          name: "Signup",
          slug: "/signup",
          active: !authStatus,
      },
      {
          name: "All Posts",
          slug: "/all-posts",
          active: authStatus,
      },
      {
          name: "Add Post",
          slug: "/add-post",
          active: authStatus,
      },
      ]

    return(
       <header className='py-3 w-full z-10  glass text-white'>
      <Container>
        <nav className='flex'>
          <div className='mr-4 '>
            <Link to='/'>
              <Logo width="w-[40px]" />
              </Link>
          </div>
          <ul className='  flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
             
              <li>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:text-orange-600'
                >{item.name}</button>
              </li>

            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
    )
}

export default Header;
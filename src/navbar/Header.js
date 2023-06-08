import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'

function Header() {
  const currentUrl = window.location.pathname;

  let output = <ResponsiveAppBar/>

  if (currentUrl == '/login' || currentUrl == '/signup') {
    output =(<></>)
    console.log("enter")
  }

  return (
    <>
    {output}
    </>
  )
}

export default Header
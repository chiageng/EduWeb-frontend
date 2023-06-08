import React from 'react'
import ResponsiveFooter from './ResponsiveFooter'

function Footer() {
  const currentUrl = window.location.pathname;

  let output = <ResponsiveFooter/>

  if (currentUrl == '/login' || currentUrl == '/signup') {
    output =(<></>)
  }


  return (
    <>
      {output}
    </>
  )
}

export default Footer
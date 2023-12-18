import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
        <>
        <Header />
        <dir>{children}</dir>
        <Footer/>
        </>
      
    </div>
  )
}

export default Layout;

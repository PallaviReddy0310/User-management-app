import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigationbar from '../Navigationbar/navigationbar';
import Footer from '../Footer/footer';

function RootLayout(){
  
  return (
    <div className='root'>
      {/*Navigation Bar*/}
      <Navigationbar />

      {/*Content*/}
      <Outlet />

      {/*Footer*/}
      <Footer />
    </div>
  )
}

export default RootLayout;
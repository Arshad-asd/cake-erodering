import { Outlet, useLocation } from 'react-router-dom';
import WebsiteLayout from './WebsiteLayout';

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine which layout to use based on the current path
  const getLayout = () => {
   
  
    return <WebsiteLayout><Outlet /></WebsiteLayout>;
  };

  return getLayout();
};

export default Layout;

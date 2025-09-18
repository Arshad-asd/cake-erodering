import HomePage from '../pages/customer-website/HomePage';
import ContactPage from '../pages/customer-website/ContactPage';
import AboutPage from '../pages/customer-website/AboutPage';
import CakeListPage from '../pages/customer-website/CakeListPage';
import CakeDetailPage from '../pages/customer-website/CakeDetailPage';


const customerRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/cakes',
    element: <CakeListPage />,
  },
  {
    path: '/cakes/:id',
    element: <CakeDetailPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
];

export default customerRoutes; 
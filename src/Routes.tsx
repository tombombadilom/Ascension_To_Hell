import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from '@/lib/loading';
const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('./pages/Home'));

const Login = lazy(() => import('./lib/auth/Login'));
const Register = lazy(() => import('./lib/auth/Register'));
const Profile = lazy(() => import('./lib/auth/Profile'));

const MyRoutes = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="*" element={<div> Page not found </div>} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default MyRoutes;

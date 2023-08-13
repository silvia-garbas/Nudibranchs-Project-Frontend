import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from '../login/Login';
// import Register from '../register/Register';
// import Home from '../home/Home';
import { useSelector } from 'react-redux';
import { RootState } from '../../../core/store/store';


const Home = lazy(() => import('../home/Home'));
const Login = lazy(() => import('../login/Login'));
const Register = lazy(() => import('../register/Register'));
const ErrorPage = lazy(() => import('../../components/errorpage/Error.page'));
const Details = lazy(() => import('../detail/Nudibranch.detail'));
const NudibranchCreateForm = lazy(() => import ('../nudibranchCreateForm/NudibranchCreateForm'))


export function AppRoutes() {
  const { token } = useSelector((state: RootState) => state.users);

  return (
    <Suspense>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        <Route path={'/home/detail/:id'} element={<Details></Details>}></Route>
           {/* Implementar <Route path="/create" element={<NudibranchForm></NudibranchForm>}></Route>
        <Route path="/details/:id" element={<DetailPage></DetailPage>}></Route> */}

        {token ? (
          <Route
            path="/nudibranchs"
            element={<NudibranchCreateForm></NudibranchCreateForm>}
          ></Route>
        ) : (
          <>
            <Route
              path="/nudibranchs"
              element={<Navigate to={'/login'}></Navigate>}
            ></Route>
          </>
        )}
      </Routes>
    </Suspense>
  );
}

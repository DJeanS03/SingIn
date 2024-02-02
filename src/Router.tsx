import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { CreateAccount } from './pages/CreateAccount'
import { NotFound } from './pages/NotFound'


export function Router() {
    return (
      <Routes>
        {/* <Route path="/" element={<DefaultLayout />}> */}
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<CreateAccount />} />
          <Route path='*' element={<NotFound/>}></Route>
        {/* </Route> */}
      </Routes>
    )
  }
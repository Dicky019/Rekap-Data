// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage'
// import SignupPage from './pages/SignupPage/SignupPage'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="login">
        <Set wrap={ScaffoldLayout} title="Rekap Data" titleTo="rekapDatas" buttonLabel="New Rekap Data" buttonTo="newRekapData">
          <Route path="/rekap-datas/new" page={RekapDataNewRekapDataPage} name="newRekapData" />
          <Route path="/rekap-datas/{id:Int}/edit" page={RekapDataEditRekapDataPage} name="editRekapData" />
          <Route path="/rekap-datas/{id:Int}" page={RekapDataRekapDataPage} name="rekapData" />
          <Route path="/" page={RekapDataRekapDatasPage} name="rekapDatas" />
        </Set>
      </Private>
      <Route path="/login" page={LoginPage} name="login" />
      {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

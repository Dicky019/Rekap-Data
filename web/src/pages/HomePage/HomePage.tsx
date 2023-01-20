// import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import LandingPage from 'src/components/LandingPage/LandingPage'
// import RekapDatas from 'src/components/RekapDatasCell'

const HomePage = () => {
  const { hasRole } = useAuth()

  return (
    <div className="">
      {hasRole('user') ?? 'Admin'}
      <MetaTags title="Home" description="Home page" />
      <LandingPage />
    </div>
  )
}

export default HomePage

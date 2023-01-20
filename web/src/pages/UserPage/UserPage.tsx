import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import RekapDataCell from 'src/components/RekapDatasCell'

const UserPage = () => {
  const { logOut } = useAuth()
  return (
    <>
      <MetaTags title="User" description="User page" />
      <header className="m-8 flex justify-between">
        <h1 className=""> </h1>
        <h1 className="text-4xl font-extrabold"> Rekap Data </h1>
        <div className="rw-header-button">
          <button
            className="rounded-md bg-red-500 px-3 text-white"
            onClick={logOut}
          >
            Logout
          </button>
        </div>
      </header>
      <RekapDataCell></RekapDataCell>
    </>
  )
}

export default UserPage

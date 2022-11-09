import { MetaTags } from '@redwoodjs/web'

import RekapDataCell from 'src/components/RekapData/RekapDataCell'

type RekapDataPageProps = {
  id: number
}

const RekapDataPage = ({ id }: RekapDataPageProps) => {
  return (
    <>
      <MetaTags title="Detail Rekap Data" />
      <RekapDataCell id={id} />
    </>
  )
}

export default RekapDataPage

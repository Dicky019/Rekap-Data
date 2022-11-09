import { MetaTags } from '@redwoodjs/web'

import EditRekapDataCell from 'src/components/RekapData/EditRekapDataCell'

type RekapDataPageProps = {
  id: number
}

const EditRekapDataPage = ({ id }: RekapDataPageProps) => {
  return (
    <>
      <MetaTags title="Edit Rekap Data" />
      <EditRekapDataCell id={id} />
    </>
  )
}

export default EditRekapDataPage

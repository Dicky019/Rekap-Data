import EditRekapDataCell from 'src/components/RekapData/EditRekapDataCell'

type RekapDataPageProps = {
  id: number
}

const EditRekapDataPage = ({ id }: RekapDataPageProps) => {
  return <EditRekapDataCell id={id} />
}

export default EditRekapDataPage

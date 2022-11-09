import RekapDataCell from 'src/components/RekapData/RekapDataCell'

type RekapDataPageProps = {
  id: number
}

const RekapDataPage = ({ id }: RekapDataPageProps) => {
  return <RekapDataCell id={id} />
}

export default RekapDataPage

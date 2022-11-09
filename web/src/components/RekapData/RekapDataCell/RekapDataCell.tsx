import type { FindRekapDataById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import RekapData from 'src/components/RekapData/RekapData'

export const QUERY = gql`
  query FindRekapDataById($id: Int!) {
    rekapData: rekapData(id: $id) {
      id
      namaPerusahaan
      alamat
      tenagaKerjaDisabilitas
      tenagaKerjaMuda
      tenagaKerjaLansia
      akad
      akal
      pmi
      tka
      tenagaKerjaPria
      tenagaKerjaWanita
      total
      keterangan
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>RekapData not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ rekapData }: CellSuccessProps<FindRekapDataById>) => {
  return <RekapData rekapData={rekapData} />
}

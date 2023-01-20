import type { FindRekapDatas } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import RekapDataTabel from '../RekapDataTabel/RekapDataTabel'

export const QUERY = gql`
  query FindRekapDatas {
    rekapDatas {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ rekapDatas }: CellSuccessProps<FindRekapDatas>) => {
  return <RekapDataTabel rekapDatas={rekapDatas} />
}

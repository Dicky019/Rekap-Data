import type { FindRekapDatas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import RekapDatas from 'src/components/RekapData/RekapDatas'

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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'Tidak Ada Data. '}
      <Link to={routes.newRekapData()} className="rw-link">
        Buat satu?
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ rekapDatas }: CellSuccessProps<FindRekapDatas>) => {
  return <RekapDatas rekapDatas={rekapDatas} />
}

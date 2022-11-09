import type {
  DeleteRekapDataMutationVariables,
  FindRekapDataById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_REKAP_DATA_MUTATION = gql`
  mutation DeleteRekapDataMutation($id: Int!) {
    deleteRekapData(id: $id) {
      id
    }
  }
`

interface Props {
  rekapData: NonNullable<FindRekapDataById['rekapData']>
}

const RekapData = ({ rekapData }: Props) => {
  const [deleteRekapData] = useMutation(DELETE_REKAP_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('RekapData deleted')
      navigate(routes.rekapDatas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteRekapDataMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete rekapData ' + id + '?')) {
      deleteRekapData({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            RekapData {rekapData.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{rekapData.id}</td>
            </tr>
            <tr>
              <th>Nama perusahaan</th>
              <td>{rekapData.namaPerusahaan}</td>
            </tr>
            <tr>
              <th>Alamat</th>
              <td>{rekapData.alamat}</td>
            </tr>
            <tr>
              <th>Tenaga kerja disabilitas</th>
              <td>{rekapData.tenagaKerjaDisabilitas}</td>
            </tr>
            <tr>
              <th>Tenaga kerja muda</th>
              <td>{rekapData.tenagaKerjaMuda}</td>
            </tr>
            <tr>
              <th>Tenaga kerja lansia</th>
              <td>{rekapData.tenagaKerjaLansia}</td>
            </tr>
            <tr>
              <th>Akad</th>
              <td>{rekapData.akad}</td>
            </tr>
            <tr>
              <th>Akal</th>
              <td>{rekapData.akal}</td>
            </tr>
            <tr>
              <th>Pmi</th>
              <td>{rekapData.pmi}</td>
            </tr>
            <tr>
              <th>Tka</th>
              <td>{rekapData.tka}</td>
            </tr>
            <tr>
              <th>Tenaga kerja pria</th>
              <td>{rekapData.tenagaKerjaPria}</td>
            </tr>
            <tr>
              <th>Tenaga kerja wanita</th>
              <td>{rekapData.tenagaKerjaWanita}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{rekapData.total}</td>
            </tr>
            <tr>
              <th>Keterangan</th>
              <td>{rekapData.keterangan}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRekapData({ id: rekapData.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(rekapData.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default RekapData

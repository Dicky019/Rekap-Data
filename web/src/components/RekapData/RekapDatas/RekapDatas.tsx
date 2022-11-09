import type {
  DeleteRekapDataMutationVariables,
  FindRekapDatas,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/RekapData/RekapDatasCell'
import { truncate } from 'src/lib/formatters'

const DELETE_REKAP_DATA_MUTATION = gql`
  mutation DeleteRekapDataMutation($id: Int!) {
    deleteRekapData(id: $id) {
      id
    }
  }
`

const RekapDatasList = ({ rekapDatas }: FindRekapDatas) => {
  const [deleteRekapData] = useMutation(DELETE_REKAP_DATA_MUTATION, {
    onCompleted: () => {
      toast.success('RekapData deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteRekapDataMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete rekapData ' + id + '?')) {
      deleteRekapData({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Nomor</th>
            <th>Nama perusahaan</th>
            <th>Alamat</th>
            <th>Tenaga kerja disabilitas</th>
            <th>Tenaga kerja muda</th>
            <th>Tenaga kerja lansia</th>
            <th>Akad</th>
            <th>Akal</th>
            <th>Pmi</th>
            <th>Tka</th>
            <th>Tenaga kerja pria</th>
            <th>Tenaga kerja wanita</th>
            <th>Total</th>
            <th>Keterangan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rekapDatas.map((rekapData, index) => (
            <tr key={rekapData.id}>
              <td>{index + 1}</td>
              <td>{truncate(rekapData.namaPerusahaan)}</td>
              <td>{truncate(rekapData.alamat)}</td>
              <td>{truncate(rekapData.tenagaKerjaDisabilitas)}</td>
              <td>{truncate(rekapData.tenagaKerjaMuda)}</td>
              <td>{truncate(rekapData.tenagaKerjaLansia)}</td>
              <td>{truncate(rekapData.akad)}</td>
              <td>{truncate(rekapData.akal)}</td>
              <td>{truncate(rekapData.pmi)}</td>
              <td>{truncate(rekapData.tka)}</td>
              <td>{truncate(rekapData.tenagaKerjaPria)}</td>
              <td>{truncate(rekapData.tenagaKerjaWanita)}</td>
              <td>{truncate(rekapData.total)}</td>
              <td>{truncate(rekapData.keterangan)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.rekapData({ id: rekapData.id })}
                    title={'Show rekapData ' + rekapData.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRekapData({ id: rekapData.id })}
                    title={'Edit rekapData ' + rekapData.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete rekapData ' + rekapData.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(rekapData.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RekapDatasList

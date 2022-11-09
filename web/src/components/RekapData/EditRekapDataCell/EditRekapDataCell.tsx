import type { EditRekapDataById, UpdateRekapDataInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RekapDataForm from 'src/components/RekapData/RekapDataForm'

export const QUERY = gql`
  query EditRekapDataById($id: Int!) {
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
const UPDATE_REKAP_DATA_MUTATION = gql`
  mutation UpdateRekapDataMutation($id: Int!, $input: UpdateRekapDataInput!) {
    updateRekapData(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ rekapData }: CellSuccessProps<EditRekapDataById>) => {
  const [updateRekapData, { loading, error }] = useMutation(
    UPDATE_REKAP_DATA_MUTATION,
    {
      onCompleted: () => {
        toast.success('RekapData updated')
        navigate(routes.rekapDatas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateRekapDataInput,
    id: EditRekapDataById['rekapData']['id']
  ) => {
    updateRekapData({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit RekapData {rekapData?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RekapDataForm
          rekapData={rekapData}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}

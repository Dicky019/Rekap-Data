import type { CreateRekapDataInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RekapDataForm from 'src/components/RekapData/RekapDataForm'

const CREATE_REKAP_DATA_MUTATION = gql`
  mutation CreateRekapDataMutation($input: CreateRekapDataInput!) {
    createRekapData(input: $input) {
      id
    }
  }
`

const NewRekapData = () => {
  const [createRekapData, { loading, error }] = useMutation(
    CREATE_REKAP_DATA_MUTATION,
    {
      onCompleted: () => {
        toast.success('RekapData created')
        navigate(routes.rekapDatas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateRekapDataInput) => {
    createRekapData({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New RekapData</h2>
      </header>
      <div className="rw-segment-main">
        <RekapDataForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRekapData

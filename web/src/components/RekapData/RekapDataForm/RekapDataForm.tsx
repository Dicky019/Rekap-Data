import type { EditRekapDataById, UpdateRekapDataInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
  TextAreaField,
  SelectField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormRekapData = NonNullable<EditRekapDataById['rekapData']>

interface RekapDataFormProps {
  rekapData?: EditRekapDataById['rekapData']
  onSave: (data: UpdateRekapDataInput, id?: FormRekapData['id']) => void
  error: RWGqlError
  loading: boolean
}

const RekapDataForm = (props: RekapDataFormProps) => {
  const onSubmit = (data: FormRekapData) => {
    props.onSave(data, props?.rekapData?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormRekapData> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="namaPerusahaan"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Nama perusahaan
        </Label>

        <TextField
          name="namaPerusahaan"
          defaultValue={props.rekapData?.namaPerusahaan}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="namaPerusahaan" className="rw-field-error" />

        <Label
          name="alamat"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Alamat
        </Label>

        <TextField
          name="alamat"
          defaultValue={props.rekapData?.alamat}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="alamat" className="rw-field-error" />

        <Label
          name="tenagaKerjaDisabilitas"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tenaga kerja disabilitas
        </Label>

        <SelectField
          name="tenagaKerjaDisabilitas"
          defaultValue={props.rekapData?.tenagaKerjaDisabilitas}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            validate: {
              matchesInitialValue: (value) => {
                return value !== 'Please select an option' || 'Select an Option'
              },
            },
          }}
        >
          <option>Tenaga Kerja Disabilitas</option>
          <option>-</option>
        </SelectField>

        <FieldError name="tenagaKerjaDisabilitas" className="rw-field-error" />

        <Label
          name="tenagaKerjaMuda"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tenaga kerja muda
        </Label>

        <SelectField
          name="tenagaKerjaMuda"
          defaultValue={props.rekapData?.tenagaKerjaMuda}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            validate: {
              matchesInitialValue: (value) => {
                return value !== 'Please select an option' || 'Select an Option'
              },
            },
          }}
        >
          <option>Tenaga Kerja Muda</option>
          <option>-</option>
        </SelectField>

        <FieldError name="tenagaKerjaMuda" className="rw-field-error" />

        <Label
          name="tenagaKerjaLansia"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tenaga kerja lansia
        </Label>

        <SelectField
          name="tenagaKerjaLansia"
          defaultValue={props.rekapData?.tenagaKerjaLansia}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            validate: {
              matchesInitialValue: (value) => {
                return value !== 'Please select an option' || 'Select an Option'
              },
            },
          }}
        >
          <option>Tenaga Kerja Lansia</option>
          <option>-</option>
        </SelectField>

        <FieldError name="tenagaKerjaLansia" className="rw-field-error" />

        <Label
          name="akad"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Akad
        </Label>

        <TextField
          name="akad"
          defaultValue={props.rekapData?.akad}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="akad" className="rw-field-error" />

        <Label
          name="akal"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Akal
        </Label>

        <TextField
          name="akal"
          defaultValue={props.rekapData?.akal}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="akal" className="rw-field-error" />

        <Label
          name="pmi"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pmi
        </Label>

        <TextField
          name="pmi"
          defaultValue={props.rekapData?.pmi}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pmi" className="rw-field-error" />

        <Label
          name="tka"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tka
        </Label>

        <TextField
          name="tka"
          defaultValue={props.rekapData?.tka}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="tka" className="rw-field-error" />

        <Label
          name="tenagaKerjaPria"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tenaga kerja pria
        </Label>

        <SelectField
          name="tenagaKerjaPria"
          defaultValue={props.rekapData?.tenagaKerjaPria}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            validate: {
              matchesInitialValue: (value) => {
                return value !== 'Please select an option' || 'Select an Option'
              },
            },
          }}
        >
          <option>Tenaga Kerja Pria</option>
          <option>-</option>
        </SelectField>

        <FieldError name="tenagaKerjaPria" className="rw-field-error" />

        <Label
          name="tenagaKerjaWanita"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tenaga kerja wanita
        </Label>

        <SelectField
          name="tenagaKerjaWanita"
          defaultValue={props.rekapData?.tenagaKerjaWanita}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            validate: {
              matchesInitialValue: (value) => {
                return value !== 'Please select an option' || 'Select an Option'
              },
            },
          }}
        >
          <option>Tenaga Kerja Wanita</option>
          <option>-</option>
        </SelectField>

        <FieldError name="tenagaKerjaWanita" className="rw-field-error" />

        <Label
          name="total"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total
        </Label>

        <NumberField
          name="total"
          defaultValue={props.rekapData?.total ?? 0}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="total" className="rw-field-error" />

        <Label
          name="keterangan"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Keterangan
        </Label>

        <TextAreaField
          name="keterangan"
          defaultValue={props.rekapData?.keterangan}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="keterangan" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RekapDataForm

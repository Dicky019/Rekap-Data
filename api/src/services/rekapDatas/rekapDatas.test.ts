import type { RekapData } from '@prisma/client'

import {
  rekapDatas,
  rekapData,
  createRekapData,
  updateRekapData,
  deleteRekapData,
} from './rekapDatas'
import type { StandardScenario } from './rekapDatas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rekapDatas', () => {
  scenario('returns all rekapDatas', async (scenario: StandardScenario) => {
    const result = await rekapDatas()

    expect(result.length).toEqual(Object.keys(scenario.rekapData).length)
  })

  scenario('returns a single rekapData', async (scenario: StandardScenario) => {
    const result = await rekapData({ id: scenario.rekapData.one.id })

    expect(result).toEqual(scenario.rekapData.one)
  })

  scenario('creates a rekapData', async () => {
    const result = await createRekapData({
      input: {
        namaPerusahaan: 'String',
        alamat: 'String',
        tenagaKerjaDisabilitas: 'String',
        tenagaKerjaMuda: 'String',
        tenagaKerjaLansia: 'String',
        akad: 'String',
        akal: 'String',
        pmi: 'String',
        tka: 'String',
        tenagaKerjaPria: 'String',
        tenagaKerjaWanita: 'String',
        total: 436364,
        keterangan: 'String',
      },
    })

    expect(result.namaPerusahaan).toEqual('String')
    expect(result.alamat).toEqual('String')
    expect(result.tenagaKerjaDisabilitas).toEqual('String')
    expect(result.tenagaKerjaMuda).toEqual('String')
    expect(result.tenagaKerjaLansia).toEqual('String')
    expect(result.akad).toEqual('String')
    expect(result.akal).toEqual('String')
    expect(result.pmi).toEqual('String')
    expect(result.tka).toEqual('String')
    expect(result.tenagaKerjaPria).toEqual('String')
    expect(result.tenagaKerjaWanita).toEqual('String')
    expect(result.total).toEqual(436364)
    expect(result.keterangan).toEqual('String')
  })

  scenario('updates a rekapData', async (scenario: StandardScenario) => {
    const original = (await rekapData({
      id: scenario.rekapData.one.id,
    })) as RekapData
    const result = await updateRekapData({
      id: original.id,
      input: { namaPerusahaan: 'String2' },
    })

    expect(result.namaPerusahaan).toEqual('String2')
  })

  scenario('deletes a rekapData', async (scenario: StandardScenario) => {
    const original = (await deleteRekapData({
      id: scenario.rekapData.one.id,
    })) as RekapData
    const result = await rekapData({ id: original.id })

    expect(result).toEqual(null)
  })
})

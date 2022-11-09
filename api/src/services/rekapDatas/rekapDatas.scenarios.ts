import type { Prisma, RekapData } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RekapDataCreateArgs>({
  rekapData: {
    one: {
      data: {
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
        total: 2844208,
        keterangan: 'String',
      },
    },
    two: {
      data: {
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
        total: 3589625,
        keterangan: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<RekapData, 'rekapData'>

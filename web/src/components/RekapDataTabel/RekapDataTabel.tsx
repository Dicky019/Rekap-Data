import type { FindRekapDatas } from 'types/graphql'

// tenagaKerjaLansia: string;
// akad: string;
// akal: string;
// pmi: string;
// tka: string;
// tenagaKerjaPria: string;
// tenagaKerjaWanita: string;
// total: number;
// keterangan:
//

const RekapDataTabel = (props: FindRekapDatas) => {
  return (
    <>
      {props.rekapDatas.map((rekapData, index) => {
        return (
          <div className="relative overflow-x-auto" key={index}>
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama Perusahaan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Alamat
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Tenaga Kerja Disabilitas
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tenaga Kerja Muda
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tenaga Kerja Lansia
                  </th>
                  <th scope="col" className="px-6 py-3">
                    AKAD
                  </th>
                  <th scope="col" className="px-6 py-3">
                    AKAL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PMI
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TKA
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tenaga Kerja Pria
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tenaga Kerja Wanita
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {rekapData.namaPerusahaan}
                  </th>
                  <td className="px-6 py-4">{rekapData.alamat}</td>
                  <td className="px-6 py-4">
                    {rekapData.tenagaKerjaDisabilitas}
                  </td>
                  <td className="px-6 py-4">{rekapData.tenagaKerjaMuda}</td>
                  <td className="px-6 py-4">{rekapData.tenagaKerjaLansia}</td>
                  <td className="px-6 py-4">{rekapData.akad}</td>
                  <td className="px-6 py-4">{rekapData.akal}</td>
                  <td className="px-6 py-4">{rekapData.pmi}</td>
                  <td className="px-6 py-4">{rekapData.tka}</td>
                  <td className="px-6 py-4">{rekapData.tenagaKerjaPria}</td>
                  <td className="px-6 py-4">{rekapData.tenagaKerjaWanita}</td>
                  <td className="px-6 py-4">{rekapData.total}</td>
                  <td className="px-6 py-4">{rekapData.keterangan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
      })}
    </>
  )
}

export default RekapDataTabel

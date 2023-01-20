import { useAuth } from '@redwoodjs/auth'

const LandingPage = () => {
  const { currentUser } = useAuth()

  // const user =  == "admin"  ? t
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans">
      <div>
        <div className="bg-gray-200 px-4 py-4">
          <div className="w-full md:mx-auto md:flex md:max-w-6xl md:items-center md:justify-between">
            <div>
              <a
                href="/"
                className="inline-block py-2 text-2xl font-bold text-gray-800"
              >
                <img src="/logo-dark.png" alt="" className="w-40" />
              </a>
            </div>

            <div className="hidden md:block">
              {/* <a
                href="/"
                className="mr-6 inline-block py-1 text-gray-500 hover:text-gray-600 md:py-4"
              >
                Login
              </a> */}
              <a
                href="/login"
                className="inline-block rounded-lg bg-white py-2 px-4 font-semibold text-gray-700 hover:bg-gray-100"
              >
                {currentUser ? `To ${currentUser.roles}` : 'Login'}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 md:overflow-hidden">
          <div className="px-4 py-16">
            <div className="relative w-full text-center md:mx-auto md:max-w-2xl">
              <h1 className="mb-6 text-xl font-bold leading-tight text-gray-700 sm:text-2xl md:text-5xl">
                Selamat Datang
              </h1>

              <p className="md:px-18 text-gray-600 md:text-2xl">
                Aplikasi Rekap Data Dinas Tenaga Kerja dan Transmigrasi Provinsi
                Sulawesi Selatan
              </p>

              <div className="absolute right-0 bottom-0 -mb-64 -mr-48 hidden h-40 w-40 rounded-full bg-blue-800 md:block"></div>

              <div className="absolute top-0 right-0 -mr-40 mt-32 hidden h-5 w-5 rounded-full bg-yellow-500 md:block"></div>
            </div>
          </div>

          <svg
            className="hidden bg-gray-200 fill-current text-white md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fillOpacity="1"
              d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div
          className="relative z-20 mx-auto hidden max-w-4xl bg-white shadow-lg md:block"
          // style="margin-top: -320px; border-radius: 20px;"
          style={{
            marginTop: -320,
            borderRadius: 20,
          }}
        >
          <div
            className="absolute top-0 left-0 -ml-10 -mt-10 h-20 w-20 rounded-full bg-yellow-500"
            // style="z-index: -1;"
            style={{ zIndex: -1 }}
          ></div>

          <div
            className="absolute top-0 left-0 -ml-32 mt-12 h-5 w-5 rounded-full bg-blue-500"
            // style="z-index: -1;"
            style={{ zIndex: -1 }}
          ></div>

          <div className="h-10 rounded-t-lg border-b border-gray-100 bg-white"></div>
          <div className="flex" style={{ height: 550 }}>
            <div className="w-32 overflow-hidden rounded-bl-lg bg-gray-200 p-6">
              <div className="mb-10 text-center">
                <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-blue-800"></div>
                <div className="h-2 rounded-full bg-blue-800"></div>
              </div>

              <div className="mb-10 text-center">
                <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-gray-300"></div>
                <div className="h-2 rounded-full bg-gray-300"></div>
              </div>

              <div className="mb-10 text-center">
                <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-gray-300"></div>
                <div className="h-2 rounded-full bg-gray-300"></div>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-gray-300"></div>
                <div className="h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div className="flex-1 py-6 px-8">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-2/3 px-4">
                  <div className="-mx-4 mb-10 flex flex-wrap">
                    <div className="w-1/4 px-4">
                      <div className="mb-10 rounded-lg bg-white p-6 text-center shadow">
                        <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-green-600"></div>
                        <div className="h-2 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                    <div className="w-1/4 px-4">
                      <div className="mb-10 rounded-lg bg-white p-6 text-center shadow">
                        <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-blue-600"></div>
                        <div className="h-2 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                    <div className="w-1/4 px-4">
                      <div className="mb-10 rounded-lg bg-white p-6 text-center shadow">
                        <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-orange-400"></div>
                        <div className="h-2 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                    <div className="w-1/4 px-4">
                      <div className="mb-10 rounded-lg bg-white p-6 text-center shadow">
                        <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-blue-800"></div>
                        <div className="h-2 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                  </div>

                  <div className="percentage mb-10 h-32 pt-2">
                    <div className="mb-4 block h-4 w-64 bg-gray-200"></div>
                    <div className="mb-4 block h-4 w-32 bg-gray-200"></div>
                    <div className="mb-4 block h-4 w-40 bg-gray-200"></div>
                    <div className="mb-4 block h-4 w-20 bg-gray-200"></div>
                  </div>

                  <div className="mb-6 flex w-full flex-wrap">
                    <div className="w-1/2">
                      <div className="flex items-center">
                        <div className="mr-4 h-8 w-8 rounded-full bg-gray-200"></div>
                        <div>
                          <div className="mb-1 h-2 w-16 rounded-full bg-gray-200"></div>
                          <div className="h-2 w-10 rounded-full bg-gray-100"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="flex items-center">
                        <div className="mr-4 h-8 w-8 rounded-full bg-gray-200"></div>
                        <div>
                          <div className="mb-1 h-2 w-16 rounded-full bg-gray-200"></div>
                          <div className="h-2 w-10 rounded-full bg-gray-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-wrap">
                    <div className="w-1/2">
                      <div className="flex items-center">
                        <div className="mr-4 h-8 w-8 rounded-full bg-gray-200"></div>
                        <div>
                          <div className="mb-1 h-2 w-16 rounded-full bg-gray-200"></div>
                          <div className="h-2 w-10 rounded-full bg-gray-100"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="flex items-center">
                        <div className="mr-4 h-8 w-8 rounded-full bg-gray-200"></div>
                        <div>
                          <div className="mb-1 h-2 w-16 rounded-full bg-gray-200"></div>
                          <div className="h-2 w-10 rounded-full bg-gray-100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 px-4">
                  <div className="rounded-lg p-6 shadow-lg">
                    <div className="mb-6 block h-2 w-12 rounded-full bg-gray-200"></div>

                    <svg
                      height="150"
                      width="150"
                      viewBox="0 0 20 20"
                      className="mx-auto mb-12"
                    >
                      <circle r="10" cx="10" cy="10" fill="#4299e1" />
                      {/* <circle
                        r="5"
                        cx="10"
                        cy="10"
                        fill="transparent"
                        stroke="#2b6cb0"
                        strokeWidth="10"
                        strokeDasharray="11 31.4"
                        transform="rotate(-90) translate(-20)"
                      /> */}
                    </svg>

                    <div className="-mx-2 mb-10 flex flex-wrap">
                      <div className="w-1/3 px-2">
                        <div className="block h-2 rounded-full bg-gray-200"></div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="block h-2 rounded-full bg-gray-200"></div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="block h-2 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                  </div>

                  <div className="my-10 flex justify-between">
                    <div>
                      <div className="mb-2 h-2 w-10 rounded-full bg-gray-300"></div>
                      <div className="mb-2 h-2 w-16 rounded-full bg-gray-300"></div>
                      <div className="h-2 w-8 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <div className="ml-auto mb-2 h-2 w-5 rounded-full bg-gray-300"></div>
                      <div className="ml-auto mb-2 h-2 w-6 rounded-full bg-gray-300"></div>
                      <div className="ml-auto h-2 w-8 rounded-full bg-gray-300"></div>
                    </div>
                  </div>

                  <div className="flex justify-end text-right">
                    <div className="mr-2 h-8 w-20 rounded-lg bg-gray-200 px-4"></div>
                    <div className="h-8 w-20 rounded-lg bg-green-400 px-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:hidden">
          <div
            className="relative z-20 mx-auto -mt-10 max-w-4xl bg-white shadow-lg"
            style={{ borderRadius: 20 }}
          >
            <div className="h-10 rounded-t-lg border-b border-gray-100 bg-white"></div>
            <div className="flex" style={{ height: 340 }}>
              <div className="w-16 overflow-hidden rounded-bl-lg bg-gray-200 px-2 py-6">
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-blue-800"></div>
                  <div className="mx-auto h-2 w-8 rounded-full bg-blue-800"></div>
                </div>
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-gray-300"></div>
                  <div className="mx-auto h-2 w-8 rounded-full bg-gray-300"></div>
                </div>
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-gray-300"></div>
                  <div className="mx-auto h-2 w-8 rounded-full bg-gray-300"></div>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-gray-300"></div>
                  <div className="mx-auto h-2 w-8 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="flex-1 py-6 px-4">
                <div className="-mx-2 flex flex-wrap">
                  <div className="w-1/3 px-2">
                    <div className="mb-6 rounded-lg bg-white px-2 py-3 text-center shadow">
                      <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-green-600"></div>
                      <div className="mx-auto h-2 w-8 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2">
                    <div className="mb-6 rounded-lg bg-white px-2 py-3 text-center shadow">
                      <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-blue-600"></div>
                      <div className="mx-auto h-2 w-8 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2">
                    <div className="mb-6 rounded-lg bg-white px-2 py-3 text-center shadow">
                      <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-orange-600"></div>
                      <div className="mx-auto h-2 w-8 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                </div>

                <div className="-mx-2 mb-6 flex flex-wrap">
                  <div className="w-1/2 px-2">
                    <div className="h-24 rounded-lg p-2 shadow">
                      <div className="percentage h-20 pt-2">
                        <div className="mb-2 block h-2 w-24 bg-gray-200"></div>
                        <div className="mb-2 block h-2 w-12 bg-gray-200"></div>
                        <div className="mb-2 block h-2 w-20 bg-gray-200"></div>
                        <div className="mb-2 block h-2 w-8 bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 px-2">
                    <div className="rounded-lg px-2 py-2 shadow">
                      <div className="mb-2 block h-2 w-8 rounded-full bg-gray-200"></div>

                      <div className="mb-2">
                        <svg
                          height="50"
                          width="50"
                          viewBox="0 0 20 20"
                          className="mx-auto"
                        >
                          <circle r="10" cx="10" cy="10" fill="#ddd" />
                          <circle
                            r="5"
                            cx="10"
                            cy="10"
                            fill="transparent"
                            stroke="#eee"
                            strokeWidth="10"
                            strokeDasharray="11 31.4"
                            transform="rotate(-90) translate(-20)"
                          />
                        </svg>
                      </div>

                      <div className="-mx-2 flex flex-wrap">
                        <div className="w-1/3 px-2">
                          <div className="block h-2 rounded-full bg-gray-200"></div>
                        </div>
                        <div className="w-1/3 px-2">
                          <div className="block h-2 rounded-full bg-gray-200"></div>
                        </div>
                        <div className="w-1/3 px-2">
                          <div className="block h-2 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-2 flex w-full flex-wrap">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="mr-4 h-4 w-4 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="mb-1 h-2 w-10 rounded-full bg-gray-200"></div>
                        <div className="h-2 w-6 rounded-full bg-gray-100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="mr-4 h-4 w-4 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="mb-1 h-2 w-10 rounded-full bg-gray-200"></div>
                        <div className="h-2 w-6 rounded-full bg-gray-100"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6 flex w-full flex-wrap">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="mr-4 h-4 w-4 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="mb-1 h-2 w-10 rounded-full bg-gray-200"></div>
                        <div className="h-2 w-6 rounded-full bg-gray-100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="mr-4 h-4 w-4 rounded-full bg-gray-200"></div>
                      <div>
                        <div className="mb-1 h-2 w-10 rounded-full bg-gray-200"></div>
                        <div className="h-2 w-6 rounded-full bg-gray-100"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end text-right">
                  <div className="mr-2 h-6 w-16 rounded-lg bg-gray-200 px-4"></div>
                  <div className="h-6 w-16 rounded-lg bg-green-400 px-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 p-4 text-center text-gray-600">
          Created by : KKL Gelombang V
          <a
            href="https://site.undipa.ac.id/"
            target="_blank"
            className="border-b text-blue-500"
            rel="noreferrer"
          >
            {' Universitas Dipa Makassar '}
          </a>
          2022
        </p>
      </div>
    </div>
  )
}

export default LandingPage

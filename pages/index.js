import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center min-h-screen py-2">
        <Head>
          <title>IndieBooks</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-merriweather font-bold sm:text-5xl">
                  <span className="block text-gray-900 leading-tight">Browse on Amazon,</span>
                  <span className="block text-gray-900 leading-tight">buy from your local bookstore</span>
                </span>
              </h1>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  type="submit"
                  className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium font-heebo rounded-md text-white bg-primary-600 shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  href="https://chrome.google.com/webstore/detail/indiebooks/aldkdcekfjopagcgaoffopabifkioojd"
                >
                  Add to Chrome
                </a>
                <p className="mt-3 font-heebo text-gray-500">IndieBooks is FREE, forever!</p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              {/* <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect y={72} width={640} height={640} className="text-gray-50" fill="currentColor" />
                <rect x={118} width={404} height={784} fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
              </svg> */}
              <div className="relative mx-auto w-full rounded-lg lg:max-w-lg">
                <Image
                  priority
                  src="/images/hero.png"
                  width={1333}
                  height={1019}
                  alt="indiebooks-hero"
                />
              </div>
            </div>
          </div>
        </main>

        {/* <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer> */}
      </div>
    </Layout>
  )
}

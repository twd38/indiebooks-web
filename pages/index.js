import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import InfoBlock from '../components/infoBlock'
import HowItWorks from '../components/howItWorks'

export default function Home() {
  return (
    <Layout>
      <div className="">
        <Head>
          <title>IndieBooks</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>

        <main className="">
          <section >
            <div className="flex flex-col items-center bg-secondary px-4 pt-8 sm:px-6 lg:pt-10">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8 max-w-6xl">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <h1>
                    <span className="mt-1 block text-4xl tracking-tight font-merriweather font-bold text-center sm:text-5xl sm:text-left lg:p-4">
                      <span className="block text-gray-900 leading-tight">Browse on Amazon, buy from your local bookstore</span>
                    </span>
                  </h1>
                  <div className="mt-8 sm:max-w-lg mx-auto text-center lg:text-left lg:mx-0">
                    <a
                      type="submit"
                      className="mt-3 w-auto px-6 py-3 border border-transparent text-base font-medium font-heebo rounded-md text-white bg-primary-600 shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center"
                      href="https://chrome.google.com/webstore/detail/indiebooks/aldkdcekfjopagcgaoffopabifkioojd"
                    >
                      Add to Chrome
                    </a>
                    <p className="mt-3 font-heebo text-gray-500">IndieBooks is FREE, forever!</p>
                  </div>
                </div>
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
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
            <div className="custom-shape-divider-top-1640219864">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-secondary">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
          </section>

          <section>
            <div className="bg-white px-4 py-8 sm:px-6 lg:py-12">
              <h1 className="block text-gray-900 text-center font-merriweather font-bold text-3xl p-6">Support your favorite bookstores</h1>
              <div className="grid justify-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mx-auto max-w-6xl p-4">
                <div className="h-28 w-32 relative"> 
                  <Image
                    src="/images/mcnallyjackson.jpg"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="h-28 w-32 relative"> 
                  <Image
                    src="/images/bookpeople.png"
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="h-28 w-32 relative"> 
                  <Image
                    src="/images/booksinc.png"
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="contain" // change to suit your needs
                  />
                </div>
                <div className="h-28 w-32 relative"> 
                  <Image
                    src="/images/greenlightlogo.gif"
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="contain" // change to suit your needs
                  />
                </div>
                <div className="h-28 w-32 relative"> 
                  <Image
                    src="/images/volumes.png"
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="contain" // change to suit your needs
                  />
                </div>
                <div className="h-28 w-36 relative"> 
                  <Image
                    src="/images/adastechnicalbooksandcafe.png"
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="contain" // change to suit your needs
                  />
                </div>
                
              </div>
            </div>
          </section>

          <section >
            <div className="flex md:flex-col items-center bg-secondary px-4 py-8 sm:px-6 lg:pt-10">
              <div className="md:flex md:justify-between md:max-w-6xl">
                <InfoBlock 
                  title="2000+ Independent Bookstores"
                  body="IndieBooks is powered by a database of over 2000 independent bookstores located across the US."  
                />
                <InfoBlock 
                  title="One-click Search"
                  body="After you find the book you are looking for on Amazon, it's as easy as one click to search for the same book at your local bookstore."  
                />
                <InfoBlock 
                  title="Always Free"
                  body="IndieBooks is always free! Install our extension at the Google Chrome extension marketplace and start supporting your favorite independent bookstores today!"  
                />
              </div>
            </div>
          </section>

          <section>
            <div className="bg-white px-4 py-8 sm:px-6 lg:py-12">
              <div className='grid justify-items-left grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl'>
                <div>
                  <h1 className="mt-1 block text-4xl tracking-tight font-merriweather font-bold text-center py-6 sm:text-5xl sm:text-left">
                      <span className="block text-gray-900 leading-tight">How it Works</span>
                  </h1>
                  <HowItWorks 
                    title="Install browser extension for free"
                    body='Click "Get Started" on this page and install the extension from the Google Chrome marketplace.'
                  />
                  <HowItWorks 
                    title="One-click Search"
                    body="After you find the book you are looking for on Amazon, it's as easy as one click to search for the same book at your local bookstore."
                  />
                  <HowItWorks 
                    title="Always Free"
                    body='IndieBooks is always free! Install our extension at the Google Chrome extension marketplace and start supporting your favorite independent bookstores today!'
                  />
                </div>
                <div className="relative"> 
                  <Image
                    src="/images/hero.png"
                    alt="Picture of the author"
                    layout="fill" // required
                    objectFit="contain" // change to suit your needs
                  />
                </div>
              </div>
            </div>
          </section>

        </main>

        <footer className="flex items-center justify-center w-full h-24 border-t mt-64">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer>
      </div>
    </Layout>
  )
}

import Head from 'next/head'
import Nav from './nav'

export const siteTitle = 'IndieBooks - Browse on Amazon,  buy from your local bookstore'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="IndieBooks - Browse on Amazon,  buy from your local bookstore"
          content="Buy from local independent bookstores directly from Amazon with the IndieBooks Chrome extension! If you love books and want to support local bookstores, this is a must!"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Nav/>
        {children}
      </main>
    </div>
  )
}
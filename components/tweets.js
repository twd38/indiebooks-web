import Script from 'next/script'

const tweets = [
  {
    id: 1,
    tweet: <>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">If you like buying books, use this chrome extension to support your local bookstores 📚<a href="https://t.co/mH5BUui2Gn">https://t.co/mH5BUui2Gn</a></p>&mdash; New Age Nachiket (@naa_chos) <a href="https://twitter.com/naa_chos/status/1369094806060863496?ref_src=twsrc%5Etfw">March 9, 2021</a>
        </blockquote> 
    </>
  },
  {
    id: 2,
    tweet: <><blockquote className="twitter-tweet"><p lang="en" dir="ltr">This is probably the best chrome add on that has ever existed, it redirects your book purchases on Amazon to a local bookseller. Easy way to shop local but keep the ease of shopping online <a href="https://t.co/bCGUfLGC9x">https://t.co/bCGUfLGC9x</a></p>&mdash; Aaron Galliher (@Aaron_Galliher) <a href="https://twitter.com/Aaron_Galliher/status/1362854865773461505?ref_src=twsrc%5Etfw">February 19, 2021</a></blockquote></>
  },
  {
    id: 3,
    tweet: <><blockquote className="twitter-tweet"><p lang="en" dir="ltr">📚I just found out that you can buy from local independent bookstores directly on Amazon with the <a href="https://twitter.com/IndieBooksApp?ref_src=twsrc%5Etfw">@indiebooksapp</a> Chrome extension! If you love books and want to support local bookstores, this is a must! <a href="https://t.co/aL3afVfk9s">https://t.co/aL3afVfk9s</a> (thanks <a href="https://twitter.com/_willdavis_?ref_src=twsrc%5Etfw">@_willdavis_</a>)</p>&mdash; Zara Hoffman is #amwriting (@HoffmanZara) <a href="https://twitter.com/HoffmanZara/status/1348647660853620738?ref_src=twsrc%5Etfw">January 11, 2021</a></blockquote></>
  },
  {
    id: 4,
    tweet: <><blockquote className="twitter-tweet"><p lang="en" dir="ltr">Want to know an easy way to support us (and other independent bookstores)? Install and share this Indie Bookstore Chrome Extension! It provides links to local bookstores when you shop for books online: <a href="https://t.co/ut5xr3MKAs">https://t.co/ut5xr3MKAs</a></p>&mdash; Oblong Books &amp; Music (@OblongBooks) <a href="https://twitter.com/OblongBooks/status/1368290285617180673?ref_src=twsrc%5Etfw">March 6, 2021</a></blockquote></>
  },
  {
    id: 5,
    tweet:<><blockquote className="twitter-tweet"><p lang="en" dir="ltr">Here&#39;s a Chrome extension that redirects book sales from Amazon to local independent shops with a single click. <a href="https://t.co/2ZBBXoF2xV">https://t.co/2ZBBXoF2xV</a></p>&mdash; PK Sullivan (@pk_sullivan) <a href="https://twitter.com/pk_sullivan/status/1376620328244416513?ref_src=twsrc%5Etfw">March 29, 2021</a></blockquote></>
  },
  {
    id: 6,
    tweet: <><blockquote className="twitter-tweet"><p lang="en" dir="ltr">Neat Chrome extension that redirects book sales from Amazon to local bookstores. <a href="https://t.co/7DKtpz70Lg">https://t.co/7DKtpz70Lg</a></p>&mdash; Mostafa Zamanian (@zamanian_) <a href="https://twitter.com/zamanian_/status/1362260998158172161?ref_src=twsrc%5Etfw">February 18, 2021</a></blockquote></>
  }
]

export default function Tweets() {
  return(
    <div className="bg-secondary px-4 py-8 sm:px-6 lg:py-24">
      <h1 className="block text-gray-900 text-center font-merriweather font-bold text-2xl md:text-4xl p-6">Book lovers everywhere ❤️ IndieBooks</h1>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 sm:gap-x-4 mx-auto max-w-6xl p-4">
        <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload"/>

        {tweets.map((item) => (
          <div key={item.id} className="w-full">
            {item.tweet}
          </div>
        ))}

      </div>
    </div>
  )
}
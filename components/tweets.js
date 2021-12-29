import React from 'react'
import Tweet from './tweet'

const tweets = [
  {
    id:1,
    tweetId: '1369094806060863496',
  },
  {
    id:2,
    tweetId: '1362854865773461505',
  },
  {
    id:3,
    tweetId: '1348647660853620738',
  },
  {
    id:4,
    tweetId: '1368290285617180673',
  },
  {
    id:5,
    tweetId: '1376620328244416513',
  },
  {
    id:6,
    tweetId: "1362260998158172161",
  }
]


export default function Tweets() {
  return(
    <div className="bg-secondary px-4 py-8 sm:px-6 lg:py-24">
      <h1 className="block text-gray-900 text-center font-merriweather font-bold text-2xl md:text-4xl p-6">Book lovers everywhere ❤️ IndieBooks</h1>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 sm:gap-x-4 mx-auto max-w-6xl p-4">
        {tweets.map((item) => (
          <div key={item.id} className="w-full pb-2">
            <Tweet tweetId={item.tweetId} />
          </div>
        ))}

      </div>
    </div>
  )
}
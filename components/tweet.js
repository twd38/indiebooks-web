import React from 'react'
import { fetchTweetAst, Tweet } from 'react-static-tweets'

export const getStaticProps = async ({tweetId}) => {
  try {
    const tweetAst = await fetchTweetAst(tweetId)

    return {
      props: {
        tweetId,
        tweetAst
      },
      revalidate: 10
    }
  } catch (err) {
    console.error('error fetching tweet info', err)

    throw err
  }
}

export default function StaticTweet({ tweetId, tweetAst }) {
  return(
    <div key={tweetId} className="w-full pb-2">
      <Tweet id={tweetId} ast={tweetAst} />
    </div>
  )
}
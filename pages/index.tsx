import Head from 'next/head'
import type { NextPage } from 'next'
import { useQuery } from '@apollo/client'

import Feed from '../components/Feed'
import Postbox from '../components/Postbox'
import SubredditRow from '../components/SubredditRow'
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries'

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  })

  console.log(data)
    console.log(loading)
      console.log(error)
  const subreddits: Subreddit[] = data?.getSubredditListLimit

  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>Reddit 2.0 Clone</title>
      </Head>

      <Postbox />

      <div className="flex">
        <Feed />
        <div className="sticky top-36 ml-5 mt-5 hidden h-fit min-w-[300px] rounded-md bg-white lg:inline">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
          <div>
            {subreddits?.map((subreddit, i) => (
              <SubredditRow
                index={i}
                key={subreddit.id}
                topic={subreddit.topic}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

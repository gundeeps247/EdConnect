import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import Postbox from '../../components/postbox'
import Feed from '../../components/Feed'
import Subreddit from './subreddit/[topic]'
import { useQuery } from '@apollo/client'
import { GET_SUBREDDITS_WITH_LIMIT } from '../../graphql/queries'
import SubredditRow from '../../components/Subredditrows'


const Home: NextPage = () => {
  const {data} = useQuery(GET_SUBREDDITS_WITH_LIMIT,{
    variables:{
      limit:10
    },
  })
  const subreddits: subreddit[] = data?.getSubredditListLimit
  return (
    <div className='my-7 mx-auto max-w-5xl'>
      <Head>
        <title>Reddit-2.0</title>
        <link rel="stylesheet" href="/src/output.css" />
        <link rel="stylesheet" href="/globals.css" />
      </Head>
      
      <Postbox/>
      <div className='flex'>
        
        <Feed />

        <div className='sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline'>
          <p className='text-md mb-1 p-4 pb-3 font-bold'>Top Communites</p>
          <div>
            {subreddits?.map((subreddit, i) => (
              <SubredditRow
                key={subreddit.id}
                topic={subreddit.topic}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

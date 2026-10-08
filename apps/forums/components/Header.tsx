import Image from 'next/image'; // Importing the Next.js Image component
import React from 'react'; // Importing React
import { BeakerIcon, ChartBarIcon, ChevronDownIcon, GlobeAmericasIcon, HomeIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';
import { StarIcon, BellIcon, PlusIcon, SparklesIcon, VideoCameraIcon, MegaphoneIcon } from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'


function Header() {
  const { data: session } = useSession();
  return (

    <div className='sticky top-0 z-50 flex  bg-white px-4 py-2'>
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image
            objectFit="contain"  
            src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-Logo.png" 
            layout='fill'
            alt='redditimage'
          />
        </Link>
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className='ml-2 hidden flex-1 lg:inline '>Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
      <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
        <StarIcon className="h-6 w-6 text-gray-400" />
        <input className="flex-1 bg-transparent outline-none" type='text' placeholder='Search Reddit' />
        <button type='submit' hidden/>
      </form>
      <div className='mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex'>
        <SparklesIcon className="icon" />
        <GlobeAmericasIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className='h-10 border border-gray-100'/>
        <ChartBarIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon  className="icon" />
        <SpeakerWaveIcon className="icon" />
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
        <MegaphoneIcon className="icon" />
      </div>

      {session ? (
        <div onClick={() => signOut()} className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image objectFit="contain" src="https://img.favpng.com/1/2/24/reddit-logo-youtube-png-favpng-Rukc5hsDFfci1sNk1LkFBccvW.jpg"  alt='xyz' layout='fill'  />
          </div>
          <div className='relative h-5 w-5 flex-shrink-0'>
            <p className='truncate'>{session?.user?.name}</p>
            <p className='text-gray-400'>1 Karma</p>
          </div>
        </div>
      ) : (
        <div onClick={() => signIn()} className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
          <div className='relative h-5 w-5 flex-shrink-0'>
            <Image objectFit="contain" src="https://img.favpng.com/1/2/24/reddit-logo-youtube-png-favpng-Rukc5hsDFfci1sNk1LkFBccvW.jpg"  alt='xyz' layout='fill'  />
          </div>
          <p className='text-gray-400'>Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;


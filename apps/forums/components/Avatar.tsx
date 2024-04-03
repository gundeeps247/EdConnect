import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

type Props = {
  seed?: string
  large?:boolean
}
function Avatar(props: Props) {
  const {data :session } = useSession()
  return (
    <div className='relative h-10 w-10 rounded-full border-gray-300 bg-white '>
      <Image
        layout='fill'
        src='https://www.pngwing.com/en/free-png-mleml'
        alt='Avatar'
      />
    </div>
  )
}

export default Avatar

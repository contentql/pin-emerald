import Container from '../../common/Container'
import { Media, User } from '@payload-types'
import Link from 'next/link'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/common/AvatarComponent'

interface AuthorsWithCountType extends User {
  count: number
}

const AuthorsList: React.FC<{
  authors: AuthorsWithCountType[]
  block: {
    title?: string | null
    collectionSlug?: ('blogs' | 'tags' | 'users') | null
    id?: string | null
    blockName?: string | null
    blockType: 'List'
  }
}> = async ({ authors, block }) => {
  return (
    <Container className='py-24'>
      <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
        {authors?.map(async (author, index) => (
          <Link
            prefetch
            key={index}
            href={`author/${author?.username}`}
            className='rounded-2xl p-4 transition duration-300 ease-in-out hover:bg-secondary'>
            <div className='flex flex-col items-center justify-center gap-2.5'>
              <div className='avatar'>
                <div className='relative w-24 rounded-full'>
                  <Avatar className='h-full w-full'>
                    <AvatarImage
                      alt='Post'
                      src={(author?.imageUrl as Media)?.url!}
                    />
                    <AvatarFallback />
                  </Avatar>
                </div>
              </div>
              <div className='text-base font-semibold sm:text-lg'>
                {author?.username}
              </div>
              <p className='font-medium text-neutral-content'>
                {author?.count} {author?.count === 1 ? 'Post' : 'Posts'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  )
}

export default AuthorsList

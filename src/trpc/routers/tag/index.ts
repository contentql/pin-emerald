import configPromise from '@payload-config'
import { Tag } from '@payload-types'
import { getPayload } from 'payload'
import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayload({ config: configPromise })

export const tagRouter = router({
  getTagBySlugAndItsBlogs: publicProcedure
    .input(
      z.object({
        tagSlug: z.string(),
      }),
    )
    .query(async ({ input }) => {
      try {
        const { tagSlug } = input

        const { docs: tagData } = await payload.find({
          collection: 'tags',
          where: {
            slug: {
              equals: tagSlug,
            },
          },
        })
        const { docs: blogsData } = await payload.find({
          collection: 'blogs',
          where: {
            'tags.value': {
              contains: tagData?.at(0)?.id,
            },
          },
        })

        return { blogsData, tagData }
      } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
      }
    }),

  getAllTags: publicProcedure.query(async () => {
    try {
      const { docs: allTags } = await payload.find({
        collection: 'tags',
      })

      const { docs: allBlogs } = await payload.find({
        collection: 'blogs',
      })

      return allTags.map(tag => ({
        ...tag,
        count: allBlogs.filter(blog => {
          const blogTags = blog.tags

          return blogTags?.find(blogTag => (blogTag.value as Tag).id === tag.id)
        }).length,
      }))
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
  getTagBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const { slug } = input
      try {
        const { docs: tag } = await payload.find({
          collection: 'tags',
          where: {
            slug: {
              equals: slug,
            },
          },
        })
        return tag?.at(0)
      } catch (error) {}
    }),
})

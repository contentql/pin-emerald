import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import WelcomePage from '@/components/Welcome'
import { blocksJSX } from '@/payload/blocks/BlocksJSX'
import { serverClient } from '@/trpc/serverClient'

const payload = await getPayloadHMR({
  config: configPromise,
})

interface PageProps {
  params: Promise<{ route: string[] }>
}

const Page: NextPage<PageProps> = async ({ params }) => {
  const syncParams = (await params).route

  try {
    const pageData = await serverClient.page.getPageData({
      path: syncParams,
    })

    return (
      <Suspense fallback={null}>
        <div className='space-y-20'>
          {pageData?.layout?.map((block, index) => {
            // Casting to 'React.FC<any>' to bypass TypeScript error related to 'Params' type incompatibility.
            const Block = blocksJSX[block.blockType] as React.FC<any>

            if (Block) {
              return (
                <Block {...block} params={{ route: syncParams }} key={index} />
              )
            }

            return <h3 key={block.id}>Block does not exist </h3>
          })}
        </div>
      </Suspense>
    )
  } catch (error: any) {
    if (error?.message === 'Pages not found') {
      return <WelcomePage />
    }
    console.error('Error: Page not found')
    notFound()
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ route: string[] }>
}): Promise<Metadata | {}> {
  const parsedParams = await params

  try {
    // calling the site-settings to get all the data
    const pageData = await serverClient.page.getPageData({
      path: parsedParams?.route,
    })

    let metadata = pageData.meta

    const block = pageData.layout
      ?.filter(block => block.blockType === 'Details')
      ?.at(0)

    if (
      pageData?.isDynamic &&
      block?.collectionSlug &&
      block?.collectionSlug !== 'users'
    ) {
      const { docs } = await payload.find({
        collection: block?.collectionSlug,
        where: {
          slug: {
            equals: parsedParams?.route.at(-1),
          },
        },
      })
      const doc = docs?.at(0)
      metadata = doc?.meta || {}

      if (metadata) {
        let ogImage = []

        const title = metadata.title
        const description = metadata.description

        if (metadata.image && typeof metadata.image !== 'string') {
          ogImage.push({
            url: metadata.image.sizes?.blogImageSize2?.url!,
            height: 630,
            width: 1200,
            alt: `og image`,
          })
        }

        return {
          title,
          description,
          openGraph: {
            title,
            description,
            images: ogImage,
          },
          twitter: {
            title,
            description,
            images: ogImage,
          },
        }
      }
    }

    if (metadata) {
      let ogImage = []

      const title = metadata.title
      const description = metadata.description

      if (metadata.image && typeof metadata.image !== 'string') {
        ogImage.push({
          url: metadata.image.sizes?.blogImageSize2?.url!,
          height: 630,
          width: 1200,
          alt: `og image`,
        })
      }

      return {
        title,
        description,
        openGraph: {
          title,
          description,
          images: ogImage,
        },
        twitter: {
          title,
          description,
          images: ogImage,
        },
      }
    }

    return {}
  } catch (error: any) {
    if (error?.message === 'Pages not found') {
      return <WelcomePage />
    }
    console.error('Error: Page not found')
    notFound()
  }
}

export default Page

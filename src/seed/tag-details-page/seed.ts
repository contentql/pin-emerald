import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Ora } from 'ora'

import { tagDetailsPageData } from './data'

const payload = await getPayloadHMR({ config: configPromise })

const seed = async ({
  spinner,
  id,
}: {
  spinner: Ora
  id: string
}): Promise<Page> => {
  spinner.start(`Started creating tag-details page...`)
  try {
    const result = await payload.create({
      collection: 'pages',
      data: { ...tagDetailsPageData, parent: id },
    })
    spinner.succeed(`Successfully created tag-details-page`)

    return result
  } catch (error) {
    spinner.fail(`Failed creating tags-details-page`)
    throw error
  }
}

export default seed

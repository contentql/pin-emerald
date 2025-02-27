import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { getPayload } from 'payload'
import { Ora } from 'ora'

import { blogDetailsPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async ({
  spinner,
  id,
}: {
  spinner: Ora
  id: number
}): Promise<Page> => {
  spinner.start(`Started created blogs-details-page...`)
  try {
    const result = await payload.create({
      collection: 'pages',
      data: { ...blogDetailsPageData, parent: id },
    })

    spinner.succeed(`Successfully created blogs-details-page...`)
    return result
  } catch (error) {
    spinner.fail(`Failed creating blogs-details-page...`)
    throw error
  }
}

export default seed

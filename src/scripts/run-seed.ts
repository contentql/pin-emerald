#!/usr/bin/env node
// ? For interactive confirmation prompts
import { confirm } from '@clack/prompts'
// ? For colored terminal output
import chalk from 'chalk'
// ? To load environment variables from a .env file
import 'dotenv/config'
// ? For special characters (tick and cross) in output
import figures from 'figures'
// ? For MongoDB database operations
import { MongoClient } from 'mongodb'
// ? For displaying a loading spinner
import ora, { Ora } from 'ora'

import { seedAuthorDetailsPage } from '@/seed/author-details-page'
import { seedAuthors } from '@/seed/authors'
import { seedAuthorsPage } from '@/seed/authors-page'
import { seedBlogDetailsPage } from '@/seed/blog-details-page'
import { seedBlogs } from '@/seed/blogs'
import { seedBlogsPage } from '@/seed/blogs-page'
import { seedContactPage } from '@/seed/contact'
import { seedFeaturePage } from '@/seed/features'
import { seedHomePage } from '@/seed/home-page'
import { seedMembershipPage } from '@/seed/membership'
import { seedRecommendations } from '@/seed/recommendations'
import { seedSiteSetting } from '@/seed/site-settings'
import { seedSubscriptionPage } from '@/seed/subscription'
import { seedTagDetailsPage } from '@/seed/tag-details-page'
import { seedTags } from '@/seed/tags'
import { seedTagsPage } from '@/seed/tags-page'

// ! For running shell commands (if needed for additional tasks)

// Extract database name from the URI
const extractDatabaseName = (uri: string): string | null => {
  const match = uri.match(/\/([^/?]+)(\?|$)/)
  return match ? match[1] : null
}

// MongoDB connection URI
const { DATABASE_URI } = process.env

if (!DATABASE_URI) {
  console.error(chalk.red('Environment variable DATABASE_URI is required.'))
  process.exit(1)
}

const databaseName = extractDatabaseName(DATABASE_URI)
if (!databaseName) {
  console.error(chalk.red('Failed to extract database name from DATABASE_URI.'))
  process.exit(1)
}

// Function to drop the MongoDB database
const dropDatabase = async (): Promise<boolean> => {
  const client = new MongoClient(DATABASE_URI)
  try {
    await client.connect()
    console.log(
      chalk.green(
        `Connected to MongoDB.\nDropping the database "${databaseName}"...`,
      ),
    )
    const db = client.db(databaseName)
    await db.dropDatabase()
    console.log(chalk.green(`Database "${databaseName}" dropped successfully.`))
    return true
  } catch (error) {
    console.error(chalk.red('Error dropping the database:'), error)
    return false
  } finally {
    await client.close()
  }
}

// Function to execute the seeding process
const executeSeeding = async (): Promise<void> => {
  const spinner = ora({
    text: 'Starting the seeding process...',
    color: 'cyan',
    spinner: 'dots',
  }).start()

  try {
    const tagsPage = await seedTagsPage(spinner)
    const tags = await seedTags(spinner)
    const tagsDetailsPage = await seedTagDetailsPage({
      spinner,
      id: tagsPage.id,
    })

    const authors = await seedAuthors(spinner)
    const authorsPage = await seedAuthorsPage(spinner)
    const authorDetailsPage = await seedAuthorDetailsPage({
      spinner,
      id: authorsPage.id,
    })

    await seedBlogs({ spinner, tags, authors })
    const blogsPage = await seedBlogsPage({ spinner })
    const blogsDetailsPage = await seedBlogDetailsPage({
      spinner,
      id: blogsPage.id,
    })

    await seedHomePage(spinner)

    const featuresPage = await seedFeaturePage(spinner)

    const recommendationPage = await seedRecommendations(spinner)

    const contactPage = await seedContactPage(spinner)

    const membershipPage = await seedMembershipPage(spinner)

    const subscriptionPage = await seedSubscriptionPage(spinner)

    await seedSiteSetting({
      featuresPages: featuresPage,
      spinner,
      authorsPages: authorsPage,
      tagsPages: tagsPage,
      subscribePages: subscriptionPage,
      membershipPages: membershipPage,
      contactPages: contactPage,
      recommendationPages: recommendationPage,
      tagsDetailsPages: tagsDetailsPage,
      authorsDetailsPages: authorDetailsPage,
      blogsDetailsPages: blogsDetailsPage,
    })
  } catch (error) {
    console.error(chalk.red('Error running seeds:'), error)
  } finally {
    spinner.stop()
    console.log(chalk.green('Seeding completed.'))
    process.exit(0)
  }
}

// Function to log the seeding process with spinner and messages
const seedAndLog = async <T>(
  message: string,
  seedFunction: () => Promise<any>,
  spinner: Ora,
): Promise<void> => {
  spinner.start(`${message}...`)
  try {
    await seedFunction()
    spinner.succeed(`${message} ${chalk.green(figures.tick)} Done.`)
  } catch (error) {
    spinner.fail(`${message} ${chalk.red(figures.cross)} Failed.`)
    throw error
  }
}

// Function to ask for confirmation to drop the database before seeding
const askToDropDatabase = async (): Promise<void> => {
  const answer = await confirm({
    message: `${chalk.bold(
      'Do you want to drop the database before seeding?',
    )}\n\t${chalk.red.bold(
      'WARNING: Dropping the database will permanently delete all data. This action cannot be undone.',
    )}`,
    initialValue: false,
  })

  if (answer) {
    const dropSuccess = await dropDatabase()
    if (dropSuccess) {
      askForConfirmation()
    } else {
      console.error(
        chalk.red('Failed to drop the database. Seeding process aborted.'),
      )
      process.exit(1)
    }
  } else {
    askForConfirmation()
  }
}

// Function to ask for confirmation before running seeds
const askForConfirmation = async (): Promise<void> => {
  const answer = await confirm({
    message: 'Are you sure you want to run the seeding process?',
    initialValue: false,
  })

  if (answer) {
    executeSeeding()
  } else {
    console.log(chalk.yellow('Seeding process cancelled.'))
    process.exit(0)
  }
}

// Display the prompt to drop the database
askToDropDatabase()

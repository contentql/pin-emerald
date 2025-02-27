import { Media } from '@payload-types'
import { toast } from 'sonner'

async function uploadMedia(files: FileList | null): Promise<Media | undefined> {
  const formData = new FormData()
  if (!files) {
    toast.info(`please select a file to upload`)
    return undefined
  }
  formData.append('file', files[0])
  try {
    const url = typeof window !== 'undefined' ? window.location.origin : ''
    const response = await fetch(url + '/api/media', {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }
    const { doc }: { doc: Media } = await response.json()
    return doc
  } catch (error) {
    if (error instanceof Error) {
      console.error('Upload failed', error.message)
    }
  }
}
export default uploadMedia

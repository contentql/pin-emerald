'use client'

import { Media, User } from '@payload-types'
import Image from 'next/image'
import { useState } from 'react'
import { HiOutlinePencilAlt, HiUpload, HiX } from 'react-icons/hi'
import { toast } from 'sonner'

import { trpc } from '@/trpc/client'
import uploadMedia from '@/utils/uploadMedia'

const Profile = ({ initialUser }: { initialUser: User | undefined }) => {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [userImage, setUserImage] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [open, setOpen] = useState(false)

  function capitalizeWords(words: string) {
    return words
      ?.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const {
    data: user,
    isLoading: isUserPending,
    refetch: reFetchUser,
  } = trpc.user.getUser.useQuery()
  const { mutate: uploadUserImage } = trpc.user.updateUserImage.useMutation({
    onSuccess: async data => {
      setOpen(false)
      reFetchUser()
      toast.success(`Image updated successfully`)
      setUserImage(null)
      setUploadedImage(null)
    },
    onError: () => {
      toast.error(`Failed to upload, please try again`)
    },
    onSettled: () => {
      setUploadingImage(false)
    },
  })
  const handleUpdateUserProfile = async () => {
    try {
      // setting true on uploading to media collection
      setUploadingImage(true)
      const doc = await uploadMedia(userImage)
      if (doc && doc.id) {
        uploadUserImage({ id: doc.id })
      } else {
        console.error(
          'Error: Unable to get document or document id is missing.',
        )
      }
    } catch (error) {
      setUploadingImage(false)
      console.error('Error uploading media:', error)
    }
  }
  const handleUpload = (event: any) => {
    setUserImage(event.target.files)
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        setUploadedImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const latestProfilePic = uploadedImage
    ? uploadedImage
    : (user?.imageUrl as Media)?.url!

  return (
    <>
      <div className='max-w-sm rounded p-5 text-center text-base-content/70'>
        <div className='group relative z-0 mx-auto h-[141px] w-[141px]'>
          <Image
            src={
              user?.imageUrl
                ? (user.imageUrl as Media)?.url!
                : '/images/default-profile.png'
            }
            alt='Profile'
            width={140}
            height={140}
            className='h-36 w-36 rounded-full object-cover'
          />
          <button
            onClick={() => setOpen(true)}
            className={`absolute bottom-2 right-2`}>
            <HiOutlinePencilAlt
              size={24}
              className='font-bold text-base-content'
            />
          </button>
        </div>

        <div className='mt-5 text-sm'>
          <a
            href='#'
            className='text-xl font-medium leading-none text-base-content transition duration-500 ease-in-out hover:text-primary'>
            {capitalizeWords(user?.username!)}
          </a>
          {user?.role.some(role => role === 'author') && (
            <p className='mt-2 text-base-content'>Author</p>
          )}
        </div>
      </div>
      {open && (
        <div
          className='fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50'
          aria-labelledby='modal-title'
          role='dialog'
          aria-modal='true'>
          <div className='relative z-[101] w-full max-w-lg rounded-lg bg-white p-6 shadow-lg'>
            <div className='flex justify-end'>
              <button
                onClick={() => {
                  setOpen(false)
                  setUserImage(null)
                  setUploadedImage(null)
                }}
                className='text-gray-400 hover:text-gray-600'>
                <HiX size={24} />
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <div className='text-center'>
              <div className='group relative mx-auto mb-4 h-40 w-40'>
                <Image
                  src={latestProfilePic}
                  fill
                  className='h-full w-full rounded-full object-cover'
                  alt='user profile'
                />
              </div>

              {uploadedImage && (
                <button
                  className='mt-4 inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-primary py-2.5 text-white'
                  onClick={handleUpdateUserProfile}
                  disabled={uploadingImage}>
                  <HiUpload size={20} />
                  {uploadingImage ? <p>Uploading...</p> : <p>Upload</p>}
                </button>
              )}

              <div className='mt-5 flex items-center justify-center gap-x-5'>
                <label
                  htmlFor='dropzone-file'
                  className='flex h-16 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300'>
                  <div className='flex flex-col items-center justify-center pb-6 pt-5'>
                    <svg
                      className='h-6 w-6 text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 16'>
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 13h3a3 3 0 000-6h-.025A5.56 5.56 0 0016 6.5 5.5 5.5 0 005.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 000 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                      />
                    </svg>
                    <p className='text-sm text-gray-500'>
                      <span className='font-semibold text-gray-600'>
                        Click to Upload
                      </span>
                    </p>
                  </div>
                  <input
                    id='dropzone-file'
                    type='file'
                    className='hidden'
                    onChange={handleUpload}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Profile

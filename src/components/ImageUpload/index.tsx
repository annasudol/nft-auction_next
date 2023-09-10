/* eslint-disable @next/next/no-img-element */
import { TrashIcon } from '@heroicons/react/solid';
import { ChangeEvent, FC } from 'react';
import { useCallback } from 'react';

import type { ImageUploadProps } from './ImageUpload.types';

const ImageUpload: FC<ImageUploadProps> = ({ accept, onChange, imgSrc }) => {
  const onImgRemove = () => {
    onChange(null);
  };

  const onImageUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const fileList = event.currentTarget?.files;
      const file = fileList?.item(0);
      if (file) {
        onChange(file);
      }
    },
    [onChange]
  );

  return (
    <div className='grid gap-y-1'>
      <label className='text-sm text-gray-700 dark:text-white'>
        Upload image
      </label>
      {imgSrc ? (
        <div className='h-38 group relative z-auto overflow-hidden rounded-md '>
          <img className='m-w-full w-full object-cover' src={imgSrc} alt='' />

          <div className='opacity-0 transition-opacity group-hover:opacity-100'>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <button
                type='button'
                className='flex flex-col items-center gap-2 '
                onClick={onImgRemove}
              >
                <TrashIcon className='h-5 w-5 text-gray-300' />
                <div className='text-xs uppercase text-gray-300'>Remove</div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Image
          </label>
          <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5'>
            <div className='space-y-1 text-center'>
              <svg
                className='mx-auto h-12 w-12 text-gray-400'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 48 48'
                aria-hidden='true'
              >
                <path
                  d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='flex text-sm text-gray-600'>
                <label
                  htmlFor='file-upload'
                  className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                >
                  <span>Upload a file</span>
                  <input
                    onChange={onImageUpload}
                    id='file-upload'
                    name='file-upload'
                    type='file'
                    accept={accept}
                    className='sr-only'
                  />
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

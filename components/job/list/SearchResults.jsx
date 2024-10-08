import React from 'react'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { formatDate } from '@/helpers'

function SearchResults () {
  const router = useRouter()
  const data = useSelector(state => state.job.jobs)
  return (
    <div className='relative'>
      <div className='mb-8 text-sm sm:text-sm lg:text-base flex justify-between'>
        <div className=''>
          Showing {data.length} out of {data.length} Jobs
        </div>
        <div className='flex md:flex-row flex-col'>
          <div className='flex mr-4'>
            <div className='mr-2'>View</div>
            <div>
              <select className='bg-custom-bg-primary'>
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>
          </div>
          <div className='flex'>
            <div className='mr-2'>Sort by</div>
            <div>
              <select className='bg-custom-bg-primary'>
                <option>{'Name (A-Z)'}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {data.map(item => (
          <div className='bg-white p-2 rounded-lg flex flex-col'>
            <div className='bg-[#D4F6ED] rounded-lg p-4 flex flex-col gap-6'>
              <div className='rounded-full bg-white w-fit px-4 py-2'>
                {formatDate(item.date)}
              </div>
              <div>
                <div className='text-xs'>{'Geofroggy'}</div>
                <div className='text-2xl w-1/2'>{item.title}</div>
              </div>

              <div className=''>
                {item.tags.map(ele => (
                  <div className='rounded-full border-2 border-black px-3 py-1 text-sm inline-flex mr-2 mb-2'>
                    {ele}
                  </div>
                ))}
              </div>
            </div>
            <div className='flex-1 flex justify-between items-center p-2'>
              <div>
                <div className='font-semibold'>
                  {'$' + item.salary + '/month'}
                </div>
                <div className='text-xs'>{item.city}</div>
              </div>
              <div>
                <Button
                  variant='contained'
                  className='bg-black'
                  onClick={() => {
                    router.push({
                      pathname: '/job/' + item.slug,
                      query: { id: item._id }
                    })
                  }}
                >
                  Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults

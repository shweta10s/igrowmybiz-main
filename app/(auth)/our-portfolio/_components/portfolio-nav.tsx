import React from 'react'

export default function PortfolioNav() {
    const data = [
        // {
        //     name:'Home',
        //     path:'/home'
        // },
        {
            name:'Our Work',
            path:'/our-work'
        },
        {
            name:'UI/UX',
            path:'/ui-ux'
        },
        // {
        //     name:'Contact us',
        //     path:'/contact-us'
        // },
    ]
  return (
    <div className='flex w-full justify-center gap-10 p-8 bg-[#080808]'>
        {
            data?.map((ele,i) => (
                <div key={i} className='text-mainColor text-base font-medium uppercase'>{ele?.name}</div>
            ))
        }
      
    </div>
  )
}

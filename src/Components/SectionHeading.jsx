import React from 'react'

const SectionHeading = (props) => {
  return (
    <div className='w-11/12 sm:w-auto '>
       <p className='item-1 item text-grey-0 m-0'>{props?.heading}</p>
            <h1 className='item-2 item font-extrabold 2xl:text-3xl w-auto sm:text-2xl '>{props?.subHeading}</h1>
            <p className='item-3 item text-base my-7 2xl:text-lg'>{props?.description}</p>
    </div>
  )
}

export default SectionHeading;

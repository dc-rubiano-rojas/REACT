import React from 'react'

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5
    justify-between font-bold px-10 py-5 mb-10">

        <div>
            <h1 className="text-7xl sm:text-6xl">Devs Stories Blog</h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to{" "}
                <span className="underline decoration-4 decoration-[#F7AB0A]">
                    Every Developers
                </span>{" "}
                favourite blog!
            </h2>
        </div>

        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
            New Product features | The latest in technology | The best in 
            design & More!
        </p>

    </div>
  )
}

export default Banner
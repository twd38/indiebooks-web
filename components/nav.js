/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=> {
    window.onscroll = function() {
      if(window.pageYOffset > 50)
        setScrolled(true)
      else setScrolled(false);
    }
    
  },[])
  
  return (
    <Popover className={`${scrolled ? 'bg-white' : 'bg-secondary'} sticky top-0 z-50`}>
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 xl:px-0 md:justify-start md:space-x-10 lg:max-w-6xl mx-auto">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/logo.png"
                width={185}
                height={33.78}
                alt="indiebooks-logo"
              />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-primary-600 hover:text-primary-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a 
            href="https://airtable.com/shr9n6q54Bsv01zZk" 
            className="whitespace-nowrap text-base px-4 py-3 rounded-md font-medium border border-primary-600 text-primary-600 hover:text-primary-700"
          >
            Add a Bookstore
          </a>
          <a
            href="https://chrome.google.com/webstore/detail/indiebooks/aldkdcekfjopagcgaoffopabifkioojd"
            className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
          >
            Add to Chrome
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-primary ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="p-6">
              <div className="mx-auto w-3/4 sm:w-1/2">
                <a href="https://airtable.com/shr9n6q54Bsv01zZk" className="w-full flex items-center justify-center whitespace-nowrap text-base px-3 py-3 rounded-md font-medium border border-primary-600 text-primary-600 hover:text-primary-700">
                  Add a Bookstore
                </a>
                <a
                  href="https://chrome.google.com/webstore/detail/indiebooks/aldkdcekfjopagcgaoffopabifkioojd"
                  className="mt-4 w-full flex items-center justify-center whitespace-nowrap px-3 py-3 border rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  Add to Chrome
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

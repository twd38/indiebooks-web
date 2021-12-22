/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
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
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500">
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
            <div className="pt-5 pb-6 px-5">
              <div className="mt-6">
                <a href="#" className="w-full flex items-center justify-center whitespace-nowrap text-base px-4 py-2 rounded-md font-medium border border-primary-600 text-primary-600 hover:text-primary-700">
                  Add a Bookstore
                </a>
                <a
                  href="#"
                  className="mt-4 w-full flex items-center justify-center whitespace-nowrap px-4 py-2 border rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
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

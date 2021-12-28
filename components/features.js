/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const transferFeatures = [
  {
    id: 1,
    name: 'Install browser extension for free',
    description:
      'Click "Get Started" on this page and install the extension from the Google Chrome marketplace.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'One-click Search',
    description:
      "After you find the book you are looking for on Amazon, it's as easy as one click to search for the same book at your local bookstore.",
    icon: SearchIcon,
  },
  {
    id: 3,
    name: 'Always free',
    description:
      'IndieBooks is always free! Install our extension at the Google Chrome extension marketplace and start supporting your favorite independent bookstores today!',
    icon: ShoppingCartIcon,
  },
]


export default function Example() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-merriweather font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              How it works
            </h3>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-700 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src="https://tailwindui.com/img/features/feature-example-1.png"
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  )
}

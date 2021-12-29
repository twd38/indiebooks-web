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


export default function Features() {
  return (
    <div className="py-16 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-6 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-3xl md:text-4xl pb-8 font-merriweather font-extrabold text-gray-900 tracking-tight">
              How it works
            </h3>

            <dl className="space-y-10">
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

          <div className="relative mt-16 lg:mt-0" >
            <video autoPlay loop controls style={{ width: '100%' }}>
              <source src="/videos/indiebooks-demo.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>

      </div>
    </div>
  )
}

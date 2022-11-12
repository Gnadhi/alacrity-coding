import '@/styles/globals.css';

import CollectionButton from '@/ui/sidebar/CollectionButton';

import {
  UserCircleIcon,
  PlusIcon,
  StarIcon,
  MagnifyingGlassIcon,
  InboxIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import {
  GlobeAltIcon as SolidGlobeAltIcon,
  InboxIcon as SolidInboxIcon,
} from '@heroicons/react/24/solid';

export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="md:insert-y-0 hidden md:fixed md:flex md:w-64 md:flex-col">
        {/* Left Sidebar */}
        <div className="z-20 flex flex-grow flex-col overflow-y-auto bg-green-100">
          {/* Left Sidebar Topbar */}
          <div className="sticky top-0 flex h-12 items-center justify-between bg-dark-gray-500 px-4 ">
            <UserCircleIcon className="h-6 w-6 text-gray-300" />
            <PlusIcon className="h-6 w-6 text-gray-300" />
          </div>
          {/* Left sidebar main content */}
          <div className="flex flex-grow flex-col overflow-y-auto bg-dark-gray-500">
            <div className="flex flex-1 flex-col space-y-1 py-4">
              <CollectionButton
                active
                icon={<GlobeAltIcon className="mr-1 ml-4 h-6 w-6" />}
                activeIcon={<SolidGlobeAltIcon className="mr-1 ml-4 h-6 w-6" />}
                text="All Bookmarks"
              />
              <CollectionButton
                icon={<InboxIcon className="mr-1 ml-4 h-6 w-6" />}
                activeIcon={<SolidInboxIcon className="mr-1 ml-4 h-6 w-6" />}
                text="Unsorted"
              />
            </div>
          </div>
        </div>
      </div>

      {/*Right Main Content Side */}
      <div className="z-0 flex flex-1 flex-col md:pl-64">
        {/* Right Side Navbar */}
        <div className="sticky top-0 flex h-12 flex-shrink-0 items-center justify-between bg-light-gray-500 shadow">
          {/* Search Button */}
          <div className="flex max-w-md grow px-4">
            <button
              type="button"
              className="flex flex-grow items-center justify-between rounded bg-dark-gray-500 py-1 px-2 text-gray-300 shadow"
            >
              <div className="flex items-center">
                <MagnifyingGlassIcon className="mr-2 h-6 w-6" />
                <span>Quick Search... </span>
              </div>
              <kbd className="ml-2 justify-self-end">Ctrl K</kbd>
            </button>
          </div>

          <div className="flex px-4">
            <button
              type="button"
              className="flex items-center rounded bg-dark-gray-500 py-1 px-2 text-sm font-semibold leading-4 text-gray-300"
            >
              <StarIcon className="mr-1 h-6 w-6" />
              Add
            </button>
          </div>
        </div>
        {/*Right side main content */}
        <main className="flex flex-1 flex-grow flex-col bg-light-gray-500">{children}</main>
      </div>
    </div>
  );
}

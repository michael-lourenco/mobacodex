

import Localization from '../core/Localization'
import { IconEdit, IconTrash} from './Icons'


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

interface NavLocalizationProps {
  localization?: string
  version?: string
  localizations: Localization[]
  selectedLocalization?: (localization: Localization) => void
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function  NavLocalization(props: NavLocalizationProps) {

  function renderData() { 
    return props.localizations?.map((item, i) => {
      return (            
        <Menu.Item key = { i }>
          {({ active }) => (
            <a
              href={`/${item.id}`  }
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
              key = { i }  >
              { item.id }
            </a>
          )}
        </Menu.Item>
      )
    })
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        { props.localization }
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {renderData()}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
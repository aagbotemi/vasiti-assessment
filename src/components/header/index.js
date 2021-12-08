import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from "../../assets/images/Vasiti-Logo.svg"
import {Link} from 'react-router-dom'

import './header.css'

const navigation = [
  { name: 'ABOUT US', url: '/', current: true },
  { name: 'STORIES', url: '/', current: false },
  { name: 'CONTACT', url: '/', current: false },
  { name: 'LOGIN', url: '/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 header">
            <div className="relative flex items-center justify-between h-14">
              
              <div className="flex-1 flex items-center md:justify-between md:items-stretch">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.url}
                        className={classNames(
                          item.current ? 'navlink-current' : 'text-gray-800',
                          'navlink px-2 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                        to="/"
                        className={
                          'signup text-white px-3 py-2 rounded-md text-sm font-medium'
                        }
                      >
                        SIGN UP
                      </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  url={item.url}
                  className={classNames(
                    item.current ? 'navlink-current' : 'text-gray-800',
                    'navlink block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
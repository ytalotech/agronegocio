"use client";

import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Parceiros', href: '#partner', current: false },
  { name: 'Vagas', href: '#job', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
}

type navigation = {
  name: string;
  href: string;
  current: boolean;
}[]

export default function Menu() {
  const [items, setItems] = useState<NavigationItem[]>(navigation);

  const handleItemClick = (index: number) => {
    const newItems = items.map((item: any, i: any) => {
      if (i === index) {
        return {
          ...item,
          current: true,
        };
      } else {
        return {
          ...item,
          current: false,
        };
      }
    });

    setItems(newItems);
  };

  return (
    <>
      <div className="sticky top-0 min-h-full">
        <Disclosure as="nav" className="bg-green-600">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img src="/images/logo.svg" alt="" width={100} height={100} />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {items.map((item: any, index: any) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-green-700 text-white'
                                : 'text-green-300 hover:bg-green-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            onClick={() => handleItemClick(index)}
                            // aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-green-900 p-2 text-gray-400 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-green-900 text-white' : 'text-green-300 hover:bg-green-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
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
      </div>
    </>
  )
}

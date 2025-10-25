'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Mail, Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navTextColor = isScrolled
    ? 'text-slate-700 dark:text-slate-200'
    : 'text-black dark:text-white'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full overflow-x-hidden md:overflow-visible px-4 md:px-8 py-2',
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      {/* FIXED: Added max-w-full and min-w-0 to container */}
      <div className="container flex items-center justify-between mx-auto max-w-full min-w-0">
        {/* Logo - FIXED: Added flex-shrink-0 to prevent logo from shrinking */}
        <Link href="/" className="flex items-center gap-0.5 flex-shrink-0">
          <span
            className={cn(
              'px-0 hidden md:block font-bold text-lg transition-colors duration-300',
              isScrolled
                ? 'text-sky-500 dark:text-white'
                : 'text-pink-400 dark:text-white'
            )}
          >
            <Image
              className="p-1  sm:p-2"
              src="/img/elephant-alone.svg"
              alt="logo"
              width={70}
              height={70}
              priority
            />
          </span>
          <div className="w-28 h-8 rounded-md bg-gradient-to-r from-sky-300 to-pink-400  items-center justify-center hidden sm:flex">
            <span className="text-white font-bold hidden sm:block ">
              Codeco.tech
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn('text-base font-medium', navTextColor)}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md  p-6 no-underline outline-none focus:shadow-md"
                          style={{
                            backgroundImage:
                              'linear-gradient(120deg, var(--indigo-6), var(--crimson-5))',
                          }}
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Next.js 15
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            The latest features of Next.js with server
                            components and more.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/products/framework" title="Framework">
                      Everything you need to build modern web apps
                    </ListItem>
                    <ListItem href="/products/components" title="Components">
                      UI components built with Tailwind CSS
                    </ListItem>
                    <ListItem href="/products/templates" title="Templates">
                      Ready-to-use project templates
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <span className={cn('text-base font-medium', navTextColor)}>
                    Resources
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                    <ListItem
                      href="/resources/documentation"
                      title="Documentation"
                    >
                      Learn how to use our products
                    </ListItem>
                    <ListItem href="/resources/guides" title="Guides">
                      Step-by-step tutorials
                    </ListItem>
                    <ListItem href="/resources/examples" title="Examples">
                      Code examples and demos
                    </ListItem>
                    <ListItem href="/resources/blog" title="Blog">
                      Latest news and updates
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cn(navigationMenuTriggerStyle(), navTextColor)}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                isScrolled
                  ? 'text-slate-700 dark:text-slate-200'
                  : 'text-black dark:text-white',
                isScrolled
                  ? 'hover:text-slate-900 dark:hover:text-slate-100'
                  : 'hover:text-slate-700 dark:hover:text-slate-100',
                'transition-colors duration-200'
              )}
            >
              <Mail className="mr-2 h-4 w-4 animate-wiggle" /> Sign In
            </Link>
            <span className="relative flex items-center justify-center">
              <Link
                href="/get-started"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'bg-linear-to-br from-sky-500 to-pink-400 shadow-xl hover:opacity-70'
                )}
              >
                Get Started
              </Link>

              {/* Ping container in upper-right corner */}
              <span className="absolute -top-1 -right-1">
                <span className="absolute inline-flex size-3 animate-ping duration-[3000ms] rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-sky-500" />
              </span>
            </span>
          </div>
        </div>

        {/* Mobile - FIXED: Added flex-shrink-0 to prevent shrinking */}
        <div className="flex md:hidden flex-shrink-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu
                  className={cn(
                    'h-6 w-6',
                    // FIXED: Simplified color logic and removed conflicting styles
                    isScrolled
                      ? 'text-slate-700 dark:text-white'
                      : 'text-black dark:text-white'
                  )}
                />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <VisuallyHidden>
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col gap-6 pt-6 px-6">
                <div className="flex flex-col space-y-3">
                  <h2 className="text-lg font-semibold">Products</h2>
                  <div className="flex flex-col space-y-2 pl-2">
                    <Link
                      href="/products/framework"
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Framework
                    </Link>
                    <Link
                      href="/products/components"
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Components
                    </Link>
                    <Link
                      href="/products/templates"
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Templates
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <h2 className="text-lg font-semibold">Resources</h2>
                  <div className="flex flex-col space-y-2 pl-2">
                    <Link
                      href="/resources/documentation"
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/resources/guides"
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Guides
                    </Link>
                    <Link
                      href="/resources/examples"
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Examples
                    </Link>
                    <Link
                      href="/resources/blog"
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      Blog
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="text-lg font-semibold hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Contact
                </Link>

                <div className="flex flex-col gap-2 pt-4">
                  <Link
                    href="/signin"
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'w-full'
                    )}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/get-started"
                    className={cn(
                      buttonVariants({ variant: 'default' }),
                      'w-full'
                    )}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

interface ListItemProps {
  className?: string
  title: string
  children: React.ReactNode
  href: string
  [key: string]: any
}

function ListItem({
  className = '',
  title,
  children,
  href,
  ...props
}: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 focus:bg-slate-100 dark:focus:bg-slate-800',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}




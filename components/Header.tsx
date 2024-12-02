"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  InformationCircleIcon,
  ClipboardDocumentIcon,
  ShoppingBagIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const products = [
  {
    name: "برمجيات مخصصة",
    description: "نقوم بتطوير حلول برمجية مخصصة تلبي احتياجات عملك الفريدة، ",
    href: "/customsoftware",
    icon: ChartPieIcon,
  },
  {
    name: " ERP أنظمة",
    description:
      "نظام تخطيط موارد المؤسسة هو برنامج شامل ومتكامل يهدف إلى تحسين كفاءة العمليات الإدارية والتشغيلية في المؤسسات",
    href: "/erp",
    icon: ClipboardDocumentIcon,
  },
  {
    name: "التجارة الإلكترونية",
    description:
      "بناء وتطوير منصات تجارة إلكترونية متكاملة تشمل بوابات الدفع، إدارة المخزون",
    href: "/ecommerce",
    icon: ShoppingBagIcon,
  },
  {
    name: "تطبيقات الويب والهواتف المحمولة",
    description:
      "تطوير تطبيقات ويب وتطبيقات هاتف محمول تفاعلية وسهلة الاستخدام، توفر تجربة استخدام سلسة على جميع الأجهزة والمنصات.",
    href: "/appdev",
    icon: DevicePhoneMobileIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: InformationCircleIcon },
  { name: "Contact sales", href: "#", icon: InformationCircleIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // change color based on location

  return (
    <header className="bg-white -z-1">
      {/* Navbar Desktop */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Quadra</span>
            <img alt="" src="/assets/quadralogo.png" className="h-12 w-auto" />
          </a>
        </div>

        {/* mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              خدماتنا
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg  transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {/* Panel content */}
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                        {item.name}
                                    </a>
                                ))}
                            </div> */}
            </PopoverPanel>
          </Popover>

          <a
            href="/products"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            منتجاتنا
          </a>
          <a
            href="assets/portfolio/companyprofile.pdf"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            اعمالنا
          </a>
          <a
            href="about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            عن الشركة
          </a>
          <a
            href="/contact-us"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            تواصل معنا
          </a>
        </PopoverGroup>

        {/* Call to action */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://erp.quadrasolution.com/login?lang=en"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Try our ERP demo <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Mobile menu */}

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/assets/quadralogo.png" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    خدماتنا
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  منتجاتنا
                </a>
                <a
                  href="assets/portfolio/companyprofile.pdf"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  اعمالنا
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  عن الشركة
                </a>
                <a
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  تواصل معنا
                </a>
              </div>

              <div className="py-6">
                <a
                  href="https://erp.quadrasolution.com/login?lang=en"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Try our ERP demo
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

import { ShoppingCartIcon, UserGroupIcon, ChartPieIcon, CloudArrowUpIcon } from '@heroicons/react/20/solid'

export default function Ecommerce() {
    return (
        <>
            <header className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">نظام التجارة الإلكترونية</h2>
                    <br />
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Ecommerce System</h2>

                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        نظام كوادر للتجارة الإلكترونية يساعدك على إدارة جميع جوانب متجرك عبر الإنترنت بسهولة وفعالية، من متابعة الطلبات والمخزون إلى التعامل مع العملاء وإعداد التقارير.
                    </p>
                </div>
            </header>

            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

                {/* Decorative background image */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                </div>

                {/* Container */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    {/* Content */}
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg " style={{ direction: "rtl" } }>
                                <p className="text-base font-semibold leading-7 text-indigo-600 dir=rtl">التجارة الإلكترونية</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dir=rtl">إدارة شاملة</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    نظام التجارة الإلكترونية الخاص بنا يغطي جميع جوانب إدارة متجرك، بدءًا من إدارة الطلبات والمخزون وصولًا إلى إدارة العملاء وتقديم تقارير مفصلة حول المبيعات والأداء.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* img */}
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="/assets/ecom/ecomsm.png"
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        />
                    </div>
   
                    {/* list */}
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <ul role="list" className="mt-8 space-y-8 text-gray-600 " style={{ direction: "rtl" }}>
                                    <li className="flex gap-x-3">
                                        <ShoppingCartIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">إدارة الطلبات</strong>
                                            <br />
                                            قم بإدارة جميع الطلبات الواردة إلى متجرك بسهولة من خلال لوحة تحكم شاملة تغطي كل تفاصيل الطلب.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <UserGroupIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">إدارة العملاء والموردين</strong>
                                            <br />
                                            تعقب جميع العملاء والموردين، وتواصل معهم عبر الرسائل المباشرة والدعم الفني.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ChartPieIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">تقارير المبيعات والتحليل</strong>
                                            <br />
                                            احصل على تقارير تفصيلية حول المبيعات والمعاملات والأداء لمساعدتك على اتخاذ قرارات مستنيرة.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">إدارة الترويج والعروض</strong>
                                            <br />
                                            قم بإعداد الإعلانات والعروض الخاصة لجذب المزيد من العملاء وزيادة المبيعات.
                                        </span>
                                    </li>
                                </ul>

                                <p className="mt-8" style={{ direction: "rtl" }}>
                                    تم تصميم نظام التجارة الإلكترونية ليتناسب مع احتياجاتك، مع واجهة مستخدم بسيطة وبديهية تسهل عليك التنقل والإدارة.
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" style={{ direction: "rtl" }}>دعم فني متواصل</h2>
                                <p className="mt-6" style={{ direction: "rtl" }}>
                                    فريقنا متاح على مدار الساعة لتقديم الدعم الفني والإجابة على استفساراتك لضمان سير العمل دون أي انقطاع.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

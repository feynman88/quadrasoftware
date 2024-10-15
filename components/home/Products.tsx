import {
    CodeBracketIcon,
    UserGroupIcon,
    DocumentIcon,
    ReceiptRefundIcon,
    UserIcon,
    BuildingOfficeIcon,
} from '@heroicons/react/24/outline'

import Image from 'next/image'


const features = [
    {
        name: 'نظام إدارة المقاولات',
        description: 'إدارة متكاملة لجميع مراحل المشاريع الإنشائية، من التخطيط إلى التنفيذ والمراقبة المالية.',
        icon: CodeBracketIcon,
    },
    {
        name: 'نظام إدارة خدمة العملاء',
        description: 'تحسين تجربة العملاء من خلال أدوات متقدمة لإدارة استفساراتهم، شكاويهم، ورضاهم.',
        icon: UserGroupIcon,
    },
    {
        name: 'نظام إدارة المستندات',
        description: 'تنظيم وحفظ المستندات والملفات بشكل آمن وسهل الوصول إليه مع إمكانيات البحث المتقدم.',
        icon: DocumentIcon,
    },
    {
        name: 'الربط مع الفاتورة الإلكترونية',
        description: 'تكامل سلس مع أنظمة الفاتورة الإلكترونية لتسهيل عمليات الفوترة والتقارير المالية.',
        icon: ReceiptRefundIcon,
    },
    {
        name: 'نظام إدارة الموارد البشرية',
        description: 'نظام شامل لإدارة جميع مهام الموارد البشرية، من التوظيف إلى تقييم الأداء وإدارة الرواتب.',
        icon: UserIcon, // Replace with a suitable icon
    },
    {
        name: 'نظام إدارة التصنيع',
        description: 'تخطيط وإدارة عمليات التصنيع، المخزون، والجودة لضمان الإنتاج الفعال والمتناسق.',
        icon: BuildingOfficeIcon, // Replace with a suitable icon
    },
  ]


export default function Products() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">  </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">من منجاتنا</p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">

تقدم شركتنا مجموعة متكاملة من الأنظمة والحلول البرمجية المتخصصة التي تلبي احتياجات الشركات في مختلف القطاعات. تشمل منتجاتنا أنظمة إدارة المقاولات، وإدارة خدمة العملاء، وإدارة المستندات، بالإضافة إلى الربط مع الفاتورة الإلكترونية ومواقع التجارة الإلكترونية. كما نوفر أنظمة متقدمة لإدارة الموارد البشرية، التصنيع، الشحن البحري، والمستشفيات                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Image
                        src="/assets/system.png"
                        alt="App screenshot"
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                        width={2432}
                        height={1442}
                    />
                    <div className="relative" aria-hidden="true">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
                    </div>
                </div>
            </div>


            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-white">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                {feature.name}
                            </dt>{' '}
                            <br />
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>


            
        </div>
    )
}

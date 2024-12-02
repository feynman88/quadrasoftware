import Image from "next/image";
import { CodeBracketIcon, CubeIcon, DevicePhoneMobileIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types';
import Products from '@/components/home/Products'
import Testmonials from "@/components/home/Testmonials";
const services = [
    {
        title: 'برمجيات مخصصة', // {{ edit_1 }}
        description: 'نقوم بتطوير حلول برمجية مخصصة تلبي احتياجات عملك الفريدة، بما في ذلك تطبيقات سطح المكتب، أدوات التشغيل الآلي، وأنظمة الإدارة.', // {{ edit_2 }}
        icon: CodeBracketIcon,
    },
    {
        title: 'أنظمة ERP', // {{ edit_3 }}
        description: 'تصميم وتنفيذ أنظمة ERP متكاملة لإدارة موارد الشركة بكفاءة، تشمل تخطيط الموارد، إدارة المشاريع، وإعداد التقارير المالية.', // {{ edit_4 }}
        icon: CubeIcon,
    },
    {
        title: 'تطبيقات الويب والهواتف المحمولة', // {{ edit_5 }}
        description: 'تطوير تطبيقات ويب وتطبيقات هاتف محمول تفاعلية وسهلة الاستخدام، توفر تجربة استخدام سلسة على جميع الأجهزة والمنصات.', // {{ edit_6 }}
        icon: DevicePhoneMobileIcon,
    },
    {
        title: 'التجارة الإلكترونية', // {{ edit_7 }}
        description: 'بناء وتطوير منصات تجارة إلكترونية متكاملة تشمل بوابات الدفع، إدارة المخزون، والتسويق الإلكتروني لزيادة المبيعات.', // {{ edit_8 }}
        icon: ShoppingCartIcon,
    },
]


interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => (
    <div className="bg-white rounded-lg shadow-lg px-12 py-12 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-800 hover:text-white ">
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-100">
            <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="">{description}</p>
    </div>
)

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired, // {{ edit_1 }}
    description: PropTypes.string.isRequired, // {{ edit_2 }}
    icon: PropTypes.elementType.isRequired, // {{ edit_3 }}
};





export default function Home() {
  return (
    
        <>

            {/* hero start */}
               <div style={{
            background: 'radial-gradient(circle at top, #204878 0%, #121c27 43%, #000000 100%)',
            padding: '20px',
          
            }}>                <div className="relative isolate pt-14">
                                {/* // This is the background image of the hero sectionssss */}
                                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                                    {/* // This is the gradient overlay on the background image */}

                                </div>


                                {/* // This is the content of the hero section */}
                                <div className="py-24 sm:py-32 lg:pb-40">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div className="mx-auto max-w-2xl text-center">
                                            {/* // This is the title of the hero section */}
                                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                                حلول برمجية متكاملة                            </h1>
                                            {/* // This is the description of the hero section */}
                                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                                نقدم لك أفضل الحلول البرمجية لتطوير أعمالك وتنمية مشاريعك.
                                                نحن نتخصص في تصميم وتطوير المواقع الإلكترونية، التطبيقات، والحلول البرمجية المبتكرة التي تناسب احتياجاتك الفريدة
                                            </p>
                                            {/* // This is the call to action buttons of the hero section */}
                                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                                <a
                                                    href="/contact-us"
                                                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                                >
                                                    تواصل معنا
                                                </a>
                                                <a href="/assets/portfolio/companyprofile.pdf" className="text-sm font-semibold leading-6 text-white">
                                                    اعمالنا <span aria-hidden="true">→</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* // This is the bottom part of the hero section */}
                                <div
                                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                                    aria-hidden="true"
                                >

                                </div>
                            </div>

            </div>
            {/* hero section end */}
                    

        {/* clients section */}
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
                    شركاؤنا في النجاح                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Image
                        alt="client"
                        src="/assets/clientlogos/brand-1.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="seritiny"
                        src="/assets/clientlogos/brand-2.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="lavela"
                        src="/assets/clientlogos/brand-5.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="truebeach"
                        src="/assets/clientlogos/brand-3.png"
                        width={158}
                        height={48}
                        className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
                    />
                    <Image
                        alt="icon"
                        src="/assets/clientlogos/brand-4.png"
                        width={158}
                        height={48}
                        className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                 
                </div>
              </div>
         </div>
            {/* clients section end */}

        {/* sercies section */}

        <section className="py-16 mb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-6xl font-extrabold text-gray-900 sm:text-4xl">خدماتنا</h2>
                    <p className="mt-4 text-xl text-gray-600">
            لدينا واسعة من الخدمات
                    </p>
                </div>
                <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>

        {/* services section end */}

        
        <Products/>
        <Testmonials/>


        </>
  );
}

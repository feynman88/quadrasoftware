const Productsarray = [
    {
        name: 'نظام السياحة (الفنادق متعددة البائعين)',
        role: 'نظام شامل لإدارة الفنادق والمنتجعات السياحية، يتيح لمزودي الخدمة عرض وإدارة حجوزاتهم بكل سهولة عبر منصة متعددة البائعين.',
        imageUrl: '/assets/icons/hotel.svg',
    },
    {
        name: 'نظام السياحة (الرحلات والجولات السياحية)',
        role: 'يساعدك نظام الرحلات والجولات على إدارة وتنظيم الرحلات السياحية، من الحجز إلى التقييم، وتقديم تجربة مميزة للعملاء.',
        imageUrl: '/assets/icons/plane.svg',
    },
 
    {
        name: 'نظام المدارس',
        role: 'نظام متكامل لإدارة المدارس، يشمل إدارة الجداول، الحضور، النتائج، والتواصل بين المعلمين والأهالي بكل سهولة.',
        imageUrl: '/assets/icons/school.svg',
    },
    {
        name: 'نظام التجارة الإلكترونية متعدد البائعين',
        role: 'منصة تجارة إلكترونية متعددة البائعين تتيح للبائعين المختلفين عرض منتجاتهم وإدارة متاجرهم ضمن بيئة واحدة سلسة وآمنة.',
        imageUrl: '/assets/icons/ecommerce.svg',
    },
    {
        name: 'نظام مثل خدمة أوبر',
        role: 'نظام توصيل ذكي يشبه خدمة أوبر، يوفر حلولًا شاملة لإدارة خدمات النقل والمواصلات، من الحجز إلى التتبع والدفع الإلكتروني.',
        imageUrl: '/assets/icons/car.svg',
    },
    {
        name: 'نظام مثل خدمة طلبات',
        role: 'منصة مشابهة لخدمة طلبات، تتيح للمستخدمين طلب الطعام والمنتجات المختلفة من مجموعة متنوعة من المتاجر والمطاعم بكل سهولة وسرعة.',
        imageUrl: '/assets/icons/food.svg',
    },
];


export default function Products() {


    return (
        <>


            <header className="bg-zinc-900 px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" >منتجاتنا</h2>
                    <br />

                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        نقدم لك مجموعة واسعة من الأنظمة الجاهزة المتكاملة التي تناسب جميع أنواع الأعمال، بدءًا من السياحة إلى التجارة الإلكترونية والخدمات المبتكرة. أنظمتنا مصممة خصيصًا لتلبية متطلباتك بكل مرونة وسهولة، مما يساعدك على تحسين العمليات وزيادة الإنتاجية.

                    </p>
                </div>
            </header>


            <div className="bg-zinc-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

                    {/* <div className="mx-auto max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-400">
                            We’re a dynamic group of individuals who are passionate about what we do.
                        </p>
                    </div> */}

                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                    >
                        {Productsarray.map((person) => (
                            <li key={person.name} className="rounded-2xl bg-zinc-800 px-8 py-10 hover:bg-zinc-700  duration-300 ease-in-out">
                                <img className="mx-auto h-48 w-48   max-h-20 md:h-56 md:w-56" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                                <p className="text-sm leading-6 text-gray-400">{person.role}</p>
                                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                               
                                    {/* <li>
                                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li> */}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        




        </>


    );
}
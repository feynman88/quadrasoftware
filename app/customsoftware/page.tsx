import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'حلول برمجية مخصصة',
    description:
      'نقوم بتصميم حلول برمجية مخصصة لتلبية احتياجات عملك. سواء كنت تحتاج إلى تطبيقات ويب أو برامج مكتبية، نقدم لك منصات قابلة للتطوير ومتوافقة تماماً مع عملياتك التجارية.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'تطوير شامل من البداية إلى النهاية',
    description:
      'نحن نتولى جميع مراحل التطوير، من التصميم إلى التنفيذ والإطلاق. نقدم خدمة تطوير شاملة لضمان تسليم البرامج الخاصة بك في الوقت المحدد وضمن الميزانية المحددة، مع التركيز على تلبية متطلباتك الدقيقة.',
    icon: LockClosedIcon,
  },
  {
    name: 'تجربة مستخدم متكاملة وسلسة',
    description:
      'نحن نركز على تقديم تجربة مستخدم سلسة ومتكاملة، من خلال إنشاء واجهات سهلة الاستخدام تضمن سهولة التعامل مع البرامج، وتحقيق أهداف العمل بشكل فعال.',
    icon: ArrowPathIcon,
  },
  {
    name: 'دعم فني مستمر وتحديثات دورية',
    description:
      'نحن نضمن بقاء برنامجك محدثًا وآمنًا باستمرار. نوفر خدمات دعم فني مستمرة لضمان حل أي مشكلات بسرعة، بالإضافة إلى تقديم تحديثات دورية لتحسين الأداء وزيادة كفاءة النظام.',
    icon: FingerPrintIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">تطوير برمجيات مخصصة</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            حلول برمجية مخصصة تلبي احتياجات عملك
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            نحن متخصصون في إنشاء حلول برمجية مخصصة مصممة لتحسين عمليات عملك. نقدم لك حلولًا مرنة وقابلة للتوسع تتماشى مع متطلباتك الفريدة.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pr-16 flex items-center text-right">
                <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <div className="mr-12">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

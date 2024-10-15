

import { useState } from 'react';

const tabsData = [
    {
        label: 'الحسابات',
        content: 'تتبع رواتب الجميع ومدى دفعها أم لا. لا يدعم الايداع المباشر.',
        image: '/assets/erp/accounting.png'
    },
    {
        label: 'التصنيع',
        content: 'جميع إيصالاتك منظمة في مكان واحد، طالما أنك لا مانع من كتابة البيانات يدويًا.',
        image: '/assets/erp/purchasing.png'
    },
    {
        label: 'مشتريات',
        content: 'نبيع برامجنا فقط لشركات لا تعامل مع ضريبة القيمة المضافة على الإطلاق، لذا فنحن ننفذ كل ما يتعلق بالضريبة القيمة المضافة الذي يحتاجه.',
        image: '/assets/erp/manufacture.png'
    },
    {
        label: 'تقارير',
        content: 'يمكنك تصدير بياناتك بسهولة إلى جدول بيانات إكسل حيث يمكنك فعل ما شئت به.',
        image: '/assets/erp/manufacture.png'
    },
    {
        label: 'ادارة موارد بشرية',
        content: 'يمكنك تصدير بياناتك بسهولة إلى جدول بيانات إكسل حيث يمكنك فعل ما شئت به.',
        image: '/assets/erp/accounting.png'
    }
];

export default function GlassTabsInterface() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center p-20">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden w-full max-w-6xl">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-8">
                        <h2 className="text-4xl font-bold text-white mb-6">الوظائف الرئيسية</h2>
                        <p className="text-blue-100 mb-8"> يوفر هذا النظام حلولًا متقدمة تسهم في تسهيل إدارة الموارد البشرية، المحاسبة، المشتريات، المخزون، الإنتاج، والمبيعات، بالإضافة إلى تحسين التواصل بين الإدارات المختلفة. </p>
                        <div className="space-y-2">
                            {tabsData.map((tab, idx) => (
                                <button
                                    key={idx}
                                    className={`w-full text-left py-3 px-6 rounded-lg transition-all duration-200 ${activeTab === idx
                                        ? 'bg-white bg-opacity-20 text-white shadow-md'
                                        : 'text-blue-100 hover:bg-white hover:bg-opacity-10'
                                        }`}
                                    onClick={() => setActiveTab(idx)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                        <h3 className="text-3xl font-semibold text-white mb-4">{tabsData[activeTab].label}</h3>
                        <p className="text-blue-100 mb-6">{tabsData[activeTab].content}</p>
                        <img
                            src={tabsData[activeTab].image}
                            alt={tabsData[activeTab].label}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
import { XCircleIcon } from '@heroicons/react/24/outline'
import { fetchLang } from '@/app/lib/data';

export default async function Languages() {
    const lang = await fetchLang()
    console.log(lang)
    return (

        <div className="flex flex-col gap-2 w-full px-6 p-3 rounded-md bg-gray-200">
            <h4 className="text-xl font-md text-gray-600">Languages</h4>
            <div className="flex flex-col gap-2 mt-4">
                {lang.map((item, index) => (
                    <div key={index} className="flex  items-center justify-around bg-yellow-200 shadow-lg p-2 rounded-md">
                        <p className="font-bold text-gray-700">{item.language}
                        </p>
                        <XCircleIcon className="h-5 w-5 ml-auto cursor-pointer hover:text-white hover:bg-red-500 rounded-full" />
                    </div>
                ))}
            </div>
        </div>
    )
}
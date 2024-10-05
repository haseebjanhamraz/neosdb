
import Settings from "@/app/ui/dashboard/settings/page"


export default async function Page() {
    return (
        <div className="">
            <div className="w-full over-">
                <div className="m-4">
                    <h1 className="text-2xl font-md">Settings</h1>
                </div>
                <Settings />
            </div>
        </div>
    )
}
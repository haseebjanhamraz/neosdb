import Image from "next/image"
import { fetchUsers } from '@/app/lib/data';
export default async function User() {
    const user = await fetchUsers();
    return (
        <div className="flex flex-col gap-2 w-full px-6 p-3 rounded-md bg-gray-200">
            <h4 className="text-xl font-md text-gray-600">User</h4>
            <div className="flex flex-col gap-2 mt-4 shadow-lg">
                <div className="flex flex-col items-center justify-center gap-2  p-2 rounded-md">
                    <div className="w-32">
                        <Image
                            className="rounded-full"
                            src={"/customers/balazs-orban.png"} alt="Profile Image" width={100} height={100} />
                    </div>
                    <div className="text-center">
                        <h4 className="font-bold text-yellow-500">{user.name}</h4>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
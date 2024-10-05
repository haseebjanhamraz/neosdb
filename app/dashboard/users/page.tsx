import UsersPage from "@/app/ui/dashboard/users/page"
import { fetchUsers } from '@/app/lib/data';
export default async function Users() {
    const users = await fetchUsers();
    return (
        <UsersPage users={users} />
    )
}
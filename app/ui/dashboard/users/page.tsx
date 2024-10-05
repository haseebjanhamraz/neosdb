export default function UsersPage(users: string) {
    console.log(users)
    return (
        <div>
            <h2>{users.name}</h2>
            <h1>Users Page</h1>
            {users.map((user) => (
            ))};
        </div>
    )
}
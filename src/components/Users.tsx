import { useQuery } from "@tanstack/react-query";

type User = {
    id: number;
    name: string;
};

function Users() {
    const { data, isLoading, error } = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            return res.json();
        },
    });

    if (isLoading) return <p>Loading users...</p>;

    if (error) return <p>Error loading users.</p>;

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>👥 Users</h2>

            <ul>
                {data?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
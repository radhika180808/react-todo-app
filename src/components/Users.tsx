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

    if (isLoading) {
        return (
            <div style={{ marginTop: "20px" }}>
                <h2>⏳ Loading Users...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ marginTop: "20px", color: "red" }}>
                <h2>❌ Failed to load users.</h2>
                <p>Please try again later.</p>
            </div>
        );
    }

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>👥 Users</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {data?.map((user) => (
                    <li
                        key={user.id}
                        style={{
                            padding: "10px",
                            margin: "8px 0",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                        }}
                    >
                        👤 {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
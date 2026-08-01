import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function CreateUser() {
    const [name, setName] = useState("");
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (newUser: { name: string }) => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            return res.json();
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
            alert("User Created Successfully!");
            setName("");
        },
    });

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>➕ Create User</h2>

            <input
                type="text"
                placeholder="Enter user name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button
                onClick={() => mutation.mutate({ name })}
                style={{ marginLeft: "10px" }}
            >
                Add User
            </button>
        </div>
    );
}

export default CreateUser;
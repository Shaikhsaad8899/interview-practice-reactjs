import React from "react";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

// Initialize TanStack Query Client
const queryClient = new QueryClient();

// API Fetch Function (GET)
const fetchUsers = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

// API Post Function (POST)
const addUser = async (user) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
  return response.data;
};

const UsersComponent = () => {
  const queryClient = useQueryClient();

  // Fetch Users
  const { data: users, isLoading, isError, error } = useQuery({
    queryKey: ["users"], 
    queryFn: fetchUsers,
  });

  // Mutation to Add User
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // Refresh user list after adding a new user
    },
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button 
        onClick={() => mutation.mutate({ name: "New User" })}
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? "Adding..." : "Add User"}
      </button>

      {mutation.isError && <p>Error adding user: {mutation.error.message}</p>}
      {mutation.isSuccess && <p>User added successfully!</p>}
    </div>
  );
};

// Wrap App with QueryClientProvider
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersComponent />
    </QueryClientProvider>
  );
}

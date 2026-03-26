"use client"

import {useUserData } from "../services/userService"
import type { User } from "../types";


export default function User() {
    const { data, error, isLoading } = useUserData();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching user data</div>;

    const users:User[] = data || [];

    return (
        <div className="min-h-screen bg-gray-100 p-6" >

            {/* Display users */}
            <div>
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Users
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {users.map((user: User) => (
                    <div
                        key={user.id}
                        className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
                    >
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3">
                            {user.name.charAt(0)}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                        <p className="text-gray-500 text-sm">{user.email}</p>
                    </div>
                ))}
            </div>
            </div>

            <div>
                
            </div>
            
        </div >
    )
}
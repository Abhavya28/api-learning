"use client"

import { useQuery } from "@tanstack/react-query";
import HttpService from "../libs/http"

const getUserData = async() =>{
    const {data} = await HttpService.get("https://jsonplaceholder.typicode.com/users");
    return data;
}



export const useUserData = () => {
    return useQuery({
        queryKey: ["userData"],
        queryFn: getUserData,
    });
};
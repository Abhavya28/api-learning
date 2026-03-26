"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import HttpService from "../libs/http";
import type { Post, User } from "../types";

/// ===== USER =====
const getUserData = async () => {
  const { data } = await HttpService.get("/users");
  return data;
};

export const useUserData = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUserData,
  });
};

/// ===== POSTS =====
const getPosts = async () => {
  const { data } = await HttpService.get("/posts");
  return data;
};

export const usePosts = () => {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};

const createPost = async (payload: { title: string; body: string }) => {
  const { data } = await HttpService.post("/posts", payload);
  return data;
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts"], (oldData: any) => {
        return [newPost, ...(oldData || [])];
      });
    },
  });
};

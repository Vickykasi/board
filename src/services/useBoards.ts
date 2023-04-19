import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const key = "7f61c893412c8cdbef3f6660572c596a";
const token =
  "ATTA00fc77f82c43422f0c3a103bfa6b0773359d6aeaa5c3ab0e667e485a63d53e00DA9C262B";
const auth = `key=${key}&token=${token}`;
const endpoint = "https://api.trello.com/1";

export interface IBoard {
  id: string;
  name: string;
}

export const useBoards = () =>
  useQuery<IBoard[]>(["boards"], async () => {
    const { data } = await axios.get(`${endpoint}/members/me/boards?${auth}`);
    return data;
  });

export const useCreateBoard = () => {
  const queryClient = useQueryClient();

  return useMutation<IBoard, Error, string, any>(
    async (name: string) => {
      const { data } = await axios.post(
        `${endpoint}/boards?name=${name}&${auth}`
      );
      return data;
    },
    {
      onSuccess: () => queryClient.refetchQueries(["boards"]),
    }
  );
};

export const useUpdateBoard = (id: string) => {
  return useMutation<IBoard, Error, any, any>(async (name: string) => {
    const { data } = await axios.put(
      `${endpoint}/boards/${id}?name=${name}&${auth}`
    );
    return data;
  });
};

export const useDeleteBoard = () => {
  return useMutation<string, Error, string, any>(async (id: string) => {
    const { data } = await axios.delete(`${endpoint}/boards/${id}?${auth}`);
    return data;
  });
};

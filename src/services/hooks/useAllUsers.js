import { useGetUsersQuery } from "../getUsers";

export const useAllUsers = () => {
    const { data } = useGetUsersQuery(null)
    const allUsers = data?.map((i) => i)

    return { allUsers };
}
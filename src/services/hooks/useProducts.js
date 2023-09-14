import { useGetAllProductsQuery } from "services/productsApi";


export const useAllProducts = () => {
    const { data } = useGetAllProductsQuery(null)
    const useAllProducts = data?.map((i) => i)

    return { useAllProducts };
}


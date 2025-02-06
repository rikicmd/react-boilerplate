import ApiService from "@/core/api-service.core";
import { Example, MainHook } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";

export default function useMainPage(): MainHook {
  const example = useQuery({
    queryKey: ["example"],
    queryFn: ApiService.fetchData<Example[]>({ url: "/api/example" }),
  });

  return {
    example,
  };
}

import { UseQueryResult } from "@tanstack/react-query";

export interface Example {
  id: string;
  title: string;
}

export interface MainHook {
  example: UseQueryResult<Example[], Error>;
}

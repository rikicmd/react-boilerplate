import { Chance } from "chance";
import { http, HttpResponse } from "msw";

const chance = new Chance(Math.random);

export const exampleMocksHandler = [
  http.get(`/api/example`, () => {
    return HttpResponse.json(
      [...Array(10).keys()].map((_) => ({
        id: chance.guid(),
        title: chance.first(),
      }))
    );
  }),
];

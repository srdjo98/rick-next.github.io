import axios from "axios";

interface FilterDataProps {
  gender: string;
  status: string;
}

export const getCharacters = (filter?: any) =>
  axios
    .post(
      "https://rickandmortyapi.com/graphql",
      {
        query: `query characters {
          characters {
            results {
              id
              name
              status
              species
              image
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res: any) => res.data);

export const getCharacter = (id: string) =>
  axios
    .post(
      "https://rickandmortyapi.com/graphql",
      {
        query: `query character ($id: ID!) {
            character(id: $id) {
              name
              gender
              image
              location{
                name
                dimension
              }
              episode{
                name
                air_date
                episode
              }
            }
          }`,
        variables: { id: id },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res: any) => res.data);

export const filterCharacters = (filterData: FilterDataProps) =>
  axios
    .post(
      "https://rickandmortyapi.com/graphql",
      {
        query: `query characters ($filter: FilterCharacter) {
            characters (filter: $filter) {
              results {
                id
                name
                status
                species
                image
              }
            }
          }`,
        variables: { filter: filterData },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res: any) => res.data);

export const getLocations = () =>
  axios
    .post(
      "https://rickandmortyapi.com/graphql",
      {
        query: `query locations  {
          locations {
            results {
              id
              name
              dimension
            }
          }
        }`,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res: any) => res.data);

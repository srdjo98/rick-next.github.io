import axios from "axios";

export const getCharacters = () =>
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

export const getLocations = () =>
  axios
    .post(
      "https://rickandmortyapi.com/graphql",
      {
        query: `query locations  {
          locations {
            results {
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

import {gql} from '@apollo/client';

export const GET_ANIME = gql`
  query GetAnime($id: ID!) {
    anime(id: $id) {
      title
      images {
        jpg {
          image_url
          small_image_url
          large_image_url
        }
        webp {
          image_url
          small_image_url
          large_image_url
        }
      }
      episodes
      synopsis
      genres {
        name
      }
    }
  }
`;
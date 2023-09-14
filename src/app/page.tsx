"use client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const launchesQuery = gql`
  query LaunchesQuery {
    launches {
      id
      details
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;


export default function Home() {
  const { loading, error, data } = useQuery(launchesQuery);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return (<div>
    {
      data.launches.map((launch: any) => (
        <ul>
          <li key={launch.id}>{launch.mission_name}</li>
        </ul>
      ))}
  </div>
  );
}

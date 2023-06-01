'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState<any>(null);
  const apiUrl = 'https://cdh.digitalfastforward.cloud:8443/prweb/PRRestService/PegaMKTContainer/V3/Container';
  const params = {
    SubjectID: 'CONT-1',
    ContextName: 'Customer',
    ContainerName: 'NextBestAction',
    Channel: 'Web',
    Direction: 'Inbound',
    AppID: 'CDHDemo',
    Placements: 'Hero,Tile,Tile,Tile',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, { params });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Next Best Action</h1>
          {data.ContainerList.map((container: any) => (
            <div key={container.ContainerName}>
              <h2>{container.ContainerName}</h2>
              {container.RankedResults.map((result: any) => (
                <div key={result.InteractionID}>
                  <h3>{result.Treatment}</h3>
                  <p>{result.ShortDescription}</p>
                  <img src={result.ImageURL} alt={result.Treatment} />
                  <a href={result.ClickThroughURL}>Learn More</a>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;

'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
//import Skeleton from '@/_components/_placeholder/default_skeleton';
import Image from '@/_components/_placeholder/image_placeholder';

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
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
    <div>
      {data ? (
        <div className=''>
          {data.ContainerList.map((container: any) => (
            <div key={container.ContainerName}>
              <h2>{container.ContainerName}</h2>
              {container.RankedResults.map((result: any) => (
                <div key={result.Rank} className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10'>
                  <div className=''>
                    <div className='md:shrink-0'>
                        <img className='h-48 w-full object-cover md:h-full md:48' src={result.ImageURL} alt={result.Treatment} />
                    </div>
                    <div className='p-8'>
                        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>{result.Label}</div>
                        <p className='mt-2 text-slate-500'>{result.Benefits}</p>
                        <a href={result.ClickThroughURL} className='text-sky-400'>
                            Learn More                
                        </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <Image/>
      )}
    </div>
    </main>
  );
};

export default MyComponent;

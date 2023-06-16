'use client'
import { FC, useEffect, useState } from 'react';
import axios from 'axios';


interface InteractionCallProps {
  content: {
    classID: string;
    pyLabel: string;
    pyID: string;
    pyViewName: string;
    pyViewContext: string;
    pxUrgencyWork: number;
    pxCreateOperator: string;
    pxUpdateDateTime: string;
    pxUpdateOperator: string;
    pxCreateDateTime: string;
    pyStatusWork: string;
    pyCaseLinks: any[]; // Change the type if needed
  };
  caseTypeID: string;
  owner: string;
  associations: {
    follows: boolean;
  };
}

const InteractionCall: FC<InteractionCallProps> = ({ content, caseTypeID, owner, associations }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Interaction Call Details</h1>
      <div className="flex flex-col">
        <div className="mb-2">
          <span className="font-bold">Class ID:</span> {content.classID}
        </div>
        <div className="mb-2">
          <span className="font-bold">Label:</span> {content.pyLabel}
        </div>
        <div className="mb-2">
          <span className="font-bold">ID:</span> {content.pyID}
        </div>
        <div className="mb-2">
          <span className="font-bold">View Name:</span> {content.pyViewName}
        </div>
        <div className="mb-2">
          <span className="font-bold">View Context:</span> {content.pyViewContext}
        </div>
        <div className="mb-2">
          <span className="font-bold">Urgency Work:</span> {content.pxUrgencyWork}
        </div>
        <div className="mb-2">
          <span className="font-bold">Create Operator:</span> {content.pxCreateOperator}
        </div>
        <div className="mb-2">
          <span className="font-bold">Update Date Time:</span> {content.pxUpdateDateTime}
        </div>
        <div className="mb-2">
          <span className="font-bold">Update Operator:</span> {content.pxUpdateOperator}
        </div>
        <div className="mb-2">
          <span className="font-bold">Create Date Time:</span> {content.pxCreateDateTime}
        </div>
        <div className="mb-2">
          <span className="font-bold">Status Work:</span> {content.pyStatusWork}
        </div>
        <div className="mb-2">
          <span className="font-bold">Case Links:</span> {content.pyCaseLinks.join(', ')}
        </div>
      </div>
      <div className="mt-4">
        <span className="font-bold">Case Type ID:</span> {caseTypeID}
      </div>
      <div className="mt-2">
        <span className="font-bold">Owner:</span> {owner}
      </div>
      <div className="mt-2">
        <span className="font-bold">Follows:</span> {associations.follows ? 'Yes' : 'No'}
      </div>
    </div>
  );
};

const AuthorizedAPI:  FC = () => {
  const [data, setData] = useState<InteractionCallProps | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fecthing data");
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
        const apiUrl = 'https://cdh.digitalfastforward.cloud:8443/prweb/api/application/v2//assignments/next';

        // Replace 'YOUR_ACCESS_TOKEN' with the actual access token
        const accessToken = 'eyJraWQiOiJmMThiZDFmZDIxNDljYTcyNWJjZjc5ZGRjODI1MTgzZSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJhdWQiOiJ1cm46MTA0MTcxMDUyMzkwNTM0NTYxMTUiLCJzdWIiOiJib3Bha2lAZGlnaXRhbGZhc3Rmb3J3YXJkLmNvbSIsImFwcF9uYW1lIjoiQ1NEZW1vIiwibmJmIjoxNjg0NzcxOTEzLCJhcHBfdmVyc2lvbiI6IjAxLjAxLjAxIiwiaXNzIjoidXJuOmNkaC5kaWdpdGFsZmFzdGZvcndhcmQuY2xvdWQiLCJleHAiOjE2ODQ3NzU1MTMsImlhdCI6MTY4NDc3MTkxMywianRpIjoiOGIwYmMyOTJhZDJjZmIyNDdhYWRiOGIyODY4MTRkYzgiLCJvcGVyYXRvcl9hY2Nlc3MiOiJDU0RlbW86Q1NBZG1pbiJ9.e4l7x9ORpX-i7DLMNW4Xb-ILe9MaLR9f1DsrQ4HIZ2aEkGpdBNav0QLiGrEmzefVgKoeQrJmYEGw9FqZ-kYvYdGr7vJnRxRCXzSDbjURnnl3NPJX7exydMRcpdyDA0RW6qcKLkpjinfBdD5aBl39TvuXvpv1WvAtI8fl44gs-yLZmu7IEr_MjQ1Glujgp_YlXufJKZh-2Z2zBA2CwJiXicEAU3CwhLk6vfxyTndQNTPfbEePWm24_l3dh1qmINT4TI0us_Gfhiu2OcPo7cFTtrRKse-IgH1J7TxuiFIOdbyli-N8jH-1jtIogExtjglp1Q6y_7IaAKWFpHuD5uRBn7KsmOTx49G56ctp81tmszUR-5QW2K7xAd0DRmdjXkzBh9WEKMK2pGb2kAw6C6CZBMaoutTOp10a1AUuaoF6Azxq_lctZr2WgAvB5ChP8sUi0buJiWv6F8aGJbWgEVROGNkoTVRY9p_Y9Ch64MPC_qdBnXBQNyFkCRYOxhlXYQRb5DY8W3_m4zOh-5VYNg-uuTu0u247HjGePMADFqORwBY7OCUbGqOp_B5XMkJWFZ7q-3b8m2k7V1DHCaFXRxBRx48g_q3TISMx6rqU37-jnrZODKEElz0DwgjVaHy1rgClvK5UxzzPD-HslRzKvF8n7G3eDDnfDE9H_h30_oOsREA';

        // Set the authorization header with the access token
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        // Make the authorized API request
        const response = await axios.get(apiUrl, { headers });
        data 
        // Set the response data
        setData(response.data);

        //console.log("JSON"+JSON.parse(response,data))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Authorized API Request</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AuthorizedAPI;

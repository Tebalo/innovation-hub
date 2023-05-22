'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorizedAPI = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
        const apiUrl = 'https://cdh.digitalfastforward.cloud:8443/prweb/api/application/v2//assignments/next';

        // Replace 'YOUR_ACCESS_TOKEN' with the actual access token
        const accessToken = 'eyJraWQiOiJmMThiZDFmZDIxNDljYTcyNWJjZjc5ZGRjODI1MTgzZSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJhdWQiOiJ1cm46MTA0MTcxMDUyMzkwNTM0NTYxMTUiLCJzdWIiOiJib3Bha2lAZGlnaXRhbGZhc3Rmb3J3YXJkLmNvbSIsImFwcF9uYW1lIjoiQ1NEZW1vIiwibmJmIjoxNjg0NzY0OTMzLCJhcHBfdmVyc2lvbiI6IjAxLjAxLjAxIiwiaXNzIjoidXJuOmNkaC5kaWdpdGFsZmFzdGZvcndhcmQuY2xvdWQiLCJleHAiOjE2ODQ3Njg1MzMsImlhdCI6MTY4NDc2NDkzMywianRpIjoiMjJiOWVmNjcyMTY3MGQxYWM5NTUzMTRjNzQ1ZjkyNGYiLCJvcGVyYXRvcl9hY2Nlc3MiOiJDU0RlbW86Q1NBZG1pbiJ9.cekQtpx1lPb-VLqW15QyOFvsO-MVq9TV3rn226FaU6R-XA6QmspyHrkx13yoL5MYbxF8h28WcCmzl1hEBkzCwb7o0jfhggeJfYZ0Eq0nfU21vqtvoG0OX2v5ryDFkpZF_kj5WqB9Q8Lo2GarELqPw73120iamcCNSzyUtsz2P_ssUGuS28Fi2wm4KA2WmfHwaBHOpJ3GY914gLot8MjQFVFOYNptQrMNmhiiKFq3tCPtBh2tY5AsqWcr8CBoxxHHRdwqrRcnkHiDneyYItOqMjKFaXWrQD4vGF5_2FMNu2jazXmNksTxKsmNi7CF22Vgu69uPkMQzYX1-HaQ6A1GPIua7j-uvOdTSc_d8j7LtdYL0HFvFUAu5C8kruxioz77FJceyOdckBDpNXWOnuxtl9ts-YF2rRq5_LhpArU_IsyUCqYk0PMBoQ8p8_KePvNUr_F6ZMRxv_gu-RCUZxNqxcDJksPe8kOG39DDcVZ8HsO5rpBqcbId-Gpayl4b_i9sI9NF_MI2y--kyLesW7wJTFq4S176NFkgPGdFdxcF9ZIMA2aSQ9Hyq9hZBrwk3HA5AGRxYelef_MZpQG9GeoK1qAc82V7AEniC70wnXdURBCzwelcuGF_NnA5sZl8rL69IxlloUDOtiqzOxYlLA-9_sHkwGPUOo55hvBfFwocgUk';

        // Set the authorization header with the access token
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        // Make the authorized API request
        const response = await axios.get(apiUrl, { headers });

        // Set the response data
        setData(response.data);
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

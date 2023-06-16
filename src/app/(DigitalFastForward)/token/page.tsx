'use client'
import { useState } from 'react';
import axios from 'axios';

const TokenFetcher = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleTokenFetch = async () => {
    try {
      // Replace 'YOUR_TOKEN_ENDPOINT' with the actual token endpoint URL
      const tokenEndpoint = 'https://cdh.digitalfastforward.cloud:8443/prweb/PRRestService/oauth2/v1/token';

      // Replace 'YOUR_CLIENT_ID' and 'YOUR_CLIENT_SECRET' with your OAuth client credentials
      const clientId = '10417105239053456115';
      const clientSecret = 'B77CEAAC7AE17A39CC1730B7058CDBBC';

      // Set the request payload
      const payload = new URLSearchParams();
      payload.append('grant_type', 'password');
      payload.append('username', username);
      payload.append('password', password);

      // Set the authorization header with the client credentials
      const headers = {
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      // Send the token request
      const response = await axios.post(tokenEndpoint, payload, { headers });

      // Extract the access token from the response
      const { access_token } = response.data;

      // Set the access token
      setAccessToken(access_token);
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  return (
    <div className="max-w-xs mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Token Fetcher</h1>
      <div className="mb-4">
        <label className="block mb-2">
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="block w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="block w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>
      <button
        onClick={handleTokenFetch}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Fetch Access Token
      </button>
      {accessToken && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Access Token</h2>
          <p className="bg-gray-100 px-4 py-2 rounded-md">{accessToken}</p>
        </div>
      )}
    </div>
  );
};

export default TokenFetcher;

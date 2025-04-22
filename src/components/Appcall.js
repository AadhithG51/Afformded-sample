import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiCall = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post('http://[20.244.56.144]/evaluation-service/auth', {
          email: "ramkrishna@abc.edu",
          name: "Ram Krishna",
          rollNo: "aa1bb",
          accessCode: "xgASnC",
          clientID: "d9cb699-6a27-44a5-8d59-8b1befa816da",
          clientSecret: "tVJaaRB5eXCrXeM"
        });
        setToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };
    fetchToken();
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800">API Token</h2>
      <p className="mt-2 text-gray-600">Token: {token || 'Loading...'}</p>
    </div>
  );
};

export default ApiCall;
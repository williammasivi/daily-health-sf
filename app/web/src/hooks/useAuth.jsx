import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      // try {
      //   const response = await axios.get('http://localhost:5000/api/auth/validate-token', {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });

      //   if (!response.data.valid) {
      //     navigate('/login');
      //   }
      // } catch (error) {
      //   navigate('/login');
      // }
    };

    checkToken();
  }, [navigate]);
};

export default useAuth;
import { useState, useEffect } from 'react';
/* 
  this hook was borrowed from 
  https://github.com/fullstack-hy2020/fullstack-hy2020.github.io/blob/source/src/content/10/en/part10c.md
  and was developed further by me. */

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.8.110:5001/api/repositories');
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;

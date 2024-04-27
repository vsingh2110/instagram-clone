import { useEffect } from 'react';


export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);

  return (
    <p>Not found</p>
  );
}
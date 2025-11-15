// App.jsx
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

const queryClient = new QueryClient();

const fetchUser = async () => {
  const res = await fetch('https://api.github.com/users/octocat');
  if (!res.ok) throw new Error('Network response was not ok');
  const data = await res.json();
  return data;
};


function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['githubUser'],
    queryFn: fetchUser,
  });

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error.message}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
      <img src={data.avatar_url} alt="avatar" width={100} />
    </div>
  );
}

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
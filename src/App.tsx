
import { useEffect } from 'react';
import { TopNavigation, BottomNavigation } from './components/layout/Navigation';
import { useAuthStore } from './store/auth';
import { usePostsStore } from './store/posts';
import { Home } from './pages/Home';
import { Academy } from './pages/Academy';
import Leaderboard from './components/Leaderboard';
import { Messages } from './pages/Messages';
import { Profile } from './pages/Profile';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Landing } from './components/landing';

function App() {
  const { user } = useAuthStore();
  const { posts } = usePostsStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log('App - Initialized with user:', user);
    console.log('App - Initialized with posts:', posts);
  }, [user, posts]);

  if (!user) {
    return <Landing />;
  }

  return (
    <div className="min-h-screen bg-accent text-white">
      <TopNavigation />
      <main className="max-w-2xl mx-auto px-4 py-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/directory" element={<Leaderboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <BottomNavigation />
    </div>
  );
}

export default App;

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Marakbi!</h1>
        <p className="text-gray-600 mb-6">You have successfully logged in.</p>
        <button 
          onClick={handleLogout}
          className="bg-[#093B77] text-white px-6 py-2 rounded-lg hover:bg-[#0a4a94] transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
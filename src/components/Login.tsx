import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simple validation
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, any email/password combination works
      console.log('Login successful:', { email, password, rememberMe });
      
      // Navigate to home page or dashboard
      navigate('/');
      
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onNavigate = (route: string) => {
    navigate(`/${route}`);
  };

  return (
    <div style={{ 
      display: 'flex', 
      width: '100vw', 
      height: '100vh', 
      fontFamily: 'Poppins, sans-serif',
      overflow: 'hidden'
    }}>
      {/* Left Side - Image */}
      <div style={{ 
        flex: '0 0 43%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }} 
          src="/images/Rectangle 3463861.png" 
          alt="Sailboat"
        />
        
        {/* Circle Background */}
        <div style={{ 
          position: 'absolute', 
          top: '27px', 
          left: '37px'
        }}>
          <img 
            src="/icons/Ellipse 46.svg" 
            alt="Circle Background"
            style={{ width: '174px', height: '174px' }}
          />
          
          {/* Logo */}
          <div style={{ 
            position: 'absolute', 
            top: '49%', 
            left: '52%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/logo.png" 
              alt="Marakbi Logo"
              style={{ height: '110px' }}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div style={{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        padding: '40px'
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '480px',
          padding: '0 20px'
        }}>
          {/* Header */}
          <h1 style={{ 
            fontSize: '42px', 
            fontWeight: '700',
            color: 'black',
            marginBottom: '10px',
            textAlign: 'center'
          }}>
            Welcome Back
          </h1>
          <p style={{ 
            fontSize: '22px', 
            fontWeight: '500',
            color: '#7D7D7D',
            marginBottom: '60px',
            textAlign: 'center',
            textTransform: 'capitalize'
          }}>
            log in to continue your adventure
          </p>

          {/* Form */}
          <form onSubmit={handleLogin}>
            {/* Email Field */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ 
                display: 'block',
                color: '#616161',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '10px',
                textTransform: 'capitalize'
              }}>
                Email
              </label>
              <input 
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ 
                  width: '100%',
                  height: '60px',
                  padding: '0 16px',
                  background: '#F7F7F7',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '14px',
                  color: '#7D7D7D',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block',
                color: '#616161',
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '10px',
                textTransform: 'capitalize'
              }}>
                Password
              </label>
              <input 
                type="password"
                placeholder="**************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ 
                  width: '100%',
                  height: '60px',
                  padding: '0 16px',
                  background: '#F7F7F7',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '14px',
                  color: '#7D7D7D',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            {/* Remember Me & Forget Password */}
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px'
            }}>
              <label style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}>
                <div
                  onClick={() => setRememberMe(!rememberMe)}
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '1.5px solid #7D7D7D',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {rememberMe && <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#7D7D7D'
                  }} />}
                </div>
                <span style={{ 
                  color: '#7D7D7D',
                  fontSize: '16px',
                  textTransform: 'capitalize'
                }}>
                  Remember me
                </span>
              </label>
              <button 
                type="button" 
                onClick={() => navigate('/forgot-password')}
                style={{
                  color: '#106BD8',
                  fontSize: '16px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                Forget Password?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div style={{ 
                marginBottom: '16px', 
                padding: '12px',
                background: '#FEE2E2',
                border: '1px solid #FECACA',
                borderRadius: '8px',
                color: '#DC2626',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}

            {/* Login Button */}
            <button 
              type="submit"
              disabled={loading}
              style={{ 
                width: '100%',
                height: '52px',
                background: '#093B77',
                borderRadius: '8px',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                marginBottom: '30px',
                transition: 'background 0.3s',
                opacity: loading ? 0.5 : 1
              }}
              onMouseOver={(e) => !loading && (e.currentTarget.style.background = '#0a4a94')}
              onMouseOut={(e) => !loading && (e.currentTarget.style.background = '#093B77')}
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>

            {/* Sign Up Link */}
            <p style={{ 
              textAlign: 'center',
              fontSize: '16px',
              color: '#7D7D7D',
              textTransform: 'capitalize'
            }}>
              You Don't Have An Account?{' '}
              <button
                type="button"
                onClick={() => onNavigate('signup')}
                style={{ 
                  color: '#106BD8',
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
   </div>
  );
}

export default Login;
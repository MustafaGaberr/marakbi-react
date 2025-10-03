import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validation
      if (!password || !confirmPassword) {
        setError('Please fill in all password fields');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Password set successfully:', { password });
      
      // Navigate to home page
      navigate('/');
      
    } catch (err) {
      console.error('Set password error:', err);
      setError('Failed to set password. Please try again.');
    } finally {
      setLoading(false);
    }
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
          src="/images/Rectangle 3463876.png" 
          alt="Set password background"
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
        padding: '80px',
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '480px',
        }}>
          {/* Header */}
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: '700',
            color: 'black',
            marginBottom: '12px',
            textAlign: 'left'
          }}>
            Set a password
          </h1>
          <p style={{ 
            fontSize: '16px', 
            fontWeight: '400',
            color: '#7D7D7D',
            marginBottom: '40px',
            textAlign: 'left',
            lineHeight: '1.4'
          }}>
            Your previous password has been reseted. Please set a new password for your account.
          </p>

          {/* Password Form */}
          <form onSubmit={handleSetPassword}>
            {/* Create Password Field */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block',
                color: 'black',
                fontSize: '15px',
                fontWeight: '400',
                marginBottom: '8px'
              }}>
                Create Password
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="**************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ 
                    width: '100%',
                    height: '52px',
                    padding: '0 45px 0 14px',
                    background: '#F7F7F7',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '15px',
                    color: 'black',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#7D7D7D' }}>
                    {showPassword ? (
                      // Eye with slash (hidden)
                      <>
                        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M7 7l10 10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M3 13c1.5-3 4.5-5 9-5s7.5 2 9 5" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </>
                    ) : (
                      // Normal eye (visible)
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" fill="currentColor"/>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Re-Enter Password Field */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block',
                color: 'black',
                fontSize: '15px',
                fontWeight: '400',
                marginBottom: '8px'
              }}>
                Re-Enter Password
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="**************"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ 
                    width: '100%',
                    height: '52px',
                    padding: '0 45px 0 14px',
                    background: '#F7F7F7',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '15px',
                    color: 'black',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: '#7D7D7D' }}>
                    {showConfirmPassword ? (
                      // Eye with slash (hidden)
                      <>
                        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M7 7l10 10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M3 13c1.5-3 4.5-5 9-5s7.5 2 9 5" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </>
                    ) : (
                      // Normal eye (visible)
                      <>
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" fill="currentColor"/>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div style={{ 
                marginBottom: '24px', 
                padding: '12px',
                background: '#FEE2E2',
                border: '1px solid #FECACA',
                borderRadius: '8px',
                color: '#DC2626',
                fontSize: '14px',
                textAlign: 'center'
              }}>
                {error}
              </div>
            )}

            {/* Set Password Button */}
            <button 
              type="submit"
              disabled={loading || !password || !confirmPassword}
              style={{ 
                width: '100%',
                height: '48px',
                background: loading || !password || !confirmPassword ? '#9CA3AF' : '#093B77',
                borderRadius: '8px',
                border: 'none',
                color: 'white',
                fontSize: '15px',
                fontWeight: '500',
                cursor: loading || !password || !confirmPassword ? 'not-allowed' : 'pointer',
                transition: 'background 0.3s',
                opacity: loading ? 0.5 : 1
              }}
              onMouseOver={(e) => {
                if (!loading && password && confirmPassword) {
                  e.currentTarget.style.background = '#0a4a94';
                }
              }}
              onMouseOut={(e) => {
                if (!loading && password && confirmPassword) {
                  e.currentTarget.style.background = '#093B77';
                }
              }}
            >
              {loading ? 'Setting Password...' : 'Set Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SetPassword;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validation
      if (!fullName || !email || !password || !confirmPassword) {
        setError('Please fill in all fields');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      if (!agreeTerms) {
        setError('Please agree to the Terms of Service and Privacy Policy');
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Sign up successful:', { fullName, email, password, agreeTerms });
      
      // Navigate to verification page
      navigate('/verify-code');
      
    } catch (err) {
      console.error('Sign up error:', err);
      setError('Sign up failed. Please try again.');
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
          src="/images/Rectangle 3463873.png" 
          alt="Yacht background"
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        background: 'white',
        padding: '50px 20px 50px 20px',
      }}>
        <div style={{ 
          width: '100%', 
          maxWidth: '420px',
        }}>
          {/* Header */}
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: '700',
            color: 'black',
            marginBottom: '8px',
            textAlign: 'center'
          }}>
            Welcome Back
          </h1>
          <p style={{ 
            fontSize: '18px', 
            fontWeight: '500',
            color: '#7D7D7D',
            marginBottom: '32px',
            textAlign: 'center'
          }}>
            Join us and start your next adventure
          </p>

          {/* Form */}
          <form onSubmit={handleSignUp}>
            {/* Full Name Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block',
                color: '#616161',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '8px',
                textTransform: 'capitalize'
              }}>
                Full Name
              </label>
              <input 
                type="text"
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ 
                  width: '100%',
                  height: '52px',
                  padding: '0 14px',
                  background: '#F7F7F7',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '15px',
                  color: '#7D7D7D',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block',
                color: '#616161',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '8px',
                textTransform: 'capitalize'
              }}>
                Email Address
              </label>
              <input 
                type="email"
                placeholder="Your@Example.Com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ 
                  width: '100%',
                  height: '52px',
                  padding: '0 14px',
                  background: '#F7F7F7',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '15px',
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
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '8px',
                textTransform: 'capitalize'
              }}>
                Password
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
                    color: '#7D7D7D',
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
                    right: '16px',
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

            {/* Confirm Password Field */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ 
                display: 'block',
                color: '#616161',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '8px',
                textTransform: 'capitalize'
              }}>
                Confirm Password
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
                    color: '#7D7D7D',
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
                    right: '16px',
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

            {/* Terms Agreement */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                cursor: 'pointer',
                fontSize: '13px',
                color: '#7D7D7D',
                lineHeight: '1.4'
              }}>
                <div
                  onClick={() => setAgreeTerms(!agreeTerms)}
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '4px',
                    border: '1.5px solid #7D7D7D',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  {agreeTerms && <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '2px',
                    background: '#7D7D7D'
                  }} />}
                </div>
                <span>
                  I Agree To The{' '}
                  <a 
                    href="#" 
                    style={{ color: '#106BD8', textDecoration: 'none' }}
                  >
                    Terms Of Service
                  </a>
                  {' '}And{' '}
                  <a 
                    href="#" 
                    style={{ color: '#106BD8', textDecoration: 'none' }}
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
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

            {/* Sign Up Button */}
            <button 
              type="submit"
              disabled={loading}
              style={{ 
                width: '100%',
                height: '48px',
                background: '#093B77',
                borderRadius: '8px',
                border: 'none',
                color: 'white',
                fontSize: '15px',
                fontWeight: '500',
                cursor: 'pointer',
                marginBottom: '20px',
                transition: 'background 0.3s',
                opacity: loading ? 0.5 : 1
              }}
              onMouseOver={(e) => !loading && (e.currentTarget.style.background = '#0a4a94')}
              onMouseOut={(e) => !loading && (e.currentTarget.style.background = '#093B77')}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>

            {/* Sign In Link */}
            <p style={{ 
              textAlign: 'center',
              fontSize: '14px',
              color: '#7D7D7D',
              marginBottom: '20px'
            }}>
              You Have An Account?{' '}
              <button
                type="button"
                onClick={() => onNavigate('login')}
                style={{ 
                  color: '#106BD8',
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Sign In
              </button>
            </p>

             {/* Separator */}
             <div style={{ 
               display: 'flex',
               alignItems: 'center',
               margin: '20px 0'
             }}>
               <div style={{ 
                 flex: 1,
                 height: '1px',
                 background: '#E5E7EB'
               }} />
               <span style={{ 
                 padding: '0 14px',
                 fontSize: '14px',
                 color: '#9CA3AF',
                 fontWeight: '400'
               }}>
                 Or continue with
               </span>
               <div style={{ 
                 flex: 1,
                 height: '1px',
                 background: '#E5E7EB'
               }} />
             </div>

             {/* Social Login Icons */}
             <div style={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               width: '100%',
               padding: '0 50px',
               marginBottom: '16px'
             }}>
              {/* Facebook */}
              <button
                type="button"
                onClick={() => console.log('Facebook login clicked')}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px'
                }}
              >
                <img 
                  src="/icons/flat-color-icons_fb.svg" 
                  alt="Facebook"
                  style={{ width: '32px', height: '32px' }}
                />
              </button>

              {/* Google */}
              <button
                type="button"
                onClick={() => console.log('Google login clicked')}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px'
                }}
              >
                <img 
                  src="/icons/flat-color-icons_google.svg" 
                  alt="Google"
                  style={{ width: '32px', height: '32px' }}
                />
              </button>

              {/* Apple */}
              <button
                type="button"
                onClick={() => console.log('Apple login clicked')}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px'
                }}
              >
                <img 
                  src="/icons/flat-color-icons_apple.svg" 
                  alt="Apple"
                  style={{ width: '32px', height: '32px' }}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

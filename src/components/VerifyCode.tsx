import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyCode() {
  const [code, setCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();

  // Timer for resend functionality
  useEffect(() => {
    let timer: number;
    if (resendTimer > 0) {
      timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [resendTimer ]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    setError('');
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Check if code is entered
      if (!code) {
        setError('Please enter the verification code');
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Verification code:', code);
      
      // Navigate to set password page on success
      navigate('/set-password');
      
    } catch (err) {
      console.error('Verification error:', err);
      setError('Invalid verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    setResendTimer(60);
    setCanResend(false);
    
    try {
      // Simulate resend API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Resend code requested');
      
    } catch (err) {
      console.error('Resend error:', err);
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
          src="/images/Rectangle 3463875.png" 
          alt="Verification background"
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
          maxWidth: '420px',
        }}>
          {/* Navigation */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            marginBottom: '60px'
          }}>
            <button
              type="button"
              onClick={() => navigate('/login')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                color: 'black',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>&lt;</span>
              Back to login
            </button>
          </div>

          {/* Header */}
          <h1 style={{ 
            fontSize: '36px', 
            fontWeight: '700',
            color: 'black',
            marginBottom: '12px',
            textAlign: 'left'
          }}>
            Verify code
          </h1>
          <p style={{ 
            fontSize: '16px', 
            fontWeight: '400',
            color: 'black',
            marginBottom: '40px',
            textAlign: 'left'
          }}>
            An authentication code has been sent to your email.
          </p>

          {/* Verification Code Form */}
          <form onSubmit={handleVerify}>
            {/* Code Input */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block',
                color: 'black',
                fontSize: '15px',
                fontWeight: '400',
                marginBottom: '8px'
              }}>
                Enter Code
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  placeholder="**************"
                  value={code}
                  onChange={handleCodeChange}
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

            {/* Resend Section */}
            <div style={{ 
              marginBottom: '24px'
            }}>
              {canResend ? (
                <p style={{ 
                  fontSize: '15px',
                  color: 'black'
                }}>
                  Didn't Receive A Code?{' '}
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={loading}
                    style={{
                      color: '#106BD8',
                      fontWeight: '500',
                      background: 'none',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      fontSize: '15px',
                      opacity: loading ? 0.5 : 1,
                      textDecoration: 'underline'
                    }}
                  >
                    Resend
                  </button>
                </p>
              ) : (
                <p style={{ 
                  fontSize: '14px',
                  color: '#7D7D7D'
                }}>
                  Resend code in {resendTimer}s
                </p>
              )}
            </div>

            {/* Verify Button */}
            <button 
              type="submit"
              disabled={loading || !code}
              style={{ 
                width: '100%',
                height: '48px',
                background: loading || !code ? '#9CA3AF' : '#093B77',
                borderRadius: '8px',
                border: 'none',
                color: 'white',
                fontSize: '15px',
                fontWeight: '500',
                cursor: loading || !code ? 'not-allowed' : 'pointer',
                transition: 'background 0.3s',
                opacity: loading ? 0.5 : 1
              }}
              onMouseOver={(e) => {
                if (!loading && code) {
                  e.currentTarget.style.background = '#0a4a94';
                }
              }}
              onMouseOut={(e) => {
                if (!loading && code) {
                  e.currentTarget.style.background = '#093B77';
                }
              }}
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyCode;
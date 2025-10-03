import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Simple validation
      if (!email) {
        setError('Please enter your email address');
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Password reset request:', { email });
      setSuccess('Password reset link has been sent to your email');
      
    } catch (err) {
      console.error('Password reset error:', err);
      setError('Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleAppleLogin = () => {
    console.log('Apple login clicked');
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
        flex: '0 0 40%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover'
          }} 
          src="/images/Rectangle 3463879.png" 
          alt="Boat background"
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
          maxWidth: '580px',
          padding: '0 20px'
        }}>
          {/* Back to Login Link */}
          <div style={{ marginBottom: '40px' }}>
            <button
              onClick={() => navigate('/login')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px',
                color: 'black',
                padding: '0'
              }}
            >
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>&lt;</span>
              Back to login
            </button>
          </div>

          {/* Header */}
          <h1 style={{ 
            fontSize: '42px', 
            fontWeight: '700',
            color: 'black',
            marginBottom: '20px',
            textAlign: 'left',
            lineHeight: '1.1'
          }}>
            Forgot your password?
          </h1>
          <p style={{ 
            fontSize: '16px', 
            fontWeight: '400',
            color: 'black',
            marginBottom: '40px',
            lineHeight: '1.5'
          }}>
            Don't worry, happens to all of us. Enter your email below to recover your password
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block',
                color: 'black',
                fontSize: '16px',
                fontWeight: '400',
                marginBottom: '12px'
              }}>
                Email
              </label>
              <input 
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ 
                  width: '100%',
                  height: '60px',
                  padding: '0 16px',
                  background: '#F7F7F7',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '16px',
                  color: '#7D7D7D',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                required
              />
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

            {/* Success Message */}
            {success && (
              <div style={{ 
                marginBottom: '16px', 
                padding: '12px',
                background: '#DCFCE7',
                border: '1px solid #BBF7D0',
                borderRadius: '8px',
                color: '#16A34A',
                fontSize: '14px'
              }}>
                {success}
              </div>
            )}

            {/* Submit Button */}
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
                marginBottom: '40px',
                transition: 'background 0.3s',
                opacity: loading ? 0.5 : 1
              }}
              onMouseOver={(e) => !loading && (e.currentTarget.style.background = '#0a4a94')}
              onMouseOut={(e) => !loading && (e.currentTarget.style.background = '#093B77')}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>

            {/* Separator */}
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              margin: '40px 0'
            }}>
              <div style={{ 
                flex: 1,
                height: '1px',
                background: '#E5E7EB'
              }} />
              <span style={{ 
                padding: '0 16px',
                fontSize: '16px',
                color: '#9CA3AF',
                fontWeight: '400'
              }}>
                Or login with
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
              padding: '0 80px'
            }}>
              {/* Facebook */}
              <button
                type="button"
                onClick={handleFacebookLogin}
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
                onClick={handleGoogleLogin}
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
                onClick={handleAppleLogin}
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

export default ForgotPassword;

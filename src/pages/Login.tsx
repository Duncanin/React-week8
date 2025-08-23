import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const canSubmit = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    alert(`登入成功 (demo)\nEmail: ${email}\n記住帳號: ${remember ? '是' : '否'}`);
  };

  return (
    <section className="container px-7">
      <div className='d-lg-flex gap-10'>
        <div className="d-none d-lg-block">
          <div className="cover rounded-8 p-9 d-flex flex-column justify-content-between">
              <h2 className=''>#</h2>
              <div>
                <h3># ZOBAAAAA !</h3>
                <h4>
                  把旅行變成，<br />
                  生活的養分。
                </h4>
              </div>
          </div>
        </div>
        <div className="login">
          <h1 className="mb-4 fs-3 text-black">歡迎回來！</h1>


          <div className="d-grid gap-3 mb-4">
            <button type="button" className="btn btn-light text-neutral-80 border rounded-4 d-flex align-items-center py-5 px-9">
              <GoogleIcon className="me-3" />
              <span className='mx-auto'>
              使用 Google 帳號登入
              </span>
            </button>
            <button type="button" className="btn btn-light text-neutral-80 border rounded-4 d-flex align-items-center py-5 px-9">
              <FacebookIcon className="me-3" />
              <span className='mx-auto'>
                使用 Facebook 帳號登入
              </span>
            </button>
            <button type="button" className="btn btn-light text-neutral-80 border rounded-4 d-flex align-items-center py-5 px-9">
              <AppleIcon className="me-3" />
              <span className='mx-auto'>
                使用 Apple 帳號登入
              </span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="d-grid gap-3">
            <div className="fw-bold mb-2 text-black">或使用 ZOBAA 帳號登入</div>
            <div>
              <label className="text-neutral-80 mb-2">電子信箱 <span className="text-alert">*</span></label>
              <input
                type="email"
                className="form-control text-neutral-60 rounded-6 p-5"
                placeholder="請輸入電子信箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-neutral-80 mb-2">密碼 <span className="text-alert">*</span></label>
              <div className="position-relative">
                <input
                  type="password"
                  className="form-control text-neutral-60 rounded-6 p-5"
                  placeholder="請輸入密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
                <span className="position-absolute top-50 end-0 translate-middle-y pe-3 text-muted">
                  
                </span>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input
                  id="rememberMe"
                  className="form-check-input"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label className="form-check-label text-neutral-80" htmlFor="rememberMe">
                  記住帳號
                </label>
              </div>
              <a className="link-neutral-80 small" href="#">忘記密碼？</a>
            </div>

            <button
              type="submit"
              className={`btn btn-primary fw-semibold rounded-6 py-3 mt-7 mt-md-10 ${canSubmit ? '' : 'disabled border-0 bg-neutral-40 text-neutral-60 opacity-100'}`}
              disabled={!canSubmit}
            >
              立即登入
            </button>
          </form>

          <p className="text-neutral-80">
            沒有 ZOBAA 帳號嗎？
            <a className="link-priamry-100 fw-bold ms-2" href="/register" style={{ textDecoration: 'underline' }}>立即註冊</a>
          </p>

        </div>

      </div>

    </section>
  );
}

function GoogleIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
      <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
  );
}

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300.00223" width="24" height="24" role="img" aria-label="Facebook logo">
      <g transform="translate(-33.466291,-429.48076)">
        <g transform="matrix(1.1165523,0,0,-1.1165523,-103.48743,863.08638)">\
          <g transform="translate(375.7163,120.5527)">
            <path
              d="m 0,0 c 8.134,0 14.73,6.596 14.73,14.73 l 0,237.434 c 0,8.137 -6.596,14.731 -14.73,14.731 l -237.433,0 c -8.137,0 -14.73,-6.594 -14.73,-14.731 l 0,-237.434 c 0,-8.134 6.593,-14.73 14.73,-14.73 L 0,0 Z"
              fill="#3D5A98"/>
          </g>
          <g transform="translate(307.7046,120.5527)">
            <path
              d="m 0,0 0,103.355 34.693,0 5.194,40.28 -39.887,0 0,25.717 c 0,11.662 3.238,19.609 19.962,19.609 l 21.33,0.01 0,36.026 c -3.69,0.49 -16.351,1.587 -31.081,1.587 -30.753,0 -51.806,-18.771 -51.806,-53.244 l 0,-29.705 -34.781,0 0,-40.28 34.781,0 L -41.595,0 0,0 Z"
              fill="#ffffff"/>
          </g>
        </g>
      </g>
    </svg>
  );
}

function AppleIcon({ className = '' }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-apple ${className}`} viewBox="0 0 16 16">
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
  </svg>
  );
}

export default function Home() {
  return (
    <html>
      <head>
        <title>Desa Kedungwringin</title>
      </head>
      <body>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Desa Kedungwringin
            </h1>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Sistem Pelayanan Surat Online
            </p>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>
              Aplikasi berhasil di-deploy ke Vercel! ✅
            </p>
            <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '1rem' }}>
              Next.js 16.0.8 - Ready
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}

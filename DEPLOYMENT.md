# Deployment Guide untuk Vercel

## 🚀 Langkah Deployment

### 1. Setup Database
Sebelum deploy ke Vercel, Anda perlu database PostgreSQL yang bisa diakses online:
- **Neon** (Recommended): https://neon.tech
- **Supabase**: https://supabase.com
- **Railway**: https://railway.app

### 2. Environment Variables di Vercel
Setelah membuat database, set environment variables di Vercel Dashboard:

```
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
```

### 3. Deploy ke Vercel
1. Connect repository ke Vercel
2. Set Environment Variables
3. Deploy

## 🔧 Local Development

1. Install dependencies:
```bash
npm install
```

2. Setup environment variables:
```bash
cp .env.example .env.local
```

3. Edit `.env.local` dengan database credentials Anda

4. Run development server:
```bash
npm run dev
```

## 📝 Migration Note

Aplikasi telah dimodifikasi untuk menggunakan API routes alih-alih client-side database calls untuk kompatibilitas dengan Vercel.

## 🛠️ Troubleshooting

### Error 404 NOT_FOUND
- Pastikan `DATABASE_URL` sudah diset dengan benar
- Pastikan database bisa diakses dari internet
- Check Vercel Function Logs untuk error details

### Database Connection Issues
- Gunakan connection string format: `postgresql://user:pass@host:port/db?sslmode=require`
- Pastikan database mengizinkan SSL connections
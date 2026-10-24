SIGMA MD - Vercel website

1) Is folder ko GitHub repo mein push karo (ya Vercel CLI se `vercel --prod`).
2) Vercel -> Add New Project -> repo chuno. Koi setting badalni nahi, vercel.json sab set kar deta hai.
3) Deploy. Website apne aap https://sigmaxmd.up.railway.app se servers aur pairing code legi.

Doosra bot server use karna ho to Vercel -> Settings -> Environment Variables:
  SIGMA_API_URL = https://doosra-bot.up.railway.app
aur redeploy karo.

Railway (bot) ki taraf: *.vercel.app domains pehle se allowed hain.
Custom domain ho to Railway Variables mein ALLOWED_ORIGINS=https://aapka-domain.com daalo.

SIGMA MD - Vercel website

1) Is folder ko GitHub repo mein push karo (ya Vercel CLI se `vercel --prod`).
2) Vercel -> Add New Project -> repo chuno. Koi setting badalni nahi, vercel.json sab set kar deta hai.
3) Deploy. Website ab servers aur pairing code ke liye is public bot server ko use karegi:
   https://sigma.15-135-169-79.sslip.io

Agar API URL badalna ho to Vercel -> Settings -> Environment Variables mein
  SIGMA_API_URL = https://your-public-bot-server.example
set karke redeploy karo.

Bot server ki taraf: apne server ke CORS/ALLOWED_ORIGINS mein Vercel website ka exact domain allow hona chahiye.

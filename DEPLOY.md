# Deploy JOYAS CONCEPT (public site)

Separate from JOYAS COMMAND CENTER.

## Easiest: Vercel (free)

1. Push this folder to GitHub repo `joyas-concept-site` (public).
2. Go to https://vercel.com and sign in with GitHub.
3. Import `joyas-concept-site`.
4. Framework: Next.js. Leave defaults.
5. Deploy.
6. Copy the URL Vercel shows, example:
   `https://joyas-concept-site.vercel.app`
7. Paste that URL into X → Edit profile → Website.

## Custom domain later

Vercel → Project → Settings → Domains → add your domain.
Point DNS as Vercel shows (A record or CNAME to cname.vercel-dns.com).

## WhatsApp later (no code rewrite)

Edit `public/config.json`:

```
{ "whatsapp": "234XXXXXXXXXX" }
```

Country code, no plus, no spaces. Commit. The live button reads this file.

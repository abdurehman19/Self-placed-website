# Sikandar Ali — Wood Craft & Furniture Website

React + Vite se bani hui website. 5 pages: Ghar (Home), Hamare Baare Mein (About), Rates, Gallery, Rabta (Contact).

## Pehle apne computer par chalayein

```
npm install
npm run dev
```

Terminal mein jo link aayega (usually `http://localhost:5173`) wo browser mein khol lein.

## Sab se pehle ye cheezein edit karein

**`src/data/content.js`** — poori website ka text isi aik file mein hai. Phone (0303-2493740), WhatsApp aur 20+ saal ka tajurba already daal diya gaya hai. Ye cheezein zaroor check/update karein:

1. `rates` — ye Karachi ke current market ke researched **andaza (starting)** rates hain, apne asal rates se match kar ke zaroorat ho to update karein
2. `areas` — jin ilaqon mein kaam karte hain wo list
3. `gallery` — filhaal placeholder hai, neeche wala step follow karein

## Apni photos gallery mein lagana

1. Apni photos ka size chota kar lein (compress) taake site fast rahe
2. Unhein `public/gallery/` folder mein daal dein — misal: `almari-1.jpg`
3. `src/data/content.js` mein `gallery` array mein file ka naam likh dein:

```js
{ label: "Almari", src: "/gallery/almari-1.jpg" },
```

## Website online daalna (deploy)

Jab tayyar ho jaye to `npm run build` chalayein — ek `dist` folder banega. Ye folder kisi bhi free hosting par upload kar sakte hain, jaise:

- **Vercel** (vercel.com) — sabse aasan, GitHub se seedha connect ho jata hai
- **Netlify** (netlify.com) — `dist` folder ko drag-and-drop kar sakte hain

## File structure

```
src/
  data/content.js       ← saara text/rates/contact yahan
  components/           ← Navbar, Footer, WhatsApp button, joint divider
  pages/                ← Home, About, Rates, Gallery, Contact
```

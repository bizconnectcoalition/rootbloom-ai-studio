/* Root & Bloom AI Studio — brand settings.
   Root & Bloom Salon Source (rootbloomsalonsource.com): a collective that supports independent
   hairstylists and salon owners with organic products (NATULIQUE, LYKKEGAARD), education, events
   and growth tools (FLAGSALON). The studio speaks to stylists and salon owners.
   Field reference: bizconnect-ai-studio\docs\brands\_template\brand.js. Image paths are relative to this folder. */
window.BRAND = {
  id: "rootbloom",                      // must match the folder name AND an entry in the Worker's BRANDS list
  api: "https://bizconnect-ai-studio.virtualecommerceinc.workers.dev",

  productName: "Root & Bloom AI Studio",
  orgName: "Root & Bloom Salon Source",
  wordmark: ["ROOT & BLOOM", "AI Studio"],
  logo: "img/emblem.svg",
  logoAlt: "Root & Bloom sunflower emblem",
  crest: "img/crest.svg",
  favicon: "img/favicon.svg",

  pageTitle: "Root & Bloom AI Studio — Every AI tool your salon needs",
  description: "Client texts, social posts, salon flyers, service videos, voiceovers and more, made with the world's leading AI models in one simple studio for Root & Bloom stylists and salon owners.",
  hero: {
    eyebrow: "Root & Bloom · AI Studio",
    titleHtml: "Every AI tool your salon needs.<br><em>Rooted in one simple studio.</em>",
    lead: "Write client texts, plan your posts, design salon flyers and make service videos without learning a dozen AI apps. Describe what you want in plain words and the studio does the rest.",
  },
  footer: "© {year} Root & Bloom Salon Source · Root & Bloom AI Studio (preview)",
  gate: {
    intro: "The Root & Bloom AI Studio is in private preview. Enter the access passcode to start creating.",
    invited: "You were invited by a Root & Bloom stylist. Welcome!",
  },
  referral: {
    copied: "Link copied! Share it with your fellow stylists",
    empty: "No referrals yet. Share your link with stylists and salon owners you know!",
  },
  fileName: "root-and-bloom",
  exportColors: { bg: "1A251C", accent: "BF9A67", title: "F4F0E8", body: "DDD7CA" },

  guide: {
    name: "Bloom",
    role: "Salon studio guide",
    label: "your Root & Bloom studio guide",
    avatar: "img/guide-avatar.svg",
    poses: [],                          // no character art yet: compact round sunflower helper
    pages: {
      "index.html": { pose: 0, lines: ["Hi, I'm Bloom! 🌻 Tell me what you want to make: a client text, a flyer, a reel…", "Tip: tap the 🎤 in any box and just talk. I'll type it for you."] },
      "studio.html": { pose: 0, lines: ["Try an example prompt, then make it yours. That's the fastest way to learn.", "Want richer results? Switch to a Premium engine on the left."] },
      "account.html": { pose: 0, lines: ["Share your link with fellow stylists and earn on every credit pack they buy.", "Credits never expire, and there's no monthly fee."] },
    },
    greeting: "Hi{first}! I'm Bloom. Tell me what you'd like to make for your salon (a client text, a flyer, a reel, anything) and I'll point you to the right studio.",
    chips: ["Make a flyer for my salon event", "Write a rebooking text", "Create a short salon reel", "Build my salon's brand kit"],
  },

  presenter: null,                      // Talking Avatar: each stylist uploads their own photo

  studios: {
    chat: {
      placeholder: "Write a warm follow-up text to a client after her first color appointment…",
      examples: ["Write a rebooking reminder text for clients due for a color refresh", "Give me 5 Instagram post ideas for a salon that uses organic color", "Explain ammonia-free color to a client in plain, friendly words", "Draft a thank-you note to a client who referred a friend"],
      personas: ["Salon marketing coach", "Client-care writer", "Salon business advisor", "Social media manager", "Friendly editor"],
    },
    image: {
      tagline: "Salon flyers, product shots, social graphics",
      placeholder: "An elegant flyer-style image for a salon education night, sage green and soft gold…",
      examples: ["Flat-lay of organic hair care bottles on a wooden board with eucalyptus, soft daylight", "Bright, airy salon interior with plants and natural wood, photorealistic", "Instagram graphic announcing a balayage special, cream and sage green, elegant", "Moodboard of warm copper and honey hair color tones"],
    },
    video: {
      placeholder: "Slow cinematic pan across a calm, plant-filled salon at golden hour…",
      examples: ["Close-up of a stylist's hands blow-drying glossy hair, slow motion", "Organic shampoo poured into a palm, soft natural light", "Sunflowers swaying in a field at sunrise, warm and hopeful", "A bright salon chair turning toward a window, morning light"],
    },
    voice: {
      placeholder: "Thanks for calling! We're with a guest right now…",
      examples: ["Thanks for calling! We're with a guest right now. Leave your name and number and we'll call you back today.", "This month only: book any color service and get a free organic deep-conditioning treatment.", "Welcome to our education series, where stylists grow together."],
    },
    avatar: {
      blurb: "Type a script and your photo speaks it on video. Great for service intros, product tips and booking reminders. No camera, lighting or retakes needed.",
      placeholder: "Hi, I'm your stylist! Here are three ways to keep your color glossy between visits…",
      examples: ["Hi, I'm your stylist! Here are three ways to keep your color glossy between visits.", "Our new organic color is ammonia-free and gentle on your scalp. Ask me about it at your next visit!", "Holiday appointments fill fast. Book your spot this week!"],
    },
    music: {
      placeholder: "Calm acoustic background music for a salon reel…",
      examples: ["Calm acoustic background music for a salon reel", "Upbeat, feel-good pop for a hair transformation reveal", "Soft lo-fi beat for a relaxing hair-wash clip", "Warm, catchy jingle for a family-owned salon"],
    },
    deck: {
      placeholder: "A 10-minute talk for salon owners on switching to organic color…",
      examples: ["Why switch your salon to organic color: a talk for salon owners", "New-hire orientation for salon assistants", "Workshop: pricing your services with confidence", "Education night: caring for curly and coily hair"],
    },
    translate: {
      examples: ["Please arrive 10 minutes early for your appointment. Changes need 24 hours' notice.", "Our organic color is ammonia-free and gentle on sensitive scalps."],
    },
    outreach: {
      blurb: "Paste a salon's or business's website. AI reads it and writes a personalized intro email, Instagram DM, text, call opener and follow-up, all tailored to them.",
      placeholder: "https://a-salon-you-want-to-partner-with.com",
      examples: ["rootbloomsalonsource.com"],
    },
    brand: {
      placeholder: "A boutique salon specializing in lived-in color, calm and earthy…",
      examples: ["Eco-friendly boutique salon specializing in lived-in color", "Booth renter launching her own curly-hair studio", "Mobile bridal hair and makeup team", "Barbershop and grooming lounge with a vintage feel"],
    },
  },
};

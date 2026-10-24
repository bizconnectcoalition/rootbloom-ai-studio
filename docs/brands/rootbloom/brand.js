/* Root & Bloom AI Studio — brand settings.
   Root & Bloom Salon Source (rootbloomsalonsource.com): a collective that supports independent
   hairstylists and salon owners with organic products (NATULIQUE, LYKKEGAARD), education, events
   and growth tools (FLAGSALON). The studio speaks to stylists and salon owners.
   Field reference: bizconnect-ai-studio\tools\brand-template\brand.js. Image paths are relative to this folder. */
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
    eyebrow: "",                          // the logo already names the studio
    titleHtml: "Every AI tool your salon needs, <em>rooted in one simple studio.</em>",
    lead: "Client texts, salon flyers, service videos and more. Just describe it. No subscription: pay only for what you create.",
  },
  footer: "Preview prototype prepared for Root & Bloom Salon Source · not yet an official Root & Bloom service",
  noindex: true,                        // keep search engines away until Root & Bloom approves it
  gate: {
    intro: "The Root & Bloom AI Studio is in private preview. Enter the access passcode to start creating.",
    invited: "You were invited by a fellow stylist. Welcome!",
    note: "Preview build: your name and email are stored by the studio's developer (not by Root & Bloom) only to run your account and credits.",
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
    avatar: "img/guide-avatar.jpg",     // round photo on the "Ask Bloom" tab
    poses: [                            // full-body cut-outs (made in Gemini, see the core's project-docs/PREVIEW_MEDIA.md)
      { src: "img/guide/bloom-pose-wave.png", alt: "Bloom waving hello" },
      { src: "img/guide/bloom-pose-point.png", alt: "Bloom pointing something out" },
      { src: "img/guide/bloom-pose-welcome.png", alt: "Bloom welcoming you with open arms" },
      { src: "img/guide/bloom-pose-thumbsup.png", alt: "Bloom giving a thumbs up" },
      { src: "img/guide/bloom-pose-armscrossed.png", alt: "Bloom standing confidently" },
      { src: "img/guide/bloom-pose-brush.png", alt: "Bloom holding a brush and comb, ready to help" },
    ],
    pages: {
      "index.html": { pose: 0, lines: ["Hi, I'm Bloom! 🌻 Tell me what you want to make: a client text, a flyer, a reel…", "Tip: tap the 🎤 in any box and just talk. I'll type it for you."] },
      "studio.html": { pose: 1, lines: ["Try an example prompt, then make it yours. That's the fastest way to learn.", "Want richer results? Pick a 'Best' AI model in the options."] },
      "account.html": { pose: 3, lines: ["Share your link with fellow stylists and earn on every credit pack they buy.", "Credits never expire, and there's no monthly fee."] },
    },
    greeting: "Hi{first}! I'm Bloom. Tell me what you'd like to make for your salon (a client text, a flyer, a reel, anything) and I'll point you to the right studio.",
    chips: ["Which tool should I use?", "Write a rebooking text", "Make a flyer for my salon event", "Create a short salon reel"],
  },

  presenter: { name: "Bloom", thumb: "img/presenter.jpg" }, // Talking Avatar default face (same photo is worker/public/bloom-presenter.jpg)

  // Hover examples on the studio cards, salon versions. Studios not listed here use the core
  // (bakery) examples. Media paths are relative to docs/.
  previews: {
    chat: {
      kind: "chat",
      prompt: "Write a friendly text reminding clients it's time to book their fall color.",
      reply: "Hi love! 🍂 Fall is the perfect time to warm up your color: think copper, honey and soft caramel. Our calendar is filling fast, so reply here or tap the link to grab your spot. Can't wait to see you in the chair!",
    },
    image: {
      kind: "image",
      prompt: "Elegant photo for a salon's fall color special: plant-filled boutique salon, glossy copper-and-honey waves, golden afternoon light.",
      src: "brands/rootbloom/previews/image.webp",
      alt: "AI-made photo of a client with glossy copper waves in a bright, plant-filled salon",
    },
    video: {
      kind: "video",
      prompt: "Slow-motion close-up of a stylist blow-drying glossy copper-and-honey hair, soft golden window light.",
      src: "brands/rootbloom/previews/video.mp4",
      poster: "brands/rootbloom/previews/video.webp",
    },
    voice: {
      kind: "audio",
      prompt: "Thanks for calling Willow and Wave Hair Studio! We're with a guest right now. Leave your name and number and we'll call you back today.",
      promptLabel: "You paste the script",
      detail: "Voice: warm and friendly · natural pace",
      src: "brands/rootbloom/previews/voice.mp3",
    },
    avatar: {
      kind: "video",
      sound: true,
      prompt: "Hi! Fall color appointments are filling up fast. Book your spot this week!",
      promptLabel: "You type what they should say",
      detail: "Presenter here: a photo of a stylist. Or let Bloom present it",
      src: "brands/rootbloom/previews/avatar.mp4",
      poster: "brands/rootbloom/previews/avatar.webp",
    },
    music: {
      kind: "audio",
      prompt: "Warm, cozy acoustic background music for a salon reel. No vocals.",
      detail: "Genre: acoustic · Mood: warm and upbeat",
      src: "assets/previews/music.mp3",
    },
    deck: {
      kind: "deck",
      prompt: "A 10-minute education-night talk for stylists on growing a loyal clientele.",
      slides: [
        { title: "Growing a loyal clientele", bullets: ["Why rebooking can beat discounting", "Three habits of busy stylists"] },
        { title: "Book the next visit in the chair", bullets: ["Suggest a date before they leave", "Send a friendly reminder text"] },
        { title: "Make referrals easy", bullets: ["Thank-you note for every referral", "A small gift on their next visit"] },
      ],
      detail: "3 of 7 slides shown · with speaker notes · downloads as PowerPoint",
    },
    translate: {
      kind: "translate",
      prompt: "Please arrive 10 minutes early for your appointment. Changes need 24 hours' notice.",
      language: "Spanish",
      result: "Por favor, llegue 10 minutos antes de su cita. Los cambios requieren aviso con 24 horas de antelación.",
    },
    outreach: {
      kind: "outreach",
      prompt: "goldenhourbridal.example",
      promptLabel: "You paste a partner's website",
      pieces: [
        { title: "Intro email", text: "Subject: Hair for your fall brides? Hi Maya, I loved the barn wedding on your site. I'm a stylist nearby and would love to be on your recommended list. Could I send you my lookbook?" },
        { title: "Instagram DM", text: "Your barn wedding photos are gorgeous! I do bridal hair just down the road. Could I send you my lookbook?" },
      ],
      detail: "Also writes a text, a call opener and a follow-up",
    },
    brand: {
      kind: "brand",
      prompt: "A calm, nature-inspired hair studio for lived-in color and curls.",
      name: "Willow & Wave",
      tagline: "Calm color. Curls with care.",
      colors: ["#6E8B6B", "#C9A46A", "#F4EFE6", "#2F3B2F"],
      logo: "brands/rootbloom/previews/logo.webp",
      detail: "Plus fonts, bios and taglines",
    },
  },

  // Simple mode starter tools: client texts (chat), salon flyers and social graphics (image), reels (video).
  simpleStudios: ["chat", "image", "video"],
  defaultMode: "simple",

  studios: {
    chat: {
      placeholder: "Write a warm follow-up text to a client after her first color appointment…",
      examples: ["Write a rebooking reminder text for clients due for a color refresh", "Write a friendly text about our 24-hour cancellation policy", "Reel caption and hashtags for a balayage before-and-after", "Draft a thank-you note to a client who referred a friend"],
      personas: ["Salon marketing coach", "Client-care writer", "Salon business advisor", "Social media manager", "Friendly editor"],
    },
    image: {
      tagline: "Salon flyers, product shots, social graphics",
      placeholder: "An elegant flyer-style image for a salon education night, sage green and soft gold…",
      examples: ["Flat-lay of natural hair care bottles on a wooden board with eucalyptus, soft daylight", "Bright, airy salon interior with plants and natural wood, photorealistic", "Instagram graphic announcing a balayage special, cream and sage green, elegant", "Moodboard of warm copper and honey hair color tones"],
    },
    video: {
      placeholder: "Slow cinematic pan across a calm, plant-filled salon at golden hour…",
      examples: ["Close-up of a stylist's hands blow-drying glossy hair, slow motion", "Shampoo lather poured into a palm, soft natural light", "Glossy copper waves catching window light, slow motion", "A bright salon chair turning toward a window, morning light"],
    },
    voice: {
      placeholder: "Thanks for calling! We're with a guest right now…",
      examples: ["Thanks for calling! We're with a guest right now. Leave your name and number and we'll call you back today.", "This month only: book any color service and get a free deep-conditioning treatment.", "Welcome to our education series, where stylists grow together."],
    },
    avatar: {
      blurb: "Type a script and Bloom (or a photo of you) speaks it on video. Great for service intros, product tips and booking reminders. No camera, lighting or retakes needed.",
      placeholder: "Hi, I'm your stylist! Here are three ways to keep your color glossy between visits…",
      examples: ["Hi, I'm Bloom from Root & Bloom! Let me show you three ways to keep your color glossy between visits.", "Hi, I'm your stylist! Here are three ways to keep your color glossy between visits.", "Ask me about our new color line at your next visit. I'd love to find your perfect shade!", "Holiday appointments fill fast. Book your spot this week!"],
    },
    music: {
      placeholder: "Calm acoustic background music for a salon reel…",
      examples: ["Calm acoustic background music for a salon reel", "Upbeat, feel-good pop for a hair transformation reveal", "Soft lo-fi beat for a relaxing hair-wash clip", "Warm, catchy jingle for a family-owned salon"],
    },
    deck: {
      placeholder: "A 10-minute talk for salon owners on growing a loyal clientele…",
      examples: ["Growing a loyal clientele: a talk for salon owners", "New-hire orientation for salon assistants", "Workshop: pricing your services with confidence", "Education night: caring for curly and coily hair"],
    },
    translate: {
      examples: ["Please arrive 10 minutes early for your appointment. Changes need 24 hours' notice.", "Welcome! Please tell your stylist about any allergies before your service."],
    },
    outreach: {
      name: "Partner Outreach",
      tagline: "Friendly intro messages for salons and partners",
      blurb: "Paste a salon's or business's website. AI reads it and writes a personalized intro email, Instagram DM, text, call opener and follow-up, all tailored to them.",
      placeholder: "https://a-salon-you-want-to-partner-with.com",
      examples: ["rootbloomsalonsource.com"],
    },
    brand: {
      placeholder: "A boutique salon specializing in lived-in color, calm and earthy…",
      examples: ["Eco-friendly boutique salon specializing in lived-in color", "Booth renter launching her own curly-hair studio", "Welcome email for new booth renters at our salon", "Mobile bridal hair and makeup team"],
    },
  },
};

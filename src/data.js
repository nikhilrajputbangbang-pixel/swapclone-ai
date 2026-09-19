
export const categories = [
  {
    id: "chatbots", icon: "🤖", name: "Chatbots", short: "Chatbots",
    description: "Free alternatives to popular paid AI assistants.",
    paidTools: [
      {name:"ChatGPT Plus", domain:"chatgpt.com", description:"AI assistant for writing, research and coding", pricing:"$20/month", website:"https://chatgpt.com/", tags:["chat","coding"]},
      {name:"Claude Pro", domain:"claude.ai", description:"Writing, analysis and coding assistant", pricing:"$20/month", website:"https://claude.ai/", tags:["chat","writing"]},
      {name:"Perplexity Pro", domain:"perplexity.ai", description:"AI search and research assistant", pricing:"Paid plan", website:"https://www.perplexity.ai/", tags:["research","search"]},
      {name:"Gemini", domain:"gemini.google.com", description:"Multimodal AI for work and creativity", pricing:"Paid plan", website:"https://gemini.google.com/", tags:["chat","multimodal"]}
    ],
    freeAlternatives: [
      {name:"DeepSeek", domain:"deepseek.com", description:"Chat, coding and reasoning assistant", status:"Free", website:"https://chat.deepseek.com/", tags:["chat","coding","reasoning"]},
      {name:"Qwen", domain:"qwen.ai", description:"Chat, coding and multimodal AI", status:"Free", website:"https://chat.qwen.ai/", tags:["chat","coding"]},
      {name:"Mistral Le Chat", domain:"mistral.ai", description:"AI assistant for productivity and coding", status:"Free tier", website:"https://chat.mistral.ai/", tags:["chat","coding"]},
      {name:"HuggingChat", domain:"huggingface.co", description:"Open models in one simple chat", status:"Free", website:"https://huggingface.co/chat/", tags:["open source","chat"]}
    ]
  },
  {
    id: "image", icon: "🎨", name: "Image Generation", short: "Image",
    description: "Create images without committing to expensive subscriptions.",
    paidTools: [
      {name:"Midjourney", domain:"midjourney.com", description:"Stylized image generation and exploration", pricing:"Paid plan", website:"https://www.midjourney.com/", tags:["images"]},
      {name:"Adobe Firefly", domain:"adobe.com", description:"Generative image tools inside Adobe", pricing:"Paid plan", website:"https://firefly.adobe.com/", tags:["images","design"]},
      {name:"Canva Pro", domain:"canva.com", description:"Design suite with AI image generation", pricing:"Paid plan", website:"https://www.canva.com/", tags:["design","images"]}
    ],
    freeAlternatives: [
      {name:"Stable Diffusion", domain:"stability.ai", description:"Open image-generation ecosystem", status:"Open Source", website:"https://stability.ai/stable-image", tags:["open source","images"]},
      {name:"Fooocus", domain:"github.com", description:"Simple local interface for Stable Diffusion", status:"Open Source", website:"https://github.com/lllyasviel/Fooocus", tags:["open source","images"]},
      {name:"Krita AI Diffusion", domain:"github.com", description:"Open-source AI image workflow for Krita", status:"Open Source", website:"https://github.com/Acly/krita-ai-diffusion", tags:["open source","design"]},
      {name:"Ideogram", domain:"ideogram.ai", description:"Image generation with a free tier", status:"Free Tier", website:"https://ideogram.ai/", tags:["images","text"]}
    ]
  },
  {
    id: "video", icon: "🎬", name: "Video Generation", short: "Video",
    description: "Explore free and open video-generation alternatives.",
    paidTools: [
      {name:"Runway", domain:"runwayml.com", description:"Generative video and creative tools", pricing:"Paid plan", website:"https://runwayml.com/", tags:["video"]},
      {name:"Pika", domain:"pika.art", description:"AI video creation and effects", pricing:"Paid plan", website:"https://pika.art/", tags:["video"]},
      {name:"Kling AI", domain:"klingai.com", description:"AI video generation platform", pricing:"Paid plan", website:"https://klingai.com/", tags:["video"]}
    ],
    freeAlternatives: [
      {name:"Wan", domain:"github.com", description:"Open video-generation models from Alibaba", status:"Open Source", website:"https://github.com/Wan-Video/Wan2.1", tags:["open source","video"]},
      {name:"LTX-Video", domain:"github.com", description:"Open video generation and editing models", status:"Open Source", website:"https://github.com/Lightricks/LTX-Video", tags:["open source","video"]},
      {name:"CogVideoX", domain:"github.com", description:"Open text-to-video model family", status:"Open Source", website:"https://github.com/THUDM/CogVideo", tags:["open source","video"]},
      {name:"Krea", domain:"krea.ai", description:"Creative AI with a free tier", status:"Free Tier", website:"https://www.krea.ai/", tags:["video","images"]}
    ]
  },
  {
    id: "voice", icon: "🎙️", name: "Voice & Text-to-Speech", short: "Voice",
    description: "Generate speech and voice experiences with free options.",
    paidTools: [
      {name:"ElevenLabs", domain:"elevenlabs.io", description:"High-quality AI voices and speech tools", pricing:"Paid plan", website:"https://elevenlabs.io/", tags:["voice"]},
      {name:"Murf", domain:"murf.ai", description:"AI voiceover and narration studio", pricing:"Paid plan", website:"https://murf.ai/", tags:["voice"]},
      {name:"PlayHT", domain:"play.ht", description:"AI voice generation and voice cloning", pricing:"Paid plan", website:"https://play.ht/", tags:["voice"]}
    ],
    freeAlternatives: [
      {name:"Kokoro TTS", domain:"github.com", description:"Lightweight open text-to-speech model", status:"Open Source", website:"https://github.com/hexgrad/kokoro", tags:["open source","voice"]},
      {name:"Piper", domain:"github.com", description:"Fast local neural text-to-speech", status:"Open Source", website:"https://github.com/rhasspy/piper", tags:["open source","voice"]},
      {name:"Coqui TTS", domain:"github.com", description:"Open-source speech synthesis toolkit", status:"Open Source", website:"https://github.com/coqui-ai/TTS", tags:["open source","voice"]},
      {name:"ElevenLabs", domain:"elevenlabs.io", description:"Useful free tier for trying AI voices", status:"Free Tier", website:"https://elevenlabs.io/", tags:["voice"]}
    ]
  },
  {
    id: "music", icon: "🎵", name: "Music", short: "Music",
    description: "Create music and sound without a full paid subscription.",
    paidTools: [
      {name:"Suno", domain:"suno.com", description:"Prompt-based music creation", pricing:"Paid plan", website:"https://suno.com/", tags:["music"]},
      {name:"Udio", domain:"udio.com", description:"AI music generation and remixing", pricing:"Paid plan", website:"https://www.udio.com/", tags:["music"]},
      {name:"Soundraw", domain:"soundraw.io", description:"AI music for creators", pricing:"Paid plan", website:"https://soundraw.io/", tags:["music"]}
    ],
    freeAlternatives: [
      {name:"MusicGen", domain:"github.com", description:"Open text-to-music model from Meta", status:"Open Source", website:"https://github.com/facebookresearch/audiocraft", tags:["open source","music"]},
      {name:"Stable Audio Open", domain:"huggingface.co", description:"Open model for audio generation", status:"Open Source", website:"https://huggingface.co/stabilityai/stable-audio-open-1.0", tags:["open source","music"]},
      {name:"BandLab", domain:"bandlab.com", description:"Free online music creation studio", status:"Free", website:"https://www.bandlab.com/", tags:["music","audio"]}
    ]
  },
  {
    id: "coding", icon: "💻", name: "Coding", short: "Coding",
    description: "Code faster with free editors, agents and AI assistants.",
    paidTools: [
      {name:"GitHub Copilot", domain:"github.com", description:"AI coding assistant inside your editor", pricing:"Paid plan", website:"https://github.com/features/copilot", tags:["coding"]},
      {name:"Cursor", domain:"cursor.com", description:"AI-first code editor", pricing:"Paid plan", website:"https://www.cursor.com/", tags:["coding"]},
      {name:"Replit", domain:"replit.com", description:"Browser IDE with AI coding tools", pricing:"Paid plan", website:"https://replit.com/", tags:["coding"]}
    ],
    freeAlternatives: [
      {name:"Continue", domain:"github.com", description:"Open-source AI coding assistant", status:"Open Source", website:"https://github.com/continuedev/continue", tags:["open source","coding"]},
      {name:"Aider", domain:"aider.chat", description:"AI pair programming in your terminal", status:"Open Source", website:"https://aider.chat/", tags:["open source","coding"]},
      {name:"Cline", domain:"github.com", description:"Open coding agent for VS Code", status:"Open Source", website:"https://github.com/cline/cline", tags:["open source","coding"]},
      {name:"Gemini Code Assist", domain:"developers.google.com", description:"AI coding assistant with a free option", status:"Free Tier", website:"https://developers.google.com/gemini-code-assist", tags:["coding"]}
    ]
  },
  {
    id: "writing", icon: "✍️", name: "Writing", short: "Writing",
    description: "Write, rewrite and polish text with free tools.",
    paidTools: [
      {name:"Jasper", domain:"jasper.ai", description:"AI writing for marketing teams", pricing:"Paid plan", website:"https://www.jasper.ai/", tags:["writing"]},
      {name:"Copy.ai", domain:"copy.ai", description:"AI-powered marketing and content workflows", pricing:"Paid plan", website:"https://www.copy.ai/", tags:["writing","marketing"]},
      {name:"Grammarly Pro", domain:"grammarly.com", description:"Writing and rewriting assistant", pricing:"Paid plan", website:"https://www.grammarly.com/", tags:["writing"]}
    ],
    freeAlternatives: [
      {name:"LanguageTool", domain:"languagetool.org", description:"Grammar, style and spelling checker", status:"Free Tier", website:"https://languagetool.org/", tags:["writing"]},
      {name:"Hemingway Editor", domain:"hemingwayapp.com", description:"Make writing clearer and easier to read", status:"Free", website:"https://hemingwayapp.com/", tags:["writing"]},
      {name:"QuillBot", domain:"quillbot.com", description:"Paraphrasing and writing tools", status:"Free Tier", website:"https://quillbot.com/", tags:["writing"]}
    ]
  },
  {
    id: "research", icon: "🔍", name: "Research", short: "Research",
    description: "Find, summarize and explore information with AI.",
    paidTools: [
      {name:"Perplexity Pro", domain:"perplexity.ai", description:"AI search with deeper research features", pricing:"Paid plan", website:"https://www.perplexity.ai/", tags:["research"]},
      {name:"Elicit", domain:"elicit.com", description:"AI literature review and research workflow", pricing:"Paid plan", website:"https://elicit.com/", tags:["research"]},
      {name:"Consensus", domain:"consensus.app", description:"Research search engine for scientific papers", pricing:"Paid plan", website:"https://consensus.app/", tags:["research"]}
    ],
    freeAlternatives: [
      {name:"Semantic Scholar", domain:"semanticscholar.org", description:"Free academic search and discovery", status:"Free", website:"https://www.semanticscholar.org/", tags:["research"]},
      {name:"Google Scholar", domain:"scholar.google.com", description:"Free scholarly search engine", status:"Free", website:"https://scholar.google.com/", tags:["research"]},
      {name:"ResearchRabbit", domain:"researchrabbit.ai", description:"Explore papers and citation networks", status:"Free Tier", website:"https://www.researchrabbit.ai/", tags:["research"]}
    ]
  },
  {
    id: "pdf", icon: "📄", name: "PDF & Documents", short: "PDF",
    description: "Read, summarize and work with documents.",
    paidTools: [
      {name:"Adobe Acrobat Pro", domain:"adobe.com", description:"Professional PDF editing and document tools", pricing:"Paid plan", website:"https://www.adobe.com/acrobat.html", tags:["pdf"]},
      {name:"ChatPDF Plus", domain:"chatpdf.com", description:"Chat with documents and PDFs", pricing:"Paid plan", website:"https://www.chatpdf.com/", tags:["pdf","research"]},
      {name:"Humata", domain:"humata.ai", description:"AI assistant for documents", pricing:"Paid plan", website:"https://www.humata.ai/", tags:["pdf"]}
    ],
    freeAlternatives: [
      {name:"Stirling PDF", domain:"github.com", description:"Powerful open-source PDF toolkit", status:"Open Source", website:"https://github.com/Stirling-Tools/Stirling-PDF", tags:["open source","pdf"]},
      {name:"PDFgear", domain:"pdfgear.com", description:"Free PDF editor and AI document tools", status:"Free", website:"https://www.pdfgear.com/", tags:["pdf"]},
      {name:"NotebookLM", domain:"google.com", description:"Free AI notebook for source-based research", status:"Free", website:"https://notebooklm.google.com/", tags:["research","documents"]}
    ]
  },
  {
    id: "photo", icon: "🖼️", name: "Photo Editing", short: "Photo",
    description: "Edit and enhance photos with free AI-friendly tools.",
    paidTools: [
      {name:"Photoshop", domain:"adobe.com", description:"Professional photo editing and generative tools", pricing:"Paid plan", website:"https://www.adobe.com/products/photoshop.html", tags:["photo","design"]},
      {name:"Luminar Neo", domain:"skylum.com", description:"AI-powered photo editing", pricing:"Paid plan", website:"https://skylum.com/luminar", tags:["photo"]},
      {name:"Topaz Photo AI", domain:"topazlabs.com", description:"AI enhancement, denoise and sharpening", pricing:"Paid", website:"https://www.topazlabs.com/topaz-photo-ai", tags:["photo"]}
    ],
    freeAlternatives: [
      {name:"GIMP", domain:"gimp.org", description:"Powerful open-source image editor", status:"Open Source", website:"https://www.gimp.org/", tags:["open source","photo"]},
      {name:"Photopea", domain:"photopea.com", description:"Browser-based Photoshop-style editor", status:"Free", website:"https://www.photopea.com/", tags:["photo"]},
      {name:"Upscayl", domain:"github.com", description:"Free open-source AI image upscaler", status:"Open Source", website:"https://github.com/upscayl/upscayl", tags:["open source","photo"]}
    ]
  },
  {
    id: "video-editing", icon: "🎥", name: "Video Editing", short: "Video Edit",
    description: "Edit videos with capable free desktop and browser tools.",
    paidTools: [
      {name:"Adobe Premiere Pro", domain:"adobe.com", description:"Professional video editing suite", pricing:"Paid plan", website:"https://www.adobe.com/products/premiere.html", tags:["video"]},
      {name:"CapCut Pro", domain:"capcut.com", description:"Creator-focused video editor", pricing:"Paid plan", website:"https://www.capcut.com/", tags:["video"]},
      {name:"DaVinci Resolve Studio", domain:"blackmagicdesign.com", description:"Professional editing, color and audio", pricing:"Paid upgrade", website:"https://www.blackmagicdesign.com/products/davinciresolve", tags:["video"]}
    ],
    freeAlternatives: [
      {name:"DaVinci Resolve", domain:"blackmagicdesign.com", description:"Professional editor with a strong free version", status:"Free", website:"https://www.blackmagicdesign.com/products/davinciresolve", tags:["video"]},
      {name:"Kdenlive", domain:"kdenlive.org", description:"Open-source non-linear video editor", status:"Open Source", website:"https://kdenlive.org/", tags:["open source","video"]},
      {name:"Shotcut", domain:"shotcut.org", description:"Free open-source cross-platform editor", status:"Open Source", website:"https://www.shotcut.org/", tags:["open source","video"]}
    ]
  },
  {
    id: "design", icon: "🎨", name: "Design", short: "Design",
    description: "Design faster with free creative tools and AI assistance.",
    paidTools: [
      {name:"Canva Pro", domain:"canva.com", description:"All-in-one design platform", pricing:"Paid plan", website:"https://www.canva.com/", tags:["design"]},
      {name:"Adobe Express Premium", domain:"adobe.com", description:"Quick design and content creation", pricing:"Paid plan", website:"https://www.adobe.com/express/", tags:["design"]},
      {name:"Figma Professional", domain:"figma.com", description:"Collaborative product design platform", pricing:"Paid plan", website:"https://www.figma.com/", tags:["design"]}
    ],
    freeAlternatives: [
      {name:"Penpot", domain:"penpot.app", description:"Open-source collaborative design platform", status:"Open Source", website:"https://penpot.app/", tags:["open source","design"]},
      {name:"Figma", domain:"figma.com", description:"Powerful design tool with a free tier", status:"Free Tier", website:"https://www.figma.com/", tags:["design"]},
      {name:"Krita", domain:"krita.org", description:"Free professional digital painting app", status:"Free", website:"https://krita.org/", tags:["design","art"]}
    ]
  },
  {
    id: "presentations", icon: "📊", name: "Presentations", short: "Slides",
    description: "Build presentations without paying for every AI feature.",
    paidTools: [
      {name:"Gamma", domain:"gamma.app", description:"AI presentations and visual documents", pricing:"Paid plan", website:"https://gamma.app/", tags:["presentations"]},
      {name:"Beautiful.ai", domain:"beautiful.ai", description:"AI-assisted presentation design", pricing:"Paid plan", website:"https://www.beautiful.ai/", tags:["presentations"]},
      {name:"Tome", domain:"tome.app", description:"AI-powered storytelling and presentations", pricing:"Paid plan", website:"https://tome.app/", tags:["presentations"]}
    ],
    freeAlternatives: [
      {name:"Google Slides", domain:"google.com", description:"Free collaborative presentation editor", status:"Free", website:"https://slides.google.com/", tags:["presentations"]},
      {name:"Canva", domain:"canva.com", description:"Presentation builder with a free tier", status:"Free Tier", website:"https://www.canva.com/presentations/", tags:["presentations","design"]},
      {name:"LibreOffice Impress", domain:"libreoffice.org", description:"Free open-source presentation software", status:"Open Source", website:"https://www.libreoffice.org/discover/impress/", tags:["open source","presentations"]}
    ]
  },
  {
    id: "automation", icon: "⚡", name: "Automation", short: "Automation",
    description: "Connect apps and automate repetitive workflows.",
    paidTools: [
      {name:"Zapier", domain:"zapier.com", description:"No-code workflow automation", pricing:"Paid plan", website:"https://zapier.com/", tags:["automation"]},
      {name:"Make", domain:"make.com", description:"Visual automation and integrations", pricing:"Paid plan", website:"https://www.make.com/", tags:["automation"]},
      {name:"n8n Cloud", domain:"n8n.io", description:"Workflow automation with AI features", pricing:"Paid cloud plan", website:"https://n8n.io/", tags:["automation"]}
    ],
    freeAlternatives: [
      {name:"n8n", domain:"github.com", description:"Self-hostable workflow automation", status:"Open Source", website:"https://github.com/n8n-io/n8n", tags:["open source","automation"]},
      {name:"Activepieces", domain:"activepieces.com", description:"Open-source automation platform", status:"Open Source", website:"https://www.activepieces.com/", tags:["open source","automation"]},
      {name:"Node-RED", domain:"nodered.org", description:"Flow-based programming for automation", status:"Open Source", website:"https://nodered.org/", tags:["open source","automation"]}
    ]
  },
  {
    id: "social", icon: "📱", name: "Social Media", short: "Social",
    description: "Plan, write and design social content with free options.",
    paidTools: [
      {name:"Hootsuite", domain:"hootsuite.com", description:"Social scheduling and management", pricing:"Paid plan", website:"https://www.hootsuite.com/", tags:["social"]},
      {name:"Buffer", domain:"buffer.com", description:"Social publishing and analytics", pricing:"Paid plan", website:"https://buffer.com/", tags:["social"]},
      {name:"Predis.ai", domain:"predis.ai", description:"AI social content and scheduling", pricing:"Paid plan", website:"https://predis.ai/", tags:["social","writing"]}
    ],
    freeAlternatives: [
      {name:"Buffer Free", domain:"buffer.com", description:"Simple social scheduling with a free plan", status:"Free Tier", website:"https://buffer.com/", tags:["social"]},
      {name:"Publer", domain:"publer.io", description:"Social scheduling with a free tier", status:"Free Tier", website:"https://publer.io/", tags:["social"]},
      {name:"Adobe Express", domain:"adobe.com", description:"Free social templates and content tools", status:"Free Tier", website:"https://www.adobe.com/express/", tags:["social","design"]}
    ]
  },
  {
    id: "education", icon: "🎓", name: "Education", short: "Education",
    description: "Study, practice and learn with free AI-friendly resources.",
    paidTools: [
      {name:"Quizlet Plus", domain:"quizlet.com", description:"AI-powered study and flashcards", pricing:"Paid plan", website:"https://quizlet.com/", tags:["education"]},
      {name:"Chegg Study", domain:"chegg.com", description:"Homework help and study resources", pricing:"Paid plan", website:"https://www.chegg.com/", tags:["education"]},
      {name:"Photomath Plus", domain:"photomath.com", description:"Step-by-step math learning", pricing:"Paid plan", website:"https://photomath.com/", tags:["education"]}
    ],
    freeAlternatives: [
      {name:"Khan Academy", domain:"khanacademy.org", description:"Free lessons and practice across subjects", status:"Free", website:"https://www.khanacademy.org/", tags:["education"]},
      {name:"WolframAlpha", domain:"wolframalpha.com", description:"Computational knowledge engine with free access", status:"Free Tier", website:"https://www.wolframalpha.com/", tags:["education","math"]},
      {name:"Anki", domain:"apps.ankiweb.net", description:"Free spaced-repetition flashcards", status:"Free", website:"https://apps.ankiweb.net/", tags:["education"]}
    ]
  },
  {
    id: "business", icon: "💼", name: "Business", short: "Business",
    description: "Useful free tools for teams, research and business work.",
    paidTools: [
      {name:"Notion Business", domain:"notion.com", description:"Workspace, docs and team knowledge", pricing:"Paid plan", website:"https://www.notion.com/", tags:["business"]},
      {name:"ClickUp Business", domain:"clickup.com", description:"Project management and productivity", pricing:"Paid plan", website:"https://clickup.com/", tags:["business"]},
      {name:"HubSpot", domain:"hubspot.com", description:"CRM, marketing and sales platform", pricing:"Paid plans", website:"https://www.hubspot.com/", tags:["business","crm"]}
    ],
    freeAlternatives: [
      {name:"Notion Free", domain:"notion.com", description:"Powerful workspace with a free plan", status:"Free Tier", website:"https://www.notion.com/", tags:["business"]},
      {name:"Trello Free", domain:"trello.com", description:"Simple visual project management", status:"Free Tier", website:"https://trello.com/", tags:["business"]},
      {name:"HubSpot Free CRM", domain:"hubspot.com", description:"Free CRM starter tools", status:"Free Tier", website:"https://www.hubspot.com/products/crm", tags:["business","crm"]}
    ]
  },
  {
    id: "productivity", icon: "🧠", name: "Productivity", short: "Productivity",
    description: "Save time with free tools for notes, tasks and focus.",
    paidTools: [
      {name:"Motion", domain:"usemotion.com", description:"AI calendar and task planning", pricing:"Paid plan", website:"https://www.usemotion.com/", tags:["productivity"]},
      {name:"Reclaim", domain:"reclaim.ai", description:"AI scheduling and calendar protection", pricing:"Paid plan", website:"https://reclaim.ai/", tags:["productivity"]},
      {name:"Sunsama", domain:"sunsama.com", description:"Daily planning and task management", pricing:"Paid plan", website:"https://www.sunsama.com/", tags:["productivity"]}
    ],
    freeAlternatives: [
      {name:"Todoist Free", domain:"todoist.com", description:"Clean task management with a free plan", status:"Free Tier", website:"https://todoist.com/", tags:["productivity"]},
      {name:"Obsidian", domain:"obsidian.md", description:"Local-first knowledge and notes", status:"Free", website:"https://obsidian.md/", tags:["productivity","notes"]},
      {name:"Joplin", domain:"joplinapp.org", description:"Open-source notes and task organization", status:"Open Source", website:"https://joplinapp.org/", tags:["open source","productivity"]}
    ]
  }
];

export const allTools = categories.flatMap(category => [
  ...category.paidTools.map(tool => ({...tool, categoryId:category.id, kind:"paid"})),
  ...category.freeAlternatives.map(tool => ({...tool, categoryId:category.id, kind:"free"}))
]);

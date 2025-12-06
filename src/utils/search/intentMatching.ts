
// Intent-based matching for search patterns
export const intentMatches = {
  // Learning and education intent
  learn: ["learn", "skill", "education", "course", "tutorial", "training", "teach"],
  help: ["help", "assist", "guide", "support", "aid"],
  create: ["create", "make", "generate", "build", "design", "produce"],
  write: ["write", "writing", "content", "text", "article", "blog", "copy", "book", "script", "author", "novelist", "storytelling"],
  chat: ["chat", "talk", "conversation", "speak", "communicate"],
  art: ["art", "draw", "paint", "design", "creative", "visual"],
  business: ["business", "work", "professional", "corporate", "enterprise"],
  fun: ["fun", "entertainment", "game", "play", "enjoy"],
  health: ["health", "wellness", "fitness", "medical", "therapy"],
  spiritual: ["spiritual", "spirituality", "spirit", "religion", "religious", "god", "gods", "divine", "sacred", "holy", "faith", "prayer", "meditation", "peace", "zen", "mindfulness", "astrology", "tarot", "gnostic", "christian", "buddhist", "hindu", "islamic", "jewish", "mythology", "mystic", "mystical", "soul", "afterlife", "resurrection", "prophet", "wisdom", "philosophy", "enlightenment"],
  agent: ["agent", "agents", "autonomous", "automation", "automated", "assistant", "bot", "bots", "ai agent", "multi-agent"]
};

export const toolNameMatches = {
  "einstein": ["einstein", "physics", "scientist", "genius", "albert"],
  "cannabis": ["cannabis", "marijuana", "weed", "hemp", "cbd", "thc"],
  "fishing": ["fishing", "fish", "angling", "catch", "rod", "bait"],
  "dream": ["dream", "sleep", "interpretation", "meaning", "subconscious"],
  "celebrity": ["celebrity", "famous", "star", "actor", "musician"],
  "binary": ["binary", "converter", "code", "programming", "computer"],
  "peace": ["peace", "meditation", "calm", "zen", "tranquil"],
  "automotive": ["automotive", "car", "automobile", "vehicle", "auto"],
  "food": ["food", "nutrition", "recipe", "cooking", "meal", "diet"],
  "quality": ["quality", "standard", "grade", "assessment", "rating"],
  "spirit": ["spiritual", "spirituality", "religion", "religious", "god", "gods", "divine", "sacred", "faith", "soul", "gnostic", "mystical"],
  "writing": ["write", "writer", "book", "script", "author", "novel", "story", "content", "blog", "article"],
  "agent": ["agent", "agents", "autonomous", "automation", "assistant", "bot", "multi-agent"]
};

export const semanticGroups = {
  creativity: ["art", "design", "creative", "draw", "paint", "sketch", "illustration"],
  communication: ["chat", "talk", "conversation", "communicate", "speak", "message"],
  productivity: ["work", "business", "productivity", "efficiency", "automation"],
  learning: ["learn", "education", "skill", "course", "tutorial", "training"],
  entertainment: ["fun", "game", "entertainment", "play", "enjoy", "leisure"],
  wellness: ["health", "wellness", "fitness", "meditation", "peace", "calm"],
  spirituality: ["spiritual", "spirituality", "spirit", "religion", "religious", "god", "gods", "divine", "sacred", "soul", "faith", "gnostic", "mystical", "philosophy", "wisdom"],
  writing: ["write", "writing", "writer", "book", "script", "author", "novel", "story", "content", "blog", "article", "screenplay"],
  agents: ["agent", "agents", "autonomous", "automation", "assistant", "bot", "multi-agent"]
};

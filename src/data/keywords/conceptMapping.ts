// Smart concept-to-tool mapping for intelligent search
// Maps search concepts/ideas to related tools based on what they do

export const conceptMapping: Record<string, string[]> = {
  // Dream & Sleep concepts
  "dream": ["dream interpreter gpt", "fortune teller gpt", "sophia aeterna", "soul map gpt"],
  "dreams": ["dream interpreter gpt", "fortune teller gpt", "sophia aeterna"],
  "nightmare": ["dream interpreter gpt", "mental wellness gpt", "soul map gpt"],
  "nightmares": ["dream interpreter gpt", "mental wellness gpt"],
  "sleep": ["dream interpreter gpt", "mental wellness gpt"],
  "sleeping": ["dream interpreter gpt", "mental wellness gpt"],
  "dreaming": ["dream interpreter gpt", "fortune teller gpt"],
  "subconscious": ["dream interpreter gpt", "mental wellness gpt", "soul map gpt"],
  
  // Music & Sound creation concepts  
  "music": ["suno", "udio", "music video maker", "music melodies", "boomy", "ai music"],
  "song": ["suno", "udio", "music video maker", "music melodies", "boomy"],
  "beat": ["suno", "udio", "boomy", "music generation"],
  "melody": ["suno", "udio", "music melodies", "boomy"],
  "lyrics": ["suno", "udio", "music video maker"],
  "soundtrack": ["suno", "udio", "music video maker"],
  "audio": ["eleven labs", "suno", "udio", "murf", "speechify"],
  "compose": ["suno", "udio", "boomy", "music generation"],
  "producer": ["suno", "udio", "music video maker"],
  
  // Death & Memory concepts
  "death": ["resurrection gpt", "dream interpreter gpt", "talk to history gpt"],
  "passed away": ["resurrection gpt", "immortalizeme"],
  "deceased": ["resurrection gpt", "immortalizeme"],
  "grief": ["resurrection gpt", "mental wellness gpt"],
  "mourning": ["resurrection gpt", "mental wellness gpt"],
  "remember": ["resurrection gpt", "immortalizeme", "memory"],
  "memory": ["resurrection gpt", "immortalizeme", "talk to history gpt"],
  "memories": ["resurrection gpt", "immortalizeme"],
  "lost loved one": ["resurrection gpt", "immortalizeme"],
  "ancestor": ["resurrection gpt", "talk to history gpt", "native american history"],
  "ancestors": ["resurrection gpt", "talk to history gpt"],
  
  // Travel & Exploration concepts
  "travel": ["time machine gpt", "travel advisor gpt", "imagination traveler gpt", "stellaris"],
  "vacation": ["travel advisor gpt", "travel agent gpt"],
  "trip": ["travel advisor gpt", "time machine gpt"],
  "explore": ["time machine gpt", "stellaris", "imagination traveler gpt", "phenomenon explorer"],
  "adventure": ["time machine gpt", "imagination traveler gpt", "survivalist gpt"],
  "journey": ["time machine gpt", "travel advisor gpt", "imagination traveler gpt"],
  
  // History & Past concepts
  "history": ["talk to history gpt", "time machine gpt", "historical headlines gpt", "interpretis"],
  "historical": ["talk to history gpt", "time machine gpt", "historical apothecary gpt"],
  "past": ["time machine gpt", "talk to history gpt", "historical headlines gpt"],
  "ancient": ["talk to history gpt", "interpretis", "sophia aeterna", "alchemist scientist gpt"],
  "medieval": ["talk to history gpt", "alchemist scientist gpt"],
  "victorian": ["talk to history gpt", "historical apothecary gpt"],
  
  // Future & Prediction concepts
  "future": ["fortune teller gpt", "probability gpt", "if ai ruled the world", "sustainable futures gpt"],
  "predict": ["fortune teller gpt", "probability gpt", "predictive credit score"],
  "prediction": ["fortune teller gpt", "probability gpt"],
  "forecast": ["fortune teller gpt", "probability gpt", "trader gpt"],
  "prophecy": ["fortune teller gpt", "oraculum"],
  
  // Writing concepts
  "write": ["book writer gpt", "movie script writer gpt", "article rewriter", "grant writer gpt"],
  "author": ["book writer gpt", "article rewriter"],
  "novel": ["book writer gpt", "children's picture book maker"],
  "script": ["movie script writer gpt", "podcast script writer gpt", "playwriter gpt"],
  "screenplay": ["movie script writer gpt", "playwriter gpt"],
  
  // Health & Medical concepts
  "sick": ["personalized dr. gpt", "mental wellness gpt", "veterinarian gpt"],
  "illness": ["personalized dr. gpt", "pharmaceutical assistant gpt"],
  "disease": ["personalized dr. gpt", "pharmaceutical assistant gpt"],
  "medicine": ["personalized dr. gpt", "pharmaceutical assistant gpt", "historical apothecary gpt"],
  "doctor": ["personalized dr. gpt", "veterinarian gpt"],
  "therapy": ["mental wellness gpt", "marriage mender gpt"],
  "mental health": ["mental wellness gpt", "personalized dr. gpt"],
  "anxiety": ["mental wellness gpt", "personalized dr. gpt"],
  "depression": ["mental wellness gpt", "personalized dr. gpt"],
  "stress": ["mental wellness gpt", "personalized dr. gpt"],
  
  // Pet & Animal concepts
  "pet": ["veterinarian gpt", "petcare gpt"],
  "dog": ["veterinarian gpt", "petcare gpt"],
  "cat": ["veterinarian gpt", "petcare gpt"],
  "animal": ["veterinarian gpt", "fisherman gpt"],
  
  // Legal & Government concepts
  "lawyer": ["legal draftsmith gpt", "public defender gpt", "contract review bot"],
  "attorney": ["legal draftsmith gpt", "public defender gpt"],
  "court": ["public defender gpt", "legislation writer gpt"],
  "contract": ["contract review bot", "legal draftsmith gpt"],
  "law": ["legal draftsmith gpt", "public defender gpt", "legislation writer gpt"],
  
  // Business & Money concepts
  "startup": ["startup validator gpt", "business plan generator gpt", "microsaas gpt"],
  "business": ["business plan generator gpt", "startup validator gpt", "trader gpt"],
  "entrepreneur": ["startup validator gpt", "business plan generator gpt", "microsaas gpt"],
  "money": ["trader gpt", "taxes gpt", "material valuation gpt"],
  "invest": ["trader gpt", "startup validator gpt"],
  "trading": ["trader gpt", "probability gpt"],
  
  // Education & Learning concepts
  "learn": ["learn any course", "learn any skill gpt", "college degree gpt"],
  "teach": ["learn any course", "course maker gpt", "homeschool gpt"],
  "study": ["learn any course", "college degree gpt", "quiz maker ai"],
  "course": ["learn any course", "course maker gpt", "college degree gpt"],
  "lesson": ["learn any course", "music melodies & lessons gpt"],
  "tutor": ["learn any course", "homeschool gpt"],
  
  // Design & Art concepts
  "design": ["graphic & cover design gpt", "tattoo designer gpt", "restyle me gpt"],
  "logo": ["graphic & cover design gpt", "graphic design gpt"],
  "art": ["graphic & cover design gpt", "sketch artist gpt", "restyle me gpt"],
  "draw": ["sketch artist gpt", "tattoo designer gpt", "coloring book generator"],
  "sketch": ["sketch artist gpt", "tattoo designer gpt"],
  "tattoo": ["tattoo designer gpt", "sketch artist gpt"],
  
  // Video & Film concepts
  "video": ["movie maker studio", "music video maker", "luma dream machine", "sora prompt assistant"],
  "film": ["movie maker studio", "movie script writer gpt", "movie scene maker gpt"],
  "movie": ["movie maker studio", "movie script writer gpt", "movie scene maker gpt"],
  "cinema": ["movie maker studio", "movie script writer gpt"],
  
  // Food & Cooking concepts
  "cook": ["chef sizzle gpt", "restaurant menu maker gpt", "food quality inspector gpt"],
  "recipe": ["chef sizzle gpt", "cannabis recipe assistant"],
  "food": ["chef sizzle gpt", "restaurant menu maker gpt", "food quality inspector gpt"],
  "restaurant": ["restaurant menu maker gpt", "chef sizzle gpt"],
  "drink": ["mixologist gpt", "chef sizzle gpt"],
  "cocktail": ["mixologist gpt", "bartender"],
  
  // Game concepts
  "game": ["seele video game generator", "game design document gpt", "trivia night gpt"],
  "gaming": ["seele video game generator", "game design document gpt"],
  "videogame": ["seele video game generator", "game design document gpt"],
  "play": ["trivia night gpt", "playwriter gpt"],
  
  // Property & Real Estate concepts
  "house": ["property data finder gpt", "home renovator gpt", "solar land assessor gpt"],
  "home": ["home renovator gpt", "homeschool gpt", "property data finder gpt"],
  "property": ["property data finder gpt", "solar land assessor gpt"],
  "real estate": ["property data finder gpt", "solar land assessor gpt"],
  "renovation": ["home renovator gpt", "property data finder gpt"],
  
  // Technology & AI concepts
  "ai": ["godmode gpt", "ai tools finder gpt", "customizable gpt maker", "clarity omni gpt"],
  "artificial intelligence": ["godmode gpt", "ai tools finder gpt", "customizable gpt maker"],
  "robot": ["godmode gpt", "ai tools finder gpt"],
  "automation": ["godmode gpt", "multitasker gpt"],
  
  // Science concepts
  "science": ["nikola tesla gpt", "stellaris", "genome gpt", "alchemist scientist gpt"],
  "experiment": ["alchemist scientist gpt", "nikola tesla gpt"],
  "research": ["data research analysis report gpt", "illuminous", "genome gpt"],
  "space": ["stellaris", "astronomy", "cosmic"],
  "dna": ["genome gpt", "genetics"],
  
  // Spiritual & Religious concepts
  "soul": ["soul map gpt", "sophia aeterna", "mary magdalene gpt"],
  "spirit": ["sophia aeterna", "talk to the gods gpt", "mary magdalene gpt"],
  "god": ["talk to the gods gpt", "mary magdalene gpt", "oraculum"],
  "gods": ["talk to the gods gpt", "oraculum"],
  "religious": ["talk to the gods gpt", "mary magdalene gpt"],
  "faith": ["mary magdalene gpt", "talk to the gods gpt"],
  "enlightenment": ["alan watts gpt", "sophia aeterna"],
  "meditation": ["alan watts gpt", "mental wellness gpt", "soul map gpt"],
  "wisdom": ["sophia aeterna", "alan watts gpt", "interpretis"],
  
  // Paranormal & Mystery concepts
  "ghost": ["phenomenon explorer", "ghost hunting gpt", "oraculum"],
  "ufo": ["phenomenon explorer", "ufo investigation gpt"],
  "alien": ["phenomenon explorer", "stellaris"],
  "paranormal": ["phenomenon explorer", "ghost hunting gpt", "oraculum"],
  "mystery": ["phenomenon explorer", "oraculum", "criminologist gpt"],
  "supernatural": ["phenomenon explorer", "oraculum", "supernatural myths gpt"],
  
  // Job & Career concepts
  "job": ["resume & job finder ai suite", "job finder gpt"],
  "career": ["resume & job finder ai suite", "job finder gpt"],
  "resume": ["resume & job finder ai suite", "resume specialist gpt"],
  "cv": ["resume & job finder ai suite", "resume enhancer gpt"],
  "hire": ["resume & job finder ai suite", "job finder gpt"],
  "employment": ["resume & job finder ai suite", "job finder gpt"],
  
  // Nature & Environment concepts
  "nature": ["sustainable futures gpt", "agronomus", "fungus gpt"],
  "environment": ["sustainable futures gpt", "agronomus"],
  "farm": ["agronomus", "fisherman gpt"],
  "farming": ["agronomus", "sustainable futures gpt"],
  "garden": ["agronomus", "sustainable futures gpt"],
  "mushroom": ["fungus gpt", "agronomus"],
  "fungus": ["fungus gpt", "agronomus"],
  
  // Time concepts
  "time": ["time machine gpt", "historical headlines gpt", "titanic resurrections gpt"],
  "era": ["time machine gpt", "talk to history gpt"],
  "century": ["time machine gpt", "talk to history gpt"],
  "decade": ["time machine gpt", "historical headlines gpt"],
  
  // Communication concepts
  "talk": ["talk to history gpt", "talk to the gods gpt", "celebrity chatline gpt"],
  "chat": ["celebrity chatline gpt", "godmode gpt"],
  "conversation": ["celebrity chatline gpt", "talk to the gods gpt"],
  "speak": ["eleven labs", "speechify", "murf"],
  
  // Identity & Self concepts
  "name": ["name insight research & predictor gpt", "soul map gpt"],
  "identity": ["name insight research & predictor gpt", "soul map gpt"],
  "personality": ["name insight research & predictor gpt", "soul map gpt"],
  "self": ["soul map gpt", "mental wellness gpt", "name insight research & predictor gpt"]
};

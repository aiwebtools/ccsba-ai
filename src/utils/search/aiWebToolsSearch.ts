
import { Tool } from "@/types/tools";
import { aiWebToolsKeywords } from "@/data/keywords/aiWebToolsKeywords";

// Enhanced search specifically for AI Web Tools GPTs
export const searchAIWebToolsGPTs = (tools: Tool[], searchTerm: string): Tool[] => {
  if (!searchTerm || searchTerm.length < 2) return [];
  
  const lowerSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = lowerSearchTerm.split(/\s+/);
  
  console.log(`🔍 AI Web Tools search for: "${searchTerm}"`);
  
  // Filter AI Web Tools GPTs - include both lovable.app and chat.openai.com URLs from our custom GPTs
  const aiWebToolsGPTs = tools.filter(tool => 
    tool.directUrl?.includes('lovable.app') || 
    tool.directUrl?.includes('aiwebtools') ||
    tool.directUrl?.includes('chat.openai.com') ||
    tool.directUrl?.includes('chatgpt.com') ||
    tool.title.includes('GPT')
  );
  
  const results = aiWebToolsGPTs.filter(tool => {
    const toolText = `${tool.title} ${tool.description} ${tool.tags?.join(' ') || ''} ${tool.category || ''}`.toLowerCase();
    
    // PRIORITY 1: Exact keyword match in title (highest priority)
    if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 2: Title starts with search term
    if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 3: Any word in title starts with search term
    const titleWords = tool.title.toLowerCase().split(' ');
    if (titleWords.some(word => word.startsWith(lowerSearchTerm))) {
      return true;
    }
    
    // PRIORITY 4: Direct text match in any field
    if (toolText.includes(lowerSearchTerm)) {
      return true;
    }
    
    // PRIORITY 5: Word-by-word matching
    const hasAllWords = searchWords.every(word => toolText.includes(word));
    if (hasAllWords) {
      return true;
    }
    
    // Enhanced keyword matching for AI Web Tools
    for (const [keyword, synonyms] of Object.entries(aiWebToolsKeywords)) {
      if (lowerSearchTerm.includes(keyword) || synonyms.some(syn => lowerSearchTerm.includes(syn))) {
        if (synonyms.some(syn => toolText.includes(syn)) || toolText.includes(keyword)) {
          return true;
        }
      }
    }
    
    // THEATRE/PERFORMING ARTS SPECIFIC MATCHING
    if (lowerSearchTerm.includes('theatre') || lowerSearchTerm.includes('theater') || 
        lowerSearchTerm.includes('stage') || lowerSearchTerm.includes('performing') ||
        lowerSearchTerm.includes('drama') || lowerSearchTerm.includes('acting')) {
      if (tool.title.toLowerCase().includes('stagemaster') || 
          tool.title.toLowerCase().includes('stage master') ||
          toolText.includes('performing arts') || 
          toolText.includes('stage production') ||
          toolText.includes('theatre') || 
          toolText.includes('theater') ||
          toolText.includes('choreography') ||
          toolText.includes('costume') ||
          toolText.includes('lighting') ||
          toolText.includes('set design')) {
        return true;
      }
    }
    
    // Fuzzy matching for common variations - ENHANCED PING WORDS
    const fuzzyMatches = [
      { search: 'learn', matches: ['learn', 'education', 'course', 'skill', 'study', 'tutorial'] },
      { search: 'chatgpt', matches: ['gpt', 'chat'] },
      { search: 'openai', matches: ['gpt', 'artificial intelligence'] },
      { search: 'ai art', matches: ['restyle', 'graphic', 'design'] },
      { search: 'video', matches: ['movie', 'scene', 'sora'] },
      { search: 'writing', matches: ['book', 'script', 'content', 'writer', 'author', 'novel', 'story', 'screenplay', 'article', 'blog'] },
      { search: 'write', matches: ['book', 'script', 'content', 'writer', 'author', 'novel', 'story', 'screenplay', 'article', 'blog'] },
      { search: 'medical', matches: ['doctor', 'health', 'wellness', 'dr', 'gpt'] },
      { search: 'health', matches: ['medical', 'doctor', 'wellness', 'mental', 'gpt'] },
      { search: 'personal', matches: ['honest advice', 'life coach', 'personal development', 'self-discovery', 'guidance'] },
      { search: 'theatre', matches: ['stage', 'performing', 'drama', 'acting', 'stagemaster', 'choreography'] },
      { search: 'theater', matches: ['stage', 'performing', 'drama', 'acting', 'stagemaster', 'choreography'] },
      // SPIRITUALITY & RELIGION MATCHING
      { search: 'spirit', matches: ['spiritual', 'spirituality', 'god', 'gods', 'divine', 'sacred', 'religion', 'religious', 'faith', 'soul', 'gnostic', 'mystical', 'mani', 'manicheism', 'resurrection', 'alan watts', 'mary magdalene', 'sophia', 'oraculum'] },
      { search: 'spiritual', matches: ['spirit', 'god', 'gods', 'divine', 'sacred', 'religion', 'religious', 'faith', 'soul', 'gnostic', 'mystical', 'mani', 'manicheism', 'resurrection', 'alan watts', 'mary magdalene', 'sophia', 'oraculum'] },
      { search: 'spirituality', matches: ['spirit', 'god', 'gods', 'divine', 'sacred', 'religion', 'religious', 'faith', 'soul', 'gnostic', 'mystical', 'mani', 'manicheism', 'resurrection', 'alan watts', 'mary magdalene', 'sophia', 'oraculum'] },
      { search: 'religion', matches: ['spiritual', 'god', 'gods', 'divine', 'sacred', 'faith', 'gnostic', 'christian', 'buddhist', 'hindu', 'islamic', 'jewish', 'mythology'] },
      { search: 'religious', matches: ['spiritual', 'god', 'gods', 'divine', 'sacred', 'faith', 'gnostic', 'christian', 'buddhist', 'hindu', 'islamic', 'jewish', 'mythology'] },
      // AGENT MATCHING
      { search: 'agent', matches: ['agent', 'agents', 'autonomous', 'automation', 'automated', 'assistant', 'bot', 'multi-agent', 'ai agent'] },
      { search: 'agents', matches: ['agent', 'autonomous', 'automation', 'automated', 'assistant', 'bot', 'multi-agent', 'ai agent'] }
    ];
    
    for (const fuzzy of fuzzyMatches) {
      if (lowerSearchTerm.includes(fuzzy.search)) {
        if (fuzzy.matches.some(match => toolText.includes(match))) {
          return true;
        }
      }
    }
    
    return false;
  });
  
  console.log(`🎯 AI Web Tools search found ${results.length} results`);
  return results;
};

// Enhanced search scoring for AI Web Tools GPTs
export const scoreAIWebToolsGPT = (tool: Tool, searchTerm: string): number => {
  const lowerSearchTerm = searchTerm.toLowerCase();
  const toolText = `${tool.title} ${tool.description}`.toLowerCase();
  const titleWords = tool.title.toLowerCase().split(' ');
  
  // Normalize for better matching
  const normalizedTitle = tool.title.toLowerCase().replace(/\s+/g, ' ').trim();
  const normalizedSearch = lowerSearchTerm.replace(/\s+/g, ' ').trim();
  const titleNoSpaces = normalizedTitle.replace(/\s+/g, '');
  const searchNoSpaces = normalizedSearch.replace(/\s+/g, '');
  const searchWords = normalizedSearch.split(/\s+/).filter(w => w.length > 1);
  
  let score = 0;
  
  // PERFECT exact match
  if (normalizedTitle === normalizedSearch) {
    score += 100000;
  }
  
  // Check if all search words appear in title in order
  let allWordsInOrder = true;
  let lastIndex = -1;
  for (const word of searchWords) {
    const index = normalizedTitle.indexOf(word, lastIndex + 1);
    if (index === -1) {
      allWordsInOrder = false;
      break;
    }
    lastIndex = index;
  }
  if (allWordsInOrder && searchWords.length >= 2) {
    score += 90000; // Very high for ordered matches
  }
  
  // Number/spacing variation (VEO3 vs VEO 3)
  if (titleNoSpaces.includes(searchNoSpaces) && searchNoSpaces.length > 3) {
    score += 85000;
  }
  
  // All search words match title words
  const matchedWords = searchWords.filter(sw => 
    titleWords.some(tw => tw === sw || tw.startsWith(sw))
  );
  if (matchedWords.length === searchWords.length && searchWords.length >= 2) {
    score += 80000;
  }
  
  // PRIORITY BOOST FOR "PERSONAL" SEARCHES - Custom GPTs first
  if (lowerSearchTerm.includes('personal')) {
    // Boost AI Web Tools custom GPTs significantly for "personal" searches
    if (tool.directUrl?.includes('lovable.app') || 
        tool.directUrl?.includes('aiwebtools') ||
        tool.directUrl?.includes('chat.openai.com') ||
        tool.directUrl?.includes('chatgpt.com')) {
      score += 2000; // Massive boost for custom GPTs
    }
    
    // Specific boosts for personal development tools
    if (tool.title.toLowerCase().includes('honest advice gpt')) {
      score += 1500; // High priority for Honest Advice GPT
    }
    if (tool.title.toLowerCase().includes('personal life coach gpt')) {
      score += 1400; // High priority for Personal Life Coach GPT
    }
    if (toolText.includes('personal development') || toolText.includes('self-discovery')) {
      score += 1200;
    }
    if (toolText.includes('guidance') || toolText.includes('advice')) {
      score += 1100;
    }
  }
  
  // THEATRE/PERFORMING ARTS PRIORITY BOOST
  if (lowerSearchTerm.includes('theatre') || lowerSearchTerm.includes('theater') || 
      lowerSearchTerm.includes('stage') || lowerSearchTerm.includes('performing')) {
    if (tool.title.toLowerCase().includes('stagemaster')) {
      score += 1500; // High priority for Stagemaster AI Suite
    }
    if (toolText.includes('performing arts') || toolText.includes('stage production')) {
      score += 1200;
    }
    if (toolText.includes('choreography') || toolText.includes('costume') || toolText.includes('lighting')) {
      score += 1000;
    }
  }
  
  // SPIRITUALITY/RELIGION PRIORITY BOOST
  if (lowerSearchTerm.includes('spirit') || lowerSearchTerm.includes('spiritual') || 
      lowerSearchTerm.includes('spirituality') || lowerSearchTerm.includes('religion') || 
      lowerSearchTerm.includes('religious') || lowerSearchTerm.includes('god') || 
      lowerSearchTerm.includes('divine') || lowerSearchTerm.includes('sacred')) {
    if (tool.title.toLowerCase().includes('talk to the gods')) {
      score += 1500;
    }
    if (tool.title.toLowerCase().includes('mary magdalene')) {
      score += 1400;
    }
    if (tool.title.toLowerCase().includes('alan watts')) {
      score += 1350;
    }
    if (tool.title.toLowerCase().includes('manicheism') || tool.title.toLowerCase().includes('mani')) {
      score += 1300;
    }
    if (tool.title.toLowerCase().includes('sophia aeterna')) {
      score += 1250;
    }
    if (tool.title.toLowerCase().includes('resurrection')) {
      score += 1200;
    }
    if (tool.title.toLowerCase().includes('oraculum')) {
      score += 1150;
    }
    if (toolText.includes('spiritual') || toolText.includes('religion') || toolText.includes('divine')) {
      score += 1000;
    }
    if (tool.category?.toLowerCase().includes('spiritual') || tool.category?.toLowerCase().includes('religion')) {
      score += 900;
    }
  }
  
  // WRITING TOOLS PRIORITY BOOST
  if (lowerSearchTerm.includes('writ') || lowerSearchTerm === 'write' || lowerSearchTerm === 'writing') {
    if (tool.title.toLowerCase().includes('book writer')) {
      score += 1500;
    }
    if (tool.title.toLowerCase().includes('script writer') || tool.title.toLowerCase().includes('screenplay')) {
      score += 1400;
    }
    if (tool.title.toLowerCase().includes('playwriter')) {
      score += 1350;
    }
    if (tool.title.toLowerCase().includes('article') || tool.title.toLowerCase().includes('rewriter')) {
      score += 1300;
    }
    if (toolText.includes('writing') || toolText.includes('writer') || toolText.includes('author')) {
      score += 1000;
    }
    if (tool.category?.toLowerCase().includes('writing') || tool.category?.toLowerCase().includes('content')) {
      score += 900;
    }
  }
  
  // AGENT TOOLS PRIORITY BOOST
  if (lowerSearchTerm.includes('agent')) {
    if (tool.title.toLowerCase().includes('agent')) {
      score += 1500;
    }
    if (toolText.includes('agent') || toolText.includes('autonomous') || toolText.includes('automation')) {
      score += 1000;
    }
    if (tool.category?.toLowerCase().includes('agent')) {
      score += 900;
    }
  }
  
  // LEARNING/EDUCATIONAL TOOLS PRIORITY
  if (lowerSearchTerm.includes('learn')) {
    // Exact matches get highest priority
    if (tool.title.toLowerCase().includes('learn any skill gpt')) {
      score += 1000; // Highest priority for "Learn Any Skill GPT"
    }
    if (tool.title.toLowerCase().includes('learn any course gpt')) {
      score += 950; // Second highest for "Learn Any Course GPT"
    }
    if (tool.title.toLowerCase().includes('college degree gpt')) {
      score += 900; // Third for "College Degree GPT"
    }
    if (tool.title.toLowerCase().includes('home-schooling') || tool.title.toLowerCase().includes('homeschool')) {
      score += 850; // Fourth for homeschooling tools
    }
    // General learning tools
    if (titleWords.some(word => word.startsWith('learn'))) {
      score += 800;
    }
    if (toolText.includes('education') || toolText.includes('learning') || toolText.includes('course')) {
      score += 700;
    }
  }
  
  // EXACT WORD MATCHING IN TITLE (Very High Priority)
  if (titleWords.some(word => word === lowerSearchTerm)) {
    score += 800; // Exact word match in title
  }
  
  // TITLE STARTS WITH SEARCH TERM
  if (tool.title.toLowerCase().startsWith(lowerSearchTerm)) {
    score += 700;
  }
  
  // ANY WORD IN TITLE STARTS WITH SEARCH TERM
  if (titleWords.some(word => word.startsWith(lowerSearchTerm))) {
    score += 600;
  }
  
  // PRIORITY SCORING FOR MEDICAL SEARCHES
  if (lowerSearchTerm.includes('medical') || lowerSearchTerm.includes('health') || lowerSearchTerm.includes('doctor') || lowerSearchTerm.includes('wellness')) {
    if (toolText.includes('personalized dr. gpt') || toolText.includes('doctor gpt')) {
      score += 500;
    }
    if (toolText.includes('mental wellness gpt')) {
      score += 490;
    }
    if (toolText.includes('veterinarian gpt')) {
      score += 400;
    }
    if (toolText.includes('pharmaceutical assistant')) {
      score += 380;
    }
  }
  
  // Exact title match gets highest score
  if (tool.title.toLowerCase().includes(lowerSearchTerm)) {
    score += 500;
  }
  
  // Description match
  if (tool.description?.toLowerCase().includes(lowerSearchTerm)) {
    score += 250;
  }
  
  // Tag matches
  if (tool.tags?.some(tag => tag.toLowerCase().includes(lowerSearchTerm))) {
    score += 200;
  }
  
  // Category match
  if (tool.category?.toLowerCase().includes(lowerSearchTerm)) {
    score += 150;
  }
  
  // Keyword enhancement scoring
  for (const [keyword, synonyms] of Object.entries(aiWebToolsKeywords)) {
    if (lowerSearchTerm.includes(keyword)) {
      if (toolText.includes(keyword)) score += 100;
      if (synonyms.some(syn => toolText.includes(syn))) score += 75;
    }
  }
  
  // Boost for AI Web Tools original GPTs (all our custom GPTs)
  if (tool.directUrl?.includes('lovable.app') || 
      tool.directUrl?.includes('chat.openai.com') ||
      tool.directUrl?.includes('chatgpt.com')) {
    score += 50;
  }
  
  return score;
};

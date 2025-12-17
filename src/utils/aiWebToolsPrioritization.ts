import { Tool } from "@/types/tools";
import { sortGPTsByPowerRanking } from "./gptPowerRanking";

/**
 * Utility functions to prioritize AI Web Tools GPTs with videos/images
 * These tools should appear first in all categories and sections
 * Now enhanced with power ranking system
 * CCSBA Focus: Cannabis and small business tools prioritized for members
 */

// Cannabis-related keywords for CCSBA member prioritization
const CANNABIS_KEYWORDS = [
  'cannabis', 'hemp', 'cbd', 'marijuana', 'weed', 'dispensary', 'cultivation',
  'grower', 'grow', 'strain', 'terpene', 'cannabinoid', 'thc', 'greenleaf'
];

// Small business keywords for CCSBA member prioritization
const SMALL_BUSINESS_KEYWORDS = [
  'business', 'entrepreneur', 'startup', 'small business', 'company', 'enterprise',
  'marketing', 'sales', 'finance', 'accounting', 'tax', 'invoice', 'budget',
  'business plan', 'grant', 'funding', 'loan', 'profit', 'revenue', 'client',
  'customer', 'contract', 'legal', 'compliance', 'training', 'manual', 'employee',
  'hiring', 'hr', 'payroll', 'inventory', 'supply chain', 'logistics', 'retail',
  'e-commerce', 'store', 'shop', 'market', 'brand', 'advertising', 'social media',
  'website', 'seo', 'analytics', 'crm', 'proposal', 'pitch', 'investor', 'microsaas'
];

// Check if tool is cannabis-related (highest priority for CCSBA)
export const isCannabisRelated = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.category || ''} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  return CANNABIS_KEYWORDS.some(keyword => searchText.includes(keyword)) ||
         tool.title.toLowerCase().includes('cannabis') ||
         tool.title.toLowerCase().includes('fungus') ||
         tool.title.toLowerCase().includes('hemp');
};

// Check if tool is small business related (high priority for CCSBA members)
export const isSmallBusinessRelated = (tool: Tool): boolean => {
  const searchText = `${tool.title} ${tool.description} ${tool.category || ''} ${tool.tags?.join(' ') || ''}`.toLowerCase();
  return SMALL_BUSINESS_KEYWORDS.some(keyword => searchText.includes(keyword));
};

// Check if tool is an AI Web Tools GPT
export const isAIWebToolsGPT = (tool: Tool): boolean => {
  return tool.directUrl?.includes('lovable.app') || 
         tool.directUrl?.includes('aiwebtools') ||
         tool.description?.toLowerCase().includes('aiwebtools') ||
         tool.tags?.some(tag => tag.toLowerCase().includes('aiwebtools'));
};

// Check if tool has video or image media
export const hasVideoOrImageMedia = (tool: Tool): boolean => {
  const hasVideo = tool.videoUrl && tool.videoUrl.trim() !== '';
  const hasImage = tool.imageUrl && tool.imageUrl.trim() !== '';
  return hasVideo || hasImage;
};

// Check if tool is Soul Map GPT (ultimate priority)
export const isSoulMapGPT = (tool: Tool): boolean => {
  return tool.title.toLowerCase().includes('soul map') || 
         tool.title.toLowerCase().includes('soul scan');
};

// Check if tool is a priority AI Web Tools GPT (has media)
export const isPriorityAIWebToolsGPT = (tool: Tool): boolean => {
  return isAIWebToolsGPT(tool) && hasVideoOrImageMedia(tool);
};

// Sort tools to prioritize Soul Map GPT first, then AI Web Tools GPTs with media, using power rankings
export const sortWithAIWebToolsPriority = (tools: Tool[]): Tool[] => {
  return tools.sort((a, b) => {
    const aIsSoulMap = isSoulMapGPT(a);
    const bIsSoulMap = isSoulMapGPT(b);
    const aIsPriority = isPriorityAIWebToolsGPT(a);
    const bIsPriority = isPriorityAIWebToolsGPT(b);
    const aIsAIWebTools = isAIWebToolsGPT(a);
    const bIsAIWebTools = isAIWebToolsGPT(b);
    
    // Priority 0: Soul Map GPT always first
    if (aIsSoulMap && !bIsSoulMap) return -1;
    if (!aIsSoulMap && bIsSoulMap) return 1;
    
    // Priority 1: AI Web Tools GPTs with media (sorted by power ranking)
    if (aIsPriority && !bIsPriority) return -1;
    if (!aIsPriority && bIsPriority) return 1;
    if (aIsPriority && bIsPriority) {
      // Both have media, sort by power ranking
      return sortGPTsByPowerRanking([a, b]).indexOf(a) - sortGPTsByPowerRanking([a, b]).indexOf(b);
    }
    
    // Priority 2: All AI Web Tools GPTs (sorted by power ranking)
    if (aIsAIWebTools && !bIsAIWebTools) return -1;
    if (!aIsAIWebTools && bIsAIWebTools) return 1;
    if (aIsAIWebTools && bIsAIWebTools) {
      // Both are AI Web Tools, sort by power ranking
      return sortGPTsByPowerRanking([a, b]).indexOf(a) - sortGPTsByPowerRanking([a, b]).indexOf(b);
    }
    
    // Priority 3: Tools with media (for non-AI Web Tools)
    if (!aIsAIWebTools && !bIsAIWebTools) {
      const aHasMedia = hasVideoOrImageMedia(a);
      const bHasMedia = hasVideoOrImageMedia(b);
      if (aHasMedia && !bHasMedia) return -1;
      if (!aHasMedia && bHasMedia) return 1;
    }
    
    // Priority 4: Sort by rating (descending)
    const ratingDiff = (b.rating || 0) - (a.rating || 0);
    if (ratingDiff !== 0) return ratingDiff;
    
    // Priority 5: Sort alphabetically by title
    return a.title.localeCompare(b.title);
  });
};

// Get priority score for search results (enhanced with relevance checking)
export const getAIWebToolsPriorityScore = (tool: Tool, searchTerm?: string): number => {
  let score = 0;
  
  // If no search term, apply normal prioritization
  if (!searchTerm) {
    if (isSoulMapGPT(tool)) {
      score += 50000; // Ultimate priority for Soul Map GPT
    } else if (isPriorityAIWebToolsGPT(tool)) {
      score += 10000; // Highest priority for AI Web Tools GPTs with media
    } else if (isAIWebToolsGPT(tool)) {
      score += 5000; // High priority for all AI Web Tools GPTs
    } else if (hasVideoOrImageMedia(tool)) {
      score += 1000; // Medium priority for tools with media
    }
    return score;
  }
  
  // Check if the tool is actually relevant to the search term
  const lowerTitle = tool.title.toLowerCase();
  const lowerDescription = tool.description.toLowerCase();
  const lowerCategory = tool.category?.toLowerCase() || '';
  const lowerTags = tool.tags?.map(tag => tag.toLowerCase()) || [];
  const lowerSearchTerm = searchTerm.toLowerCase();
  
  // Check for relevance - tool should contain search term or related keywords
  const isRelevant = 
    lowerTitle.includes(lowerSearchTerm) ||
    lowerDescription.includes(lowerSearchTerm) ||
    lowerCategory.includes(lowerSearchTerm) ||
    lowerTags.some(tag => tag.includes(lowerSearchTerm)) ||
    // Check for related keywords
    (lowerSearchTerm.includes('video') && (
      lowerTitle.includes('video') || lowerTitle.includes('movie') || lowerTitle.includes('film') ||
      lowerDescription.includes('video') || lowerDescription.includes('movie') || lowerDescription.includes('film')
    )) ||
    (lowerSearchTerm.includes('learn') && (
      lowerTitle.includes('learn') || lowerTitle.includes('course') || lowerTitle.includes('education') ||
      lowerDescription.includes('learn') || lowerDescription.includes('course') || lowerDescription.includes('education')
    )) ||
    (lowerSearchTerm.includes('health') && (
      lowerTitle.includes('health') || lowerTitle.includes('medical') || lowerTitle.includes('doctor') ||
      lowerDescription.includes('health') || lowerDescription.includes('medical') || lowerDescription.includes('doctor')
    ));
  
  // Only give priority if the tool is relevant to the search
  if (isRelevant) {
    if (isSoulMapGPT(tool)) {
      score += 50000; // Ultimate priority for Soul Map GPT
    } else if (isPriorityAIWebToolsGPT(tool)) {
      score += 10000; // Highest priority for AI Web Tools GPTs with media
    } else if (isAIWebToolsGPT(tool)) {
      score += 5000; // High priority for all AI Web Tools GPTs
    }
  }
  
  // Always give some boost for media content
  if (hasVideoOrImageMedia(tool)) {
    score += 1000; // Medium priority for tools with media
  }
  
  return score;
};

// Apply prioritization to any tool array (enhanced with power ranking)
// CCSBA FOCUS: Cannabis and small business tools prioritized for members
export const applyAIWebToolsPrioritization = (tools: Tool[]): Tool[] => {
  if (!tools || tools.length === 0) return tools;
  
  console.log(`🔧 PRIORITIZATION: Processing ${tools.length} tools for CCSBA members`);
  
  // CCSBA Priority Categories - Cannabis and Small Business FIRST
  const cannabisTools = tools.filter(tool => isCannabisRelated(tool) && isAIWebToolsGPT(tool));
  const smallBusinessTools = tools.filter(tool => 
    isSmallBusinessRelated(tool) && isAIWebToolsGPT(tool) && !isCannabisRelated(tool)
  );
  
  // Standard priority categories (excluding already categorized)
  const alreadyCategorized = new Set([...cannabisTools, ...smallBusinessTools].map(t => t.title));
  
  const soulMapGPTs = tools.filter(tool => isSoulMapGPT(tool) && !alreadyCategorized.has(tool.title));
  const priorityGPTs = tools.filter(tool => 
    isPriorityAIWebToolsGPT(tool) && !isSoulMapGPT(tool) && !alreadyCategorized.has(tool.title)
  );
  const otherAIWebToolsGPTs = tools.filter(tool => 
    isAIWebToolsGPT(tool) && !isPriorityAIWebToolsGPT(tool) && 
    !isSoulMapGPT(tool) && !alreadyCategorized.has(tool.title)
  );
  const toolsWithMedia = tools.filter(tool => !isAIWebToolsGPT(tool) && hasVideoOrImageMedia(tool));
  const otherTools = tools.filter(tool => !isAIWebToolsGPT(tool) && !hasVideoOrImageMedia(tool));
  
  console.log(`🌿 CCSBA Cannabis Tools: ${cannabisTools.length}`);
  console.log(`💼 CCSBA Small Business Tools: ${smallBusinessTools.length}`);
  console.log(`🔮 Soul Map GPTs: ${soulMapGPTs.length}`);
  console.log(`🎬 Priority GPTs (with media): ${priorityGPTs.length}`);
  console.log(`🚀 Other AI Web Tools GPTs: ${otherAIWebToolsGPTs.length}`);
  console.log(`📺 Third-party tools with media: ${toolsWithMedia.length}`);
  console.log(`📝 Other tools: ${otherTools.length}`);
  
  // Log cannabis tools for verification
  if (cannabisTools.length > 0) {
    console.log(`🌿 TOP CANNABIS TOOLS:`, cannabisTools.slice(0, 5).map(t => t.title));
  }
  
  // Log small business tools for verification
  if (smallBusinessTools.length > 0) {
    console.log(`💼 TOP SMALL BUSINESS TOOLS:`, smallBusinessTools.slice(0, 5).map(t => t.title));
  }
  
  // Sort each AI Web Tools group - videos/images first within power tiers
  const sortAIWebToolsByMediaAndPower = (toolsArray: Tool[]) => {
    return [...toolsArray].sort((a, b) => {
      // First priority: tools with videos/images
      const aHasMedia = hasVideoOrImageMedia(a);
      const bHasMedia = hasVideoOrImageMedia(b);
      
      if (aHasMedia && !bHasMedia) return -1;
      if (!aHasMedia && bHasMedia) return 1;
      
      // Within same media status, sort by power ranking
      return sortGPTsByPowerRanking([a, b]).indexOf(a) - sortGPTsByPowerRanking([a, b]).indexOf(b);
    });
  };
  
  // Sort non-AI Web Tools by rating and title only
  const sortByRatingAndTitle = (toolsArray: Tool[]) => 
    [...toolsArray].sort((a, b) => {
      const ratingDiff = (b.rating || 0) - (a.rating || 0);
      if (ratingDiff !== 0) return ratingDiff;
      return a.title.localeCompare(b.title);
    });
  
  // CCSBA MEMBER PRIORITY ORDER:
  // 1. Cannabis tools (most relevant to CCSBA members)
  // 2. Small business tools (help members grow their businesses)
  // 3. Soul Map GPT
  // 4. Priority GPTs with media
  // 5. Other AI Web Tools
  // 6. Third-party tools with media
  // 7. Everything else
  const finalResult = [
    ...sortAIWebToolsByMediaAndPower(cannabisTools),       // 🌿 CCSBA Cannabis tools FIRST!
    ...sortAIWebToolsByMediaAndPower(smallBusinessTools),  // 💼 Small business tools second!
    ...sortAIWebToolsByMediaAndPower(soulMapGPTs),         // Soul Map GPT
    ...sortAIWebToolsByMediaAndPower(priorityGPTs),        // AI Web Tools with media
    ...sortAIWebToolsByMediaAndPower(otherAIWebToolsGPTs), // All other AI Web Tools
    ...sortByRatingAndTitle(toolsWithMedia),               // Third-party tools with media
    ...sortByRatingAndTitle(otherTools)                    // Everything else
  ];
  
  console.log(`✅ CCSBA MEMBER PRIORITY ORDER - Top 15:`, finalResult.slice(0, 15).map(t => t.title));
  
  return finalResult;
};

console.log('🌿 CCSBA Prioritization loaded - Cannabis & Small Business tools featured first for members!');
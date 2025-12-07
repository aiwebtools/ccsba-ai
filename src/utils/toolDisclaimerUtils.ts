
import { Tool } from "@/types/tools";

// Keywords that identify spiritual/deity simulation tools
const spiritualKeywords = [
  "god", "gods", "deity", "divine", "saint", "prophet", "angel",
  "mary magdalene", "jesus", "buddha", "allah", "krishna", "shiva",
  "zeus", "odin", "ra", "isis", "athena", "apollo", "thor",
  "sophia aeterna", "talk to the gods", "resurrection gpt", "oraculum",
  "fortune teller", "soul map", "spirit", "afterlife", "religious",
  "gnostic", "mysticism", "enlightenment", "reincarnation", "immortalize",
  "alan watts", "philosophy", "spiritual"
];

// Keywords that identify medical/healthcare tools
const medicalKeywords = [
  "doctor", "dr.", "pharma", "pharmaceutical", "medicine", "medical",
  "health", "healthcare", "wellness", "therapy", "therapist", "cbt",
  "veterinarian", "vet", "pet care", "diagnosis", "clinical",
  "mental health", "mental wellness", "anxiety", "depression",
  "drug", "medication", "prescription", "apothecary", "genome",
  "personalized dr", "pharma research"
];

/**
 * Check if a tool requires a spiritual/deity simulation disclaimer
 */
export const requiresSpiritualDisclaimer = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descLower = (tool.description || "").toLowerCase();
  const categoryLower = (tool.category || "").toLowerCase();
  const tagsLower = (tool.tags || []).join(" ").toLowerCase();
  
  const combinedText = `${titleLower} ${descLower} ${categoryLower} ${tagsLower}`;
  
  // Check for spiritual keywords
  const hasSpiritualContent = spiritualKeywords.some(keyword => 
    combinedText.includes(keyword.toLowerCase())
  );
  
  // Also check category explicitly
  const isSpiritualCategory = categoryLower.includes("spiritual") || 
    categoryLower.includes("philosophy") ||
    categoryLower.includes("religion");
  
  return hasSpiritualContent || isSpiritualCategory;
};

/**
 * Check if a tool requires a medical/healthcare disclaimer
 */
export const requiresMedicalDisclaimer = (tool: Tool): boolean => {
  const titleLower = tool.title.toLowerCase();
  const descLower = (tool.description || "").toLowerCase();
  const categoryLower = (tool.category || "").toLowerCase();
  const tagsLower = (tool.tags || []).join(" ").toLowerCase();
  
  const combinedText = `${titleLower} ${descLower} ${categoryLower} ${tagsLower}`;
  
  // Check for medical keywords
  const hasMedicalContent = medicalKeywords.some(keyword => 
    combinedText.includes(keyword.toLowerCase())
  );
  
  // Also check category explicitly
  const isMedicalCategory = categoryLower.includes("health") || 
    categoryLower.includes("medical") ||
    categoryLower.includes("wellness") ||
    categoryLower.includes("pharma");
  
  return hasMedicalContent || isMedicalCategory;
};

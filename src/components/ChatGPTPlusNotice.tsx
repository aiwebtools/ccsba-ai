import { Info, ExternalLink } from "lucide-react";
import { createTimePortalEffect } from "@/utils/timeEffects";

const ChatGPTPlusNotice = () => {
  const handleChatGPTLink = (e: React.MouseEvent) => {
    e.preventDefault();
    createTimePortalEffect("https://openai.com/chatgpt/pricing");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/50 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Info className="w-8 h-8 text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-300 mb-3 flex items-center gap-2">
            <span>💎 ChatGPT Plus Required for Custom GPTs</span>
          </h3>
          <div className="space-y-3 text-gray-300">
            <p className="text-sm leading-relaxed">
              <strong className="text-blue-400">100% FREE & UNRESTRICTED ACCESS</strong> to all our custom-designed GPT tools 
              requires a <strong>ChatGPT Plus subscription</strong> (approximately $20/month).
            </p>
            <p className="text-sm leading-relaxed">
              <strong className="text-green-400">⚠️ IMPORTANT:</strong> This is an <strong>OpenAI requirement</strong>, 
              not a fee imposed by CCSBA or AIWebTools.AI. We provide the tools for free—OpenAI requires Plus membership to use custom GPTs.
            </p>
            <div className="bg-black/30 rounded-lg p-4 border border-blue-400/30">
              <p className="text-xs text-gray-400 mb-2">With ChatGPT Plus, you get:</p>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>✅ Full access to all 1500+ CCSBA custom GPT tools</li>
                <li>✅ Unlimited conversations with specialized AI assistants</li>
                <li>✅ Priority access during high-demand periods</li>
                <li>✅ Latest GPT-4 model capabilities</li>
              </ul>
            </div>
            <button
              onClick={handleChatGPTLink}
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-semibold group"
            >
              <span>Learn more about ChatGPT Plus</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTPlusNotice;

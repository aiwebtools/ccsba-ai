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
            <span>💎 ChatGPT Plus for Unlimited Access to Custom GPTs</span>
          </h3>
          <div className="space-y-3 text-gray-300">
            <p className="text-sm leading-relaxed">
              Our custom GPTs are powered by <strong className="text-blue-400">GPT-5 capabilities</strong> and are <strong className="text-green-400">100% FREE to use</strong>, 
              but the free version has <strong>rate limits</strong> (limited messages every few hours).
            </p>
            <p className="text-sm leading-relaxed">
              For <strong className="text-blue-400">UNLIMITED ACCESS</strong> without rate limits, you'll need 
              a <strong>ChatGPT Plus subscription</strong> (~$20/month).
            </p>
            <p className="text-sm leading-relaxed">
              <strong className="text-green-400">⚠️ IMPORTANT:</strong> This is an <strong>OpenAI policy</strong>, 
              not a fee imposed by CCSBA or AIWebTools.AI. All our tools are completely free—OpenAI sets the usage limits.
            </p>
            <div className="bg-black/30 rounded-lg p-4 border border-blue-400/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-gray-400 mb-2 font-semibold">Free ChatGPT:</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>✅ GPT-5 capabilities</li>
                    <li>✅ Access to custom GPTs</li>
                    <li>⏱️ Rate limited (few messages/hours)</li>
                    <li>⏸️ May have wait times</li>
                  </ul>
                </div>
                <div>
                  <p className="text-blue-400 mb-2 font-semibold">ChatGPT Plus (~$20/mo):</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>✅ Same GPT-5 power</li>
                    <li>✅ UNLIMITED messages</li>
                    <li>✅ No rate limits or waits</li>
                    <li>✅ Priority access</li>
                  </ul>
                </div>
              </div>
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

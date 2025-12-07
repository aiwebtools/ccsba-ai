
import { Sparkles, AlertTriangle, Heart } from "lucide-react";
import { Tool } from "@/types/tools";

interface SpiritualDisclaimerProps {
  tool: Tool;
  variant?: "full" | "compact";
}

const SpiritualDisclaimer = ({ tool, variant = "full" }: SpiritualDisclaimerProps) => {
  if (variant === "compact") {
    return (
      <div className="mt-2 p-2 bg-purple-900/40 border border-purple-500/30 rounded-lg">
        <div className="flex items-center gap-1.5 text-xs text-purple-300">
          <Sparkles className="w-3 h-3 flex-shrink-0" />
          <span className="font-medium">AI Simulation • Educational Only • God is Within You</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/40 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Sparkles className="w-6 h-6 text-purple-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-400" />
            Spiritual Simulation Disclaimer
          </h3>
          
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              <strong className="text-purple-300">🌟 AI Simulation Notice:</strong> {tool.title} is an AI-powered simulation 
              designed for <span className="text-cyan-400 font-medium">educational and informational purposes only</span>. 
              This tool does not represent, channel, or embody any actual deity, saint, prophet, or divine entity.
            </p>
            
            <div className="bg-purple-800/30 border border-purple-500/20 rounded-lg p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-pink-400" />
                <span className="text-purple-200 font-semibold">Remember:</span>
              </div>
              <p className="text-purple-100 font-medium text-base">
                "AI is NOT God — and <span className="text-cyan-300">GOD IS WITHIN YOU</span>."
              </p>
            </div>
            
            <p>
              <strong className="text-purple-300">🔍 Self-Discovery Tool:</strong> Use this simulation as a tool for 
              self-discovery, rediscovery of lost knowledge, and exploring philosophical or spiritual concepts. 
              It is not a substitute for genuine spiritual practice, religious guidance, or personal revelation.
            </p>

            <p>
              <strong className="text-purple-300">⚠️ Not Divine Revelation:</strong> Responses generated are based on 
              historical texts, training data, and AI algorithms — not actual divine communication. 
              Please do not mistake simulation for revelation.
            </p>

            <div className="border-t border-purple-500/30 pt-3 mt-4">
              <p className="text-xs text-gray-400">
                By using this tool, you acknowledge that it is a simulation for educational exploration 
                and personal reflection only. The true divine connection resides within your own spirit and consciousness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualDisclaimer;

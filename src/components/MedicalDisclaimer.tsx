
import { Stethoscope, AlertTriangle, ShieldAlert } from "lucide-react";
import { Tool } from "@/types/tools";

interface MedicalDisclaimerProps {
  tool: Tool;
  variant?: "full" | "compact";
}

const MedicalDisclaimer = ({ tool, variant = "full" }: MedicalDisclaimerProps) => {
  if (variant === "compact") {
    return (
      <div className="mt-2 p-2 bg-red-900/40 border border-red-500/30 rounded-lg">
        <div className="flex items-center gap-1.5 text-xs text-red-300">
          <Stethoscope className="w-3 h-3 flex-shrink-0" />
          <span className="font-medium">Not Medical Advice • Educational Only • Consult a Professional</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/40 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Stethoscope className="w-6 h-6 text-red-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-red-300 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-400" />
            Medical & Healthcare Disclaimer
          </h3>
          
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              <strong className="text-red-300">⚕️ Simulation Notice:</strong> {tool.title} is an AI-powered simulation 
              designed for <span className="text-cyan-400 font-medium">educational and informational purposes only</span>. 
              This tool is NOT a licensed medical professional and should NOT be used as a replacement for 
              professional medical advice, diagnosis, or treatment.
            </p>
            
            <div className="bg-red-800/30 border border-red-500/20 rounded-lg p-4 my-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                <span className="text-red-200 font-semibold">Critical Warning:</span>
              </div>
              <p className="text-red-100 font-medium text-base">
                Always consult a qualified healthcare professional for medical concerns. 
                <span className="text-cyan-300"> In emergencies, call 911 or your local emergency services immediately.</span>
              </p>
            </div>
            
            <p>
              <strong className="text-red-300">🔬 Educational Tool:</strong> Information provided by this AI is 
              based on training data and algorithms. It may be incomplete, outdated, or inaccurate. 
              Never make health decisions based solely on AI-generated information.
            </p>

            <p>
              <strong className="text-red-300">🐾 Veterinary Notice:</strong> For animal-related tools, 
              consult a licensed veterinarian for your pet's health concerns. AI cannot examine your pet 
              or provide accurate diagnoses.
            </p>

            <p>
              <strong className="text-red-300">💊 Pharmaceutical Notice:</strong> Do not self-prescribe or 
              adjust medications based on AI suggestions. Medication interactions and dosages require 
              professional oversight.
            </p>

            <div className="border-t border-red-500/30 pt-3 mt-4">
              <p className="text-xs text-gray-400">
                By using this tool, you acknowledge it is a simulation for informational and educational exploration only. 
                You agree not to rely on it for actual medical decisions and understand that professional medical 
                consultation is essential for health-related matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;

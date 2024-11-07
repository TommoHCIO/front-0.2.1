import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-[#1a2634] border border-white/10 rounded-2xl shadow-xl p-6 md:p-8 overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#2D9CDB] mb-2">About Chat to Earn</h2>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Chat to Earn is a revolutionary platform that rewards users for their social media engagement. Our mission is to create a sustainable ecosystem where meaningful interactions are valued and rewarded.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Key Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#2D9CDB] rounded-full flex-shrink-0" />
                    <span className="text-justify">Earn tokens for views, likes, comments, and reposts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#2D9CDB] rounded-full flex-shrink-0" />
                    <span className="text-justify">Transparent blockchain-based reward system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 bg-[#2D9CDB] rounded-full flex-shrink-0" />
                    <span className="text-justify">Real-time tracking of your earnings</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Join Our Community</h3>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Be part of the future of social media engagement. Start earning rewards for your online presence and join our growing community of content creators and social media enthusiasts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
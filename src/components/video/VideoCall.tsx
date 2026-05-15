import React, { useState } from 'react';
import { Mic, MicOff, Video as VideoIcon, VideoOff, Phone, Monitor, PhoneOff } from 'lucide-react';

export const VideoCall: React.FC = () => {
  // Call ki states (On/Off check karne ke liye)
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  return (
    <div className="card-base p-6 bg-white rounded-lg shadow-md border border-neutral-200 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-primary-700">Virtual Meeting Room</h2>

      {/* Video Screen Area */}
      <div className="relative w-full h-80 bg-neutral-900 rounded-lg overflow-hidden flex items-center justify-center mb-6 border-2 border-neutral-800">
        {!isCallActive ? (
          <div className="text-center">
            <p className="text-neutral-400 mb-4">Meeting has not started yet</p>
            <button
              onClick={() => setIsCallActive(true)}
              className="bg-primary-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 transition flex items-center gap-2 mx-auto"
            >
              <Phone size={18} /> Start Call
            </button>
          </div>
        ) : (
          <>
            {/* Jab call on ho aur camera on ho */}
            {isVideoOn ? (
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Participant"
                className="w-full h-full object-cover opacity-80"
              />
            ) : (
              // Jab camera off ho
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                A
              </div>
            )}

            {/* Screen sharing label */}
            {isScreenSharing && (
              <div className="absolute top-4 left-4 bg-accent-500 text-white text-xs px-2 py-1 rounded font-semibold">
                Screen Sharing Active
              </div>
            )}
          </>
        )}
      </div>

      {/* Call Control Buttons (Sirf tab dikhenge jab call start hogi) */}
      {isCallActive && (
        <div className="flex items-center justify-center gap-4 bg-neutral-100 p-4 rounded-lg">

          {/* Mic Button */}
          <button
            onClick={() => setIsMicOn(!isMicOn)}
            className={`p-3 rounded-full transition-colors ${isMicOn ? 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300' : 'bg-error-500 text-white hover:bg-error-600'}`}
          >
            {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
          </button>

          {/* Video Button */}
          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-3 rounded-full transition-colors ${isVideoOn ? 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300' : 'bg-error-500 text-white hover:bg-error-600'}`}
          >
            {isVideoOn ? <VideoIcon size={20} /> : <VideoOff size={20} />}
          </button>

          {/* Screen Share Button */}
          <button
            onClick={() => setIsScreenSharing(!isScreenSharing)}
            className={`p-3 rounded-full transition-colors ${isScreenSharing ? 'bg-accent-500 text-white hover:bg-accent-600' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'}`}
          >
            <Monitor size={20} />
          </button>

          {/* End Call Button */}
          <button
            onClick={() => setIsCallActive(false)}
            className="bg-error-500 text-white p-3 rounded-full hover:bg-error-600 transition-colors"
          >
            <PhoneOff size={20} />
          </button>
        </div>
      )}

      {/* Call Status */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isCallActive ? 'bg-success-500' : 'bg-neutral-400'}`}></div>
          <span className={`text-sm ${isCallActive ? 'text-success-700' : 'text-neutral-600'}`}>
            {isCallActive ? 'Meeting in progress' : 'Ready to start meeting'}
          </span>
        </div>
      </div>
    </div>
  );
};
'use client';

import { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Settings, Sparkles } from 'lucide-react';

interface VoiceCommandSystemProps {
  botName: string;
  botType: 'titan' | 'nox' | 'basebot';
  onCommand?: (command: string) => void;
}

export default function VoiceCommandSystem({ botName, botType, onCommand }: VoiceCommandSystemProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(true);
  const [transcript, setTranscript] = useState('');
  const [voiceSettings, setVoiceSettings] = useState({
    voice: 'default',
    speed: 1.0,
    pitch: 1.0,
    volume: 0.8
  });
  const [showSettings, setShowSettings] = useState(false);

  // Available voices
  const voiceOptions = [
    { id: 'default', name: 'Default', gender: 'Neutral', accent: 'American' },
    { id: 'professional-male', name: 'Professional Male', gender: 'Male', accent: 'American' },
    { id: 'professional-female', name: 'Professional Female', gender: 'Female', accent: 'American' },
    { id: 'friendly-male', name: 'Friendly Male', gender: 'Male', accent: 'American' },
    { id: 'friendly-female', name: 'Friendly Female', gender: 'Female', accent: 'American' },
    { id: 'energetic', name: 'Energetic', gender: 'Neutral', accent: 'American' },
    { id: 'calm', name: 'Calm & Soothing', gender: 'Neutral', accent: 'American' },
    { id: 'british-male', name: 'British Male', gender: 'Male', accent: 'British' },
    { id: 'british-female', name: 'British Female', gender: 'Female', accent: 'British' },
    { id: 'southern', name: 'Southern Charm', gender: 'Neutral', accent: 'Southern US' },
    { id: 'robotic', name: 'Robotic/AI', gender: 'Neutral', accent: 'Synthetic' },
    { id: 'wise', name: 'Wise Mentor', gender: 'Neutral', accent: 'American' },
  ];

  const toggleListening = () => {
    if (isListening) {
      // Stop listening
      setIsListening(false);
      setTranscript('');
    } else {
      // Start listening
      setIsListening(true);
      // In production, integrate with Web Speech API
      // For demo, simulate voice recognition
      setTimeout(() => {
        const demoCommand = "Show me my schedule";
        setTranscript(demoCommand);
        if (onCommand) onCommand(demoCommand);
        speak(`Got it! ${demoCommand}`);
        setIsListening(false);
        setTimeout(() => setTranscript(''), 3000);
      }, 2000);
    }
  };

  const speak = (text: string) => {
    if (!isSpeaking) return;
    
    // In production, use Web Speech Synthesis API
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = voiceSettings.speed;
      utterance.pitch = voiceSettings.pitch;
      utterance.volume = voiceSettings.volume;
      
      // Try to set the selected voice
      const voices = window.speechSynthesis.getVoices();
      const selectedVoice = voices.find(v => v.name.toLowerCase().includes('female')) || voices[0];
      if (selectedVoice) utterance.voice = selectedVoice;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  // Common voice commands
  const quickCommands = [
    { label: 'Show Schedule', command: 'show my schedule' },
    { label: 'Clock In', command: 'clock me in' },
    { label: 'Who am I working with?', command: 'who am i working with today' },
    { label: 'Any Messages?', command: 'do i have any messages' },
    { label: 'My Stats', command: 'show my stats' },
    { label: 'Help', command: 'what can you do' },
  ];

  return (
    <div className="relative">
      {/* Voice Control Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleListening}
          className={`relative px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
            isListening
              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse'
              : 'bg-gradient-to-r from-amber-700 to-amber-500 hover:from-stone-900 hover:to-amber-800 text-white'
          }`}
        >
          {isListening ? (
            <>
              <Mic className="w-5 h-5 animate-pulse" />
              Listening...
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              Voice Command
            </>
          )}
          {isListening && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          )}
        </button>

        <button
          onClick={() => setIsSpeaking(!isSpeaking)}
          className={`p-2 rounded-lg transition-all ${
            isSpeaking
              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
              : 'bg-stone-900 text-stone-400 hover:bg-stone-600'
          }`}
          title={isSpeaking ? 'Voice Enabled' : 'Voice Muted'}
        >
          {isSpeaking ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>

        <button
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 bg-stone-900 hover:bg-stone-600 rounded-lg text-white transition-all"
          title="Voice Settings"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Transcript Display */}
      {transcript && (
        <div className="mt-3 p-3 bg-gradient-to-r from-stone-900/20 to-amber-800/20 rounded-lg border border-amber-500/40/30">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-amber-200 font-semibold">YOU SAID:</span>
          </div>
          <p className="text-white font-medium">&ldquo;{transcript}&rdquo;</p>
        </div>
      )}

      {/* Voice Settings Modal */}
      {showSettings && (
        <div className="absolute top-full mt-2 right-0 w-96 bg-stone-900 rounded-xl p-6 border-2 border-amber-500/40/30 shadow-2xl z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Voice Settings</h3>
            <button onClick={() => setShowSettings(false)} className="text-stone-400 hover:text-white">
              ✕
            </button>
          </div>

          {/* Voice Selection */}
          <div className="mb-4">
            <label className="text-sm text-stone-300 font-semibold mb-2 block">Voice Style</label>
            <select
              value={voiceSettings.voice}
              onChange={(e) => setVoiceSettings({ ...voiceSettings, voice: e.target.value })}
              className="w-full bg-stone-900 text-white rounded-lg px-3 py-2 border border-stone-700"
            >
              {voiceOptions.map(voice => (
                <option key={voice.id} value={voice.id}>
                  {voice.name} ({voice.gender} - {voice.accent})
                </option>
              ))}
            </select>
          </div>

          {/* Speed Control */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <label className="text-sm text-stone-300 font-semibold">Speed</label>
              <span className="text-sm text-white">{voiceSettings.speed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.1"
              value={voiceSettings.speed}
              onChange={(e) => setVoiceSettings({ ...voiceSettings, speed: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>

          {/* Pitch Control */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <label className="text-sm text-stone-300 font-semibold">Pitch</label>
              <span className="text-sm text-white">{voiceSettings.pitch.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.0"
              step="0.1"
              value={voiceSettings.pitch}
              onChange={(e) => setVoiceSettings({ ...voiceSettings, pitch: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>

          {/* Volume Control */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <label className="text-sm text-stone-300 font-semibold">Volume</label>
              <span className="text-sm text-white">{Math.round(voiceSettings.volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={voiceSettings.volume}
              onChange={(e) => setVoiceSettings({ ...voiceSettings, volume: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>

          {/* Test Button */}
          <button
            onClick={() => speak(`Hi, I'm ${botName}. How can I help you today?`)}
            className="w-full px-4 py-2 bg-gradient-to-r from-amber-700 to-amber-500 hover:from-stone-900 hover:to-amber-800 text-white rounded-lg font-semibold transition-all"
          >
            Test Voice
          </button>
        </div>
      )}

      {/* Quick Commands */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {quickCommands.map((cmd) => (
          <button
            key={cmd.command}
            onClick={() => {
              if (onCommand) onCommand(cmd.command);
              speak(`Got it! ${cmd.label}`);
            }}
            className="px-3 py-2 bg-stone-900 hover:bg-stone-900 text-white rounded-lg text-sm font-medium transition-all text-left"
          >
            {cmd.label}
          </button>
        ))}
      </div>
    </div>
  );
}




import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { talkToRaiko, generateRaikoMeme } from '../services/geminiService';
import { SendIcon, LOGO_URL } from '../constants';

const GameSection = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'raiko', text: "Woof! Ask me anything, or ask me to 'create' or 'draw' a meme for you!" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!userInput.trim() || isLoading) return;

    const userMessageText = userInput;
    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: userMessageText }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);
    
    const imageKeywords = ['generate', 'create', 'draw', 'paint', 'make a picture', 'show me a picture'];
    const isImageRequest = imageKeywords.some(keyword => userMessageText.toLowerCase().includes(keyword));

    if (isImageRequest) {
      const response = await generateRaikoMeme(userMessageText);
      
      if (response.startsWith('data:image')) {
        setMessages(prev => [...prev, { sender: 'raiko', text: 'Wuff! Here is the meme you asked for!', imageUrl: response }]);
      } else {
        setMessages(prev => [...prev, { sender: 'raiko', text: response }]);
      }
    } else {
      const raikoResponse = await talkToRaiko(userMessageText);
      setMessages(prev => [...prev, { sender: 'raiko', text: raikoResponse }]);
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <section id="game" className="py-20 bg-grid-purple-500/[0.1] border-y border-purple-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">Talk to Raiko</h2>
          <p className="text-lg text-slate-300 mt-2">He's a verified good boi, and he's got things to say... and draw!</p>
        </div>
        <div className="max-w-2xl mx-auto bg-slate-900/60 border border-purple-700 rounded-2xl shadow-2xl shadow-purple-500/20 flex flex-col h-[600px] sm:h-[500px]">
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'raiko' && <img src={LOGO_URL} alt="Raiko" className="w-10 h-10 rounded-full border-2 border-pink-500 self-start flex-shrink-0" />}
                  <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-pink-600 rounded-br-none' : 'bg-purple-800 rounded-bl-none'}`}>
                    {msg.imageUrl && (
                      <img src={msg.imageUrl} alt="Generated Raiko Meme" className="rounded-lg mb-2 max-w-full h-auto" />
                    )}
                    <p className="text-white break-words">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-end gap-2 justify-start">
                  <img src={LOGO_URL} alt="Raiko" className="w-10 h-10 rounded-full border-2 border-pink-500 self-start" />
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-purple-800 rounded-bl-none">
                    <div className="flex space-x-1 items-center h-6">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>
          <div className="p-4 border-t border-purple-700">
            <div className="flex items-center bg-slate-800 rounded-full">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Raiko to 'draw a meme of...'"
                className="w-full bg-transparent px-5 py-3 text-white placeholder-slate-400 focus:outline-none"
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading || !userInput.trim()} className="p-3 text-cyan-400 hover:text-white disabled:text-slate-500 transition-colors">
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
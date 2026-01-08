import React, { useState, useRef, useEffect } from 'react';
// 1. Updated package name to match your package.json
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MessageSquare, X, Send, Loader2, Minimize2, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello. I am the Super AIP assistant. How can I assist you with our enterprise platform?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getChatSession = () => {
    if (!chatSessionRef.current) {
      // 2. Updated to use the variable defined in your vite.config.ts
      const apiKey = process.env.GEMINI_API_KEY || '';
      const genAI = new GoogleGenerativeAI(apiKey);
      
      // 3. Updated Gemini API syntax for Chat Sessions
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash", // Use flash for faster responses
        systemInstruction: "You are a knowledgeable and professional AI assistant for Super AIP. Keep responses concise, professional, and helpful.",
      });

      chatSessionRef.current = model.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 500,
        },
      });
    }
    return chatSessionRef.current;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = getChatSession();
      // 4. Updated sendMessage syntax
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const responseText = response.text();
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Your existing UI code remains exactly the same */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[100] p-3 rounded-full border border-border shadow-none transition-all duration-200 hover:border-white ${isOpen ? 'bg-neutral-900 text-foreground rotate-90' : 'bg-black text-white'}`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[100] w-[calc(100vw-3rem)] max-w-[360px] h-[500px] max-h-[calc(100vh-8rem)] bg-black rounded-md border border-border flex flex-col overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-black p-4 flex justify-between items-center border-b border-border">
            <div className="flex items-center gap-3">
              <div className="bg-neutral-900 p-1.5 rounded-sm border border-border">
                <Bot size={16} className="text-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-foreground">Super AIP Assistant</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[10px] text-muted font-mono">ONLINE</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-muted hover:text-foreground transition-colors p-1">
              <Minimize2 size={16} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0 mr-2 mt-1 border border-border">
                    <Bot size={12} className="text-muted" />
                  </div>
                )}
                <div 
                  className={`max-w-[85%] p-3 rounded-md text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-foreground text-black' 
                      : 'bg-black border border-border text-muted'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0 mr-2 mt-1 border border-border">
                    <Bot size={12} className="text-muted" />
                  </div>
                <div className="bg-black border border-border p-3 rounded-md">
                  <Loader2 size={16} className="animate-spin text-muted" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 bg-black border-t border-border">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="w-full pl-3 pr-10 py-2.5 rounded-md border border-border bg-black focus:border-white focus:ring-1 focus:ring-white text-sm outline-none transition-all text-foreground placeholder-neutral-700"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 p-1 bg-foreground text-black rounded-sm hover:bg-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
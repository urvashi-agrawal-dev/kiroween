import React, { useState, useEffect, useRef } from 'react';
import { sendMessage } from '../lib/api';

function Terminal({ ghost, ghostData }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [timeRift, setTimeRift] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Send greeting when ghost changes
    loadGreeting();
  }, [ghost]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadGreeting = async () => {
    setMessages([]);
    setLoading(true);
    try {
      const response = await sendMessage(ghost, 'hello', false);
      setMessages([
        {
          type: 'system',
          content: response.response,
          timestamp: response.timestamp,
        },
      ]);
    } catch (error) {
      setMessages([
        {
          type: 'error',
          content: `ERROR: Failed to summon ${ghost} ghost`,
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        type: 'user',
        content: userMessage,
        timestamp: new Date().toISOString(),
      },
    ]);

    setLoading(true);

    try {
      const response = await sendMessage(ghost, userMessage, timeRift);

      // Add ghost response
      const newMessages = [
        {
          type: 'ghost',
          content: response.response,
          timestamp: response.timestamp,
        },
      ];

      // Add time rift comparison if available
      if (response.timeRift) {
        newMessages.push({
          type: 'timerift',
          content: response.timeRift,
          timestamp: response.timestamp,
        });
      }

      setMessages((prev) => [...prev, ...newMessages]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'error',
          content: 'ERROR: Ghost communication failed',
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const renderMessage = (msg, index) => {
    if (msg.type === 'timerift') {
      return (
        <div key={index} className="message timerift-message">
          <div className="timerift-header">⏰ TIME RIFT ACTIVATED</div>
          <div className="timerift-content">
            <div className="timerift-section retro">
              <div className="timerift-label">RETRO SOLUTION:</div>
              <pre>{msg.content.retro}</pre>
            </div>
            <div className="timerift-divider">↔️</div>
            <div className="timerift-section modern">
              <div className="timerift-label">MODERN SOLUTION:</div>
              <pre>{msg.content.modern}</pre>
            </div>
          </div>
          <div className="timerift-commentary">
            💡 {msg.content.commentary}
          </div>
        </div>
      );
    }

    return (
      <div key={index} className={`message ${msg.type}-message`}>
        <pre className="message-content">{msg.content}</pre>
      </div>
    );
  };

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-title">
          {ghostData?.name || 'Terminal'} - {ghostData?.prompt || '>'}
        </div>
        <div className="terminal-controls">
          <label className="timerift-toggle">
            <input
              type="checkbox"
              checked={timeRift}
              onChange={(e) => setTimeRift(e.target.checked)}
            />
            <span>Time Rift Mode</span>
          </label>
        </div>
      </div>

      <div className="terminal-body">
        <div className="messages">
          {messages.map((msg, index) => renderMessage(msg, index))}
          {loading && (
            <div className="message loading-message">
              <pre>█</pre>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form className="terminal-input-form" onSubmit={handleSubmit}>
        <div className="terminal-input-wrapper">
          <span className="terminal-prompt">{ghostData?.prompt || '>'}</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={loading}
            autoFocus
          />
        </div>
      </form>
    </div>
  );
}

export default Terminal;

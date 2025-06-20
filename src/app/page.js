'use client'

import { useState } from 'react';

export default function UseStatePOC() {

  // Basic useState example
  const [count, setCount] = useState(0);
  const [text, setText] = useState('')
  const [isVisible, setIsVisible] = useState(true);

  // useState with an object
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  // useState with an array
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [newItem, setNewItem] = useState('');

  // useState with complex state update
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferences: {
      theme: 'light',
      notifications: true,
    }
  });

  // handler for basic example
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  // Handler for object state
  const updateUser = (field, value) => {
    setUser(prev => ({
      ...prev, 
      [field]: value
    }));
  }

  // Handler for array state
  const addItem = () => {
    if (newItem.trim()) {
      setItems(prev => [...prev, newItem]);
      setNewItem('');
    }
  }
  
  const removeItem = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index))
  }

  // Handler for nested object state
  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }
  
  // Fixed the bug: changed prevState to prev
  const updatePreferences = (pref, value) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [pref]: value
      }
    }));
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-indigo-100 py-8 px-4'>
      <div className='max-w-4xl mx-auto'></div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 bg-white rounded-lg shadow-lg py-6">
          useState Hook POC
        </h1>
        {/* Basic Counter Example */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            1. Basic Counter (Number State)
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-lg">Current count: </span>
            <span className="text-3xl font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">{count}</span>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={increment}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              + Increment
            </button>
            <button 
              onClick={decrement}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              - Decrement
            </button>
            <button 
              onClick={reset}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              🔄 Reset
            </button>
          </div>
        </section>
        {/* Text Input Example */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            2. Text Input (String State)
          </h2>
          <div className="mb-4">
            <input 
              type="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type something here..."
              className="w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-lg">
              You typed: <span className="font-bold text-blue-600">{text || "Nothing yet..."}</span>
            </p>
          </div>
          <button 
            onClick={() => setText('')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            🗑️ Clear
          </button>
        </section>
          {/* Boolean Toggle Example */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            3. Toggle Visibility (Boolean State)
          </h2>
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className={`px-6 py-3 rounded-lg text-white font-semibold transition-all duration-200 transform hover:scale-105 ${
              isVisible 
                ? 'bg-purple-500 hover:bg-purple-600' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isVisible ? '👁️ Hide' : '👀 Show'} Content
          </button>
          <div className={`mt-4 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg">
              <p className="text-purple-800 text-lg font-medium">🎉 This content can be toggled!</p>
            </div>
          </div>
        </section>
                {/* Object State Example */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            4. User Form (Object State)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Enter your name"
              value={user.name}
              onChange={(e) => updateUser('name', e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input 
              type="email" 
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => updateUser('email', e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input 
              type="number" 
              placeholder="Enter your age"
              value={user.age}
              onChange={(e) => updateUser('age', parseInt(e.target.value) || 0)}
              className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
            <h3 className="font-semibold mb-3 text-gray-700">👤 User Data:</h3>
            <pre className="text-sm text-gray-700 overflow-x-auto bg-white p-3 rounded border">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>
        </section>
        {/* Array State Example */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            5. Item List (Array State)
          </h2>
          <div className="flex gap-3 mb-6">
            <input 
              type="text" 
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add a new fruit..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button 
              onClick={addItem}
              disabled={!newItem.trim()}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              ➕ Add
            </button>
          </div>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
                <span className="text-gray-700 font-medium">🍎 {item}</span>
                <button 
                  onClick={() => removeItem(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-200 transform hover:scale-105"
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
  
}
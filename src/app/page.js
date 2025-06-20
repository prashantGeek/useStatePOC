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
    </div>
  )

}
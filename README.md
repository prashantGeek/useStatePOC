# useState Hook POC

A comprehensive **Proof of Concept** demonstrating the `useState` hook in React with Next.js, featuring interactive examples and best practices.

## 🚀 Live Demo

**[View Live Demo](https://use-state-poc.vercel.app)**

## 📋 Overview

This project showcases various use cases of the `useState` hook in React, providing hands-on examples of:

- Basic state management (numbers, strings, booleans)
- Object state updates
- Array state manipulation
- Complex nested state structures
- Best practices for immutable updates

## ✨ Features

### 1. **Basic Counter (Number State)**
- Increment/Decrement functionality
- Reset to initial value
- Demonstrates functional state updates

### 2. **Text Input (String State)**
- Real-time text input handling
- Clear functionality
- Live display of current state

### 3. **Toggle Visibility (Boolean State)**
- Show/hide content toggle
- Smooth CSS transitions
- Dynamic button text and styling

### 4. **User Form (Object State)**
- Multiple input fields (name, email, age)
- Proper object spread for immutable updates
- Real-time JSON display of state

### 5. **Item List (Array State)**
- Add new items to array
- Remove items by index
- Immutable array operations
- Input validation

### 6. **Complex Form (Nested Object State)**
- Nested object structure
- Multiple form fields
- Theme selection dropdown
- Checkbox for notifications
- Proper nested state updates

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: JavaScript (ES6+)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Google Fonts (Geist Sans, Geist Mono)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd reactHooksPOC
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
reactHooksPOC/
├── src/
│   └── app/
│       ├── globals.css      # Tailwind CSS imports
│       ├── layout.js        # Root layout component
│       └── page.js          # Main useState POC component
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── next.config.mjs         # Next.js configuration
└── README.md              # This file
```

## 🎯 useState Best Practices Demonstrated

### ✅ **Functional Updates**
```javascript
setCount(prev => prev + 1)  // Safer than setCount(count + 1)
```

### ✅ **Object Spread for Immutability**
```javascript
setUser(prev => ({
  ...prev,
  [field]: value
}))
```

### ✅ **Array Immutable Operations**
```javascript
// Adding items
setItems(prev => [...prev, newItem])

// Removing items
setItems(prev => prev.filter((_, i) => i !== index))
```

### ✅ **Nested Object Updates**
```javascript
setFormData(prev => ({
  ...prev,
  preferences: {
    ...prev.preferences,
    [pref]: value
  }
}))
```

### ✅ **Multiple State Variables**
- Separate `useState` calls for different concerns
- Better organization and performance
- Easier to manage and debug

## 🎨 Styling Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean cards with shadows and rounded corners
- **Interactive Elements**: Hover effects and smooth transitions
- **Color Coding**: Different colors for different action types
- **Accessibility**: Proper focus states and semantic HTML

## 🚀 Deployment

This project is deployed on Vercel with automatic deployments from the main branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/reactHooksPOC)

Or manually:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 📚 Learning Objectives

After exploring this POC, you will understand:

- ✅ How to use `useState` for different data types
- ✅ When to use functional vs direct state updates
- ✅ How to maintain immutability in React state
- ✅ Best practices for complex state structures
- ✅ How to handle form inputs with React hooks
- ✅ Performance considerations with state updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [use-state-poc.vercel.app](https://use-state-poc.vercel.app)
- **React Documentation**: [useState Hook](https://react.dev/reference/react/useState)
- **Next.js Documentation**: [Getting Started](https://nextjs.org/docs)
- **Tailwind CSS**: [Documentation](https://tailwindcss.com/docs)

## 📞 Contact

If you have any questions or feedback, feel free to reach out!

---

**Happy Coding! 🚀**

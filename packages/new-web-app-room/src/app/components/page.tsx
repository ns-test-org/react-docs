'use client';

import Link from 'next/link';
import { useState } from 'react';

const componentExamples = [
  {
    id: 'functional',
    title: 'Functional Components',
    description: 'Modern way to write React components using functions',
    code: `function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Usage
<Welcome name="Alice" age={25} />`,
    demo: () => {
      const [name, setName] = useState('Alice');
      const [age, setAge] = useState(25);
      
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h1 className="text-xl font-bold">Hello, {name}!</h1>
            <p>You are {age} years old.</p>
          </div>
        </div>
      );
    }
  },
  {
    id: 'props',
    title: 'Props & Destructuring',
    description: 'Pass data to components and destructure props',
    code: `// With destructuring
function UserCard({ name, email, avatar, isOnline }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <span className={isOnline ? 'online' : 'offline'}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
    </div>
  );
}

// Without destructuring
function UserCard(props) {
  return (
    <div className="user-card">
      <img src={props.avatar} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <span className={props.isOnline ? 'online' : 'offline'}>
          {props.isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
    </div>
  );
}`,
    demo: () => {
      const [isOnline, setIsOnline] = useState(true);
      
      return (
        <div className="space-y-4">
          <button
            onClick={() => setIsOnline(!isOnline)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Toggle Status
          </button>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-600">john@example.com</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                  isOnline ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  },
  {
    id: 'children',
    title: 'Children Prop',
    description: 'Use the special children prop to create wrapper components',
    code: `function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Usage
<Card title="My Card">
  <p>This content is passed as children</p>
  <button>Click me</button>
</Card>`,
    demo: () => {
      const [content, setContent] = useState('This content is passed as children');
      
      return (
        <div className="space-y-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows={3}
          />
          <div className="bg-white border rounded-lg shadow-sm">
            <div className="bg-gray-50 px-4 py-2 border-b">
              <h2 className="font-semibold">My Card</h2>
            </div>
            <div className="p-4">
              <p>{content}</p>
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Click me
              </button>
            </div>
          </div>
        </div>
      );
    }
  },
  {
    id: 'conditional',
    title: 'Conditional Rendering',
    description: 'Show different content based on conditions',
    code: `function LoginStatus({ isLoggedIn, username }) {
  // Using if statement
  if (isLoggedIn) {
    return <h1>Welcome back, {username}!</h1>;
  }
  return <h1>Please sign in.</h1>;
}

// Using ternary operator
function Status({ isOnline }) {
  return (
    <div>
      User is {isOnline ? 'online' : 'offline'}
    </div>
  );
}

// Using logical AND
function Notification({ hasMessages, messageCount }) {
  return (
    <div>
      {hasMessages && (
        <p>You have {messageCount} new messages</p>
      )}
    </div>
  );
}`,
    demo: () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [hasMessages, setHasMessages] = useState(true);
      const [messageCount, setMessageCount] = useState(3);
      
      return (
        <div className="space-y-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={`px-4 py-2 rounded ${
                isLoggedIn ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
              } text-white`}
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            <button
              onClick={() => setHasMessages(!hasMessages)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Toggle Messages
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            {isLoggedIn ? (
              <h1 className="text-xl font-bold text-green-700">Welcome back, User!</h1>
            ) : (
              <h1 className="text-xl font-bold text-gray-700">Please sign in.</h1>
            )}
            {hasMessages && (
              <p className="text-blue-600">You have {messageCount} new messages</p>
            )}
          </div>
        </div>
      );
    }
  }
];

export default function Components() {
  const [activeExample, setActiveExample] = useState('functional');

  const currentExample = componentExamples.find(ex => ex.id === activeExample);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">React Docs</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/tutorial" className="text-gray-700 hover:text-blue-600 transition-colors">Tutorial</Link>
              <Link href="/hooks" className="text-gray-700 hover:text-blue-600 transition-colors">Hooks</Link>
              <Link href="/examples" className="text-gray-700 hover:text-blue-600 transition-colors">Examples</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">React Components</h1>
          <p className="text-xl text-gray-600">
            Learn how to build reusable UI components with props, children, and conditional rendering.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Examples</h2>
              <div className="space-y-2">
                {componentExamples.map((example) => (
                  <button
                    key={example.id}
                    onClick={() => setActiveExample(example.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeExample === example.id
                        ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium">{example.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{example.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentExample && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentExample.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{currentExample.description}</p>

                {/* Code Example */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Code Example</h3>
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                    <code>{currentExample.code}</code>
                  </pre>
                </div>

                {/* Interactive Demo */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Demo</h3>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <currentExample.demo />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

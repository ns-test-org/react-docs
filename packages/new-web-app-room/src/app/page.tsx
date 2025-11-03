'use client';

import Link from 'next/link';
import { useState } from 'react';

const quickStartTopics = [
  { title: 'Components', description: 'Learn how to build reusable UI components', href: '/components' },
  { title: 'Hooks', description: 'Master React hooks for state and side effects', href: '/hooks' },
  { title: 'State Management', description: 'Handle component state effectively', href: '/state' },
  { title: 'Event Handling', description: 'Respond to user interactions', href: '/events' },
];

const codeExample = `function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="React" />
      <Welcome name="Developer" />
    </div>
  );
}`;

export default function ReactDocsHome() {
  const [activeExample, setActiveExample] = useState('basic');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">React Docs</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/tutorial" className="text-gray-700 hover:text-blue-600 transition-colors">Tutorial</Link>
              <Link href="/components" className="text-gray-700 hover:text-blue-600 transition-colors">Components</Link>
              <Link href="/hooks" className="text-gray-700 hover:text-blue-600 transition-colors">Hooks</Link>
              <Link href="/examples" className="text-gray-700 hover:text-blue-600 transition-colors">Examples</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn React
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive guide to building user interfaces with React. 
            Learn components, hooks, state management, and modern React patterns with interactive examples.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/tutorial" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Tutorial
            </Link>
            <Link 
              href="/examples" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Examples
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Start Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Start</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStartTopics.map((topic) => (
            <Link key={topic.title} href={topic.href}>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Code Example Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Try React Now</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your First Component</h3>
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>How to create functional components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Passing data with props</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>JSX syntax and expressions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Component composition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Modern React patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
            <p className="text-gray-400 mb-6">Join thousands of developers learning React</p>
            <Link 
              href="/tutorial" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


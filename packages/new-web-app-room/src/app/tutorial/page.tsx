'use client';

import Link from 'next/link';
import { useState } from 'react';

const tutorialSteps = [
  {
    id: 1,
    title: 'Your First Component',
    description: 'Learn how to create a simple React component',
    code: `function Greeting() {
  return <h1>Hello, World!</h1>;
}`,
    explanation: 'This is a functional component that returns JSX. JSX looks like HTML but is actually JavaScript.'
  },
  {
    id: 2,
    title: 'Using Props',
    description: 'Pass data to components using props',
    code: `function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage:
<Greeting name="React" />`,
    explanation: 'Props allow you to pass data from parent to child components. Use curly braces {} to embed JavaScript expressions in JSX.'
  },
  {
    id: 3,
    title: 'Adding State',
    description: 'Make your components interactive with state',
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
    explanation: 'useState hook lets you add state to functional components. It returns the current state value and a function to update it.'
  },
  {
    id: 4,
    title: 'Handling Events',
    description: 'Respond to user interactions',
    code: `function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}`,
    explanation: 'Event handlers are functions that run when events occur. Pass them to JSX elements using props like onClick.'
  },
  {
    id: 5,
    title: 'Conditional Rendering',
    description: 'Show different content based on conditions',
    code: `function Welcome({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  
  return <h1>Please sign in.</h1>;
}

// Or using ternary operator:
function Status({ isOnline }) {
  return (
    <div>
      User is {isOnline ? 'online' : 'offline'}
    </div>
  );
}`,
    explanation: 'You can use JavaScript conditions to render different JSX based on your component state or props.'
  }
];

export default function Tutorial() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const markStepComplete = (stepId: number) => {
    setCompletedSteps(prev => new Set([...prev, stepId]));
  };

  const currentTutorial = tutorialSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">React Docs</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/components" className="text-gray-700 hover:text-blue-600 transition-colors">Components</Link>
              <Link href="/hooks" className="text-gray-700 hover:text-blue-600 transition-colors">Hooks</Link>
              <Link href="/examples" className="text-gray-700 hover:text-blue-600 transition-colors">Examples</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Tutorial Steps */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Tutorial Steps</h2>
              <div className="space-y-2">
                {tutorialSteps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentStep === index
                        ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 ${
                        completedSteps.has(step.id)
                          ? 'bg-green-500 text-white'
                          : currentStep === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {completedSteps.has(step.id) ? '✓' : step.id}
                      </span>
                      <span className="font-medium">{step.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    Step {currentTutorial.id}: {currentTutorial.title}
                  </h1>
                  <span className="text-sm text-gray-500">
                    {currentStep + 1} of {tutorialSteps.length}
                  </span>
                </div>
                <p className="text-lg text-gray-600">{currentTutorial.description}</p>
              </div>

              {/* Code Example */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Code Example</h3>
                <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                  <code>{currentTutorial.code}</code>
                </pre>
              </div>

              {/* Explanation */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Explanation</h3>
                <p className="text-gray-700 leading-relaxed">{currentTutorial.explanation}</p>
              </div>

              {/* Interactive Demo */}
              {currentStep === 2 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Try It Live</h3>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <InteractiveCounter />
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
                >
                  Previous
                </button>
                
                <button
                  onClick={() => markStepComplete(currentTutorial.id)}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    completedSteps.has(currentTutorial.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {completedSteps.has(currentTutorial.id) ? 'Completed ✓' : 'Mark Complete'}
                </button>

                <button
                  onClick={() => setCurrentStep(Math.min(tutorialSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === tutorialSteps.length - 1}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive Counter Component for Demo
function InteractiveCounter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-gray-900 mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

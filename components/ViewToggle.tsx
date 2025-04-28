import React from 'react';

interface ViewToggleProps {
  currentView: 'grid' | 'list';
  onChange: (view: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onChange }) => {
  return (
    <div className="inline-flex items-center bg-bg border border-text/10 rounded-full p-1 font-mono text-sm">
      <button
        className={`px-3 py-1 rounded-full transition-colors ${
          currentView === 'grid'
            ? 'bg-accent text-bg'
            : 'hover:text-accent'
        }`}
        onClick={() => onChange('grid')}
        aria-pressed={currentView === 'grid'}
      >
        Grid
      </button>
      <button
        className={`px-3 py-1 rounded-full transition-colors ${
          currentView === 'list'
            ? 'bg-accent text-bg'
            : 'hover:text-accent'
        }`}
        onClick={() => onChange('list')}
        aria-pressed={currentView === 'list'}
      >
        List
      </button>
    </div>
  );
};

export default ViewToggle; 
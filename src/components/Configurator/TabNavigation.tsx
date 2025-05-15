import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

interface TabOption {
  id: string;
  label: string;
  icon: string;
}

const tabs: TabOption[] = [
  { id: 'layout', label: 'Layout', icon: 'bi-grid' },
  { id: 'colors', label: 'Colors', icon: 'bi-palette' },
  { id: 'typography', label: 'Typography', icon: 'bi-type' },
  { id: 'responsiveness', label: 'Responsiveness', icon: 'bi-phone' },
  { id: 'components', label: 'Components', icon: 'bi-box' },
  { id: 'animation', label: 'Animation', icon: 'bi-check2-square' },
  { id: 'language', label: 'Language', icon: 'bi-globe' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <ul className="nav nav-tabs mb-4">
      {tabs.map(tab => (
        <li key={tab.id} className="nav-item">
          <button
            className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <i className={`${tab.icon} me-2`}></i>
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TabNavigation;
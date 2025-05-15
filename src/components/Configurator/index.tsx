import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import LayoutModule from './modules/LayoutModule';
import ColorModule from './modules/ColorModule';
import TypographyModule from './modules/TypographyModule';
import ResponsivenessModule from './modules/ResponsivenessModule';
import ComponentStyleModule from './modules/ComponentStyleModule';
import AnimationModule from './modules/AnimationModule';
import LanguageModule from './modules/LanguageModule';
import { useConfig } from '../../context/ConfigContext';

const Configurator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('layout');
  const { exportConfig, importConfig, resetConfig } = useConfig();
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleExport = () => {
    const configJson = exportConfig();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(configJson);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "website-config.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      importConfig(content);
    };
    reader.readAsText(file);
  };

  const renderActiveModule = () => {
    switch (activeTab) {
      case 'layout':
        return <LayoutModule />;
      case 'colors':
        return <ColorModule />;
      case 'typography':
        return <TypographyModule />;
      case 'responsiveness':
        return <ResponsivenessModule />;
      case 'components':
        return <ComponentStyleModule />;
      case 'animation':
        return <AnimationModule />;
      case 'language':
        return <LanguageModule />;
      default:
        return <LayoutModule />;
    }
  };

  return (
    <div className="configurator p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Website Configuration</h3>
        <div className="btn-group">
          <button 
            className="btn btn-outline-secondary" 
            onClick={resetConfig}
          >
            Reset
          </button>
          <button 
            className="btn btn-outline-primary" 
            onClick={handleExport}
          >
            Export
          </button>
          <label className="btn btn-outline-success mb-0">
            Import
            <input 
              type="file" 
              accept=".json" 
              className="d-none"
              onChange={handleImport}
            />
          </label>
        </div>
      </div>
      
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="module-container">
        {renderActiveModule()}
      </div>
    </div>
  );
};

export default Configurator;
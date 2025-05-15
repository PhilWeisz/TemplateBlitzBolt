import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ConfigModel, defaultConfig } from '../models/ConfigModel';

interface ConfigContextType {
  config: ConfigModel;
  updateConfig: <K extends keyof ConfigModel>(
    module: K,
    values: Partial<ConfigModel[K]>
  ) => void;
  resetConfig: () => void;
  exportConfig: () => string;
  importConfig: (configJson: string) => void;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ConfigModel>(defaultConfig);

  const updateConfig = <K extends keyof ConfigModel>(
    module: K,
    values: Partial<ConfigModel[K]>
  ) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      [module]: {
        ...prevConfig[module],
        ...values
      }
    }));
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
  };

  const exportConfig = () => {
    return JSON.stringify(config, null, 2);
  };

  const importConfig = (configJson: string) => {
    try {
      const newConfig = JSON.parse(configJson);
      setConfig(newConfig);
    } catch (error) {
      console.error('Failed to import configuration:', error);
    }
  };

  return (
    <ConfigContext.Provider
      value={{ config, updateConfig, resetConfig, exportConfig, importConfig }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
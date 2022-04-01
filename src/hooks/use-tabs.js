import { useState, useCallback } from 'react';

export const useTabs = (defaultTabIndex) => {
  const [activeTab, setActiveTab] = useState(defaultTabIndex);
  const onTabChangeHandler = useCallback((tabIndex) => {
    setActiveTab(tabIndex);
  }, []);

  return {
    activeTab,
    onTabChangeHandler,
  };
};


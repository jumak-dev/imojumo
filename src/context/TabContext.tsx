import React, {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
} from 'react';
import Tab from '../constants/Tab';

interface TabContextType {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

export const TabContext = createContext<TabContextType>({
  currentTab: Tab.All,
  setCurrentTab: () => {},
});

function TabProvider({ children }: PropsWithChildren<{}>) {
  const [currentTab, setCurrentTab] = useState<string>(Tab.All);

  const value = useMemo(
    () => ({ currentTab, setCurrentTab }),
    [currentTab, setCurrentTab],
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}

export default TabProvider;

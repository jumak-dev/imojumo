import React, {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
} from 'react';
import TAB from '../constants/Tab';

interface TabContextType {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

export const TabContext = createContext<TabContextType>({
  currentTab: TAB.ALL,
  setCurrentTab: () => {},
});

function TabProvider({ children }: PropsWithChildren<{}>) {
  const [currentTab, setCurrentTab] = useState<string>(TAB.ALL);

  const value = useMemo(
    () => ({ currentTab, setCurrentTab }),
    [currentTab, setCurrentTab],
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}

export default TabProvider;

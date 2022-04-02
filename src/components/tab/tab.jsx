// Rework this component if there is time!!!!!

import React, { useReducer, useEffect } from 'react';
import {tabsReducer} from '../../reducers/tab-reducer';
import {
  Dots,
  OrderedList,
  UnOrderedList,
  SmallDots,
  Circles,
  BigDots
} from './tab.styled'

// FOr Destination page
const Tab = ({ onSelect, content }) => {
  return (
    <OrderedList onClick={onSelect} >
      {content}
    </OrderedList>
  );
};
// For crew page
const DotTab = ({ onSelect, content }) => {
  return (
    <Dots onClick={onSelect}>
      {content}
    </Dots>
  )
}
// For technology page
const CircleDot = ({ onSelect, content }) => {
  return (
    <Circles onClick={onSelect} active>
      {content}
    </Circles>
  )
}

export const Tabs = ({ data, onChange, value }) => {
  const initialTabsState = {
    activeTabIndex: value,
    maxTabIndex: data.length - 1,
  };

  const [state, dispatch] = useReducer(tabsReducer, initialTabsState);

  const onTabSelectedHandler = (index) => {
    dispatch({ type: 'TAB_SELECTED', value: index });
  };

  useEffect(() => {
    onChange(state.activeTabIndex);
  }, [state.activeTabIndex, onChange]);

  useEffect(() => {
    const keydownHandlers = new Map([
      [39, dispatch.bind(null, { type: 'KEYDOWN_RIGHT' })],
      [37, dispatch.bind(null, { type: 'KEYDOWN_LEFT' })],
    ]);

    const onKeyDownHandler = ({ keyCode }) => {
      const handler = keydownHandlers.get(keyCode);
      if (!handler) return;
      handler();
    };

    document.addEventListener('keydown', onKeyDownHandler);

    return () => {
      document.removeEventListener('keydown', onKeyDownHandler);
    };
  }, []);

  return (
    <UnOrderedList>
      {data.map((el, i) => (
        <Tab
          key={i}
          index={i}
          onSelect={onTabSelectedHandler.bind(null, i)}
          content={el}
          
        />
      ))}
    </UnOrderedList>
  );
};


export const Gallery = ({ data, onChange, value }) => {
  const initialTabsState = {
    activeTabIndex: value,
    maxTabIndex: data.length - 1,
  };

  const [state, dispatch] = useReducer(tabsReducer, initialTabsState);

  const onTabSelectedHandler = (index) => {
    dispatch({ type: 'TAB_SELECTED', value: index });
  };

  useEffect(() => {
    onChange(state.activeTabIndex);
  }, [state.activeTabIndex, onChange]);

  useEffect(() => {
    const keydownHandlers = new Map([
      [39, dispatch.bind(null, { type: 'KEYDOWN_RIGHT' })],
      [37, dispatch.bind(null, { type: 'KEYDOWN_LEFT' })],
    ]);

    const onKeyDownHandler = ({ keyCode }) => {
      const handler = keydownHandlers.get(keyCode);
      if (!handler) return;
      handler();
    };

    document.addEventListener('keydown', onKeyDownHandler);

    return () => {
      document.removeEventListener('keydown', onKeyDownHandler);
    };
  }, []);

  return (
    <SmallDots>
      {data.map((el, i) => (
        <DotTab
          key={i}
          index={i}
          onSelect={onTabSelectedHandler.bind(null, i)}
          content={el}
          
        />
      ))}
    </SmallDots>
  );
};


export const Circle = ({ data, onChange, value }) => {
  const initialTabsState = {
    activeTabIndex: value,
    maxTabIndex: data.length - 1,
  };

  const [state, dispatch] = useReducer(tabsReducer, initialTabsState);

  const onTabSelectedHandler = (index) => {
    dispatch({ type: 'TAB_SELECTED', value: index });
  };

  useEffect(() => {
    onChange(state.activeTabIndex);
  }, [state.activeTabIndex, onChange]);

  useEffect(() => {
    const keydownHandlers = new Map([
      [39, dispatch.bind(null, { type: 'KEYDOWN_RIGHT' })],
      [37, dispatch.bind(null, { type: 'KEYDOWN_LEFT' })],
    ]);

    const onKeyDownHandler = ({ keyCode }) => {
      const handler = keydownHandlers.get(keyCode);
      if (!handler) return;
      handler();
    };

    document.addEventListener('keydown', onKeyDownHandler);

    return () => {
      document.removeEventListener('keydown', onKeyDownHandler);
    };
  }, []);

  return (
    <BigDots>
      {data.map((el, i) => (
        <CircleDot
          key={i}
          index={i}
          onSelect={onTabSelectedHandler.bind(null, i)}
          content={el}
          
        />
      ))}
    </BigDots>
  );
};


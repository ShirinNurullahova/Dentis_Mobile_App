import { navigationRef } from '../../App';

export const navigateTo = (route: string, params?: object) => {
  if (navigationRef.isReady()) {
    // @ts-expect-error: incorrect type for route name (never instead of string).
    navigationRef.current.navigate({ name: route }, params);
  }
};
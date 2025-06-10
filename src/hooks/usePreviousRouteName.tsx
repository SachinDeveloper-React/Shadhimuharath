import {useNavigationState} from '@react-navigation/native';

export const usePreviousRouteName = (): string | null => {
  const routes = useNavigationState(state => state.routes);
  const previousScreenName =
    routes.length > 1 ? routes[routes.length - 2].name : null;

  return previousScreenName;
};

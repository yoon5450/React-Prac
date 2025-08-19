import type { AppRoute } from "@/@types/global";

export function getNavigationItems(navigation: AppRoute[]) {
  const filterd = navigation.filter((item) => item.display === true);

  const navigationItems = filterd.map(({ path, text }) => ({
    path,
    text,
  }));

  return navigationItems;
}

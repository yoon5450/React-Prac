import { createBrowserRouter } from "react-router";
import Root from '@/Root'
import type { AppRoute } from "@/@types/global";
import { configRoutes } from "@/utils/configRoutes";
import { getNavigationItems } from "@/utils/getNavigationItems";
import Home from "@/pages/Home";



const navigation:AppRoute[] = [
  {
    text:'홈',
    path:'/',
    display:true,
    Component: Home,
  },
  {
    text:'어바웃',
    path:'about',
    display:true,
    HydrateFallback: () => <p>로딩 중</p>,
    lazy:async () => {
      const mod = await import('@/pages/About')
      return {
        Component: mod.default
      }
    },
  }
]

// 타입 안정성을 위해 configRoutes 구성
export const routes = [
  {
    path:'/',
    Component: Root,
    children: configRoutes(navigation) // RouteObject[]
  }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL
});

export default router


export const navigationItems = getNavigationItems(navigation)
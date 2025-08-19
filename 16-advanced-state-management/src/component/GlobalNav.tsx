import { navigationItems } from "@/router/router";
import tw from "@/utils/tw";
import { useState } from "react";
import { NavLink } from "react-router";

function GlobalNav() {
  const [items] = useState(navigationItems);

  const baseNavClasses =
    "text-sm py-2 px-4 text-indigo-800/70 rounded-full hover:test-indigo-800";

  return (
    <nav className="bg-white ">
      {/* h2태그가 접근성을 위해서 필요함 */}
      <h2 className="sr-only ">페이지 탐색</h2>
      <ul className="list-none p-0 flex gap-4 mx-auto justify-center py-4 w-4/5 max-w-6xl">
        {items.map((item, index) => (
          <li key={item.path ?? index}>
            <NavLink
              to={item.path || "/"}
              end={item.path?.endsWith("/") ?? false }
              className={({isActive}) => {
                return isActive ? tw(baseNavClasses,
                  'text-indigo-900 bg-indigo-100/40 border border-indigo-100/70 font-semibold'
                ) : baseNavClasses
              }}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default GlobalNav;

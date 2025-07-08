// @ts-nocheck
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
function Avatar({ name, status = "offline", size = 64 }) {
    let iconPath = "";
    let statusMessage = "";
    switch (status) {
        case "offline":
            iconPath = "/icons/status-offline.svg";
            statusMessage = "오프라인";
            break;
        case "online":
            iconPath = "/icons/status-online.svg";
            statusMessage = "온라인";
            break;
        case "dont-disturb":
            iconPath = "/icons/status-dont-disturb.svg";
            statusMessage = "방해금지";
            break;
        case "away":
            iconPath = "/icons/status-away.svg";
            statusMessage = "자리비움";
            break;
    }
    const label = `${name} (${statusMessage})`;
    return (React.createElement("li", { className: "avatar" },
        React.createElement("figure", { "aria-label": label, title: label },
            React.createElement("div", { className: "cover" },
                React.createElement("img", { src: `/avatar/${name}.png`, alt: "" })),
            React.createElement("figcaption", null,
                React.createElement("img", { src: iconPath, alt: "" })))));
}
function AvatarPage() {
    return (React.createElement("ul", { className: "avatarList" },
        React.createElement(Avatar, { name: "mangoo", status: "offline" }),
        React.createElement(Avatar, { name: "jjangoo", status: "dont-disturb" }),
        React.createElement(Avatar, { name: "jjanga", status: "away" }),
        React.createElement(Avatar, { name: "bong", status: "online" })));
}
const container = document.getElementById('app');
if (container) {
    const reactDomRoot = ReactDOM.createRoot(container);
    reactDomRoot.render(React.createElement(AvatarPage, null));
}

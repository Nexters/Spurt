"use strict";
exports.__esModule = true;
var header_1 = require("@/components/header");
var login_btn_1 = require("@/components/login-btn");
var react_1 = require("next-auth/react");
var link_1 = require("next/link");
function Home() {
    var _a = react_1.useSession(), status = _a.status, session = _a.data;
    var isLogin = !!session && status === 'authenticated';
    var token = isLogin ? session.access_token : '';
    return (React.createElement("div", null,
        React.createElement(header_1["default"], null),
        React.createElement(login_btn_1["default"], null),
        React.createElement("div", { className: "my-5 text-title1" }, "\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC"),
        React.createElement("div", null),
        React.createElement("div", null, token),
        React.createElement(link_1["default"], { href: "/search", className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" }, "\uC774\uB3D9\uD558\uAE30")));
}
exports["default"] = Home;

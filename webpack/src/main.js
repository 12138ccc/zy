//按需引用（不可以改名字）
import { marquee } from "./marquee.js";

//默认引用（可以改名字）
import tabs from "./tabs.js";
import "./styles/index.css";
//引用less
import "./styles/index.less";

//引用App.vue
import "../src/App.vue";

marquee();
tabs();

import gifSrc from "./assets/1.gif";

const img = document.createElement("img");
img.src = gifSrc;
document.body.appendChild(img);

import pngSrc from "./assets/logo_small.png";

const img2 = document.createElement("img");

img2.src = pngSrc;

document.body.appendChild(img2);

import "./assets/fonts/iconfont.css";

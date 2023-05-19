import "./fonts.css";

const addGTMToHead = () => {
  const script = document.createElement("script");
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W92XDVZ');`;
  script.async = true;

  document.head.appendChild(script);
};

const addGTMToBody = () => {
  const noscript = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-W92XDVZ";
  iframe.height = 0;
  iframe.width = 0;
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  noscript.appendChild(iframe);

  document.body.insertBefore(noscript, document.body.firstChild);
};

export const onInitialClientRender = () => {
  addGTMToHead();
  addGTMToBody();
};

export { wrapRootElement } from "./root-wrapper";
export { wrapPageElement } from "./page-wrapper";


import React from "react";
import GoogleTagManagerHead from "./components/GoogleTagManagerHead";
import GoogleTagManagerBody from "./components/GoogleTagManagerBody";

import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W92XDVZ');`}
        </script>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* eslint-disable-next-line react/no-unknown-property*/}
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap"
          media="print" onLoad="this.media='all'" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W92XDVZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script dangerouslySetInnerHTML={{
          __html:
            `(function() {
							try {
                var banner = sessionStorage.getItem('banner');
                if (banner === null)
                  document.body.classList.add('banner1');
                else
                  document.body.classList.add('banner' + banner);
							} catch (e) {
								return;
							}
					})();`,
        }}
        />
        {props.preBodyComponents}
        <div
          key={"body"}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

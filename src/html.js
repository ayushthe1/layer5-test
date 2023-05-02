import React from "react";
import GoogleTagManagerHead from "./components/GoogleTagManagerHead";
import GoogleTagManagerBody from "./components/GoogleTagManagerBody";

import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <GoogleTagManagerHead />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <GoogleTagManagerBody />
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

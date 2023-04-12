import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Inter;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.55;\n    color: var(--dl-color-gray-900);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="shortcut icon"
            href="/playground_assets/hindi_new_logo_2.png"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script:wght@400&amp;display=swap"
            data-tag="font"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                "</noscript><!--This is the head section-->\n<!-- <style> ... </style> -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Cookie Consent Widget</title>\n  <style>\n    /* Add CSS styles for the cookie consent banner */\n    #cookie-banner {\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background-color: #f7f1f1;\n      color: black;\n      padding: 20px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: flex-start;\n      font-family: Arial, sans-serif;\n      z-index: 9999;\n      border-radius: 10px;\n      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n      opacity: 0;\n      transform: translateY(20px);\n      transition: opacity 0.4s ease, transform 0.4s ease;\n    }\n\n    #cookie-banner.active {\n      opacity: 1;\n      transform: translateY(0);\n    }\n\n    #cookie-banner p {\n      margin: 0 0 10px;\n      font-size: 16px;\n    }\n\n    #cookie-banner button {\n      background-color: black;\n      border: none;\n      color: white;\n      padding: 10px 20px;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 5px;\n      transition: background-color 0.3s ease;\n    }\n\n    #cookie-banner button:hover {\n      background-color: #333;\n    }\n  </style>\n</head>\n<body>\n  <div id=\"cookie-banner\">\n    <p>We use cookies to improve your experience and for analytics. By using our site, you agree to our use of cookies.</p>\n    <div>\n      <button id=\"accept-cookies\">Accept</button>\n      <button id=\"decline-cookies\">Decline</button>\n    </div>\n  </div>\n\n  <script>\n    const cookieBanner = document.getElementById('cookie-banner');\n    \n    // Check if the user has already made a cookie consent choice\n    if (!localStorage.getItem('cookie-consent')) {\n      setTimeout(() => {\n        cookieBanner.classList.add('active');\n      }, 500);\n    }\n\n    // Store the user's choice and hide the banner\n    function setCookieConsent(value) {\n      localStorage.setItem('cookie-consent', value);\n      cookieBanner.classList.remove('active');\n\n      // Add your Google Analytics tracking code if the user accepts cookies\n      if (value === 'accept') {\n        initGoogleAnalytics();\n      }\n    }\n\n    // Initialize Google Analytics\n    function initGoogleAnalytics() {\n      window.dataLayer = window.dataLayer || [];\n      function gtag() { dataLayer.push(arguments); }\n      gtag('js', new Date());\n      gtag('config,'G-6RXS0JXEFD');\n    }\n\n    // Attach event listeners to the buttons\n    document.getElementById('accept-cookies').addEventListener('click', function() {\n      setCookieConsent('accept');\n    });\n\n    document.getElementById('decline-cookies').addEventListener('click', function() {\n      setCookieConsent('decline');\n    });\n  </script>\n</body>\n</html>\n\n<noscript>",
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <script
            type="text/javascript"
            src="https://www.googletagmanager.com/gtag/js?id=G-6RXS0JXEFD"
            async
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'G-6RXS0JXEFD');",
            }}
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','GTM-NF5WVB6');",
            }}
          ></script>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<script src=\'https://unpkg.com/@teleporthq/teleport-custom-scripts\'></script>\n<script defer src="/_vercel/insights/script.js"></script>\n<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>\n<div class="elfsight-app-e70dd0da-abf1-49bc-aa12-e5132a6390a1"></div>\n\n',
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument

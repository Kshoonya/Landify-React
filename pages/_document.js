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
                '</noscript><!--This is the head section-->\n<!-- <style> ... </style> -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Cookie Consent Widget</title>\n  <style>\n    /* Add CSS styles for the cookie consent banner */\n    #cookie-banner {\n      position: fixed;\n      bottom: 20px;\n      left: 20px;\n      background-color: #f7f1f1;\n      color: black;\n      padding: 20px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: flex-start;\n      font-family: Arial, sans-serif;\n      z-index: 9999;\n      border-radius: 5px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n      opacity: 0;\n      transform: translateY(30px);\n      transition: all 0.5s ease;\n      width: 300px;\n      max-width: 80%;\n      min-height: 150px;\n    }\n\n    #cookie-banner.show {\n      opacity: 1;\n      transform: translateY(0);\n    }\n\n    #cookie-banner p {\n      margin: 0 0 10px 0;\n      font-size: 16px;\n      font-weight: 600;\n    }\n\n    #cookie-banner button {\n      background-color: black;\n      border: none;\n      color: white;\n      padding: 10px 20px;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 5px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n      margin-left: 10px;\n      transition: background-color 0.3s ease;\n    }\n\n    #cookie-banner button:hover {\n      background-color: #333;\n    }\n  </style>\n</head>\n<body>\n  <div id="cookie-banner">\n    <p>We use cookies to improve your experience and for analytics. By using our site, you agree to our use of cookies.</p>\n    <div>\n      <button id="accept-cookies">Accept</button>\n      <button id="decline-cookies">Decline</button>\n    </div>\n  </div>\n\n  <script>\n    // Check if the user has already made a cookie consent choice\n    if (!localStorage.getItem(\'cookie-consent\')) {\n      setTimeout(function() {\n        document.getElementById(\'cookie-banner\').classList.add(\'show\');\n      }, 500);\n    }\n\n    // Store the user\'s choice and hide the banner\n    function setCookieConsent(value) {\n      localStorage.setItem(\'cookie-consent\', value);\n      document.getElementById(\'cookie-banner\').classList.remove(\'show\');\n\n      // Add your Google Analytics tracking code if the user accepts cookies\n      if (value === \'accept\') {\n        initGoogleAnalytics();\n      }\n    }\n\n    // Initialize Google Analytics\n    function initGoogleAnalytics() {\n      window.dataLayer = window.dataLayer || [];\n      function gtag() { dataLayer.push(arguments); }\n      gtag(\'js\', new Date());\n      gtag(\'config\', \'G-6RXS0JXEFD\');\n    }\n\n    // Attach event listeners to the buttons\n    document.getElementById(\'accept-cookies\').addEventListener(\'click\', function() {\n      setCookieConsent(\'accept\');\n    });\n\n    document.getElementById(\'decline-cookies\').addEventListener(\'click\', function() {\n      setCookieConsent(\'decline\');\n});\n</script>\n\n</body>\n</html>\n\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Subscription Widget</title>\n  <style>\n    /* Add CSS styles for the subscription form widget */\n    .floating-button {\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background-color: maroon;\n      color: white;\n      padding: 15px 30px;\n      font-family: Arial, sans-serif;\n      font-size: 16px;\n      font-weight: 600;\n      border-radius: 15px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n      cursor: pointer;\n      z-index: 9999;\n    }\n\n    #subscription-form {\n      position: fixed;\n      bottom: 60px;\n      right: 20px;\n      background-color: white;\n      display: flex;\n      flex-direction: column;\n      padding: 30px;\n      z-index: 9998;\n      border-radius: 15px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n      max-width: 400px;\n      opacity: 0;\n      visibility: hidden;\n      transform: translateY(30px);\n      transition: all 0.5s ease;\n    }\n\n    #subscription-form.show {\n      opacity: 1;\n      visibility: visible;\n      transform: translateY(0);\n    }\n\n    #subscription-form input[type="text"], #subscription-form input[type="email"], #subscription-form textarea {\n      border: 1px solid black;\n      padding: 10px;\n      margin-bottom: 10px;\n      width: 100%;\n      font-family: Arial, sans-serif;\n      font-size: 14px;\n      background-color: #f0f0f0;\n      border-radius: 5px;\n      transition: box-shadow 0.3s ease;\n    }\n\n    #subscription-form input[type="text"]:focus, #subscription-form input[type="email"]:focus, #subscription-form textarea:focus {\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n    }\n\n    #subscription-form button {\n      background-color: black;\n      border: none;\n      color: white;\n      padding: 10px 20px;\n      font-family: Arial, sans-serif;\n      font-size: 16px;\n      cursor: pointer;\n      border-radius: 5px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n      margin-top: 10px;\n      transition: background-color 0.3s ease;\n    }\n\n    #subscription-form button:hover {\n      background-color: #333;\n    }\n\n    #subscription-form .close-button {\n      position: absolute;\n      top: -10px;\n      right: -10px;\n      font-size: 20px;\n      font-weight: bold;\n      cursor: pointer;\n      color: black;\n    }\n  </style>\n</head>\n<body>\n  <button class="floating-button" onclick="openSubscriptionForm()">Message us!</button>\n\n  <div id="subscription-form">\n    <span class="close-button" onclick="closeSubscriptionForm()">&times;</span>\n<input type="text" id="name" placeholder="Name">\n<input type="email" id="email" placeholder="Email">\n<textarea id="message" rows="4" placeholder="Message"></textarea>\n<button onclick="submitSubscriptionForm()">Submit</button>\n\n  </div>\n  <script>\n    // Define a function to open the subscription form\n    function openSubscriptionForm() {\n      playBuzzSound();\n      document.getElementById(\'subscription-form\').classList.add(\'show\');\n    }\n\n    // Define a function to close the subscription form\n    function closeSubscriptionForm() {\n      document.getElementById(\'subscription-form\').classList.remove(\'show\');\n    }\n\n    // Define a function to play the buzz sound\n    function playBuzzSound() {\n      // Add the code to play the buzz sound\n    }\n\n    // Define a function to submit the subscription form\n    function submitSubscriptionForm() {\n      var name = document.getElementById(\'name\').value;\n      var email = document.getElementById(\'email\').value;\n      var message = document.getElementById(\'message\').value;\n\n      // Add server-side script code to send data to Google Sheet and email\n      // For example, using Google Apps Script, create an HTTP POST request to the script URL\n\n      // After successful submission, close the form and play the buzz sound\n      playBuzzSound();\n      closeSubscriptionForm();\n    }\n  </script>\n</body>\n</html>\n<noscript>',
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
                '<script src=\'https://unpkg.com/@teleporthq/teleport-custom-scripts\'></script>\n<script defer src="/_vercel/insights/script.js"></script>',
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument

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
                '</noscript><!--This is the head section-->\n<!-- <style> ... </style> -->\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Subscription Form Widget</title>\n  <style>\n    /* Add CSS styles for the floating widget */\n    #floating-widget {\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      background-color: maroon;\n      color: white;\n      padding: 10px 20px;\n      font-family: Arial, sans-serif;\n      cursor: pointer;\n      border-radius: 5px;\n      z-index: 9999;\n      transition: transform 0.3s ease;\n    }\n\n    #floating-widget:hover {\n      transform: translateY(-5px);\n    }\n\n    /* Add CSS styles for the subscription form */\n    #subscription-form-container {\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      background-color: white;\n      padding: 20px;\n      width: 300px;\n      height: 100vh;\n      display: none;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-family: Arial, sans-serif;\n      z-index: 9998;\n      box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);\n      transform: translateX(100%);\n      transition: transform 0.4s ease;\n    }\n\n    #subscription-form-container.active {\n      transform: translateX(0);\n    }\n\n    #subscription-form-container input,\n    #subscription-form-container textarea,\n    #subscription-form-container button {\n      width: 100%;\n      margin-bottom: 10px;\n      font-size: 16px;\n      border: 1px solid #ccc;\n      border-radius: 3px;\n      padding: 5px;\n    }\n\n    #subscription-form-container button {\n      background-color: maroon;\n      border: none;\n      color: white;\n      padding: 10px;\n      cursor: pointer;\n      transition: background-color 0.3s ease;\n    }\n\n    #subscription-form-container button:hover {\n      background-color: #7c0000;\n    }\n\n    /* Add CSS styles for the close button */\n    #close-button {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      font-size: 20px;\n      color: black;\n      cursor: pointer;\n    }\n  </style>\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />\n</head>\n<body>\n  <div id="floating-widget" class="animate__animated animate__fadeInUp">Message us!</div>\n  <div id="subscription-form-container">\n    <form id="subscription-form">\n      <input type="text" name="name" placeholder="Name" required>\n      <input type="email" name="email" placeholder="Email" required>\n      <textarea name="message" placeholder="Message" required></textarea>\n      <button type="submit">Subscribe</button>\n    </form>\n    <span id="close-button">&times;</span>\n  </div>\n  <audio id="notification-sound" src="https://freesound.org/data/previews/60/60046_703958-lq.mp3"></audio>\n  <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQtTHGaEpx8aqCsSmVvk39BAD1YRMWB8vSETVTU_pIg5-2YLOT77UAfUgN_zN0_FDX8wykNuObH7S1S/pubhtml?widget=true&amp;headers=false" style="display:none;"></iframe>\n\n  <script>\n    const floatingWidget = document.getElementById(\'floating-widget\');\n    const formContainer = document.getElementById(\'subscription-form-container\');\n    const closeButton = document.getElementById(\'close-button\');\n    const notificationSound = document.getElementById(\'notification-sound\');\n    \n    floatingWidget.addEventListener(\'click\', function() {\n      formContainer.classList.add(\'active\');\n      formContainer.classList.add(\'animate__animated\', \'animate__slideInRight\');\n    });\n\n    closeButton.addEventListener(\'click\', function() {\n      formContainer.classList.remove(\'active\');\n    });\n\n    document.getElementById(\'subscription-form\').addEventListener(\'submit\', function(event) {\n      event.preventDefault();\n      const form = event.target;\n      const formData = new FormData(form);\n      const data = {\n        name: formData.get(\'name\'),\n        email: formData.get(\'email\'),\n        message: formData.get(\'message\')\n      };\n\n      fetch(\'<YOUR_GOOGLE_SCRIPT_URL>\', {\n        method: \'POST\',\n        body: JSON.stringify(data),\n        headers: {\n          \'Content-Type\': \'application/json\'\n        }\n      }).then(response => response.json()).then(result => {\n        if (result.success) {\n          form.reset();\n          formContainer.classList.remove(\'active\');\n          notificationSound.play();\n          alert(\'Thank you for joining us! Best regards, Kshoonya.\');\n        } else {\n          alert(\'There was an error. Please try again later.\');\n        }\n      });\n    });\n  </script>\n</body>\n</html>\n\n<noscript>',
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

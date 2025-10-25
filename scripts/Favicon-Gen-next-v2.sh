#Favicon-Gen-next.sh

I have generated my favicon with RealFaviconGenerator. Now I want to install it in my NextJS app.
If you use a terminal to downdload the files below (bash, PowerShell...), make sure to use the proper syntax and commands:

- Download https://realfavicongenerator.net/files/f8a7a618-7027-4700-82c6-548b7c6fd9fe/icon1.png and save it to the `src/app` directory
- Download https://realfavicongenerator.net/files/f8a7a618-7027-4700-82c6-548b7c6fd9fe/icon0.svg and save it to the `src/app` directory
- Download https://realfavicongenerator.net/files/f8a7a618-7027-4700-82c6-548b7c6fd9fe/favicon.ico and save it to the `src/app` directory
- Download https://realfavicongenerator.net/files/f8a7a618-7027-4700-82c6-548b7c6fd9fe/apple-icon.png and save it to the `src/app` directory
- Download https://realfavicongenerator.net/files/f8a7a618-7027-4700-82c6-548b7c6fd9fe/manifest.json and save it to the `src/app` directory
- Download https://realfavicongenerator.net/files/f8a7a618-7027-4700-82c6-548b7c6fd9fe/web-app-manifest-192x192.png and save it to the `public` directory
- Download https://realfavicongenerator.net/files/f8a7a618-7027-4700-82c6-548b7c6fd9fe/web-app-manifest-512x512.png and save it to the `public` directory

Add the following HTML to the `<head>` section of the `src/app/layout.tsx` file (add it if it doesn't exist).
You can take advantage of a NextJS `Metadata` instance to handle some of the markups:

```
<meta name="apple-mobile-web-app-title" content="codeco" />
```

at https://realfavicongenerator.net/ 


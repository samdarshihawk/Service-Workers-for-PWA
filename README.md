Programmed Service Workers for PWA. 
The SW will start download target assests once the user access the wepage. SW would download static files (CSS, JS and images). 
Even if just one file is not cached, the whole install step fails. 
This ensures that if a SW is installed, it contains all the predefined files in its cache.
This will result in offline use of the PWA or Web app.
This will also reduce the loading time for the webpage.

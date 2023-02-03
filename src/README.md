# sign-app
App to generate email signature in HTML format from selected template

## Build Instructions
In future if you want to include a new signature template , follow below steps:
1. One component new to be created, which is called "signature" and the other one is needed to have user details(Emplyoee.svelte)
2. All signature files are placed under src/templates folder which is having all content of HTML signature as a string and also control how signature template to be displayed on app(need to update outputstring for new template)
3. The "Employee" component include a form which can collect the user inputs and displayed in required format.
4. For new signature template need to import "Employee.svelte' file which contains user details.
## Deploy Instructions
1. add the following property to package.json:
    "homepage": "https://yourdomain.com"
2. If the React app involves frontend routing, add a .htaccess file and include the following line:
    FallbackResource ./index.html
3. Also in the .htaccess file add lines following this document: https://cc.bingj.com/cache.aspx?q=react+app+bluehost&d=4729540940990033&mkt=en-CA&setlang=en-CA&w=5VrPQPcpmlxmvx7Z5yONaDvo-3ua1hGN so that this app can be host on Bluehost
4. run "npm run dev" to build the React app
5. upload each file from the build folder into the domain's Document Root folder

Reference webpage: https://codeburst.io/deploying-and-hosting-a-react-app-on-an-apache-server-b7121dffb07a


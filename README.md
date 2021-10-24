# sign-app
App to generate email signature in HTML format from selected template

## Build Instructions
If we want to include a new signature template in the future, follow these steps:
1. Two new components new to be created, one is called "signature" and the other one is called "content"
2. The "content" component include a form which can collect the user input, and these inputs can varies depending on what we want to show in the signature (the "DefaultContent" component can be used as a template)
3. The "signature" components include the HTML signature template as a string and also control how the signature template display on the app (the "DefaultSignature" component can be used as a template; remember to update the "outputString" to the new HTML signature template)
4. The signature display in the app is built using the AntD UI framwork which is not related to the HTML signature template in the "outputString"; remember to update both the signature display in the output of the "signature" component and also uopdate the HTML in the "outputString"

## Deploy Instructions
1. add the following property to package.json:
    "homepage": "https://yourdomain.com"
2. If the React app involves frontend routing, add a .htaccess file and include the following line:
    FallbackResource ./index.html
3. run "npm run build" to build the React app
4. upload each file from the build folder into the domain's Document Root folder

Reference webpage: https://codeburst.io/deploying-and-hosting-a-react-app-on-an-apache-server-b7121dffb07a


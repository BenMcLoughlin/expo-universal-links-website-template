

## Example of website required to host .wellknown files for expo universal links

This is a [Next.js](https://nextjs.org/) website and hosted with [vercel](https://vercel.com/solutions/nextjs). 
once you've connected your git repo with vercel so it can be hosted, in vercel go to Project Settings and change Framework preset from Other to Next.js.

## Apple Universal links, create an app to test with TestFlight

Step 1. You need a developer account
Step 2. Create a new app, go in to Edit your App ID Configuration and ensure that Associated Domains is selected, this [youtube video](https://www.youtube.com/watch?v=DLvdZtTAJrE&ab_channel=SeanAllen) by Sean Allen explains the process
Step 3. Build the react native app by running `expo build:ios`, it can take about 15 minutes to build. Once its finished building click the link to download the ipa file. 
Step 4. You need Transporter to upload the app to the app store. 

## Add the Apple app details to 

Create the apple site association file following these [docs](https://developer.apple.com/documentation/bundleresources/applinks) 
Your App App id prefix can be found below your name in the top right of the apple developer page. This is connected to your app bundle id which will be used in the AASA folder. 

Mine looks like this: QLN6949UL2.com.universal-links-test.app

One of the big challeneges with next.js is they use internal routing to manage the server side props. This causes issues with going to the /.well-known/apple-app-site-association link as it thinks
it is a folder. The workaround is to use a redirect that will send apple to an api that will serve the json. This can be set in the next.config.js like so

```
module.exports = {
    async redirects() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                destination: '/api/apple-app-site-association',
                permanent: true
            }
        ];
    }
};

```
Then you need to create a api file that returns the json. You can view mine at pages/api/apple-app-site-association.js

Next you need to test that it works using the [AASA validator](https://branch.io/resources/aasa-validator/). Go to the website and enter the details, in my case they are: 

Domain / Web Page: expo-universal-links-website-template.vercel.app
Apple App Prefix: QLN6949UL2
Bundle Identifier: com.universal-links-test.app

Hopefully you get all green indicators showing that it passed. 
## Download app to your phone using Test Flight

Add an email address you can access on your phone to the TestFlight testors list and send yourself a link to the app. Then you can download the test app to your phone. 

## Create the universal link and send it to your phone via email

In my case the universal link is the link to my hosted website, expo-universal-links-website-template.vercel.app/, with the extension defined in my AASA file, where I'd used /app.

`https://expo-universal-links-website-template.vercel.app/app`

Send the link to yourself via email so you can access it in your phone. Click on it, and fingers crossed, the app will open. 



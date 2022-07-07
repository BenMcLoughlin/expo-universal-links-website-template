

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

You need to set content headers to application/json in the next.config.js

```
module.exports = {
    headers: [
        {
            source: '/.well-known/apple-app-site-association',
            headers: [
                {
                    key: 'Content-Type',
                    value: 'application/json'
                }
            ]
        }
    ]
};

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# expo-universal-links-website-template

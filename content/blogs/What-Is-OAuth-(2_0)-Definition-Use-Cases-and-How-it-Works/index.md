---
title: "What Is OAuth (2.0)? | Definition, Use Cases, and How it Works"
date: 2024-10-12T18:32:49+05:30
author: "Sandesh Shahapur"
draft: false
summary: "A comprehensive guide to understanding OAuth (2.0), its definition, use cases, and how it works to grant secure access to user data."
tags: ["OAuth", "OAuth 2.0", "Security"]
categories: ["Development", "Security", "Article"]
---

## Why OAuth?

Before we dive into OAuth, let's understand why it is essential in the context of security. Every tool that humans create is done for fixing a problem, and OAuth is no different.

Let us consider a scenario where you have stored your media files (images, videos, etc.) on a cloud storage service like Google Drive. Now, you are using a media editing application and want to edit an image/video that is stored on your Google Drive. You don't want to download the file to your local system, edit it with the editing application, and then upload it back to Google Drive, because you find it inconvenient. Instead, you want the media editing application to directly access the file on Google Drive and make the necessary changes.

So, how do we get the media editing application to access your files on Google Drive? The files are in your Drive account and can only be accessed by you.
One way is to provide your Google Drive credentials (username and password) to the media editing application. But this is a security risk because the application can misuse your credentials or store them insecurely.
This is where OAuth comes into play. It provides a secure way for you to grant the media editing application access to your Google Drive files without sharing your credentials.

In this way, OAuth enables communication between different primary and third-party services while maintaining the security and privacy of user data.

## 2.0? Are there different versions of OAuth?

In this article, we will focus on OAuth 2.0, which is the latest version of OAuth. Other versions are OAuth 1.0 and OAuth 1.0a, which are now considered outdated due to security vulnerabilities and limitations.

## Definition

OAuth (Open Authorization) is an {{< glossary term="open-standard" >}} for **access delegation** that allows a user to grant a third-party application access to their account/application's resources or perform actions on behalf of them without them having to sharing their credentials to the third-party application.

## Use Cases of OAuth 2.0

OAuth 2.0 is widely used in various scenarios to grant access to user data securely. Some common use cases of OAuth 2.0 include:

1. **Social Login and Single Sign On**: Social login is facilitated using {{< glossary term="OpenID-Connect" displayTerm="OpenID Connect" >}}, an identity layer built on top of OAuth 2.0. This allows users to log in to applications using their social media accounts, such as Google, Facebook, or Twitter (e.g., "Log in with Google" or "Log in with Facebook" buttons). By handling {{< glossary term="authentication" >}} through these social media accounts, users need not create a new account and remember another set of credentials, enabling {{< glossary term="Single-Sign-On" >}}.
{{< br >}}
It also lifts the burden of password management and security from the application owner.
2. **Third-Party Data Access**: As mentioned, third-Party applications including plugins/extensions can access user data securely.

## Components of OAuth 2.0

1. **Resource Owner**: The user who owns the data and grants access to it. In the Google Drive example, you are the resource owner.
2. **Client**: The third-party application that wants to access the user's data. In the Google Drive example, the media editing application is the client.
3. **Authorization Server**: The {{< glossary term="server" >}} that {{< glossary term="authorization" displayTerm="authorizes" >}} the client to access the user's data. In the Google Drive example, Google's authorization server.
4. **Resource Server**: The server that hosts the user's data. In the Google Drive example, Google Drive itself.

## How OAuth 2.0 Works

If the users don't share their credentials, how does OAuth 2.0 work? Through {{< glossary term="Access-Token" displayTerm="Access Tokens" >}}.

Access Tokens are like keys that allow the client to access the user's data without knowing the user's credentials. As they are short-lived, the authorization server may issue another key called the {{< glossary term="Refresh-Token" >}} to get a new Access Token when the current one expires without requiring the user to log in again.

OAuth 2.0 works by following a series of steps to grant access to the user's data:

1. **Authorization Request**: The client sends an authorization {{< glossary term="request" >}} to the authorization server, asking for permission to access the user's data. The set of permissions requested is known as a "scope" (e.g., read access, write access, delete access).
   - Example: "Can I access to reading and writing this user's Google Drive files?"

2. **User Authentication and Authorization**: The authorization server prompts the user to authorize the client to access their data. The user if not already logged in, {{< glossary term="authenticate" >}} themselves and grants the requested permissions. Upon granting permission, the client receives an authorization code.
   - Example: You log in to your Google account and authorize the media editing application to access your Google Drive files.

   > Note: You should **always check the scope of permissions** requested before granting access.

3. **Access Token Request**: The client exchanges the authorization code for an Access Token by sending a request to the authorization server.
   - Example: The media editing application requests an Access Token to access your Google Drive files.

4. **Access Token Grant**: The authorization server issues an Access Token to the client.
   - Example: Google Drive issues an Access Token to the media editing application.

5. **Request Resource**: The client sends the Access Token to the resource server to access the user's data.
   - Example: The media editing application uses the Access Token to access your Google Drive files.

6. **Resource Access**: The resource server verifies the Access Token and grants access to the user's data.
   - Example: Google Drive verifies the Access Token and allows the media editing application to access your files.

{{< br >}}
{{< figure src="OAuthFlow.svg" data-src-light="OAuthFlow.svg" data-src-dark="OAuthFlow-dark.svg" width="720px" height="700px" alt="OAuth flow diagram" caption="OAuth flow diagram" loading="lazy" width="800" height="700" >}}

## Conclusion

OAuth 2.0 is a secure {{< glossary term="protocol" >}} that allows users to grant access to their data without sharing their credentials. It is widely used in various applications and scenarios to provide a secure and flexible way to access user data. Understanding OAuth 2.0 is essential for developers who want to build secure and user-friendly applications that interact with third-party services.

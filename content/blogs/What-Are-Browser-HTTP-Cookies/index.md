---
title: "What Are Browser HTTP Cookies?"
date: 2024-10-13T07:56:37+05:30
author: "Sandesh Shahapur"
draft: false
tags: ["Cookies", "Web Development", "Security"]
categories: ["Web Development", "Web Security"]
summary: "An in-depth look at what browser HTTP cookies are, why they are used, how they work, and their attributes. Learn how cookies are used for session management, personalization, tracking, and advertising on the web."
---

When you visit a {{< glossary term="website" >}}, you might have noticed a message that says, "This website uses cookies to ensure you get the best experience on our website" or have received a prompt to accept cookies. Before understanding what these cookies are and why they are used, let us look at the context around cookies.

## Why Cookies?

Browsers use the {{< glossary term="HTTP" >}} {{< glossary term="protocol" >}} to communicate with a {{< glossary term="web-server" >}} for requesting {{< glossary term="webpage" displayTerm="webpages" >}}, images, videos, and other resources. HTTP is a stateless protocol, meaning that each {{< glossary term="request" >}} is independent of the previous one, and the server does not maintain any information about your previous interactions with the website. However, websites often need to remember user-specific information to provide a personalized experience like remembering your login status, preferences, shopping cart items, and more.

There are few options for storing data on the {{< glossary term="client" >}} (browser) like:

1. **Cookies**: Small pieces of data.
2. **Local Storage**: A larger storage area.
3. **Session Storage**: A storage area that stores data for the duration of the page session.

## What Are Cookies?

Cookies are small pieces of data stored on your browser by websites you visit. They have a name and a value, and can also have additional attributes. They are used to store user-specific information like login status, preferences, shopping cart items, and more.

## Why/When to use Cookies over Local/Session Storage?

Cookies provide the following advantages over Local/Session Storage:

1. **Cookies are sent with every request**: Every time you make a request to a website including {{< glossary term="ajax-request" displayTerm="ajax-requests" >}}, cookies are sent along automatically, providing server side accessibility. This is not the case with Local/Session Storage.
2. **Expiration and Path**: Cookies can have an expiration date and a {{< glossary term="url-path" displayTerm="path" >}}, allowing them to be stored for a specific duration and accessed only on specific paths. Local/Session Storage either persists forever (Local Storage) or is cleared when the page session ends (Session Storage).
3. **Security**: Cookies can have attributes that enhances security whereas Local/Session Storage does not have these security features.

## How Do Cookies Work?

When you visit a website, the server sends a {{< glossary term="response" >}} to your browser with the web page document and a set of instructions to create cookies. Your browser creates and stores these cookies and sends them back to the server with every subsequent request (given the cookie's path matches the request path) you make to the website.

> Note: In the case when a website uses different {{< glossary term="domain" displayTerm="domains" >}} for its {{< glossary term="frontend" >}} and {{< glossary term="backend" >}}, cookies are likely not stored by the frontend domain (the website you visit), but by the backend domain.

Thus every cookie is associated with only one domain which is the the domain of the web server that set the cookie.

As Cookies are associated with a specific domain and path on the website, cookies created by one website cannot be accessed by another website. For example, cookies created by `example.com` cannot be accessed by `anotherexample.com`.

> Note: If the frontend and backend are on different domains, and the backend sets a cookie, the frontend cannot access it through [`document.cookie`](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie) as it is on a different domain.

{{< br >}}
{{< figure src="cookieFlow.svg" alt="Cookie flow diagram" caption="Cookie flow diagram" loading="lazy" >}}

## Why Are Cookies Used?

Cookies serve several purposes on the web:

1. **Session Management**: Cookies are used to manage user sessions on websites. They help websites remember your login status, shopping cart items, and other session-related information.

2. **Tracking and Analytics**: Cookies are used for tracking user behavior on websites. They help website owners understand how users interact with their site, which pages are popular, and more.

3. **Advertising**: Cookies are used for targeted advertising. They help advertisers show relevant ads to users based on their browsing history and interests.

## Cookie Attributes

Cookies can have several attributes that define their behavior:

1. **Name and Value**: The name and value of the cookie.

2. **Domain**: The domain or {{< glossary term="subdomain" displayTerm="sub-domains" >}} associated with the cookie. The cookie is sent only to these sub/domain on subsequent requests.

3. **Path**: The path on the website where the cookie is valid. The cookie is accessible and sent only for requests that match this path.

4. **Expiration Date**: The date and time when the cookie expires. After this time, the cookie is no longer sent to the server and is deleted.

5. **Secure**: A flag that indicates that the cookie should only be sent over secure connections ({{< glossary term="HTTPS" >}}). This ensures that the cookie values sent over the network are {{< glossary term="encryption" displayTerm="encrypted" >}} and not readable by unauthorized parties.

6. **HttpOnly**: A flag that indicates the cookie should not be accessible by {{< glossary term="JavaScript" >}} ([`document.cookie`](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)) on the {{< glossary term="client-side" >}}. This helps to prevent {{< glossary term="XSS" >}} attacks from accessing sensitive cookies.

7. **SameSite**: A flag that controls whether or not a cookie is sent with cross-site requests {{< glossary term="cross-origin" displayTerm="cross-site requests" >}}. It helps prevent {{< glossary term="CSRF" >}} attacks from making users unknowingly perform unwanted actions on other websites.

## Managing Cookies

Most modern browsers allow you to manage cookies through their settings. You can view the cookies stored on your browser, delete specific cookies, block all cookies, or block cookies from specific websites.

By managing cookies, you can control your privacy and security while browsing the web. However, blocking all cookies may affect the functionality of some websites that rely on cookies for essential features.

## Conclusion

Cookies are an essential part of the {{< glossary term="web" >}} ecosystem, allowing websites to remember user-specific information and provide a personalized experience. They are used for session management, personalization, tracking, advertising, and more. By understanding how cookies work and their attributes, you can make informed decisions about your privacy and security while browsing the web.

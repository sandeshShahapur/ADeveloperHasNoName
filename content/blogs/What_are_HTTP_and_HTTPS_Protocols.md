---
title: 'What are HTTP and HTTPS Protocols?'
date: 2024-10-13T16:45:35+05:30
draft: true
author: "Sandesh Shahapur"
tags: ['HTTP', 'HTTPS', 'Networking', 'Web Development', 'Web Security']
categories: ['Web Development', 'Networking']
summary: 'An in-depth look at what the HTTP protocol is, how it works, its methods, status codes, versions, and security features. Learn how HTTP enables communication between clients and servers over the internet.'
---

You are familiar with using browsers to access websites and you might have seen {{< glossary "URL" >}}s starting with `http://` or `https://`. When you type a URL like `http://example.com` in your browser's address bar and press Enter, you are then presented with the website's content. How does this happen?

First, where does the browser get this content from? From a {{< glossary "Web-Server" >}}. Which Web-Server? The one whose {{< glossary "IP-Address" >}} is associated with the domain name `example.com` which is resolved by the {{< glossary "DNS" >}}, say for example `1.1.1.1`.

Now, the browser just can't ask 'Hey `1.1.1.1`, I want something', it needs to be able to ask in a way that the Web-Server understands. This is where the HTTP Protocol comes into play.

## What is HTTP?

HTTP stands for **{{< glossary "HyperText" >}} {{< glossary "Transfer" >}} {{< glossary "Protocol" >}}**. It is the format that {{< glossary "client" >}}s (browsers) and {{< glossary "server" >}}s (Web-Servers) use to communicate website components like {{< glossary "HTML" >}}, {{< glossary "CSS" >}}, {{< glossary "JavaScript" >}} files, images, etc. with each other over the {{< glossary "internet" >}}.

It is one of the Application Layer Protocols in [TCP/IP]( {{< ref "" >}} ), which means it is responsible for the communication between software applications on the network.

So, in a nutshell, HTTP is the language that the client and server use to exchange web components over the internet.

## How Does HTTP Work?

HTTP works in a client-server model.

First, the client sends a request to the server. Let's look at how this request looks:
1. **Request Line**: Contains the method, the URL, and the HTTP version.
    - The method specifies the action to be performed on the resource (GET, POST, PUT, DELETE, etc.).
    - The URL specifies the location of the resource.
    - The HTTP version specifies the version of the HTTP protocol being used.
2. **Headers**: Contains additional information about the request like the type of content the client can accept (text/html, application/json, etc.), the type of content the client is sending (application/x-www-form-urlencoded, multipart/form-data, etc.), the type of encoding used (gzip, deflate, etc.), and more.
3. **Body**: Contains the data being sent to the server. This is optional and is used in POST, PUT and PATCH requests.

Next, the server processes the request and responds with the requested content. Let's look at how this response looks:
1. **Status Line**: Contains the HTTP version, the status code (200 for success, 404 for not found, 500 for server error, etc.), and a status message.
2. **Headers**: Contains additional information about the response like the type of content being sent (text/html, application/json, etc.), the length of the content, the type of encoding used (gzip, deflate, etc.), and more.
3. **Body**: Contains the data being sent back to the client. This can be HTML content, {{< glossary "JSON" >}} data, images, etc.

One of the key features of HTTP is that it is a **stateless protocol**, which means each request is independent of the previous one. The server does not maintain any information about the client's previous requests. To maintain state between requests, technologies like [cookies]( {{< ref "What_Are_Browser_HTTP_Cookies" >}} ) and sessions are used.

In this way, HTTP enables the client and server to communicate effectively over the internet.

## HTTP Methods

Every HTTP request contains a method that specifies the action to be performed on the resource. Some common HTTP methods are:
1. **GET**: Used to retrieve data from the server. The data is sent in the URL.
2. **POST**: Used to submit data to the server. The data is sent in the body of the request.
3. **PUT**: Used to update data on the server. The data is sent in the body of the request.
4. **DELETE**: Used to delete data on the server. The data is sent in the URL.
5. **PATCH**: Used to partially update data on the server. The data is sent in the body of the request.
6. **HEAD**: Similar to GET but only returns the headers
7. **OPTIONS**: Used to check what methods are allowed on a resource

## HTTP Status Codes

Every HTTP response contains a status code that indicates the status of the request. Range of status codes are divided into 5 categories:
1. **1xx**: Informational responses.
    - Example: 100 Continue, 101 Switching Protocols.
2. **2xx**: Success responses.
    - Example: 200 OK, 201 Created, 204 No Content.
3. **3xx**: Redirection responses.
    - Example: 301 Moved Permanently, 302 Found, 304 Not Modified.
4. **4xx**: Client error responses.
    - Example: 400 Bad Request, 401 Unauthorized, 404 Not Found.
5. **5xx**: Server error responses.
    - Example: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable.

These codes help developers and clients identify the result of the request, enabling effective debugging.

## Idempotent Methods

Some HTTP methods are considered idempotent, which means that making the same request multiple times has the same effect as making it once. This property is useful in scenarios where requests can be retried without causing unintended side effects. Some idempotent methods are:
1. **GET**: Retrieving data multiple times has the same effect.
2. **PUT**: Updating data multiple times has the same effect.
3. **DELETE**: Deleting data multiple times has the same effect.
4. **HEAD**: Retrieving headers multiple times has the same effect.
5. **OPTIONS**: Checking allowed methods multiple times has the same effect.

Post and Patch methods are not idempotent as making the same request multiple times can have different effects.

## HTTP Versions

HTTP has evolved over the years, with different versions introducing new features and improvements. Some of the major versions are:
1. **HTTP/0.9**: The first version of HTTP, introduced in 1991. It was a simple protocol that allowed clients to request a single file from a server.
2. **HTTP/1.0**: Introduced in 1996, it added support for multiple types of data, including images, audio, and video. It also introduced status codes and headers.
3. **HTTP/1.1**: Introduced in 1999, it is the most widely used version of HTTP. It introduced persistent connections, pipelining, and improved caching.
4. **HTTP/2**: Introduced in 2015, it is a major revision of the HTTP protocol. It introduced features like multiplexing, header compression, and server push to improve performance.
5. **HTTP/3**: Introduced in 2020, it is the latest version of HTTP. It is based on the QUIC protocol and aims to improve performance and security.

Each version of HTTP builds on the previous one, adding new features and improvements to make the protocol more efficient and secure.

## HTTPS

HTTP is a text-based protocol, which means that data sent over HTTP requests and responses is not encrypted. This means that anyone who intercepts the data can read it easily as plain text.

Consider the scenarios where you are logging into your bank account over an unencrypted HTTP connection. If someone intercepts the data, they can read your username and password, compromising your account. Or consider when you are entering your credit card details on an e-commerce website, if the HTTP connection is not encrypted, your credit card information can be stolen.

To address this security concern, HTTPS was introduced. HTTPS stands for **HyperText Transfer Protocol Secure**. It is the secure version of HTTP that encrypts the data sent between the client and server, making it difficult for attackers to intercept and read the data. HTTPS uses the [SSL/TLS protocol]( {{< ref "" >}} ) to encrypt the data, ensuring that sensitive information like passwords, credit card details, and personal information is protected.

When you visit a website that uses HTTPS, you will see a padlock icon in the address bar of your browser, indicating that the connection is secure. It is important to use HTTPS on websites that handle sensitive information to protect user data from interception and theft.

## Conclusion

HTTP/S is the backbone of the internet, enabling communication between clients and servers. Understanding how HTTP works, its methods, status codes, versions, and security features is essential for web developers to build secure and efficient web applications. By following the principles of HTTP, developers can create fast, reliable, and secure web experiences for users around the world.

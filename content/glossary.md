---
title: "Glossary"
date: 2024-10-12T20:41:18+05:30
draft: false
glossary:
  Access-Token: A string of alphanumeric characters (usually random) that is **stand-In for the user's credentials** that allows a user to access their applications/services, or allows other third-party applications to access the user's application/service data without exposing the user's credentials. Access tokens are short-lived and can be revoked by the user at any time, and needs to be refreshed periodically using {{< glossary term="Refresh-Token" preventRecursion="true" >}}. If token is compromised, the user's credentials are not exposed, making damage minimal.

  API: Application Programming Interface is an {{< glossary term="interface" >}} i.e. a shared-boundary/layer between two {{< glossary term="software-component" displayTerm="software components">}} that provides a means for them to communicate or interact with each other for exchanging information. It **defines how access or interaction should occur** between the two.

  Authentication: (Authentication) The process of **verifying the identity** of a user or system to ensure that they are who they claim to be. It is commonly used to grant access to resources or services based on the user's identity {{< hr >}} (Authenticate) To log in to a system/service by providing valid credentials (e.g., username and password, biometric data, etc.).

  Authorization: The process of **determining what a user or system is allowed to do** or access. It involves granting or denying permissions based on the user's identity, role, or other attributes.

  backend: The {{< glossary term="server-side" >}}/behind-scenes of an application that is responsible for processing requests, interacting with databases, and generating responses to be sent to the {{< glossary term="client" >}} ({{< glossary term="frontend" preventRecursion="true" >}}).

  cascading: A process in which an operation or set of operations is repeated multiple times, with the output of each operation becoming the input for the next operation. {{< hr >}} Applying a priority order when multiple rules target the same element. The "cascade" ensures that the most specific rule (or the last one defined) wins, allowing different styles to be combined smoothly. In {{< glossary term="CSS" preventRecursion="true" >}}, inline > internal > external and id > class > element.

  client: A device or software that accesses services or resources provided by a {{< glossary term="server" preventRecursion="true" >}} by making requests. Clients can be website/browsers, mobile applications, desktop applications, etc.

  Client-Side: Things that happen on the {{< glossary term="client" >}}, e.g., rendering of the {{< glossary term="user-interface" >}}, handling user interactions and events, sending requests to the server, computing, etc.

  css: ㅤ {{< glossary term="Cascading" preventRecursion="true" >}} {{< glossary term="Style-Sheet-Language" displayTerm="Style Sheets" >}} is a style sheet language used for describing and styling the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. E.g., changing the color, font, size, spacing, positioning, and layout of elements on a web page.

  discord: A platform where you can chat, speak, stream with your friends or communities. A Discord server is like a big group space. Servers contain channels which are like chat rooms for a specific topic. You can also join voice channels to talk/stream. Discord bots are user interactable community-made programs that can help you manage your server, play music, moderate, play games, etc that you can add to your server.

  dns: The Domain Name System translates website domain names into IP addresses, which are used by computers to locate websites and other internet resources. It acts as the internet's phone book, eliminating the need for users to remember IP addresses.

  Framework: A collection of tools and libraries that help developers build applications more efficiently by providing pre-written code for common/boiler-plate tasks. Frameworks provide a structure for developing applications and enforce certain patterns and practices to ensure consistency and maintainability.

  frontend: The client-side/front-scenes of a application that is responsible for rendering the user interface and sending requests to the server ({{< glossary term="backend" preventRecursion="true">}}) for processing.

  HTML: HyperText Markup Language is the standard markup language for creating web pages and web applications. It describes   the structure of web content using a system of tags and attributes. HTML elements are the building blocks of a website, e.g.   headings (<h1-6/>), paragraphs (<p/>), images (<img>), links (<a/>), etc which can be nested inside each other. The browser   reads the HTML file and renders the content on the screen.

  HTTP: HyperText Transfer Protocol is the protocol that clients (browsers) and servers (Web-Servers) use to communicate   website components like HTML, CSS, JavaScript files, images, etc. with each other over the internet.

  HTTPS: HyperText Transfer Protocol Secure is the secure version of HTTP. It encrypts the data exchanged between the client   and server, ensuring that it cannot be intercepted by unauthorized parties.

  HyperText: A text that contains links to other texts. When you click on a link, you are taken to another text.

  Idempotent: An operation that produces the same result no matter how many times it is executed. For example, a GET request is idempotent because it retrieves the same resource every time it is executed.

  Interface: A shared boundary/layer between two entities (e.g., {{< glossary term="software-component" displayTerm="software components">}}, devices, systems, etc.) that provides a means for them to communicate or interact with each other for exchanging information. It defines how access or interaction should occur between the entities.

  User-Interface: The visual elements of a software application that users interact with, such as buttons, menus, forms, and other controls. It is designed to be intuitive, user-friendly, and responsive to user input.

  Internet: It is like an intricate network of highways (data cables) connecting cities (servers) and towns (clients) across the globe. A network of network. It allows users to access and share information, resources, and services across the world and with each other.

  IP-Address: An Internet-Protocol Address is a **unique numerical label** (e.g., 182.98.18.46) that identifies a device   connected to the internet or a local network that uses the Internet Protocol for communication. It is geo-locatable and can   be used to identify the location of a device.

  JavaScript: A high-level, interpreted programming language that is used to make web pages interactive and dynamic. It is   used to create responsive, interactive elements on web pages, such as pop-ups, animations, form validation, and more.   JavaScript is executed on the client-side (browser) and can interact with the Document Object Model (DOM) of a web page to   update content, style, and structure.

  JSON: JavaScript Object Notation is a lightweight data-interchange format that is easy for humans to read and write, and   easy for machines to parse and generate. It is used to transmit data between a server and a web application as an   alternative to XML.

  Library: A collection of pre-written code that provides specific functionality to be used by other code. Libraries are reusable and can save time and effort by allowing developers to use existing code rather than writing it from scratch. All the public methods and signatures forms the API of the library.

  MAC-Address: A Media Access Control Address is a hardware identifier that **uniquely identifies** each device on a network.   Primarily, the manufacturer assigns it. They are often found on a device's network interface controller (NIC) card.

  Markup-Language: Systems for annotating a document in a way that is syntactically distinguishable from the text. The annotations typically define how the document should be structured, formatted, or displayed. They are static and do not have any logic or programming capabilities.

  Port: "A specific point of communication that allows a computer to send and receive data over a network. Ports are identified by numbers, and each port is associated with a specific protocol or service. For example, port 80 is commonly used for HTTP traffic, and port 5432 is used for PostgreSQL database connections {{< hr >}} Can be described as an internal address within a host computer that identifies a program or process"

  protocol: A set of rules and guidelines that dictate how participants (whether they are devices, software components, or users) in a system should behave.

  Rate-Limit: A restriction on the number of requests a client (user or application) can make to a server within a specified time frame. Rate limiting is used to prevent abuse, protect against denial-of-service attacks, and ensure fair usage of resources.

  Refresh-Token: An {{< glossary term="Access-Token" preventRecursion="true" >}} is short lived, meaning on expiry user will have to {{< glossary term="authentication" displayTerm="re-authenticate" >}}. Refresh-Token is string of alphanumeric characters (usually random) that can be used to be issued with a new Access Token after the current Access Token expires. It is used to maintain the user's session without requiring the user to re-authenticate while ensuring the Access Token is short-lived and thereby more secure.

  server: A computer program or a device that provides functionality to other devices or programs, known as {{< glossary term="client" preventRecursion="true" >}}, by responding to their requests. These devices are typically dedicated to serving the needs of other programs or users, therefore being powerful machines which lack output devices like a monitor.

  Server-Process: A program that runs on a computer an a specific {{< glossary term="port" >}} and listens for incoming requests from {{< glossary term="clients" >}} over a network. It processes these requests and sends back responses to the clients. E.g., a web server, database server, etc. These processes usually run on a {{< glossary term=displayTerm="server" >}} machine.

  Server-Side: Things that happen on the {{< glossary term="server" >}}, e.g., processing of requests, interacting with databases, etc.

  Socket: "Port + IP Address. Also known as a communication endpoint. {{< hr >}} A socket is one endpoint of a two-way communication link between two programs running on the network."

  Software-Component: A {{< glossary term="server-process" >}} (e.g. a web server, database server, etc.), a client application (e.g. a website/browser, mobile app, desktop app, etc.), or a library/module that provides specific functionality to a software system.

  Style-Sheet-Language: A language used to describe the presentation or formatting of a document written in a {{< glossary term="markup-language" displayTerm="markup language" >}} like {{< glossary term="HTML" >}}, typically defining how elements should be displayed or rendered across different media.

  Transfer: Exchange of data between the client and server.

  UI: User Interface, the visual elements of a software application that users interact with, such as buttons, menus, forms, and other controls. It is designed to be intuitive, user-friendly, and responsive to user input.

  UX: User Experience, the overall experience of a person using a product such as a website or computer application, especially in terms of how easy or pleasing it is to use.

  URL: A Uniform Resource Locator is a **web address** that specifies the location of a resource on the internet. It consists   of a protocol (e.g., HTTP, HTTPS), a domain name (e.g., example.com), a path to the resource (e.g., /blog) and optional   query parameters (e.g., ?id=123) to makeup a complete URL, e.g., https://example.com/blog?id=123.

  web-server: A server that hosts website component files (such as HTML, CSS, JavaScript files, images, etc.) and an HTTP server that processes incoming requests from clients (web browsers) and responds with the requested resources. Web servers are accessed through the domain names of the websites they host.

  XML: Extensible Markup Language is a markup language that is commonly used to carry and describe data. It is a self-descriptive language that allows you to define your own tags and attributes.
---

Access Token
: A string of alphanumeric characters (usually random) that is **stand-In for the user's credentials** that allows a user to access their applications/services, or allows other third-party applications to access the user's application/service data without exposing the user's credentials. Access tokens are short-lived and can be revoked by the user at any time, and needs to be refreshed periodically using {{< glossary term="Refresh-Token" >}}. If token is compromised, the user's credentials are not exposed, making damage minimal.

API
: Application Programming Interface is an {{< glossary term="interface" >}} i.e. a shared-boundary/layer between two {{< glossary term="software-component" displayTerm="software components">}} that provides a means for them to communicate or interact with each other for exchanging information. It **defines how access or interaction should occur** between the two.

Authentication
: The process of **verifying the identity** of a user or system to ensure that they are who they claim to be. It is commonly used to grant access to resources or services based on the user's identity.

&zwnj;
: (Authenticate) To log in to a system/service by providing valid credentials (e.g., username and password, biometric data, etc.).

Authorization
: The process of **determining what a user or system is allowed to do** or access. It involves granting or denying permissions based on the user's identity, role, or other attributes.

Backend
: The **{{< glossary term="server-side" >}}**/**behind-scenes** of an application that is responsible for processing requests, interacting with databases, and generating responses to be sent to the {{< glossary term="client" >}} (front-end).

Cascading
: A process in which an operation or set of operations is repeated multiple times, with the output of each operation becoming the input for the next operation.

&zwnj;
: Applying a priority order when multiple rules target the same element. The "cascade" ensures that the most specific rule (or the last one defined) wins, allowing different styles to be combined smoothly. In {{< glossary term="CSS" >}}, inline > internal > external and id > class > element.

Client
: A **device** or **software** that accesses services or resources provided by a {{< glossary term="server" >}} by making requests. Clients can be website/browsers, mobile applications, desktop applications, etc.

Client-Side
: Things that happen on the {{< glossary term="client" >}}, e.g., rendering of the {{< glossary term=displayTerm="user-interface" >}}, handling user interactions and events, sending requests to the server, computing, etc.

CSS
: {{< glossary term="Cascading" >}} {{< glossary term="Style-Sheet-Language" displayTerm="Style Sheets" >}} is a style sheet language used for describing and styling the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. E.g., changing the color, font, size, spacing, positioning, and layout of elements on a web page.

Discord
: A platform where you can chat, speak, stream with your friends or communities. A Discord server is like a big group space. Servers contain channels which are like chat rooms for a specific topic. You can also join voice channels to talk/stream. Discord bots are user interactable community-made programs that can help you manage your server, play music, moderate, play games, etc that you can add to your server.

DNS
: The Domain Name System translates website domain names into IP addresses, which are used by computers to locate websites and other internet resources. It acts as the internet's phone book, eliminating the need for users to remember IP addresses.

Framework
: A collection of tools and libraries that help developers build applications more efficiently by providing pre-written code for common/boiler-plate tasks. Frameworks provide a structure for developing applications and enforce certain patterns and practices to ensure consistency and maintainability.

Frontend
: The **client-side**/**front-scenes** of an application that is responsible for rendering the user interface and sending requests to the server (backend) for processing.

HTML
: HyperText Markup Language is the standard markup language for creating web pages and web applications. It describes the structure of web content using a system of tags and attributes. HTML elements are the building blocks of a website, e.g. headings (<h1-6/>), paragraphs (<p/>), images (<img>), links (<a/>), etc which can be nested inside each other. The browser reads the HTML file and renders the content on the screen.

HTTP
: HyperText Transfer Protocol is the protocol that clients (browsers) and servers (Web-Servers) use to communicate website components like HTML, CSS, JavaScript files, images, etc. with each other over the internet.

HTTPS
: HyperText Transfer Protocol Secure is the secure version of HTTP. It encrypts the data exchanged between the client and server, ensuring that it cannot be intercepted by unauthorized parties.

HyperText
: A text that contains links to other texts. When you click on a link, you are taken to another text.

Idempotent
: An operation that produces the same result no matter how many times it is executed. For example, a GET request is idempotent because it retrieves the same resource every time it is executed.

Interface
: A shared boundary/layer between two entities (e.g., {{< glossary term="software-component" displayTerm="software components">}}, devices, systems, etc.) that provides a means for them to communicate or interact with each other for exchanging information. It defines how access or interaction should occur between the entities.

User-Interface
: The visual elements of a software application that users interact with, such as buttons, menus, forms, and other controls. It is designed to be intuitive, user-friendly, and responsive to user input.

Internet
: It is like an intricate network of highways (data cables) connecting cities (servers) and towns (clients) across the globe. A network of network. It allows users to access and share information, resources, and services across the world and with each other.

IP-Address
: An Internet-Protocol Address is a **unique numerical label** (e.g., 182.98.18.46) that identifies a device connected to the internet or a local network that uses the Internet Protocol for communication. It is geo-locatable and can be used to identify the location of a device.

JavaScript
: A high-level, interpreted programming language that is used to make web pages interactive and dynamic. It is used to create responsive, interactive elements on web pages, such as pop-ups, animations, form validation, and more. JavaScript is executed on the client-side (browser) and can interact with the Document Object Model (DOM) of a web page to update content, style, and structure.

JSON
: JavaScript Object Notation is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is used to transmit data between a server and a web application as an alternative to XML.

Library
: A collection of pre-written code that provides specific functionality to be used by other code. Libraries are reusable and can save time and effort by allowing developers to use existing code rather than writing it from scratch. All the public methods and signatures forms the API of the library.

MAC-Address
: A Media Access Control Address is a hardware identifier that **uniquely identifies** each device on a network. Primarily, the manufacturer assigns it. They are often found on a device's network interface controller (NIC) card.

Markup-Language
: Systems for annotating a document in a way that is syntactically distinguishable from the text. The annotations typically define how the document should be structured, formatted, or displayed. They are static and do not have any logic or programming capabilities.

Port
: A specific point of communication that allows a computer to send and receive data over a network. Ports are identified by numbers, and each port is associated with a specific protocol or service. For example, port 80 is commonly used for HTTP traffic, and port 5432 is used for PostgreSQL database connections.

&zwnj;
: Can be described as an internal address within a host computer that identifies a program or process

Protocol
: A **set of rules and guidelines** that dictate how participants (whether they are devices, software components, or users) in a system should behave.

Rate-Limit
: A restriction on the number of requests a client (user or application) can make to a server within a specified time frame. Rate limiting is used to prevent abuse, protect against denial-of-service attacks, and ensure fair usage of resources.

Refresh-Token
: An {{< glossary term="Access-Token" >}} is short lived, meaning on expiry user will have to {{< glossary term="authentication" displayTerm="re-authenticate" >}}. Refresh-Token is string of alphanumeric characters (usually random) that can be used to be issued with a new Access Token after the current Access Token expires. It is used to maintain the user's session without requiring the user to re-authenticate while ensuring the Access Token is short-lived and thereby more secure.

Server
: A **computer program** or a **device** that provides functionality to other devices or programs, known as {{< glossary term="clients" >}}, by responding to their requests. These devices are typically dedicated to serving the needs of other programs or users, therefore being powerful machines which lack output devices like a monitor.

Server-Process
: A program that runs on a computer an a specific {{< glossary term="port" >}} and listens for incoming requests from {{< glossary term="clients" >}} over a network. It processes these requests and sends back responses to the clients. E.g., a web server, database server, etc. These processes usually run on a {{< glossary term="server" >}} machine.

Server-Side
: Things that happen on the {{< glossary term="server" >}}, e.g., processing of requests, interacting with databases, etc.

Socket
: Port + IP Address. Also known as a communication endpoint.

&zwnj;
: A socket is one endpoint of a two-way communication link between two programs running on the network.

Software-Component
: A {{< glossary term="server-process" >}} (e.g. a web server, database server, etc.), a client application (e.g. a website/browser, mobile app, desktop app, etc.), or a library/module that provides specific functionality to a software system.

Style-Sheet-Language
: A language used to describe the presentation or formatting of a document written in a {{< glossary term="markup-language" displayTerm="markup language" >}} like {{< glossary term="HTML" >}}, typically defining how elements should be displayed or rendered across different media.

Transfer
: Exchange of data between the client and server.

UI
: User Interface, the visual elements of a software application that users interact with, such as buttons, menus, forms, and other controls. It is designed to be intuitive, user-friendly, and responsive to user input.

UX
: User Experience, the overall experience of a person using a product such as a website or computer application, especially in terms of how easy or pleasing it is to use.

URL
: A Uniform Resource Locator is a **web address** that specifies the location of a resource on the internet. It consists of a protocol (e.g., HTTP, HTTPS), a domain name (e.g., example.com), a path to the resource (e.g., /blog) and optional query parameters (e.g., ?id=123) to makeup a complete URL, e.g., https://example.com/blog?id=123.

Web-Server
: A **server** that hosts website component files (such as HTML, CSS, JavaScript files, images, etc.) and an HTTP server that processes incoming requests from clients (web browsers) and responds with the requested resources. Web servers are accessed through the domain names of the websites they host.

XML
: Extensible Markup Language is a markup language that is commonly used to carry and describe data. It is a self-descriptive language that allows you to define your own tags and attributes.

---
title: "Glossary"
date: 2024-10-12T20:41:18+05:30
draft: false
glossary:
  Access-Token: A string of alphanumeric characters (usually random) that is **stand-In for the user's credentials** that allows a user to access their applications/services, or allows other third-party applications to access the user's application/service data without exposing the user's credentials. Access tokens are short-lived and can be revoked by the user at any time, and needs to be refreshed periodically using {{< glossary term="Refresh-Token" displayTerm="Refresh-Token" >}}. If token is compromised, the user's credentials are not exposed, making damage minimal.

  Algorithm: A **set of well-defined instructions** that are executed/performed in an order to perform a task or solve a problem (e.g., a recipe for baking a cake). They are the building blocks of Computer-Science which are used to perform calculations, data processing, and automated reasoning tasks.

  API: Application Programming Interface is an {{< glossary term="interface" displayTerm="interface" >}} i.e. a shared-boundary/layer between two {{< glossary term="software-component" displayTerm="software components" >}} that provides a means for them to communicate or interact with each other for exchanging information. It **defines how access or interaction should occur** between the two.

  Array-Diag: ㅤ{{< figure src="https://www.tutorialspoint.com/data_structures_algorithms/images/arrays1.jpg" alt="Array Data Structure" caption="Array Data Structure" >}}

  Authentication: (Authentication) The process of **verifying the identity** of a user or system to ensure that they are who they claim to be. It is commonly used to grant access to resources or services based on the user's identity {{< hr >}} (Authenticate) To log in to a system/service by providing valid credentials (e.g., username and password, biometric data, etc.).

  Authorization: The process of **determining what a user or system is allowed to do** or access. It involves granting or denying access/permissions based on the user's identity, role, or other attributes.

  backend: The {{< glossary term="server-side" displayTerm="server-side" >}}/behind-scenes of an application that is responsible for storing and handling data, interacting with {{< glossary term="database" displayTerm="databases" >}}, performing user operations, computations, etc. It processes {{< glossary term="request" displayTerm="requests" >}} and sends back {{< glossary term="response" displayTerm="responses" >}} to the {{< glossary term="client" >}}/{{< glossary term="frontend" >}}.

  Binary-Code: Unlike humans who use and understand variety of symbols/values (0-9, A-Z, special characters), a computer is a **base-2 system** that uses and understands only {{< glossary term="bit" displayTerm="bits" >}}. Computers use binary code (**a series of bits**) to represent all data, instructions, and information (whether it's text, images, sound, etc. ). It is the most machine readable and least human readable form of data.

  Bit: The smallest unit of data that represents a binary value, either 0 or 1. Basis for {{< glossary term="binary-code" >}} and all computer operations. A group of 8 bits is called a byte which is the **standard unit** of data storage in computers.

  cascading: A process in which an operation or set of operations is repeated multiple times, with the **output of each operation becoming the input** for the next operation. {{< hr >}} Applying a **priority order** when multiple rules target the same element. The "cascade" ensures that the most specific rule (or the last one defined) wins, allowing different styles to be combined smoothly. In {{< glossary term="CSS" displayTerm="CSS" >}}, inline > internal > external and id > class > element.

  cipher: An {{< glossary term="algorithm" >}} **used for {{< glossary term="encryption" >}} and {{< glossary term="decryption" >}}** of data. It takes plain-text data and converts it into a secret scrambled code ({{< glossary term="ciphertext" >}}), or vice-versa. It optionally uses an {{< glossary term="encryption-key" >}}/{{< glossary term="decryption-key" >}} to perform the operation. Examples include AES, DES, RSA, etc.

  ciphertext: The **secret scrambled code** produced by a {{< glossary term="cipher" >}}/{{< glossary term="encryption" >}}-{{< glossary term="algorithm" >}} when plain-text data is {{< glossary term="encrypted" >}}. The cipher-text is unreadable without the correct {{< glossary term="decryption-key" >}}. Purpose is to keep information confidential and secure.

  client: A **device** or **software** that accesses services or resources provided by a {{< glossary term="server" displayTerm="server" >}} by making {{< glossary term="request" displayTerm="requests" >}}. Clients can be website/browsers, mobile applications, desktop applications, etc.

  Client-Side: \u200B **Things that happen on the {{< glossary term="client" displayTerm="client" >}}**, e.g., rendering of the {{< glossary term="user-interface" displayTerm="user-interface" >}}, handling user interactions and events, sending {{< glossary term="request" displayTerm="requests" >}} to the {{< glossary term="server" >}}, computing, etc.

  Compile: Computers cannot understand or execute {{< glossary term="source-code" >}}. Compilation is the process of **translating the complete source code into {{< glossary term="machine-code" >}}** before the program is executed, opposed to {{< glossary term="interpret" displayTerm="interpreting" >}}. A {{< glossary term="compile" displayTerm="compiler" >}} is required only once, and the compiled code can be executed multiple times. Compiled languages are 'faster' because the whole code is already translated.

  Compiler: A **program** that {{< glossary term="compile" displayTerm="compiles" >}}. It also checks for errors in the code, and optimizes the code for better performance. The output of the compilation process is an executable file that can then be run by the computer.

  css: \u200B {{< glossary term="Cascading" >}} {{< glossary term="Style-Sheet-Language" displayTerm="Style Sheets" >}} is used for **describing and styling the presentation** of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. E.g., changing the color, font, size, spacing, positioning, and layout of elements on a web page.

  database: A **structured collection of related data** that is stored and organized in a way that allows for efficient retrieval, updating, and management. Databases are used to store information for applications, websites, and other systems.

  data-structure: A way of **organizing and storing related data** so that it can be accessed and modified efficiently. A way of structurally uniting/grouping data by defining the relationship between the data. For example {{< diag name="array" text="arrays" >}}, {{< diag name="linkedlist" text="LinkedLists" >}}, {{< diag name="tree" text="Trees" >}}, {{< diag name="hashtable" text="HashTables" >}} etc.

  decode: The process of **converting {{< glossary term="encode" displayTerm="encoded" >}} data back to its original form**. Decoding is the reverse of encoding and is used to retrieve the original data from its encoded form.

  decryption: The process of **converting secret scrambled code ({{< glossary term="ciphertext" >}}) back into plain-text data**. A {{< glossary term="cipher" >}}/{{< glossary term="algorithm" >}} is used to decrypt the data (optionally with a {{< glossary term="decryption-key" >}}) to reveal the original message.

  decryption-key: A secret value (random string of characters) that is **used to {{< glossary term="decrypt" >}}** secret scrambled code ({{< glossary term="ciphertext" >}}) back into plain-text data. The key is used by a {{< glossary term="cipher" >}}/{{< glossary term="algorithm" >}} to perform the decryption operation.

  discord: A platform where you can chat, speak, stream with your friends or communities. A Discord server is like a big group space. Servers contain channels which are like chat rooms for a specific topic. You can also join voice channels to talk/stream. Discord bots are user interactable community-made programs that can help you manage your server, play music, moderate, play games, etc that you can add to your server.

  dns: The Domain Name System **translates/resolves website domain names into {{< glossary term="IP-Address" displayTerm="IP Addresses" >}}**, which are used by browsers as the locations to {{< glossary term="request" displayTerm="request" >}} websites/{{< glossary term="webpage-components" >}} from the {{< glossary term="web-server" displayTerm="web-servers" >}} bearing those IP Addresses that hosts the files. It acts as the internet's phone book, eliminating the need for users to remember IP addresses.

  Encode: The process of **converting data from one form to another**, usually to ensure that it is **compatible** with a specific format/system, or to **efficiently** and properly transmit/store the data. Examples include URL encoding, base64 encoding, etc. Unlike {{< glossary term="encryption" >}}, encoding does not provide security or confidentiality.

  Encryption: The process of **converting plain-text data into a secret code ({{< glossary term="ciphertext" >}})** to prevent unwanted people from reading it. A {{< glossary term="cipher" >}}/{{< glossary term="algorithm" >}} is used to encrypt (optionally with an {{< glossary term="encryption-key" >}}) the data. The scrambled message can only be understood by someone who has the correct decryption key.

  Encryption-Key: A secret value (random string of characters) that is **used to {{< glossary term="encryption" displayTerm="encrypt" >}} plain-text data**. The key is used by an encryption-{{< glossary term="algorithm" >}}/{{< glossary term="cipher" >}} to convert the plain-text data into a secret scrambled code ({{< glossary term="ciphertext" >}}).

  Framework: A collection of tools and {{< glossary term="library" displayTerm="libraries" >}} that help developers build applications **more efficiently** by providing pre-written code for common/boiler-plate tasks. Frameworks provide a **structure** for developing applications and **enforce** certain patterns and practices to **ensure** consistency and maintainability.

  frontend: The **{{< glossary term="client-side" >}}/front-scenes** of a application that is responsible for rendering of the {{< glossary term="user-interface" displayTerm="user-interface" >}}, handling user interactions and events, sending {{< glossary term="request" displayTerm="requests" >}} to the {{< glossary term="server" >}}, computing.

  HashTable-Diag: ㅤ{{< figure src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*l9eCykFTYwvLZgy62id5Ag.png" alt="Hash Table Data Structure" caption="Hash Table Data Structure" >}}

  High-Level: Writing code that is **easy to read and write** for humans. It is **abstracted** from the details of the computer's hardware and is closer to human language than {{< glossary term="machine-language" >}}. High-level languages are more **expressive** and **less complex** than {{< glossary term="low-level" >}} languages. However, they are less efficient and slower to execute than low-level languages and more work is required to convert them to machine code.

  HTML: \u200B {{< glossary term="HyperText" >}} markup language is the standard {{< glossary term="Markup-Language" >}} **for creating web pages and web applications**. It **describes the structure and semantic meaning** of web content using a system of tags and attributes. HTML elements are the building blocks of a website, e.g.   headings (<h1-6/>), paragraphs (<p/>), images (<img>), links (<a/>), etc which can be nested inside each other. The browser reads the HTML file and renders the content on the screen.

  HTTP: \u200B {{< glossary term="HyperText" >}} {{< glossary term="Transfer" >}} Protocol is the {{< glossary term="Protocol" >}} that {{< glossary term="client" displayTerm="clients" >}} (browsers) and {{< glossary term="server" displayTerm="servers" >}} ({{< glossary term="web-server" displayTerm="Web-Servers" >}}) use to communicate {{< glossary term="webpage-components" displayTerm="website components" >}} with each other over the {{< glossary term="internet" >}}.

  HTTPS: \u200B {{< glossary term="HyperText" >}} {{< glossary term="Transfer" >}} {{< glossary term="Protocol" >}} Secure is the **secure version of {{< glossary term="HTTP" >}}**. It {{< glossary term="encryption" displayTerm="encrypts" >}} the data exchanged between the {{< glossary term="client" >}} and {{< glossary term="server" >}}, ensuring that it cannot be intercepted, read and understood by unauthorized parties.

  HyperText: A text that contains links to other texts. When you click on a link, you are taken to another text. In the context of the {{< glossary term="web" >}}, it refers to web pages that contain links to other web pages.

  Idempotent: An operation that produces the **same result no matter how many times it is executed**. For example, a GET request is idempotent because it retrieves the same resource every time it is executed.

  Interface: A shared boundary/layer between two entities (e.g., {{< glossary term="software-component" displayTerm="software components" >}}, devices, systems, etc.) that provides a means for them to communicate or interact with each other for exchanging information. It **defines how access or interaction should occur** between the entities.

  Internet: It is like an intricate network of highways (data cables) connecting cities ({{< glossary term="server" displayTerm="servers" >}}) and towns ({{< glossary term="client" displayTerm="clients" >}}) across the globe. **A network of network**. It allows users to access and share information, resources, and services across the world and with each other.

  Interpret: Computers cannot understand or execute {{< glossary term="source-code" >}}. Interpretation is the process of translating a line of source-code into {{< glossary term="machine-code" >}} AND then executing it BEFORE moving to the next line as opposed to {{< glossary term="compile" displayTerm="compiling">}}. The system will ALWAYS require an {{< glossary term="interpreter" >}} software to execute the program. Interpreted languages are 'slower' because translation has to be done during {{< glossary term="run-time" >}} and every time the program is executed.

  Interpreter: A program that {{< glossary term="interpret" displayTerm="interprets" >}}.

  IP-Address: An Internet-Protocol Address is a **unique numerical label** (e.g., 182.98.18.46) that identifies a device connected to the {{< glossary term="internet" >}}, or a local network that uses the Internet Protocol for communication. Being geo-locatable, it's like a postal address for devices on the internet which helps in transmitting data efficiently between devices.

  JavaScript: A {{< glossary term="high-level" >}}, {{< glossary term="interpret" displayTerm="interpreted programming language" >}} that is used to make web pages interactive and dynamic. It is used to create responsive, interactive elements on web pages, such as pop-ups, animations, form validation, and more.   JavaScript is executed on the {{< glossary term="client-side" >}} (browser) and can interact with the {{< glossary term="DOM" >}} of a web page to update content, style, and structure.

  JSON: JavaScript Object Notation is a **lightweight data-interchange format** that is easy for humans to read and write, and easy for machines to {{< glossary term="parse" >}} and generate. It is used to transmit data between {{< glossary term="software-component" displayTerm="software components" >}} as an alternative to {{< glossary term="XML" >}}. While it is derived from {{< glossary term="JavaScript" >}}, it is language-independent.

  Library: A collection of pre-written code that provides specific functionality to be used by other code. Libraries are reusable and can save time and effort by allowing developers to use existing code rather than writing it from scratch. All the public methods and signatures forms the API of the library.

  LinkedList-Diag: ㅤ{{< figure src="https://media.geeksforgeeks.org/wp-content/uploads/20220829110944/LLdrawio.png" alt="Linked List Data Structure" caption="Linked List Data Structure" >}}

  Low-Level: Writing code that is **closer to the computer's hardware**, it is like directly speaking to the computer in its own language making it more efficient and fast but less human readable. Involves giving very specific instructions about how the computer's memory and processor should work. It can be more complex and harder to write than {{< glossary term="high-level" >}} languages. Lesser work required to translate the code into {{< glossary term="machine-code" >}}.

  Machine-Code: Most fundamental language a computer can understand and execute directly without needing some 'translation'. Operates at hardware level i.e. consists of instructions (made up of {{< glossary term="binary-code"  displayTerm="binary code">}}) that corresponds to a specific operation the CPU can perform; thereby being specific to a computer's architecture. Also called machine-language/machine-code. It is the {{< glossary term="low-level" displayTerm="lowest-level" >}} programming language.

  MAC-Address: A Media Access Control Address is a hardware identifier that **uniquely identifies** each device on a network.   Primarily, the manufacturer assigns it. They are often found on a device's network interface controller (NIC) card.

  Markup-Language: Systems for annotating a document in a way that is syntactically distinguishable from the text. The annotations typically define how the document should be structured, formatted, or displayed. They are static and do not have any logic or programming capabilities.

  Parse: The process of **analyzing a string of symbols** to determine its grammatical structure with respect to a given formal grammar. It is used in programming to convert data from one format to another, such as from a string to a {{< glossary term="data-structure" displayTerm="data structure" >}}. For example, parsing {{< glossary term="JSON" >}} string data into a {{< glossary term="JavaScript" >}} {{< glossary term="object" >}}, or parsing an {{< glossary term="HTML" >}} document into a {{< glossary term="DOM" >}} tree, etc.

  Port: A specific point of communication that allows a computer to send and receive data over a network. Ports are identified by numbers, and each port is associated with a specific protocol or service. For example, port 80 is commonly used for HTTP traffic, and port 5432 is used for PostgreSQL database connections {{< hr >}} Can be described as an internal address within a host computer that identifies a program or process

  protocol: A set of rules and guidelines that dictate how participants (whether they are devices, software components, or users) in a system should behave.

  Rate-Limit: A restriction on the number of requests a client (user or application) can make to a server within a specified time frame. Rate limiting is used to prevent abuse, protect against denial-of-service attacks, and ensure fair usage of resources.

  Refresh-Token: An {{< glossary term="Access-Token" displayTerm="Access-Token" >}} is short lived, meaning on expiry user will have to {{< glossary term="authentication" displayTerm="re-authenticate" >}}. Refresh-Token is string of alphanumeric characters (usually random) that can be used to be issued with a new Access Token after the current Access Token expires. It is used to maintain the user's session without requiring the user to re-authenticate while ensuring the Access Token is short-lived and thereby more secure.

  Response: When a {{< glossary "server" >}} receives a {{< glossary term="request" >}} from a {{< glossary term="client" >}}, it figures out what the client wants, processes the request and answers back to the client. This answer is called a response. The response typically contains the requested data or information, along with a status code indicating the success or failure of the request.

  Request: Often, it is the {{< glossary term="backend" >}} that stores and handles data, performs operations, etc. The {{< glossary term="client" >}}/{{< glossary "frontend" >}} when it needs data or wants to perform an operation, it must ask the backend {{< glossary term="server" >}} to do so. This asking is called a request, often over the network. The server processes the request and sends back a {{< glossary term="response" >}}.

  RunTime: The period when a program is running i.e. it is in execution/operation and is performing its tasks. The runtime of a program starts when it is executed and ends when it is terminated.

  server: A computer program or a device that provides functionality to other devices or programs, known as {{< glossary term="client" displayTerm="client" >}}, by responding to their requests. These devices are typically dedicated to serving the needs of other programs or users, therefore being powerful machines which lack output devices like a monitor.

  Server-Process: A program that runs on a computer an a specific {{< glossary term="port" displayTerm="port" >}} and listens for incoming requests from {{< glossary term="clients" displayTerm="clients" >}} over a network. It processes these requests and sends back responses to the clients. E.g., a web server, database server, etc. These processes usually run on a {{< glossary term="server" displayTerm="server" >}} machine.

  Server-Side: Things that happen on the {{< glossary term="server" displayTerm="server" >}}, e.g., processing of requests, interacting with databases, etc.

  Socket: Port + IP Address. Also known as a communication endpoint. {{< hr >}} A socket is one endpoint of a two-way communication link between two programs running on the network.

  Software-Component: A {{< glossary term="server-process" displayTerm="server-process" >}} (e.g. a web server, database server, etc.), a client application (e.g. a website/browser, mobile app, desktop app, etc.), or a library/module that provides specific functionality to a software system.

  Source-Code: The **raw textual human-readable code** of a computer program written by a programmer in a programming language. Computers do not understand this version of code, thus it needs to be translated into {{< glossary term="machine-code" >}} before it can be executed. Translation is achieved through the process of {{< glossary term="compile" displayTerm="compilation" >}} or {{< glossary term="interpret" displayTerm="interpretation" >}}.

  Style-Sheet-Language: A style sheet language that used to describe the presentation or formatting of a document written in a {{< glossary term="markup-language" displayTerm="markup language" >}} like {{< glossary term="HTML" displayTerm="HTML" >}}, typically defining how elements should be displayed or rendered across different media.

  Transfer: Exchange of data between the client and server.

  Tree-Diag: ㅤ{{< figure src="https://media.geeksforgeeks.org/wp-content/uploads/20240415185343/tree-data-structure-banners-(2).webp" alt="Tree Data Structure" width="500px" height="150px" >}}

  UI: User Interface, the visual elements of a software application that users interact with, such as buttons, menus, forms, and other controls. It is designed to be intuitive, user-friendly, and responsive to user input.

  User-Interface: The visual elements of a software application that users interact with, such as buttons, menus, forms, and other controls. It is designed to be intuitive, user-friendly, and responsive to user input.

  UX: User Experience, the overall experience of a person using a product such as a website or computer application, especially in terms of how easy or pleasing it is to use.

  URL: A Uniform Resource Locator is a **web address** that specifies the location of a resource on the internet. It consists   of a protocol (e.g., HTTP, HTTPS), a domain name (e.g., example.com), a path to the resource (e.g., /blog) and optional   query parameters (e.g., ?id=123) to makeup a complete URL, e.g., https://example.com/blog?id=123.

  webpage-components: HTML, CSS files, JavaScript files, images, videos, etc. that make up a webpage. Related webpages make up a website, sharing a common domain name.

  web-server: A server that hosts website component files (such as HTML, CSS, JavaScript files, images, etc.) and an HTTP server that processes incoming requests from clients (web browsers) and responds with the requested resources. Web servers are accessed through the domain names of the websites they host.

  XML: Extensible Markup Language is a markup language that is commonly used to carry and describe data. It is a self-descriptive language that allows you to define your own tags and attributes.
---

Access Token
: A string of alphanumeric characters (usually random) that is **stand-In for the user's credentials** that allows a user to access their applications/services, or allows other third-party applications to access the user's application/service data without exposing the user's credentials. Access tokens are short-lived and can be revoked by the user at any time, and needs to be refreshed periodically using {{< glossary term="Refresh-Token" >}}. If token is compromised, the user's credentials are not exposed, making damage minimal.

Algorithm
: A **set of well-defined instructions** that are executed/performed in an order to perform a task or solve a problem (e.g., a recipe for baking a cake). They are the building blocks of Computer-Science which are used to perform calculations, data processing, and automated reasoning tasks.

API
: Application Programming Interface is an {{< glossary term="interface" >}} i.e. a shared-boundary/layer between two {{< glossary term="software-component" displayTerm="software components">}} that provides a means for them to communicate or interact with each other for exchanging information. It **defines how access or interaction should occur** between the two.

Authentication
: The process of **verifying the identity** of a user or system to ensure that they are who they claim to be. It is commonly used to grant access to resources or services based on the user's identity.

&zwnj;
: (Authenticate) To log in to a system/service by providing valid credentials (e.g., username and password, biometric data, etc.).

Authorization
: The process of **determining what a user or system is allowed to do** or access. It involves granting or denying access/permissions based on the user's identity, role, or other attributes.

Backend
: The **{{< glossary term="server-side" >}}**/**behind-scenes** of an application that is responsible for storing and handling data, interacting with {{< glossary term="database" displayTerm="databases" >}}, performing user operations, computations, etc. It processes {{< glossary term="request" displayTerm="requests" >}} and sends back {{< glossary term="response" displayTerm="responses" >}} to the {{< glossary term="client" >}}/{{< glossary term="frontend" >}}.

Binary-Code
: Unlike humans who use and understand variety of symbols/values (0-9, A-Z, special characters), a computer is a **base-2 system** that uses and understands only {{< glossary term="bit" displayTerm="bits" >}}. Computers use binary code (**a series of bits**) to represent all data, instructions, and information (whether it's text, images, sound, etc. ). It is the most machine readable and least human readable form of data.

Bit
: The smallest unit of data that represents a binary value, either 0 or 1. Basis for {{< glossary term="binary-code" >}} and all computer operations. A group of 8 bits is called a byte which is the **standard unit** of data storage in computers.

Cascading
: A process in which an operation or set of operations is repeated multiple times, with the **output of each operation becoming the input** for the next operation.

&zwnj;
: Applying a **priority order** when multiple rules target the same element. The "cascade" ensures that the most specific rule (or the last one defined) wins, allowing different styles to be combined smoothly. In {{< glossary term="CSS" >}}, inline > internal > external and id > class > element.

Cipher
: An {{< glossary term="algorithm" >}} **used for {{< glossary term="encryption" >}} and {{< glossary term="decryption" >}}** of data. It takes plain-text data and converts it into a secret scrambled code ({{< glossary term="ciphertext" >}}), or vice-versa. It optionally uses an {{< glossary term="encryption-key" >}}/{{< glossary term="decryption-key" >}} to perform the operation. Examples include AES, DES, RSA, etc.

CipherText
: The **secret scrambled code** produced by a {{< glossary term="cipher" >}}/{{< glossary term="encryption" >}}-{{< glossary term="algorithm" >}} when plain-text data is {{< glossary term="encrypted" >}}. The cipher-text is unreadable without the correct {{< glossary term="decryption-key" >}}. Purpose is to keep information confidential and secure.

Client
: A **device** or **software** that accesses services or resources provided by a {{< glossary term="server" displayTerm="server" >}} by making {{< glossary term="request" displayTerm="requests" >}}. Clients can be website/browsers, mobile applications, desktop applications, etc.

Client-Side
: **Things that happen on the {{< glossary term="client" displayTerm="client" >}}**, e.g., rendering of the {{< glossary term="user-interface" displayTerm="user-interface" >}}, handling user interactions and events, sending {{< glossary term="request" displayTerm="requests" >}} to the {{< glossary term="server" >}}, computing, etc.

Compile
: Computers cannot understand or execute {{< glossary term="source-code" >}}. Compilation is the process of **translating the complete source code into {{< glossary term="machine-code" >}}** before the program is executed, opposed to {{< glossary term="interpret" displayTerm="interpreting" >}}. A {{< glossary term="compile" displayTerm="compiler" >}} is required only once, and the compiled code can be executed multiple times. Compiled languages are 'faster' because the whole code is already translated.

Compiler
: A **program** that {{< glossary term="compile" displayTerm="compiles" >}}. It also checks for errors in the code, and optimizes the code for better performance. The output of the compilation process is an executable file that can then be run by the computer.

CSS
: {{< glossary term="Cascading" >}} {{< glossary term="Style-Sheet-Language" displayTerm="Style Sheets" >}} is used for **describing and styling the presentation** of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. E.g., changing the color, font, size, spacing, positioning, and layout of elements on a web page.

Database
:  A **structured collection of related data** that is stored and organized in a way that allows for efficient retrieval, updating, and management. Databases are used to store information for applications, websites, and other systems.

Data-Structure
: A way of **organizing and storing related data** so that it can be accessed and modified efficiently. A way of structurally uniting/grouping data by defining the relationship between the data. For example {{< diag name="array" text="arrays" >}}, {{< diag name="linkedlist" text="LinkedLists" >}}, {{< diag name="tree" text="Trees" >}}, {{< diag name="hashtable" text="HashTables" >}} etc.

Decode
: The process of **converting {{< glossary term="encode" displayTerm="encoded" >}} data back to its original form**. Decoding is the reverse of encoding and is used to retrieve the original data from its encoded form.

Decryption
: The process of **converting secret scrambled code ({{< glossary term="ciphertext" >}}) back into plain-text data**. A {{< glossary term="cipher" >}}/{{< glossary term="algorithm" >}} is used to decrypt the data (optionally with a {{< glossary term="decryption-key" >}}) to reveal the original message.

Decryption-Key
: A secret value (random string of characters) that is **used to {{< glossary term="decrypt" >}}** secret scrambled code ({{< glossary term="ciphertext" >}}) back into plain-text data. The key is used by a {{< glossary term="cipher" >}}/{{< glossary term="algorithm" >}} to perform the decryption operation.

Discord
: A platform where you can chat, speak, stream with your friends or communities. A Discord server is like a big group space. Servers contain channels which are like chat rooms for a specific topic. You can also join voice channels to talk/stream. Discord bots are user interactable community-made programs that can help you manage your server, play music, moderate, play games, etc that you can add to your server.

DNS
: The Domain Name System **translates/resolves website domain names into {{< glossary term="IP-Address" displayTerm="IP Addresses" >}}**, which are used by browsers as the locations to {{< glossary term="request" displayTerm="request" >}} websites/{{< glossary term="webpage-components" >}} from the {{< glossary term="web-server" displayTerm="web-servers" >}} bearing those IP Addresses that hosts the files. It acts as the internet's phone book, eliminating the need for users to remember IP addresses.

Encode
: The process of **converting data from one form to another**, usually to ensure that it is **compatible** with a specific format/system, or to **efficiently** and properly transmit/store the data. Examples include URL encoding, base64 encoding, etc. Unlike {{< glossary term="encryption" >}}, encoding does not provide security or confidentiality.

Encryption
: The process of **converting plain-text data into a secret code ({{< glossary term="ciphertext" >}})** to prevent unwanted people from reading it. A {{< glossary term="cipher" >}}/{{< glossary term="algorithm" >}} is used to encrypt (optionally with an {{< glossary term="encryption-key" >}}) the data. The scrambled message can only be understood by someone who has the correct decryption key.

Encryption-Key
: A secret value (random string of characters) that is **used to {{< glossary term="encryption" displayTerm="encrypt" >}} plain-text data**. The key is used by an encryption-{{< glossary term="algorithm" >}}/{{< glossary term="cipher" >}} to convert the plain-text data into a secret scrambled code ({{< glossary term="ciphertext" >}}).

Framework
: A collection of tools and {{< glossary term="library" displayTerm="libraries" >}} that help developers build applications **more efficiently** by providing pre-written code for common/boiler-plate tasks. Frameworks provide a **structure** for developing applications and **enforce** certain patterns and practices to **ensure** consistency and maintainability.

Frontend
: The **{{< glossary term="client-side" >}}/front-scenes** of a application that is responsible for rendering of the {{< glossary term="user-interface" displayTerm="user-interface" >}}, handling user interactions and events, sending {{< glossary term="request" displayTerm="requests" >}} to the {{< glossary term="server" >}}, computing.

High-Level
: Writing code that is **easy to read and write** for humans. It is **abstracted** from the details of the computer's hardware and is closer to human language than {{< glossary term="machine-language" >}}. High-level languages are more **expressive** and **less complex** than {{< glossary term="low-level" >}} languages. However, they are less efficient and slower to execute than low-level languages and more work is required to convert them to machine code.

HTML
: {{< glossary term="HyperText" >}} markup language is the standard {{< glossary term="Markup-Language" >}} **for creating web pages and web applications**. It **describes the structure and semantic meaning** of web content using a system of tags and attributes. HTML elements are the building blocks of a website, e.g.   headings (<h1-6/>), paragraphs (<p/>), images (<img>), links (<a/>), etc which can be nested inside each other. The browser reads the HTML file and renders the content on the screen.

HTTP
: {{< glossary term="HyperText" >}} {{< glossary term="Transfer" >}} Protocol is the {{< glossary term="Protocol" >}} that {{< glossary term="client" displayTerm="clients" >}} (browsers) and {{< glossary term="server" displayTerm="servers" >}} ({{< glossary term="web-server" displayTerm="Web-Servers" >}}) use to communicate {{< glossary term="webpage-components" displayTerm="website components" >}} with each other over the {{< glossary term="internet" >}}.

HTTPS
: {{< glossary term="HyperText" >}} {{< glossary term="Transfer" >}} {{< glossary term="Protocol" >}} Secure is the **secure version of {{< glossary term="HTTP" >}}**. It {{< glossary term="encryption" displayTerm="encrypts" >}} the data exchanged between the {{< glossary term="client" >}} and {{< glossary term="server" >}}, ensuring that it cannot be intercepted, read and understood by unauthorized parties.

HyperText
: A text that contains links to other texts. When you click on a link, you are taken to another text. In the context of the {{< glossary term="web" >}}, it refers to web pages that contain links to other web pages.

Idempotent
: An operation that produces the **same result no matter how many times it is executed**. For example, a GET request is idempotent because it retrieves the same resource every time it is executed.

Interface
: A shared boundary/layer between two entities (e.g., {{< glossary term="software-component" displayTerm="software components">}}, devices, systems, etc.) that provides a means for them to communicate or interact with each other for exchanging information. It **defines how access or interaction should** occur between the entities.

Internet
: It is like an intricate network of highways (data cables) connecting cities ({{< glossary term="server" displayTerm="servers" >}}) and towns ({{< glossary term="client" displayTerm="clients" >}}) across the globe. **A network of network**. It allows users to access and share information, resources, and services across the world and with each other.

Interpret
: Computers cannot understand or execute {{< glossary term="source-code" >}}. Interpretation is the process of translating a line of source-code into {{< glossary term="machine-code" >}} AND then executing it BEFORE moving to the next line as opposed to {{< glossary term="compile" displayTerm="compiling">}}. The system will ALWAYS require an {{< glossary term="interpreter" >}} software to execute the program. Interpreted languages are 'slower' because translation has to be done during {{< glossary term="run-time" >}} and every time the program is executed.

Interpreter
: A program that {{< glossary term="interpret" displayTerm="interprets" >}}.

IP-Address
: An Internet-Protocol Address is a **unique numerical label** (e.g., 182.98.18.46) that identifies a device connected to the {{< glossary term="internet" >}}, or a local network that uses the Internet Protocol for communication. Being geo-locatable, it's like a postal address for devices on the internet which helps in transmitting data efficiently between devices.

JavaScript
: A {{< glossary term="high-level" >}}, {{< glossary term="interpret" displayTerm="interpreted programming language" >}} that is used to make web pages interactive and dynamic. It is used to create responsive, interactive elements on web pages, such as pop-ups, animations, form validation, and more.   JavaScript is executed on the {{< glossary term="client-side" >}} (browser) and can interact with the {{< glossary term="DOM" >}} of a web page to update content, style, and structure.

JSON
: JavaScript Object Notation is a **lightweight data-interchange format** that is easy for humans to read and write, and easy for machines to {{< glossary term="parse" >}} and generate. It is used to transmit data between {{< glossary term="software-component" displayTerm="software components" >}} as an alternative to {{< glossary term="XML" >}}. While it is derived from {{< glossary term="JavaScript" >}}, it is language-independent.

Library
: A collection of pre-written code that provides specific functionality to be used by other code. Libraries are reusable and can save time and effort by allowing developers to use existing code rather than writing it from scratch. All the public methods and signatures forms the API of the library.

Low-Level
: Writing code that is **closer to the computer's hardware**, it is like directly speaking to the computer in its own language making it more efficient and fast but less human readable. Involves giving very specific instructions about how the computer's memory and processor should work. It can be more complex and harder to write than {{< glossary term="high-level" >}} languages. Lesser work required to translate the code into {{< glossary term="machine-code" >}}.

Machine-Code
: Most fundamental language a computer can understand and execute directly without needing some 'translation'. Operates at hardware level i.e. consists of instructions (made up of {{< glossary term="binary-code"  displayTerm="binary code">}}) that corresponds to a specific operation the CPU can perform; thereby being specific to a computer's architecture. Also called machine-language/machine-code. It is the {{< glossary term="low-level" displayTerm="lowest-level" >}} programming language.

MAC-Address
: A Media Access Control Address is a hardware identifier that **uniquely identifies** each device on a network. Primarily, the manufacturer assigns it. They are often found on a device's network interface controller (NIC) card.

Markup-Language
: Systems for annotating a document in a way that is syntactically distinguishable from the text. The annotations typically define how the document should be structured, formatted, or displayed. They are static and do not have any logic or programming capabilities.

Parse
: The process of **analyzing a string of symbols** to determine its grammatical structure with respect to a given formal grammar. It is used in programming to convert data from one format to another, such as from a string to a {{< glossary term="data-structure" displayTerm="data structure" >}}. For example, parsing {{< glossary term="JSON" >}} string data into a {{< glossary term="JavaScript" >}} {{< glossary term="object" >}}, or parsing an {{< glossary term="HTML" >}} document into a {{< glossary term="DOM" >}} tree, etc.

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

Response
:  When a {{< glossary "server" >}} receives a {{< glossary term="request" >}} from a {{< glossary term="client" >}}, it figures out what the client wants, processes the request and answers back to the client. This answer is called a response. The response typically contains the requested data or information, along with a status code indicating the success or failure of the request.

Request
:  Often, it is the {{< glossary term="backend" >}} that stores and handles data, performs operations, etc. The {{< glossary term="client" >}}/{{< glossary "frontend" >}} when it needs data or wants to perform an operation, it must ask the backend {{< glossary term="server" >}} to do so. This asking is called a request, often over the network. The server processes the request and sends back a {{< glossary term="response" >}}.

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

Source-Code
: The **raw textual human-readable code** of a computer program written by a programmer in a programming language. Computers do not understand this version of code, thus it needs to be translated into {{< glossary term="machine-code" >}} before it can be executed. Translation is achieved through the process of {{< glossary term="compile" displayTerm="compilation" >}} or {{< glossary term="interpret" displayTerm="interpretation" >}}.

Style-Sheet-Language
: A language used to describe the presentation or formatting of a document written in a {{< glossary term="markup-language" displayTerm="markup language" >}} like {{< glossary term="HTML" >}}, typically defining how elements should be displayed or rendered across different media.

Transfer
: Exchange of data between the client and server.

UI
: User Interface, the visual elements of a software application that users interact with, such as buttons, menus, forms, and other controls. It is designed to be intuitive, user-friendly, and responsive to user input.

User-Interface
: The visual elements of a software application that users interact with, such as buttons, menus, forms, and other controls. It is designed to be intuitive, user-friendly, and responsive to user input.

UX
: User Experience, the overall experience of a person using a product such as a website or computer application, especially in terms of how easy or pleasing it is to use.

URL
: A Uniform Resource Locator is a **web address** that specifies the location of a resource on the internet. It consists of a protocol (e.g., HTTP, HTTPS), a domain name (e.g., example.com), a path to the resource (e.g., /blog) and optional query parameters (e.g., ?id=123) to makeup a complete URL, e.g., https://example.com/blog?id=123.

WebPage-Components
: HTML, CSS files, JavaScript files, images, videos, etc. that make up a webpage. Related webpages make up a website, sharing a common domain name.

Web-Server
: A **server** that hosts website component files (such as HTML, CSS, JavaScript files, images, etc.) and an HTTP server that processes incoming requests from clients (web browsers) and responds with the requested resources. Web servers are accessed through the domain names of the websites they host.

XML
: Extensible Markup Language is a markup language that is commonly used to carry and describe data. It is a self-descriptive language that allows you to define your own tags and attributes.

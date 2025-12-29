export const computerNetworksQuestions = [
  {
    question: "What is the primary purpose of the OSI Model?",
    options: [
      "To encrypt data transmission",
      "To standardize network communication functions",
      "To compress network data",
      "To authenticate network users"
    ],
    correctAnswer: 1,
    explanation: "OSI Model = universal language for networks 🌐\n\nIt standardizes how different systems communicate, ensuring devices from different vendors can work together. Like having a common rulebook for international diplomacy."
  },
  {
    question: "Which layer of OSI Model is responsible for routing?",
    options: [
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Physical Layer"
    ],
    correctAnswer: 1,
    explanation: "Network Layer (Layer 3) = GPS for data 🗺️\n\nIt determines the best path for data packets to travel from source to destination. Think of it as the postal service deciding which roads your package should take."
  },
  {
    question: "What is the difference between TCP and UDP?",
    options: [
      "TCP is faster, UDP is reliable",
      "TCP is reliable, UDP is faster",
      "TCP is for wireless, UDP is for wired",
      "TCP is for LAN, UDP is for WAN"
    ],
    correctAnswer: 1,
    explanation: "TCP = Registered mail ✅ (reliable but slower)\nUDP = Regular mail 📬 (fast but may get lost)\n\nTCP guarantees delivery with error checking, while UDP just sends data without confirmation - perfect for video streaming where speed matters more than perfect accuracy."
  },
  {
    question: "What is a MAC address?",
    options: [
      "A unique hardware identifier",
      "An IP address",
      "A DNS name",
      "A port number"
    ],
    correctAnswer: 0,
    explanation: "MAC Address = Social Security Number for devices 🆔\n\nIt's a unique hardware identifier burned into network interfaces. While IP addresses can change (like moving houses), MAC addresses stay the same (like your SSN)."
  },
  {
    question: "Which protocol is used for secure web browsing?",
    options: [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    correctAnswer: 2,
    explanation: "HTTPS = HTTP with a bodyguard 🛡️\n\nIt encrypts data between your browser and the server using SSL/TLS. Like sending a letter in a locked box instead of a transparent envelope."
  },
  {
    question: "What is DNS?",
    options: [
      "Data Network Service",
      "Domain Name System",
      "Digital Network Security",
      "Dynamic Name Server"
    ],
    correctAnswer: 1,
    explanation: "DNS = Phonebook for the internet 📞\n\nIt translates human-readable domain names (google.com) to IP addresses (172.217.16.142). Without DNS, we'd have to remember numbers instead of names!"
  },
  {
    question: "What is a subnet mask?",
    options: [
      "A password for network access",
      "A way to divide IP networks",
      "A type of firewall",
      "An encryption method"
    ],
    correctAnswer: 1,
    explanation: "Subnet mask = ZIP codes for networks 🏠\n\nIt divides large networks into smaller, manageable sub-networks. Like organizing a big city into neighborhoods to make mail delivery more efficient."
  },
  {
    question: "Which device operates at Layer 2 of the OSI Model?",
    options: [
      "Router",
      "Switch",
      "Hub",
      "Firewall"
    ],
    correctAnswer: 1,
    explanation: "Switch = Smart traffic cop at intersections 🚦\n\nIt operates at Data Link Layer (Layer 2) and forwards data only to the intended recipient within the same network. Unlike hubs that broadcast to everyone."
  },
  {
    question: "What is the purpose of ARP?",
    options: [
      "To resolve IP addresses to MAC addresses",
      "To encrypt network traffic",
      "To route packets between networks",
      "To compress data packets"
    ],
    correctAnswer: 0,
    explanation: "ARP = 'Who has this IP address?' 📢\n\nAddress Resolution Protocol maps IP addresses to MAC addresses. Like asking in a room: 'Who is 192.168.1.1?' and the device responds with its MAC address."
  },
  {
    question: "What is a VPN?",
    options: [
      "Very Private Network",
      "Virtual Private Network",
      "Video Protocol Network",
      "Variable Packet Network"
    ],
    correctAnswer: 1,
    explanation: "VPN = Secret tunnel through the internet 🚇\n\nIt creates a secure, encrypted connection over public networks. Like sending your data through a private armored car instead of regular mail."
  },
  {
    question: "Which port is used for HTTPS?",
    options: [
      "80",
      "443",
      "22",
      "25"
    ],
    correctAnswer: 1,
    explanation: "Port 443 = HTTPS door number 🚪\n\nJust like different doors for different rooms in a building. Port 80 for HTTP (regular), Port 443 for HTTPS (secure)."
  },
  {
    question: "What is the difference between a hub and a switch?",
    options: [
      "Hub is faster than switch",
      "Switch is smarter than hub",
      "Hub works with wireless, switch with wired",
      "No difference"
    ],
    correctAnswer: 1,
    explanation: "Hub = Loudspeaker (broadcasts to everyone) 🔊\nSwitch = Direct message (sends to specific person) 📱\n\nA hub blindly repeats all data to all connected devices, while a switch intelligently forwards data only to the intended recipient."
  },
  {
    question: "What is NAT?",
    options: [
      "Network Address Translation",
      "Network Access Table",
      "Network Authentication Tool",
      "Network Administration Terminal"
    ],
    correctAnswer: 0,
    explanation: "NAT = Office receptionist 🏢\n\nIt translates private IP addresses to public ones. Like an office with one public phone number but many internal extensions - the receptionist directs calls to the right person."
  },
  {
    question: "Which protocol is used for email sending?",
    options: [
      "POP3",
      "IMAP",
      "SMTP",
      "FTP"
    ],
    correctAnswer: 2,
    explanation: "SMTP = Postal service for sending mail 📮\n\nSimple Mail Transfer Protocol handles sending emails. Think of it as the post office that picks up your letter and delivers it to the recipient's post office."
  },
  {
    question: "What is a firewall?",
    options: [
      "A device that speeds up network",
      "A security system that controls traffic",
      "A type of router",
      "A network monitoring tool"
    ],
    correctAnswer: 1,
    explanation: "Firewall = Security guard for your network 🛡️\n\nIt monitors and controls incoming/outgoing network traffic based on security rules. Like a bouncer checking IDs at a club entrance."
  },
  {
    question: "What is the purpose of DHCP?",
    options: [
      "To encrypt network connections",
      "To assign IP addresses automatically",
      "To route network traffic",
      "To compress network data"
    ],
    correctAnswer: 1,
    explanation: "DHCP = Automatic address distributor 🏷️\n\nDynamic Host Configuration Protocol automatically assigns IP addresses to devices. Like a parking attendant giving you a spot number when you arrive."
  },
  {
    question: "What is a ping used for?",
    options: [
      "To download files",
      "To test network connectivity",
      "To encrypt data",
      "To compress files"
    ],
    correctAnswer: 1,
    explanation: "Ping = Network echo test 🔊\n\nIt sends a small packet and waits for a reply. Like shouting 'Hello!' in a cave and listening for the echo to see if the path is clear."
  },
  {
    question: "What is the difference between IPv4 and IPv6?",
    options: [
      "IPv4 is faster than IPv6",
      "IPv6 has more addresses than IPv4",
      "IPv4 is wireless, IPv6 is wired",
      "No significant difference"
    ],
    correctAnswer: 1,
    explanation: "IPv4 = Phone numbers with 7 digits 📞\nIPv6 = Phone numbers with 15 digits 📱\n\nIPv6 has way more addresses (340 undecillion vs 4.3 billion) to handle the internet's growth."
  },
  {
    question: "What is a router's primary function?",
    options: [
      "To connect devices within the same network",
      "To connect different networks together",
      "To encrypt network traffic",
      "To assign IP addresses"
    ],
    correctAnswer: 1,
    explanation: "Router = Traffic controller between networks 🚦\n\nIt connects different networks and directs traffic between them. Like an airport control tower directing planes between different cities."
  },
  {
    question: "Which protocol is used for secure file transfer?",
    options: [
      "FTP",
      "HTTP",
      "SFTP",
      "Telnet"
    ],
    correctAnswer: 2,
    explanation: "SFTP = FTP with bodyguards 🛡️\n\nSecure File Transfer Protocol encrypts file transfers. Regular FTP sends files in plain text - like sending postcards, while SFTP uses sealed envelopes."
  },
  {
    question: "What is a gateway?",
    options: [
      "A type of firewall",
      "A network exit point to another network",
      "A DNS server",
      "A DHCP server"
    ],
    correctAnswer: 1,
    explanation: "Gateway = Exit door to the internet 🚪\n\nIt's the point where a local network connects to another network (usually the internet). Like the main entrance/exit of a building."
  },
  {
    question: "What is the purpose of SSL/TLS?",
    options: [
      "To speed up network connections",
      "To provide encryption and authentication",
      "To compress network data",
      "To route network traffic"
    ],
    correctAnswer: 1,
    explanation: "SSL/TLS = Digital encryption and ID verification 🔐\n\nIt encrypts data and verifies server identity. Like sending a locked box with a verified signature to ensure it reaches the right person securely."
  },
  {
    question: "What is bandwidth?",
    options: [
      "The speed of network connection",
      "The amount of data that can be transferred",
      "The number of connected devices",
      "The strength of wireless signal"
    ],
    correctAnswer: 1,
    explanation: "Bandwidth = Width of data pipe 🚰\n\nIt's the maximum amount of data that can be transferred in a given time. Like the difference between a straw and a garden hose - both carry water, but at different rates."
  },
  {
    question: "What is latency?",
    options: [
      "The speed of data transfer",
      "The delay in data transmission",
      "The amount of data lost",
      "The strength of network signal"
    ],
    correctAnswer: 1,
    explanation: "Latency = Reaction time of network ⏱️\n\nIt's the delay between sending and receiving data. Like the time it takes for your voice to travel to someone's ear in a conversation."
  },
  {
    question: "Which device works at the Physical Layer (Layer 1)?",
    options: [
      "Router",
      "Switch",
      "Hub",
      "Firewall"
    ],
    correctAnswer: 2,
    explanation: "Hub = Simple signal repeater 🔌\n\nIt works at Physical Layer, just amplifying and repeating electrical signals. Like a megaphone that makes everything louder but doesn't understand what's being said."
  },
  {
    question: "What is a packet?",
    options: [
      "A type of network cable",
      "A unit of data transmission",
      "A network security protocol",
      "A type of network device"
    ],
    correctAnswer: 1,
    explanation: "Packet = Data envelope with address 📦\n\nIt's a small unit of data with source/destination addresses. Like breaking a book into individual pages, each with the recipient's address."
  }
];

# Realm of Cards - Backend
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://github.com/WeTranscend-labs/FE-Realm-of-Cards/actions) [![Version](https://img.shields.io/badge/Version-1.0.0-orange.svg)](https://github.com/WeTranscend-labs/FE-Realm-of-Cards/releases) [![HappyChain](https://img.shields.io/badge/Blockchain-HappyChain-yellow.svg)](https://happy-testnet-sepolia.hub.caldera.xyz/)

  

Welcome to the powerful engine driving **Realm of Cards - TCG Battle Adventure**! This backend is the unsung hero behind the scenes, managing off-chain game states, optimizing gas fees, and syncing seamlessly with the **HappyChain** blockchain. Whether you’re battling epic monsters or crafting legendary decks, this backend ensures your experience is fast, secure, and downright magical. Let’s dive into the machinery that powers the realm! ⚔️🎴

----------

## Table of Contents

- [What is Realm of Cards - Frontend?](#what-is-realm-of-cards---frontend)
- [How to Get Started](#how-to-get-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies Powering the Realm](#technologies-powering-the-realm)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [License](#license)

  

----------

## What is Realm of Cards - Frontend? 

**Realm of Cards - Backend** is the mighty backbone of a blockchain-powered trading card game. While the frontend dazzles with card combat and deck-building, this backend works tirelessly to: - Store game states **off-chain** for lightning-fast performance ⚡ - Optimize gas fees for future on-chain interactions - Integrate seamlessly with the **HappyChain Testnet** to keep your assets secure 🧙‍♂️ It’s the perfect fusion of strategy and tech, ensuring every duel feels like a masterpiece. Ready to see what keeps the realm running?

----------

## How to Get Started

Ready to fire up the backend and power the game? Follow these steps to get it running on your machine and unleash the magic! 

### Prerequisites
Before you begin, make sure you have:

- **Node.js**: Version 16 or higher—your engine for this epic backend.  
- **npm**: Your trusty tool to summon dependencies.  
- **Prisma**: Database sorcery (install globally if needed: `npm install -g prisma`).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/WeTranscend-labs/BE-Realm-of-Cards.git
   cd BE-Realm-of-Cards
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=<your-database-url>
     ```
4. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```
5.  **Start the development server**:  
	   ```bash
	   npx prisma generate
	```
6. **Access the Backend**:
-  The server will be live at http://localhost:8080.
  
-   Grab a coffee and watch the backend magic unfold! ☕✨

----------

## Technologies Powering the Realm

This backend is forged with a robust stack of modern tools, blending seamless gameplay with blockchain integration. Here’s the tech fueling the adventure:

-   **Next.js**: A React framework for fast, scalable APIs and server-side logic. 
  
-   **Prisma**: Next-gen ORM for effortless database management. 
  
-   **Zod**: Schema validation to keep data safe and sound. 
  
-   **TypeScript**: Static typing for rock-solid, bug-free code. 
  
-   **Tailwind CSS**: Rapid, responsive design utilities (if UI is involved). 
  
-   **ESLint**: Linting to keep the codebase clean and consistent. 
  

Together, these tools store off-chain states, optimize gas fees, and sync with **HappyChain**—making the game a well-oiled machine! 

----------

## Project Structure

```
.
├── prisma/                   # Contains Prisma configuration for database management
│   └── schema.prisma         # Defines the database schema (e.g., game states)
├── src/                      # Main source code directory for the backend
│   ├── app/                  # Holds API routes and server-side logic
│   │   └── api/              # API endpoints handling client requests (e.g., game state, user actions)
│   ├── common/               # Shared utilities, constants, or helper functions (note: possibly intended as "common")
│   ├── exception/            # Custom error classes or handlers for API responses
│   ├── module/               # Separate modules or services (e.g., game logic, blockchain integration)
│   └── middleware.ts         # Middleware functions for request processing (e.g., authentication, logging)
└── .env                      # Environment configuration file for sensitive data (e.g., database URL, API keys)
```
----------

## How to Contribute

Want to join the quest? We’d love your help! Fork the repository, make some legendary changes, and send us a pull request. Whether it’s optimizing APIs, adding features, or squashing bugs, every contribution makes **Realm of Cards** even more epic! 🧙‍♂️⚡

----------

## License 

**Realm of Cards - Backend** is released under the **MIT License**. Feel free to explore, tweak, and share—just check the [LICENSE](./LICENSE) file for details.

# 🔐 Real-Time Secure Chat

A private, self-destructing real-time chat application built with **Next.js**, **Elysia**, and **Upstash**. This project creates ephemeral, 1-on-1 chat rooms that automatically expire after a fixed duration or can be manually destroyed, ensuring strong privacy and security by design.

---

## 🚀 Features

* **1-on-1 Secure Messaging**
  Chat rooms are strictly limited to **two participants**, ensuring private and focused conversations.

* **Self-Destructing Rooms**

  * **Auto-Expiry**: Rooms and all associated messages automatically delete themselves after **10 minutes**.
  * **Manual Destruction**: Either participant can trigger an instant **kill switch** to immediately wipe the room and disconnect all users.

* **Real-Time Updates**
  Instant message delivery and room state updates powered by **Upstash Realtime**.

* **Ephemeral Identity**
  No sign-up or login required. User identities are generated per session and discarded once the room expires.

* **Full-Stack Type Safety**
  End-to-end type safety using **ElysiaJS** with **Eden Treaty**, seamlessly connected to a **Next.js App Router** frontend.

---

## 🛠️ Tech Stack

* **Runtime**: [Bun](https://bun.sh)
* **Frontend Framework**: [Next.js 16](https://nextjs.org/) (App Router)
* **Backend API**: [ElysiaJS](https://elysiajs.com/) (served via Next.js Route Handlers)
* **Database & Realtime**: [Upstash Redis](https://upstash.com/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **State Management**: [TanStack Query](https://tanstack.com/query/latest)

---

## 📋 Prerequisites

Before getting started, ensure the following are installed:

1. **Bun** (runtime & package manager)

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. **Upstash Account**
   A Redis database from Upstash is required for message storage, TTL handling, and real-time updates.

---

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/realtime-chat.git
   cd realtime-chat
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run the development server**

   ```bash
   bun dev
   ```

4. **Open the application**
   Visit: `http://localhost:3000`

---

## 🏗️ Project Structure

```text
src/
├── app/
│   └── api/
│       └── [[...slugs]]/
│           └── route.ts
├── lib/
│   └── client.ts
└── proxy.ts
```

### Key Files

* **`/src/app/api/[[...slugs]]/route.ts`**
  Core backend logic. Initializes the Elysia app that handles room creation, messaging, TTL enforcement, and destruction, all exposed through a Next.js Route Handler.

* **`/src/proxy.ts`**
  Middleware proxy responsible for room access control. It ensures that no more than **two users** can join a room and assigns ephemeral session tokens.

* **`/src/lib/client.ts`**
  Type-safe Eden client that creates a shared contract between the Elysia backend and the React frontend.

---

## 🛡️ Privacy & Security Details

* **Message Retention**
  Messages are stored in Redis with a strict **TTL (Time To Live)**. Once the TTL expires or a room is manually destroyed, all data is permanently removed.

* **Room Capacity Enforcement**
  The `proxy.ts` logic checks the active connection count in Redis before allowing access, strictly enforcing a **2-user limit per room**.

* **No Persistent Identity**
  No accounts, emails, or personal data are stored. Everything is session-based and ephemeral.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve features, performance, or documentation.

---

## 📄 License

This project is open-source and available under the **MIT License**.

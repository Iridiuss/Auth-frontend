# Authentication System with Next.js, Tailwind CSS, and 2FA

This is the frontend for an authentication system built with **Next.js** and **Tailwind CSS**. It integrates multiple OAuth authentication providers, including **Google**, **GitHub**, **Twitter**, **Facebook**, and **LinkedIn**. The system also supports **2FA** (Two-Factor Authentication) during signup, and displays the authenticated user's **name** and **email** on the profile page.

## Features
- **Sign in with multiple providers**: Google, GitHub, Twitter, Facebook, LinkedIn.
- **2FA for signup**: Secure account creation with two-factor authentication.
- **User profile page**: After successful login, displays user information (name, email) on the profile page.


## Technologies Used
- **Next.js**: A React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for building responsive and modern UIs.
- **OAuth 2.0**: Integration with Google, GitHub, Twitter, Facebook, and LinkedIn OAuth APIs.
- **2FA**: Two-factor authentication for enhanced signup security.

## Prerequisites
- **Node.js** (v14.x or higher)
- **npm** (Node Package Manager)
- A backend API that supports OAuth authentication and 2FA. Ensure that the backend is running and accessible.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/authentication-system.git
   cd authentication-system
2. Run the project:
    npm run dev
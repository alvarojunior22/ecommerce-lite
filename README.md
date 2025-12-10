# Ecommerce Lite

This is a lightweight e-commerce application built with Next.js, React, and TypeScript. It serves as a simple, modern storefront for displaying and managing products.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React
- **Data Fetching**: Axios
- **Icons**: Lucide React

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ecommerce-lite.git
   ```
2. Navigate to the project directory:
   ```sh
   cd ecommerce-lite
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

To run the development server, execute the following command:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

Here is an overview of the project's directory structure:

- **/app**: Contains the core application logic, including pages, components, and API routes.
  - **/api**: API routes for the application.
  - **/components**: Reusable React components.
  - **/views**: UI views for different parts of the application.
  - **layout.tsx**: The main layout for the application.
  - **page.tsx**: The main entry point for the application's UI.
- **/data**: Static data, such as JSON files for products.
- **/hooks**: Custom React hooks.
- **/interfaces**: TypeScript type definitions.
- **/public**: Static assets like images and fonts.
- **/utils**: Utility functions.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the project files using ESLint.

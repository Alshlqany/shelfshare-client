# ShelfShare Frontend

This project is a React-based frontend application built with Vite. It serves as the user interface for the ShelfShare platform, providing features like browsing books, managing a shopping cart, and user authentication.

## Features

- **Responsive Navbar**: Includes animated tabs for navigation and a modern mobile menu.
- **API Integration**: Communicates with backend APIs for books, users, orders, and authentication.
- **State Management**: Utilizes Redux for managing application state.
- **Modern UI**: Built with React and styled using CSS.
- **Dynamic Animations**: Leverages Framer Motion for smooth animations.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Alshlqany/shelfshare-client.git
   ```
2. Navigate to the project directory:
   ```bash
   cd shelfshare-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Project Structure

```
.
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
├── scripts/
│   └── addRandomBooks.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── app/
    │   ├── store.js
    │   └── features/
    │       ├── adminApi.js
    │       ├── authApi.js
    │       ├── booksApi.js
    │       ├── cartSlice.js
    │       ├── ordersApi.js
    │       ├── usersApi.js
    │       └── userSlice.js
    ├── assets/
    │   └── logo.png
    ├── components/
    │   └── Navbar/
    │       ├── CartIcon.jsx
    │       ├── index.jsx
    │       ├── MobileNav.jsx
    │       └── StyledNavLink.jsx
    └── pages/
        └── Home.jsx
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

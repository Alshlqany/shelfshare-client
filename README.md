# ShelfShare Frontend

This project is a React-based frontend application built with Vite. It serves as the user interface for the ShelfShare platform, providing features like browsing books, managing a shopping cart, and user authentication.

---

## Features

- **Responsive Navbar**: Includes animated tabs for navigation and a modern mobile menu.
- **API Integration**: Communicates with backend APIs for books, users, orders, and authentication.
- **State Management**: Utilizes Redux Toolkit for managing application state efficiently.
- **Modern UI**: Built with React and styled using CSS for a clean and responsive design.
- **Dynamic Animations**: Leverages Framer Motion for smooth and interactive animations.
- **Rating System**: Allows users to rate books with a dynamic 5-star rating component.
- **Favorites and Cart Management**: Users can add books to their favorites or shopping cart.
- **Pagination**: Provides a user-friendly pagination system for navigating through book collections.

---

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

---

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

### Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

---

### Linting and Formatting

To check for linting issues:

```bash
npm run lint
```

To format code using Prettier:

```bash
npm run format
```

---

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
    │   ├── Navbar/
    │   │   ├── CartIcon.jsx
    │   │   ├── index.jsx
    │   │   ├── MobileNav.jsx
    │   │   └── StyledNavLink.jsx
    │   ├── Shop/
    │   │   ├── BookRate.jsx
    │   │   ├── BookDetails.jsx
    │   │   ├── Stars.jsx
    │   │   └── AddToCart.jsx
    │   ├── Cart/
    │   │   └── Empty.jsx
    │   ├── Store/
    │   │   └── Pagination.jsx
    └── pages/
        ├── Home.jsx
        ├── Shop.jsx
        └── NotFound.jsx
```

---

## API Endpoints

The application communicates with the backend using the following API endpoints:

- **Books API**: `/api/books`
- **Users API**: `/api/users`
- **Orders API**: `/api/orders`
- **Authentication API**: `/api/auth`

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **Framer Motion**: For animations.
- **Redux Toolkit**: For state management.
- **Lucide React**: For icons.
- **React Hot Toast**: For notifications.
- **Material-UI**: For the pagination component.

---

## Future Enhancements

- Add search functionality for books.
- Implement user profile management.
- Enhance accessibility for all components.
- Add unit and integration tests for critical features.

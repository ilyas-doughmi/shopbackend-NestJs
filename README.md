# ShopBackend-NestJs

## Overview
ShopBackend-NestJs is a backend API built with NestJS for managing users, products, and authentication for an online shop. It provides endpoints for user registration, login, product management, and role-based access control.

## Features
- User authentication (JWT)
- Role-based authorization
- CRUD operations for products
- User management
- Modular structure (auth, products, users)

## Project Structure

```
src/
	app.controller.ts
	app.module.ts
	app.service.ts
	main.ts
	auth/
		auth.controller.ts
		auth.module.ts
		auth.service.ts
		decorators/
			roles.decorators.ts
		dto/
			login-auth.dto.ts
		roles/
			roles.guard.ts
	products/
		products.controller.ts
		products.module.ts
		products.service.ts
		dto/
			create-product.dto.ts
			update-product.dto.ts
		entities/
			product.entity.ts
	users/
		users.controller.ts
		users.module.ts
		users.service.ts
		dto/
			create-user.dto.ts
			update-user.dto.ts
		entities/
			user.entity.ts
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
1. Clone the repository:
	 ```bash
	 git clone https://github.com/ilyas-doughmi/shopbackend-NestJs.git
	 ```
2. Navigate to the project directory:
	 ```bash
	 cd shopbackend-NestJs
	 ```
3. Install dependencies:
	 ```bash
	 npm install
	 ```

### Environment Variables
Copy `.env.example` to `.env` and update the values as needed.

### Running the Application
Start the development server:
```bash
npm run start:dev
```

### Testing
Run unit tests:
```bash
npm run test
```
Run end-to-end tests:
```bash
npm run test:e2e
```

## API Endpoints
See controllers in `src/auth`, `src/products`, and `src/users` for available endpoints.

## License
MIT

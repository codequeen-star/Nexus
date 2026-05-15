# Nexus App Architecture

## Overview
The `Nexus` app is a React + TypeScript project built with Vite and Tailwind CSS. It provides a role-based dashboard experience for two user types: `entrepreneur` and `investor`.

## High-level structure

src/
- `App.tsx` - application entry point, router and route definitions
- `context/` - global state provider for authentication and user session
- `components/` - reusable UI components, layout components, and feature-specific widgets
- `pages/` - page-level route components grouped by feature
- `data/` - mock data and helper functions for messages, users, and collaboration requests
- `types/` - shared TypeScript interfaces and data models

## Routing and layout

`App.tsx` uses `react-router-dom` for routing.
- Auth routes: `/login`, `/register`
- Dashboard routes: `/dashboard/entrepreneur`, `/dashboard/investor`
- Profile routes: `/profile/entrepreneur/:id`, `/profile/investor/:id`
- Feature routes: `/investors`, `/entrepreneurs`, `/messages`, `/notifications`, `/documents`, `/settings`, `/help`, `/deals`
- Chat routes: `/chat` and `/chat/:userId`

Many routes are wrapped with `DashboardLayout`, which enforces authentication and renders the shared app shell.

## Auth architecture

`src/context/AuthContext.tsx`
- Creates `AuthContext` and `AuthProvider`
- Exposes `useAuth()` hook for consumers
- Manages session state using `localStorage`
- Provides mock implementations of:
  - `login`
  - `register`
  - `logout`
  - `forgotPassword`
  - `resetPassword`
  - `updateProfile`
- Tracks `isAuthenticated` and `isLoading`

`DashboardLayout` checks auth state:
- shows a loading spinner while auth state initializes
- redirects unauthenticated users to `/login`
- renders `Navbar`, `Sidebar`, and an `Outlet` for nested pages

## Layout components

`src/components/layout/`
- `DashboardLayout.tsx` - root dashboard shell
- `Navbar.tsx` - top-level navigation, user menu, logout, mobile menu toggle
- `Sidebar.tsx` - left-side navigation with role-aware links and persistent support section

Role-based navigation is implemented in `Sidebar.tsx`.
- Entrepreneurs get links like `Find Investors`, `Documents`
- Investors get links like `Find Startups`, `Deals`

`Navbar.tsx` also adapts links and profile navigation based on the current user role.

## Shared UI primitives

`src/components/ui/`
- `Button.tsx` - reusable button component with variants, sizes, loading and full-width support
- `Card.tsx` - card container with header/body/footer regions
- `Badge.tsx` - small badge element
- `Input.tsx` - shared text input component
- `Avatar.tsx` - user avatar display component

These primitives are used across pages to enforce a consistent visual and interaction model.

## Page organization

`src/pages/` holds screen-level components grouped by feature:
- `auth/` - login, register, forgot/reset password pages
- `dashboard/` - entrepreneur and investor dashboard home screens
- `profile/` - entrepreneur and investor profile views
- `chat/` - chat page with conversation list and message area
- `messages/` - message inbox / conversation list page
- `investors/`, `entrepreneurs/` - discovery/search pages
- `notifications/` - notification center
- `documents/` - document management page
- `settings/` - user settings
- `help/` - help/support page
- `deals/` - deals page for investors or deal management

Pages typically combine:
- global state from `useAuth()`
- data from `src/data/*`
- shared UI components from `src/components/ui`
- specific cards or lists from feature component folders

## Data and mock backend

`src/data/` contains static mock data and helper methods.
- `users.ts` - user dataset and lookup helpers
- `messages.ts` - message history, conversations, send message helpers
- `collaborationRequests.ts` - collaboration request fixtures

This is the app's current data source; it is structured as a simple mock backend layer.

## Type system

`src/types/index.ts` defines core models:
- `User`, `Entrepreneur`, `Investor`
- `Message`, `ChatConversation`, `CollaborationRequest`, `Document`
- `AuthContextType`

These types ensure consistency across pages, components, and the auth provider.

## Component architecture summary

1. `App.tsx` defines routes and decides which pages use `DashboardLayout`.
2. `AuthContext` provides authentication state and methods.
3. `DashboardLayout` creates the main shell with `Navbar`, `Sidebar`, and page content.
4. `Navbar` and `Sidebar` are shared UI across authenticated routes.
5. `pages/` contains feature screens, grouped by user flow.
6. `components/ui/` contains reusable primitives.
7. `components/chat/`, `components/entrepreneur/`, `components/investor/` contain feature-specific widgets.
8. `data/` is the mock data layer used by pages and components.

## Notes for future work

- Add a centralized `routes.ts` or route constants file for better maintainability.
- Replace mock data with real API services and a data-fetching layer.
- Consider splitting `AuthContext` into separate auth and user profile concerns if state grows.
- Add tests for routing, auth guards, and major page flows.

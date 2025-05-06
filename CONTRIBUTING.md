# Contributing Guidelines

Thank you for considering contributing to our project! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct.

## How Can I Contribute?

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/The-Terminal-Viet-Nam/frontend-homepage/issues)
2. If not, create a new issue using the bug report template
3. Include:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details

### Suggesting Enhancements

1. Check existing [Issues](https://github.com/The-Terminal-Viet-Nam/frontend-homepage/issues) for similar suggestions
2. Create a new issue using the feature request template
3. Provide:
   - Clear use case
   - Expected behavior
   - Why this would be beneficial

### Pull Requests

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Run tests:
   ```bash
   pnpm test
   ```
5. Commit with clear messages:
   ```bash
   git commit -m "feat: add new feature"
   ```
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Create a Pull Request

## Development Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up environment:
   ```bash
   cp .env.example .env
   ```

3. Start development server:
   ```bash
   pnpm dev
   ```

## Coding Standards

### TypeScript Style Guide

- Use TypeScript for all new code
- Follow existing code style
- Use interfaces for type definitions
- Avoid `any` type

### Naming Conventions

- Use camelCase for variables and functions
- Use PascalCase for classes
- Use snake_case for environment variables
- Use UPPER_CASE for constants

### Error Handling

- Use `try-catch` blocks for error handling
- Use custom error classes for specific errors
- Log errors with appropriate severity

### Code Formatting

- Use Biome for code formatting
- Run Biome before committing

### Code Structure

- One class per file
- Clear separation of concerns
- Dependency injection
- Unit tests for new features

### Comments and Documentation

- JSDoc for public methods
- Clear inline comments for complex logic
- Update README for new features
- Update API documentation

## Testing

- Write unit tests for new features
- Maintain test coverage
- Run full test suite before submitting PR

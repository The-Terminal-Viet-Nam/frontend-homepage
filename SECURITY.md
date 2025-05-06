# Security Policy

## Supported Versions

Currently supported versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take security issues seriously. Thank you for helping us maintain the security of our project.

### How to Report

1. **DO NOT** create a public GitHub issue for security vulnerabilities.
2. Send an email to lethanhtrung.trungle@gmail.com with:
   - Subject line: "Security Vulnerability: [Brief Description]"
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any possible solutions you've identified

### What to Expect

After submitting a vulnerability report:

1. You'll receive acknowledgment within 48 hours
2. We'll investigate and provide regular updates
3. Once fixed, we'll notify you and may request your review
4. With your permission, we'll credit you in our security advisory

## Security Best Practices

When deploying this application:

1. **Environment Variables**
   - Never commit .env files
   - Use strong, unique secrets
   - Rotate credentials regularly

2. **API Security**
   - Always use HTTPS in production
   - Implement rate limiting
   - Use appropriate CORS settings

3. **Authentication**
   - Keep JWT secrets secure
   - Implement token rotation
   - Use secure password hashing

4. **Database**
   - Regular backups
   - Encrypted connections
   - Principle of least privilege

5. **Dependencies**
   - Regular security updates
   - Automated vulnerability scanning
   - Lock file version control

## Security Features

This project includes:

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- XSS prevention
- CSRF protection
- SQL injection prevention (via Prisma)
- Request validation
- Secure headers

## Responsible Disclosure

We kindly ask that you:

- Give us reasonable time to respond
- Make a good faith effort to avoid privacy violations
- Not access or modify user data without permission
- Not execute or automate any attacks against production systems 

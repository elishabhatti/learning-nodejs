// crypto module - node.js
 
// 1. crypto randomBytes(size)
// Purpose: Genrate cryptographically strong random data.
// Usage: Useful for creating tokens or unique IDs.

// 2. crypto createHasj(algorithm):
// Purpose: Create a hash for a given input using algorithms like sha256.
// Usage:Ensure data integrity(e.g., verifying file changes).

// crypto.randomBytes(size)
// 1. Token Generation for Password Reset
// When users request a password reset generate token.
// Example
// A users "clicks" FOrgot Password A random token is sent via email the token is verified during the resset proceess

// API Keys and Secure Generation
// Generate secure API keys for third party applications.
// Example
// when a creating a developer account on platform like Twitter or Github a unique API key is generated.

// Real LIfe Example:
// Password Hasing (Login System)
// Hash user passwrd before storing in a database to enhance security.
// Example:
// A user's passowrd is hashed with sha256 and stored.During login the entered password is hashed and compared.

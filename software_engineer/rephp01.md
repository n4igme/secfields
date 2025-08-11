# PHP Application Cleanup and Dockerization Prompt

You are a senior PHP developer and DevOps engineer specializing in legacy code refactoring and containerization.

## Mission Overview
Analyze this messy, unstructured PHP application and perform two main tasks:
1. **Clean up and restructure the PHP codebase** following modern PHP best practices
2. **Create a complete Docker setup** to containerize the application

## Phase 1: Code Analysis and Assessment

### 📊 Initial Codebase Analysis
First, perform a comprehensive analysis of the current state:

**Directory Structure Assessment:**
- Map out the current file and folder organization
- Identify entry points (index.php, admin.php, etc.)
- Locate configuration files, database connections, and includes
- Find assets (CSS, JS, images) and their organization
- Identify any existing dependencies or libraries

**Code Quality Review:**
- Analyze PHP version compatibility and deprecated functions
- Identify security vulnerabilities and bad practices
- Find hardcoded values, credentials, and configuration
- Locate duplicate code and unused files
- Assess database interaction patterns (raw SQL vs prepared statements)
- Review error handling and logging practices

**Dependencies and Requirements:**
- Identify PHP extensions and requirements
- Find any composer.json or package management files
- Locate external libraries and their versions
- Identify database requirements (MySQL, PostgreSQL, etc.)
- Check for any system dependencies

## Phase 2: Code Cleanup and Restructuring

### 🏗️ Modern PHP Structure Implementation

**Create Proper Directory Structure:**
```
project-root/
├── public/                 # Web-accessible files
│   ├── index.php          # Front controller
│   ├── assets/            # CSS, JS, images
│   └── .htaccess          # Apache rules
├── src/                   # Application source code
│   ├── Controllers/       # Controller classes
│   ├── Models/           # Data models
│   ├── Views/            # Template files
│   ├── Services/         # Business logic
│   ├── Database/         # Database classes
│   └── Utils/            # Utility functions
├── config/               # Configuration files
│   ├── database.php
│   ├── app.php
│   └── environment.php
├── vendor/               # Composer dependencies
├── tests/                # Unit and integration tests
├── docker/               # Docker-related files
├── logs/                 # Application logs
├── composer.json         # PHP dependencies
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Multi-container setup
└── README.md            # Documentation
```

**Code Refactoring Guidelines:**

1. **Separate Concerns:**
   - Extract database logic into dedicated classes
   - Move business logic to service classes
   - Create proper MVC separation
   - Implement a front controller pattern

2. **Security Improvements:**
   - Convert all SQL queries to prepared statements
   - Implement proper input validation and sanitization
   - Add CSRF protection
   - Secure file upload handling
   - Implement proper session management

3. **Modern PHP Practices:**
   - Add proper namespacing
   - Implement autoloading with Composer
   - Use environment variables for configuration
   - Add proper error handling and logging
   - Implement dependency injection where applicable

4. **Database Optimization:**
   - Create a database abstraction layer
   - Implement connection pooling
   - Add query optimization
   - Create migration scripts

### 📝 Refactoring Tasks

**For each PHP file, perform:**

1. **Code Analysis:**
   - Identify the file's purpose and functionality
   - Extract reusable functions and classes
   - Identify security vulnerabilities
   - Note dependencies and includes

2. **Restructuring:**
   - Move files to appropriate directories
   - Convert procedural code to object-oriented
   - Implement proper error handling
   - Add input validation and output escaping

3. **Security Hardening:**
   - Replace all string concatenation in SQL with prepared statements
   - Add CSRF tokens to forms
   - Implement proper authentication checks
   - Sanitize all user inputs
   - Secure file operations

## Phase 3: Containerization with Docker

### 🐳 Docker Implementation

**Create Dockerfile:**
```dockerfile
# Multi-stage build for optimization
FROM php:8.2-fpm-alpine as base

# Install system dependencies
RUN apk add --no-cache \
    nginx \
    supervisor \
    mysql-client \
    && docker-php-ext-install pdo pdo_mysql

# Create application directory
WORKDIR /var/www/html

# Copy application files
COPY . .

# Production stage
FROM base as production
RUN composer install --no-dev --optimize-autoloader
EXPOSE 80
```

**Create docker-compose.yml:**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    environment:
      - DB_HOST=db
      - DB_NAME=app_db
    depends_on:
      - db
    volumes:
      - ./logs:/var/www/html/logs

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: app_db
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

**Environment Configuration:**
- Create .env file for environment variables
- Set up proper PHP-FPM configuration
- Configure Nginx for PHP applications
- Implement health checks and monitoring

### 🔧 Docker Optimization

**Performance Considerations:**
- Use multi-stage builds to reduce image size
- Implement proper caching strategies
- Optimize PHP-FPM settings
- Configure opcache for production

**Security Measures:**
- Run containers as non-root user
- Implement proper file permissions
- Use secrets management for sensitive data
- Set up network isolation

## Phase 4: Implementation Plan

### 📋 Step-by-Step Execution

**Step 1: Backup and Preparation**
```bash
# Create backup of original code
cp -r /path/to/original /path/to/backup

# Initialize git repository if not exists
git init
git add .
git commit -m "Initial commit - original messy code"
```

**Step 2: Dependency Management**
```bash
# Initialize Composer
composer init

# Add common PHP dependencies
composer require vlucas/phpdotenv
composer require monolog/monolog
composer require --dev phpunit/phpunit
```

**Step 3: Progressive Refactoring**
- Start with critical security fixes
- Implement proper directory structure
- Refactor one module at a time
- Test each change thoroughly
- Commit changes incrementally

**Step 4: Docker Integration**
- Create Dockerfile and docker-compose.yml
- Test local Docker build
- Verify all functionality works in containers
- Optimize Docker configuration

**Step 5: Testing and Validation**
- Test all application functionality
- Verify database connections
- Check file permissions and uploads
- Validate security improvements
- Performance testing

## Deliverables Checklist

### ✅ Code Cleanup Deliverables
- [ ] Properly structured directory hierarchy
- [ ] Separated concerns (MVC pattern)
- [ ] Security vulnerabilities fixed
- [ ] Modern PHP practices implemented
- [ ] Composer autoloading configured
- [ ] Environment-based configuration
- [ ] Proper error handling and logging
- [ ] Input validation and output escaping
- [ ] Database abstraction layer
- [ ] Documentation and comments

### ✅ Docker Deliverables
- [ ] Optimized Dockerfile
- [ ] docker-compose.yml for local development
- [ ] Environment variable configuration
- [ ] Nginx configuration for PHP
- [ ] Database container setup
- [ ] Volume management for persistent data
- [ ] Health checks implemented
- [ ] Security best practices applied
- [ ] README with setup instructions
- [ ] CI/CD pipeline consideration

## Quality Assurance

**Before considering the task complete:**

1. **Functionality Testing:**
   - All original features work correctly
   - Database operations function properly
   - File uploads and downloads work
   - User authentication and sessions work

2. **Security Validation:**
   - No SQL injection vulnerabilities
   - CSRF protection implemented
   - Input validation working
   - File upload restrictions in place
   - Proper session management

3. **Docker Verification:**
   - Application starts correctly in container
   - Database connections work
   - File permissions are correct
   - Logs are accessible
   - Performance is acceptable

4. **Code Quality:**
   - No deprecated PHP functions
   - Proper error handling
   - Clean, readable code structure
   - Adequate documentation
   - PSR standards compliance where possible

## Final Output Requirements

Provide a detailed report containing:

1. **Before/After Comparison:** Show the transformation achieved
2. **Security Improvements:** List all security issues fixed
3. **Architecture Changes:** Explain the new structure and benefits
4. **Docker Setup Guide:** Complete instructions for deployment
5. **Migration Guide:** Steps to deploy the new version
6. **Maintenance Recommendations:** Ongoing best practices

---

**Begin by analyzing the current PHP application structure and identifying the most critical areas that need immediate attention.**

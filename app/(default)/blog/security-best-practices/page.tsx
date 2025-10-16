export const metadata = {
    title: "Security Best Practices - Servelink Blog",
    description: "Essential security practices for deploying applications in production environments. Learn about SSL certificates, environment variables, and access controls.",
};

export default function BlogPost() {
    return (
        <article className="py-32">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <a href="/blog" className="hover:text-pink-600">← Back to Blog</a>
                        <span className="mx-2">•</span>
                        <span>September 15, 2025</span>
                        <span className="mx-2">•</span>
                        <span>9 min read</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                        <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-800">SSL</span>
                        <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">Security</span>
                        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">Production</span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl mb-6">
                        Security Best Practices
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Essential security practices for deploying applications in production environments.
                        Learn about SSL certificates, environment variables, and access controls to protect your applications and data.
                    </p>
                </div>

                {/* Author */}
                <div className="flex items-center mb-12 p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-pink-600 font-semibold">EZ</span>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-900">Emmanuel Zenderock</div>
                        <div className="text-sm text-gray-600">Engineer @ Servelink</div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Security is not an afterthought—it's a fundamental requirement for any production application.
                        With cyber threats becoming more sophisticated, implementing robust security practices from the
                        start is crucial. In this comprehensive guide, we'll explore essential security practices
                        for deploying applications in production environments.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">
                                    <strong>Security First:</strong> Security should be integrated into every aspect of your
                                    development and deployment process, not treated as a separate concern.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">SSL/TLS Configuration</h2>
                    <p className="text-gray-700 mb-4">
                        Secure communication is the foundation of web application security. Proper SSL/TLS configuration
                        protects data in transit and builds user trust.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Certificate Management</h3>
                    <p className="text-gray-700 mb-4">
                        Use strong certificates and implement proper certificate management:
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">SSL Configuration Best Practices</h4>
                        <div className="bg-gray-900 rounded p-4">
                            <pre className="text-green-400 text-sm">
                                <code>{`# Nginx SSL Configuration
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    # SSL Certificate
    ssl_certificate /etc/ssl/certs/your-domain.crt;
    ssl_certificate_key /etc/ssl/private/your-domain.key;
    
    # SSL Security Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    
    # HSTS (HTTP Strict Transport Security)
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    
    # Security Headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/ssl/certs/ca-certificates.crt;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`}</code>
                            </pre>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Environment Variables and Secrets Management</h2>
                    <p className="text-gray-700 mb-4">
                        Never hardcode sensitive information in your application code. Use secure environment variable management:
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                    <strong>Critical:</strong> Never commit secrets to version control. Use environment variables,
                                    secret management services, or encrypted configuration files.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Secure Environment Configuration</h3>
                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-gray-400 text-sm ml-4">config/database.js</span>
                        </div>
                        <pre className="text-green-400 text-sm">
                            <code>{`// Secure database configuration
const config = {
  development: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: process.env.NODE_ENV === 'production' ? {
      rejectUnauthorized: true,
      ca: process.env.DB_SSL_CA
    } : false
  },
  
  production: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: {
      rejectUnauthorized: true,
      ca: process.env.DB_SSL_CA,
      cert: process.env.DB_SSL_CERT,
      key: process.env.DB_SSL_KEY
    },
    pool: {
      max: 20,
      min: 5,
      acquire: 30000,
      idle: 10000
    }
  }
};

// Validate required environment variables
const requiredEnvVars = ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  throw new Error(\`Missing required environment variables: \${missingVars.join(', ')}\`);
}

module.exports = config;`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Authentication and Authorization</h2>
                    <p className="text-gray-700 mb-4">
                        Implement robust authentication and authorization mechanisms to control access to your application:
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">JWT Token Security</h3>
                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <pre className="text-green-400 text-sm">
                            <code>{`// JWT implementation with security best practices
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class AuthService {
  constructor() {
    this.secretKey = process.env.JWT_SECRET;
    this.refreshSecretKey = process.env.JWT_REFRESH_SECRET;
    this.accessTokenExpiry = '15m';
    this.refreshTokenExpiry = '7d';
  }

  // Generate secure access token
  generateAccessToken(payload) {
    return jwt.sign(payload, this.secretKey, {
      expiresIn: this.accessTokenExpiry,
      issuer: 'your-app-name',
      audience: 'your-app-users'
    });
  }

  // Generate refresh token
  generateRefreshToken(payload) {
    return jwt.sign(payload, this.refreshSecretKey, {
      expiresIn: this.refreshTokenExpiry,
      issuer: 'your-app-name',
      audience: 'your-app-users'
    });
  }

  // Verify access token
  verifyAccessToken(token) {
    try {
      return jwt.verify(token, this.secretKey, {
        issuer: 'your-app-name',
        audience: 'your-app-users'
      });
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  // Generate secure random tokens
  generateSecureToken(length = 32) {
    return crypto.randomBytes(length).toString('hex');
  }

  // Hash passwords with salt
  async hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return \`\${salt}:\${hash}\`;
  }

  // Verify password
  async verifyPassword(password, hashedPassword) {
    const [salt, hash] = hashedPassword.split(':');
    const verifyHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === verifyHash;
  }
}`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Input Validation and Sanitization</h2>
                    <p className="text-gray-700 mb-4">
                        Always validate and sanitize user input to prevent injection attacks and data corruption:
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Input Validation Middleware</h4>
                        <div className="bg-gray-900 rounded p-4">
                            <pre className="text-green-400 text-sm">
                                <code>{`// Input validation middleware
const Joi = require('joi');
const sanitizeHtml = require('sanitize-html');

// Validation schemas
const schemas = {
  userRegistration: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]/).required(),
    name: Joi.string().min(2).max(50).required(),
    age: Joi.number().integer().min(13).max(120).optional()
  }),
  
  userLogin: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
};

// Validation middleware
const validateInput = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.details.map(detail => detail.message)
      });
    }
    
    // Sanitize HTML content
    if (value.name) {
      value.name = sanitizeHtml(value.name, {
        allowedTags: [],
        allowedAttributes: {}
      });
    }
    
    req.body = value;
    next();
  };
};

// Rate limiting middleware
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many login attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});`}</code>
                            </pre>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Database Security</h2>
                    <p className="text-gray-700 mb-4">
                        Secure your database connections and implement proper access controls:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h4 className="font-semibold text-blue-900 mb-3">Connection Security</h4>
                            <ul className="text-sm text-blue-800 space-y-2">
                                <li>• Use SSL/TLS for all connections</li>
                                <li>• Implement connection pooling</li>
                                <li>• Use strong authentication</li>
                                <li>• Regular security updates</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h4 className="font-semibold text-green-900 mb-3">Access Control</h4>
                            <ul className="text-sm text-green-800 space-y-2">
                                <li>• Principle of least privilege</li>
                                <li>• Role-based access control</li>
                                <li>• Regular access reviews</li>
                                <li>• Audit logging</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">SQL Injection Prevention</h3>
                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <pre className="text-green-400 text-sm">
                            <code>{`// Safe database queries using parameterized statements
class UserRepository {
  constructor(db) {
    this.db = db;
  }

  // Safe user lookup
  async findUserByEmail(email) {
    const query = 'SELECT id, email, name FROM users WHERE email = $1';
    const result = await this.db.query(query, [email]);
    return result.rows[0];
  }

  // Safe user creation
  async createUser(userData) {
    const { email, name, hashedPassword } = userData;
    const query = \`
      INSERT INTO users (email, name, password_hash, created_at)
      VALUES ($1, $2, $3, NOW())
      RETURNING id, email, name, created_at
    \`;
    const result = await this.db.query(query, [email, name, hashedPassword]);
    return result.rows[0];
  }

  // Safe user update with validation
  async updateUser(userId, updateData) {
    const allowedFields = ['name', 'email'];
    const updates = [];
    const values = [];
    let paramCount = 1;

    for (const [key, value] of Object.entries(updateData)) {
      if (allowedFields.includes(key)) {
        updates.push(\`\${key} = $\${paramCount}\`);
        values.push(value);
        paramCount++;
      }
    }

    if (updates.length === 0) {
      throw new Error('No valid fields to update');
    }

    values.push(userId);
    const query = \`
      UPDATE users 
      SET \${updates.join(', ')}, updated_at = NOW()
      WHERE id = $\${paramCount}
      RETURNING id, email, name, updated_at
    \`;
    
    const result = await this.db.query(query, values);
    return result.rows[0];
  }
}`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Security Headers and CORS</h2>
                    <p className="text-gray-700 mb-4">
                        Implement proper security headers and CORS policies to protect against common web vulnerabilities:
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Security Headers Configuration</h4>
                        <div className="bg-gray-900 rounded p-4">
                            <pre className="text-green-400 text-sm">
                                <code>{`// Express.js security middleware
const helmet = require('helmet');
const cors = require('cors');

// Helmet configuration
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));

// Additional security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  next();
});`}</code>
                            </pre>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Monitoring and Logging</h2>
                    <p className="text-gray-700 mb-4">
                        Implement comprehensive security monitoring and logging to detect and respond to threats:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h4 className="font-semibold text-red-900 mb-3">Security Logging</h4>
                            <ul className="text-sm text-red-800 space-y-1">
                                <li>• Authentication attempts</li>
                                <li>• Authorization failures</li>
                                <li>• Suspicious activities</li>
                                <li>• Data access patterns</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                            <h4 className="font-semibold text-yellow-900 mb-3">Monitoring</h4>
                            <ul className="text-sm text-yellow-800 space-y-1">
                                <li>• Real-time threat detection</li>
                                <li>• Performance monitoring</li>
                                <li>• Error rate tracking</li>
                                <li>• Resource usage alerts</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h4 className="font-semibold text-green-900 mb-3">Incident Response</h4>
                            <ul className="text-sm text-green-800 space-y-1">
                                <li>• Automated alerts</li>
                                <li>• Response procedures</li>
                                <li>• Forensic capabilities</li>
                                <li>• Recovery processes</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Servelink Security Features</h2>
                    <p className="text-gray-700 mb-4">
                        Servelink provides built-in security features to protect your applications:
                    </p>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-purple-900 mb-3">Built-in Security</h4>
                        <ul className="text-sm text-purple-800 space-y-2">
                            <li>• Automatic SSL certificate management</li>
                            <li>• DDoS protection and rate limiting</li>
                            <li>• Web Application Firewall (WAF)</li>
                            <li>• Security scanning and vulnerability assessment</li>
                            <li>• Encrypted environment variables</li>
                            <li>• Network isolation and VPC support</li>
                            <li>• Compliance certifications (SOC 2, GDPR)</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Security Checklist</h2>
                    <p className="text-gray-700 mb-4">
                        Use this checklist to ensure your application meets security best practices:
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <h4 className="font-semibold text-gray-900 mb-4">Production Security Checklist</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h5 className="font-medium text-gray-900 mb-3">Infrastructure Security</h5>
                                <ul className="text-sm text-gray-700 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        SSL/TLS encryption enabled
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Security headers configured
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Environment variables secured
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Database connections encrypted
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-medium text-gray-900 mb-3">Application Security</h5>
                                <ul className="text-sm text-gray-700 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Input validation implemented
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Authentication secured
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Rate limiting configured
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Security monitoring enabled
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
                    <p className="text-gray-700 mb-6">
                        Security is an ongoing process that requires constant vigilance and regular updates.
                        By implementing these best practices from the start, you can significantly reduce
                        the risk of security breaches and protect your users' data.
                    </p>

                    <p className="text-gray-700 mb-8">
                        Remember that security is not just about technology—it's also about processes,
                        training, and maintaining a security-conscious culture within your team.
                        Regular security audits and penetration testing can help identify and address
                        vulnerabilities before they're exploited.
                    </p>

                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-pink-900 mb-2">Secure your applications with Servelink</h3>
                        <p className="text-pink-700 mb-4">
                            Deploy with confidence using Servelink's built-in security features and best practices.
                        </p>
                        <a
                            href="/pricing"
                            className="btn bg-linear-to-t from-pink-600 to-pink-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                        >
                            Start Free Trial
                        </a>
                    </div>
                </div>

                {/* Author Bio */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex items-start">
                        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mr-6">
                            <span className="text-pink-600 font-semibold text-lg">EZ</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Emmanuel Zenderock</h3>
                            <p className="text-gray-600 mb-2">Engineer @ Servelink</p>
                            <p className="text-gray-700">
                                Emmanuel is a cybersecurity expert with over 2 years of experience in application security,
                                penetration testing, and security architecture. He specializes in web application
                                security and cloud security best practices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

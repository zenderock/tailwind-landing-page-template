export const metadata = {
    title: "Node.js Microservices Architecture - Servelink Blog",
    description: "Building and deploying microservices with Node.js and Servelink's container support. Learn about service discovery, load balancing, and monitoring.",
};

export default function BlogPost() {
    return (
        <article className="py-32">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <a href="/blog" className="hover:text-orange-600">← Back to Blog</a>
                        <span className="mx-2">•</span>
                        <span>December 5, 2024</span>
                        <span className="mx-2">•</span>
                        <span>15 min read</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800">Microservices</span>
                        <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm text-red-800">Docker</span>
                        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">Node.js</span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl mb-6">
                        Node.js Microservices Architecture
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Building and deploying microservices with Node.js and Servelink's container support.
                        Learn about service discovery, load balancing, and monitoring to create scalable, maintainable applications.
                    </p>
                </div>

                {/* Author */}
                <div className="flex items-center mb-12 p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-orange-600 font-semibold">MR</span>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                        <div className="text-sm text-gray-600">Lead Architect at Servelink</div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Microservices architecture has revolutionized how we build and deploy applications.
                        By breaking down monolithic applications into smaller, independent services, we can achieve
                        better scalability, maintainability, and fault tolerance. In this comprehensive guide,
                        we'll explore how to build and deploy microservices using Node.js and Servelink.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What are Microservices?</h2>
                    <p className="text-gray-700 mb-4">
                        Microservices are an architectural approach where applications are built as a collection
                        of loosely coupled, independently deployable services. Each service is responsible for
                        a specific business capability and communicates with other services through well-defined APIs.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-blue-700">
                                    <strong>Key Benefits:</strong> Independent deployment, technology diversity,
                                    fault isolation, and team autonomy are the main advantages of microservices architecture.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Designing Your Microservices</h2>
                    <p className="text-gray-700 mb-4">
                        Before diving into implementation, it's crucial to design your microservices properly.
                        Here are the key principles to follow:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="font-semibold text-green-900 mb-3">Single Responsibility</h3>
                            <p className="text-sm text-green-800">
                                Each service should have one clear purpose and be responsible for a single business capability.
                            </p>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="font-semibold text-blue-900 mb-3">Loose Coupling</h3>
                            <p className="text-sm text-blue-800">
                                Services should be independent and communicate through well-defined APIs.
                            </p>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                            <h3 className="font-semibold text-purple-900 mb-3">High Cohesion</h3>
                            <p className="text-sm text-purple-800">
                                Related functionality should be grouped together within the same service.
                            </p>
                        </div>

                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                            <h3 className="font-semibold text-orange-900 mb-3">Fault Tolerance</h3>
                            <p className="text-sm text-orange-800">
                                Services should be designed to handle failures gracefully without affecting others.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Building a User Service</h2>
                    <p className="text-gray-700 mb-4">
                        Let's build a practical example - a User Service that handles user authentication and management:
                    </p>

                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-gray-400 text-sm ml-4">user-service/package.json</span>
                        </div>
                        <pre className="text-green-400 text-sm">
                            <code>{`{
  "name": "user-service",
  "version": "1.0.0",
  "description": "User management microservice",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "mongoose": "^7.5.0",
    "cors": "^2.8.5",
    "helmet": "^7.0.0"
  }
}`}</code>
                        </pre>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Service Implementation</h3>
                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <pre className="text-green-400 text-sm">
                            <code>{`// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/user-service');

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/users/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      name
    });
    
    await user.save();
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );
    
    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
    
    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );
    
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(\`User service running on port \${PORT}\`);
});`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Service Discovery and Communication</h2>
                    <p className="text-gray-700 mb-4">
                        Microservices need to discover and communicate with each other. Here are the main patterns:
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">API Gateway Pattern</h3>
                    <p className="text-gray-700 mb-4">
                        An API Gateway acts as a single entry point for all client requests and routes them to the appropriate microservice.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">API Gateway Implementation</h4>
                        <div className="bg-gray-900 rounded p-4">
                            <pre className="text-green-400 text-sm">
                                <code>{`// api-gateway.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Service discovery (in production, use Consul, Eureka, or Kubernetes)
const services = {
  'user-service': 'http://user-service:3001',
  'order-service': 'http://order-service:3002',
  'product-service': 'http://product-service:3003'
};

// Proxy to user service
app.use('/api/users', createProxyMiddleware({
  target: services['user-service'],
  changeOrigin: true,
  pathRewrite: {
    '^/api/users': '/api/users'
  }
}));

// Proxy to order service
app.use('/api/orders', createProxyMiddleware({
  target: services['order-service'],
  changeOrigin: true,
  pathRewrite: {
    '^/api/orders': '/api/orders'
  }
}));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});`}</code>
                            </pre>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Containerization with Docker</h2>
                    <p className="text-gray-700 mb-4">
                        Each microservice should be containerized for consistent deployment and scaling:
                    </p>

                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-gray-400 text-sm ml-4">Dockerfile</span>
                        </div>
                        <pre className="text-green-400 text-sm">
                            <code>{`# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3001/health || exit 1

# Start application
CMD ["npm", "start"]`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Deploying with Servelink</h2>
                    <p className="text-gray-700 mb-4">
                        Servelink makes it easy to deploy and manage microservices:
                    </p>

                    <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-8">
                        <li>Create a separate deployment for each microservice</li>
                        <li>Configure environment variables for each service</li>
                        <li>Set up service discovery using Servelink's networking</li>
                        <li>Configure load balancing and auto-scaling</li>
                        <li>Set up monitoring and logging for each service</li>
                        <li>Implement health checks and circuit breakers</li>
                    </ol>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Monitoring and Observability</h2>
                    <p className="text-gray-700 mb-4">
                        Monitoring microservices requires a comprehensive approach:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h4 className="font-semibold text-blue-900 mb-3">Logging</h4>
                            <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Centralized log aggregation</li>
                                <li>• Structured logging (JSON)</li>
                                <li>• Correlation IDs</li>
                                <li>• Log levels and filtering</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h4 className="font-semibold text-green-900 mb-3">Metrics</h4>
                            <ul className="text-sm text-green-800 space-y-1">
                                <li>• Application performance metrics</li>
                                <li>• Business metrics</li>
                                <li>• Infrastructure metrics</li>
                                <li>• Custom dashboards</li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                            <h4 className="font-semibold text-purple-900 mb-3">Tracing</h4>
                            <ul className="text-sm text-purple-800 space-y-1">
                                <li>• Distributed tracing</li>
                                <li>• Request flow visualization</li>
                                <li>• Performance bottleneck identification</li>
                                <li>• Error tracking</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Practices and Common Pitfalls</h2>
                    <p className="text-gray-700 mb-4">
                        Here are some important considerations when building microservices:
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
                                    <strong>Common Pitfalls:</strong> Don't create too many microservices too early,
                                    avoid distributed transactions, and ensure proper error handling and circuit breakers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
                    <p className="text-gray-700 mb-6">
                        Microservices architecture with Node.js offers tremendous benefits for building scalable,
                        maintainable applications. With Servelink's container support and deployment capabilities,
                        you can focus on building great services while we handle the infrastructure complexity.
                    </p>

                    <p className="text-gray-700 mb-8">
                        Start with a few services and gradually decompose your monolith as you learn and grow.
                        Remember that microservices are not a silver bullet - they require careful planning and ongoing maintenance.
                    </p>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-orange-900 mb-2">Ready to build microservices?</h3>
                        <p className="text-orange-700 mb-4">
                            Deploy your Node.js microservices with Servelink and scale effortlessly.
                        </p>
                        <a
                            href="/pricing"
                            className="btn bg-linear-to-t from-orange-600 to-orange-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                        >
                            Start Free Trial
                        </a>
                    </div>
                </div>

                {/* Author Bio */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex items-start">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mr-6">
                            <span className="text-orange-600 font-semibold text-lg">MR</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Mike Rodriguez</h3>
                            <p className="text-gray-600 mb-2">Lead Architect at Servelink</p>
                            <p className="text-gray-700">
                                Mike is a software architect with over 10 years of experience in building
                                distributed systems and microservices. He specializes in Node.js, Docker,
                                and cloud-native architectures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

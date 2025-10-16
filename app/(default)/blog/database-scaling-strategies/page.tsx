export const metadata = {
    title: "Database Scaling Strategies - Servelink Blog",
    description: "How to scale your databases effectively with Servelink's managed database services. Master replication, sharding, and performance optimization.",
};

export default function BlogPost() {
    return (
        <article className="py-32">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <a href="/blog" className="hover:text-blue-600">← Back to Blog</a>
                        <span className="mx-2">•</span>
                        <span>September 28, 2025</span>
                        <span className="mx-2">•</span>
                        <span>10 min read</span>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">PostgreSQL</span>
                        <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-800">MySQL</span>
                        <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">Scaling</span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 md:text-5xl mb-6">
                        Database Scaling Strategies
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        How to scale your databases effectively with Servelink's managed database services.
                        Master replication, sharding, and performance optimization to handle growing data loads.
                    </p>
                </div>

                {/* Author */}
                <div className="flex items-center mb-12 p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-600 font-semibold">AL</span>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-900">Atangana Esther</div>
                        <div className="text-sm text-gray-600">Database Engineer at Servelink</div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Database performance is often the bottleneck in modern applications. As your user base grows
                        and data volume increases, you'll need to implement effective scaling strategies to maintain
                        performance and availability. In this guide, we'll explore various database scaling techniques
                        and how Servelink's managed database services can help you scale efficiently.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Database Scaling</h2>
                    <p className="text-gray-700 mb-4">
                        Database scaling can be approached in two main ways: vertical scaling (scaling up) and
                        horizontal scaling (scaling out). Each approach has its benefits and trade-offs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="font-semibold text-green-900 mb-3">Vertical Scaling (Scale Up)</h3>
                            <ul className="text-sm text-green-800 space-y-2">
                                <li>• Increase CPU, RAM, and storage</li>
                                <li>• Simpler to implement</li>
                                <li>• No application changes required</li>
                                <li>• Limited by hardware constraints</li>
                                <li>• Single point of failure</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="font-semibold text-blue-900 mb-3">Horizontal Scaling (Scale Out)</h3>
                            <ul className="text-sm text-blue-800 space-y-2">
                                <li>• Add more database instances</li>
                                <li>• Better fault tolerance</li>
                                <li>• Can handle more concurrent users</li>
                                <li>• More complex to implement</li>
                                <li>• Requires application changes</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Read Replicas</h2>
                    <p className="text-gray-700 mb-4">
                        Read replicas are copies of your primary database that can handle read operations.
                        This is one of the most common and effective scaling strategies.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Read Replica Architecture</h4>
                        <div className="bg-gray-900 rounded p-4">
                            <pre className="text-green-400 text-sm">
                                <code>{`# Primary Database (Write Operations)
Primary DB (Master)
├── Writes: INSERT, UPDATE, DELETE
├── Reads: Critical queries requiring latest data
└── Replication to replicas

# Read Replicas (Read Operations)
Read Replica 1
├── Reads: Reports, analytics, user queries
├── Slightly behind primary (eventual consistency)
└── Can be promoted to primary if needed

Read Replica 2
├── Reads: Search, filtering, pagination
├── Geographic distribution
└── Load balancing across replicas`}</code>
                            </pre>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Implementing Read Replicas</h3>
                    <p className="text-gray-700 mb-4">
                        Here's how to implement read replicas in your application:
                    </p>

                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-gray-400 text-sm ml-4">database.js</span>
                        </div>
                        <pre className="text-green-400 text-sm">
                            <code>{`// Database connection configuration
const dbConfig = {
  primary: {
    host: process.env.DB_PRIMARY_HOST,
    port: process.env.DB_PRIMARY_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: true
  },
  replicas: [
    {
      host: process.env.DB_REPLICA1_HOST,
      port: process.env.DB_REPLICA1_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: true
    },
    {
      host: process.env.DB_REPLICA2_HOST,
      port: process.env.DB_REPLICA2_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: true
    }
  ]
};

// Connection pool for primary (writes)
const primaryPool = new Pool(dbConfig.primary);

// Connection pools for replicas (reads)
const replicaPools = dbConfig.replicas.map(config => new Pool(config));

// Round-robin load balancer for replicas
let replicaIndex = 0;
const getReplicaPool = () => {
  const pool = replicaPools[replicaIndex];
  replicaIndex = (replicaIndex + 1) % replicaPools.length;
  return pool;
};

// Database service
class DatabaseService {
  // Write operations go to primary
  async write(query, params) {
    const client = await primaryPool.connect();
    try {
      const result = await client.query(query, params);
      return result;
    } finally {
      client.release();
    }
  }

  // Read operations go to replicas
  async read(query, params) {
    const pool = getReplicaPool();
    const client = await pool.connect();
    try {
      const result = await client.query(query, params);
      return result;
    } finally {
      client.release();
    }
  }
}`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Database Sharding</h2>
                    <p className="text-gray-700 mb-4">
                        Sharding involves splitting your database into smaller, independent pieces called shards.
                        Each shard contains a subset of your data.
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
                                    <strong>Sharding Strategies:</strong> Choose your sharding key carefully.
                                    Common strategies include range-based, hash-based, and directory-based sharding.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Hash-Based Sharding</h3>
                    <p className="text-gray-700 mb-4">
                        Hash-based sharding uses a hash function to determine which shard a record belongs to:
                    </p>

                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <pre className="text-green-400 text-sm">
                            <code>{`// Sharding service
class ShardingService {
  constructor(shards) {
    this.shards = shards;
    this.shardCount = shards.length;
  }

  // Determine which shard a record belongs to
  getShard(key) {
    const hash = this.hashFunction(key);
    const shardIndex = hash % this.shardCount;
    return this.shards[shardIndex];
  }

  // Simple hash function (use a better one in production)
  hashFunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  // Insert record into appropriate shard
  async insert(table, data) {
    const shard = this.getShard(data.id);
    return await shard.query(
      \`INSERT INTO \${table} (id, name, email) VALUES ($1, $2, $3)\`,
      [data.id, data.name, data.email]
    );
  }

  // Find record across all shards
  async findById(table, id) {
    const shard = this.getShard(id);
    const result = await shard.query(
      \`SELECT * FROM \${table} WHERE id = $1\`,
      [id]
    );
    return result.rows[0];
  }
}`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Caching Strategies</h2>
                    <p className="text-gray-700 mb-4">
                        Caching can significantly reduce database load by storing frequently accessed data in memory:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                            <h4 className="font-semibold text-red-900 mb-3">Application-Level Caching</h4>
                            <ul className="text-sm text-red-800 space-y-1">
                                <li>• In-memory caches (Redis, Memcached)</li>
                                <li>• Query result caching</li>
                                <li>• Session data caching</li>
                                <li>• API response caching</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h4 className="font-semibold text-green-900 mb-3">Database Caching</h4>
                            <ul className="text-sm text-green-800 space-y-1">
                                <li>• Query cache</li>
                                <li>• Buffer pool optimization</li>
                                <li>• Index caching</li>
                                <li>• Connection pooling</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h4 className="font-semibold text-blue-900 mb-3">CDN Caching</h4>
                            <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Static content caching</li>
                                <li>• API response caching</li>
                                <li>• Geographic distribution</li>
                                <li>• Edge caching</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Redis Caching Implementation</h3>
                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <pre className="text-green-400 text-sm">
                            <code>{`// Redis caching service
const redis = require('redis');
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

class CacheService {
  constructor() {
    this.client = client;
  }

  // Cache with TTL (Time To Live)
  async set(key, value, ttl = 3600) {
    await this.client.setex(key, ttl, JSON.stringify(value));
  }

  // Get from cache
  async get(key) {
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }

  // Cache database query results
  async cacheQuery(query, params, ttl = 300) {
    const cacheKey = \`query:\${Buffer.from(query + JSON.stringify(params)).toString('base64')}\`;
    
    // Try to get from cache first
    let result = await this.get(cacheKey);
    
    if (!result) {
      // Query database if not in cache
      result = await this.executeQuery(query, params);
      
      // Cache the result
      await this.set(cacheKey, result, ttl);
    }
    
    return result;
  }

  // Invalidate cache patterns
  async invalidatePattern(pattern) {
    const keys = await this.client.keys(pattern);
    if (keys.length > 0) {
      await this.client.del(keys);
    }
  }
}`}</code>
                        </pre>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Query Optimization</h2>
                    <p className="text-gray-700 mb-4">
                        Optimizing your database queries is crucial for performance:
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
                                    <strong>Query Optimization Tips:</strong> Use proper indexing, avoid N+1 queries,
                                    implement pagination, and use EXPLAIN to analyze query performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Indexing Strategies</h3>
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Common Index Types</h4>
                        <div className="bg-gray-900 rounded p-4">
                            <pre className="text-green-400 text-sm">
                                <code>{`-- Single column index
CREATE INDEX idx_user_email ON users(email);

-- Composite index (multiple columns)
CREATE INDEX idx_user_status_created ON users(status, created_at);

-- Partial index (with WHERE clause)
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';

-- Covering index (includes all needed columns)
CREATE INDEX idx_user_profile ON users(id, name, email, created_at);

-- Text search index (PostgreSQL)
CREATE INDEX idx_posts_content_search ON posts USING gin(to_tsvector('english', content));`}</code>
                            </pre>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Monitoring and Alerting</h2>
                    <p className="text-gray-700 mb-4">
                        Effective monitoring helps you identify performance issues before they impact users:
                    </p>

                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                        <li>Monitor query performance and slow queries</li>
                        <li>Track connection pool usage and timeouts</li>
                        <li>Monitor replication lag for read replicas</li>
                        <li>Set up alerts for high CPU, memory, and disk usage</li>
                        <li>Track database size growth and plan capacity</li>
                        <li>Monitor error rates and failed connections</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Servelink Database Services</h2>
                    <p className="text-gray-700 mb-4">
                        Servelink provides managed database services that handle scaling automatically:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                            <h4 className="font-semibold text-purple-900 mb-3">Managed PostgreSQL</h4>
                            <ul className="text-sm text-purple-800 space-y-2">
                                <li>• Automatic read replicas</li>
                                <li>• Connection pooling</li>
                                <li>• Automated backups</li>
                                <li>• Performance monitoring</li>
                                <li>• High availability</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h4 className="font-semibold text-green-900 mb-3">Managed MySQL</h4>
                            <ul className="text-sm text-green-800 space-y-2">
                                <li>• Master-slave replication</li>
                                <li>• Query optimization</li>
                                <li>• Security updates</li>
                                <li>• Scaling on demand</li>
                                <li>• 24/7 monitoring</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
                    <p className="text-gray-700 mb-6">
                        Database scaling is a complex topic that requires careful planning and implementation.
                        Start with simple strategies like read replicas and caching, then gradually implement
                        more advanced techniques like sharding as your needs grow.
                    </p>

                    <p className="text-gray-700 mb-8">
                        With Servelink's managed database services, you can focus on building your application
                        while we handle the infrastructure complexity. Our platform automatically scales your
                        databases based on demand and provides comprehensive monitoring and alerting.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Ready to scale your database?</h3>
                        <p className="text-blue-700 mb-4">
                            Get started with Servelink's managed database services and scale effortlessly.
                        </p>
                        <a
                            href="/pricing"
                            className="btn bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
                        >
                            Start Free Trial
                        </a>
                    </div>
                </div>

                {/* Author Bio */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                            <span className="text-blue-600 font-semibold text-lg">AE</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Atangana Esther</h3>
                            <p className="text-gray-600 mb-2">Engineer @ Servelink</p>
                            <p className="text-gray-700">
                                Atangana Esther is a database expert with over 2 years of experience in PostgreSQL, MySQL,
                                and Redis. She specializes in database performance optimization and scaling strategies
                                for high-traffic applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

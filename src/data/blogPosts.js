export const blogPosts = [
  {
    id: 1,
    title: "Next.js 15: The Ultimate Guide to New Features",
    excerpt:
      "Discover the groundbreaking features in Next.js 15, including improved App Router, enhanced performance optimizations, and new React capabilities.",
    content: `
      <p>Next.js 15 represents a significant leap forward in React development, bringing powerful new features that make building modern web applications easier and more efficient than ever before.</p>
      
      <h2>Enhanced App Router</h2>
      <p>The App Router continues to mature with Next.js 15, offering improved file-based routing, better TypeScript support, and enhanced developer experience. The new routing system provides more flexibility while maintaining the simplicity that makes Next.js so popular.</p>
      
      <h2>React Server Components by Default</h2>
      <p>Next.js 15 embraces React Server Components as the default, enabling better performance through server-side rendering and reduced client-side JavaScript. This architectural shift allows for faster page loads and improved SEO capabilities.</p>
      
      <h2>Turbopack Stability</h2>
      <p>Turbopack, the Rust-based bundler, reaches new levels of stability in Next.js 15. Experience lightning-fast development builds and hot module replacement that makes development a joy.</p>
      
      <h2>Improved Caching Strategy</h2>
      <p>Next.js 15 introduces a more intuitive caching system with better granular control over cache invalidation, making it easier to build dynamic applications while maintaining excellent performance.</p>
      
      <h2>Getting Started</h2>
      <p>Ready to upgrade? Next.js 15 includes an automated migration tool that helps you transition from previous versions while highlighting breaking changes and providing upgrade recommendations.</p>
    `,
    author: "Sarah Martinez",
    date: "2025-07-10",
    readTime: "6 min read",
    tags: ["Next.js", "React", "Performance", "SSR"],
    image: "/api/placeholder/800/400",
  },
  {
    id: 2,
    title: "Mastering Next.js Server Actions for Full-Stack Development",
    excerpt:
      "Learn how to build powerful full-stack applications using Next.js Server Actions without the need for separate API routes.",
    content: `
      <p>Server Actions in Next.js represent a paradigm shift in how we handle server-side logic, allowing developers to write backend functionality directly within their React components.</p>
      
      <h2>What are Server Actions?</h2>
      <p>Server Actions are asynchronous functions that run on the server and can be called directly from client components. They eliminate the need for traditional API routes in many scenarios, simplifying full-stack development.</p>
      
      <h2>Setting Up Server Actions</h2>
      <p>To use Server Actions, you need to mark your functions with the 'use server' directive. These functions can handle form submissions, database operations, and other server-side tasks seamlessly.</p>
      
      <h2>Form Handling Made Easy</h2>
      <p>Server Actions excel at handling form submissions. You can process form data, validate inputs, and update your database all within a single function, reducing boilerplate code significantly.</p>
      
      <h2>Progressive Enhancement</h2>
      <p>One of the key benefits of Server Actions is progressive enhancement. Forms work even when JavaScript is disabled, ensuring your application remains accessible and functional for all users.</p>
      
      <h2>Best Practices</h2>
      <p>Always validate input data, handle errors gracefully, and use revalidation to update your UI after mutations. Consider using TypeScript for better type safety with your Server Actions.</p>
    `,
    author: "Mike Chen",
    date: "2025-07-08",
    readTime: "8 min read",
    tags: ["Next.js", "Server Actions", "Full-Stack", "Forms"],
    image: "/api/placeholder/800/400",
  },
  {
    id: 3,
    title: "Optimizing Next.js Performance: Advanced Techniques",
    excerpt:
      "Deep dive into performance optimization strategies for Next.js applications, from image optimization to bundle analysis.",
    content: `
      <p>Performance is crucial for user experience and SEO. Next.js provides numerous built-in optimizations, but knowing how to leverage them effectively can make a significant difference in your application's performance.</p>
      
      <h2>Image Optimization with next/image</h2>
      <p>The Next.js Image component automatically optimizes images with lazy loading, responsive sizing, and modern formats like WebP. Learn how to configure it for maximum performance gains.</p>
      
      <h2>Code Splitting and Dynamic Imports</h2>
      <p>Next.js automatically splits your code, but you can take it further with dynamic imports. Load components only when needed to reduce initial bundle size and improve loading times.</p>
      
      <h2>Caching Strategies</h2>
      <p>Understanding Next.js caching layers - from browser cache to CDN cache - helps you build applications that load instantly for returning users while staying up-to-date.</p>
      
      <h2>Bundle Analysis</h2>
      <p>Use tools like @next/bundle-analyzer to identify large dependencies and optimize your bundle size. Sometimes a small change in imports can lead to significant size reductions.</p>
      
      <h2>Database Optimization</h2>
      <p>Optimize database queries, implement connection pooling, and use appropriate caching strategies to ensure your server-side performance matches your client-side optimizations.</p>
    `,
    author: "Emma Rodriguez",
    date: "2025-07-05",
    readTime: "10 min read",
    tags: ["Next.js", "Performance", "Optimization", "Bundle Analysis"],
    image: "/api/placeholder/800/400",
  },
  {
    id: 4,
    title: "Building Authentication in Next.js with NextAuth.js",
    excerpt:
      "Complete guide to implementing secure authentication in your Next.js applications using NextAuth.js with multiple providers.",
    content: `
      <p>Authentication is a critical component of most web applications. NextAuth.js provides a comprehensive solution for implementing authentication in Next.js applications with minimal configuration.</p>
      
      <h2>Setting Up NextAuth.js</h2>
      <p>NextAuth.js integrates seamlessly with Next.js API routes. Setup involves configuring providers, session management, and security options through a simple configuration file.</p>
      
      <h2>Multiple Authentication Providers</h2>
      <p>Support for OAuth providers like Google, GitHub, and Twitter, as well as email/password authentication. NextAuth.js handles the complexity of different authentication flows.</p>
      
      <h2>Session Management</h2>
      <p>NextAuth.js provides built-in session management with both JWT and database sessions. Choose the approach that best fits your application's requirements and security needs.</p>
      
      <h2>Protecting Routes</h2>
      <p>Learn how to protect both API routes and pages using NextAuth.js middleware and session checks. Implement role-based access control for more granular permissions.</p>
      
      <h2>Customization Options</h2>
      <p>Customize the authentication flow with custom pages, callbacks, and events. NextAuth.js is highly configurable while maintaining security best practices.</p>
    `,
    author: "David Park",
    date: "2025-07-03",
    readTime: "12 min read",
    tags: ["Next.js", "Authentication", "NextAuth.js", "Security"],
    image: "/api/placeholder/800/400",
  },
  {
    id: 5,
    title: "Next.js Deployment: From Development to Production",
    excerpt:
      "Master the deployment process for Next.js applications with Vercel, Docker, and other hosting platforms.",
    content: `
      <p>Deploying Next.js applications efficiently requires understanding different hosting options, optimization techniques, and best practices for production environments.</p>
      
      <h2>Vercel Deployment</h2>
      <p>Vercel offers the smoothest deployment experience for Next.js applications. Learn about automatic deployments, preview environments, and advanced configuration options.</p>
      
      <h2>Docker Deployment</h2>
      <p>Containerize your Next.js application with Docker for consistent deployments across different environments. Optimize your Docker images for faster builds and smaller sizes.</p>
      
      <h2>Static Export</h2>
      <p>For certain use cases, you can export your Next.js application as static files. Understand when this approach works and how to configure it properly.</p>
      
      <h2>Environment Variables</h2>
      <p>Properly manage environment variables for different deployment stages. Learn about Next.js built-in environment variable support and security considerations.</p>
      
      <h2>Monitoring and Analytics</h2>
      <p>Set up monitoring, error tracking, and analytics for your production Next.js application. Use tools like Vercel Analytics or integrate with external services.</p>
    `,
    author: "Lisa Thompson",
    date: "2025-07-01",
    readTime: "9 min read",
    tags: ["Next.js", "Deployment", "DevOps", "Production"],
    image: "/api/placeholder/800/400",
  },
];

export function getBlogPost(id) {
  return blogPosts.find((post) => post.id === parseInt(id));
}

export function getAllBlogPosts() {
  return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

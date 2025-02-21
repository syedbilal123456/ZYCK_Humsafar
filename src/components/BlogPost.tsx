import BlogCard from './BlogCard';

interface BlogPost {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  link: string;
}

const BlogPost = () => {
  const blogPosts: BlogPost[] = [
    {
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Wedding Tips",
      title: "10 Essential Tips for Planning Your Dream Wedding",
      excerpt: "Planning a wedding can be overwhelming, but with these expert tips, you'll be able to create the perfect celebration that reflects your love story...",
      readTime: "5 min read",
      date: "Mar 15, 2024",
      link: "#wedding-tips"
    },
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Relationships",
      title: "Building a Strong Foundation: Communication in Marriage",
      excerpt: "Discover the key elements of effective communication that can help strengthen your relationship and create a lasting bond with your partner...",
      readTime: "4 min read",
      date: "Mar 12, 2024",
      link: "#relationships"
    },
    {
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Success Stories",
      title: "From Match to Marriage: Sarah & John's Love Story",
      excerpt: "Read the heartwarming journey of how Sarah and John found each other through our platform and built their beautiful life together...",
      readTime: "6 min read",
      date: "Mar 10, 2024",
      link: "#success-stories"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 border-t border-gray-200">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-700">Latest Blog</span>{' '}
          <span className="text-pink-500">Posts</span>
        </h2>
        <div className="flex justify-center items-center gap-4">
          <div className="h-px bg-pink-500 w-12"></div>
          <div className="text-pink-500">❤</div>
          <div className="h-px bg-pink-500 w-12"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPost;

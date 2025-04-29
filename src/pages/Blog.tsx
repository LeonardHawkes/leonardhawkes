import React from "react";
import "./Blogs.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How NLP & LLMs Are Reshaping Finance",
      date: "April 2025",
      excerpt: "An exploration of how Natural Language Processing and Large Language Models are revolutionizing the financial industry through improved analysis, automation, and customer service.",
      link: "https://medium.com/@leonardhawkesjr/how-nlp-llms-are-reshaping-finance-c82afeda5990",
      image: "/images/nlp-finance.jpg", // You'll need to add this image to your public/images folder
      tags: ["NLP", "Finance", "Machine Learning", "LLMs"]
    }
    // You can add more blog posts here as you publish them
  ];

  return (
    <div className="blog-container">
      <section className="blog-header">
        <h1>Blog & Speaking</h1>
        <p>Thoughts, articles, and talks about technology, development, and more.</p>
      </section>

      <section className="blog-posts">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-content">
              <header>
                <span className="date">{post.date}</span>
                <h2>{post.title}</h2>
              </header>
              <p className="excerpt">{post.excerpt}</p>
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="actions">
                <li>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="button">
                    Read on Medium
                  </a>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </section>
      
      <section className="upcoming-talks">
        <h2>Upcoming Speaking Engagements</h2>
        <p>Stay tuned for information about future talks and presentations.</p>
        {/* Add speaking engagements here when you have them */}
      </section>
    </div>
  );
};

export default Blog;
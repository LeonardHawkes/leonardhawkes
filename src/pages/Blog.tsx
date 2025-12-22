import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How NLP & LLMs Are Reshaping Finance",
      date: "April 2025",
      excerpt: "An exploration of how Natural Language Processing and Large Language Models are revolutionizing the financial industry through improved analysis, automation, and customer service.",
      link: "/blog/nlp-llms-reshaping-finance",
      isInternal: true,
      image: "/images/nlp-finance.jpg",
      tags: ["NLP", "Finance", "Machine Learning", "LLMs"]
    }
    // You can add more blog posts here as you publish them
  ];

  return (
    <div className="blog-container">
      <section className="blog-header">
        <h1>Writing & Speaking</h1>
        <p>
          Articles and talks by Leonard Hawkes on software engineering, artificial intelligence,
          fintech, and building real-world applications.
        </p>
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
                  {post.isInternal ? (
                    <Link to={post.link} className="button">
                      Read Article
                    </Link>
                  ) : (
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="button">
                      Read on Medium
                    </a>
                  )}
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

      <section className="about-link">
        <Link to="/" className="button">About Leonard Hawkes</Link>
      </section>
    </div>
  );
};

export default Blog;
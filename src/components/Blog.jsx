const Blog = ({ title, blogs }) => {
  return (
    <div className="blogWarpper">
      <h4>{title}</h4>
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="post">
            <strong>Uploaded By {blog.author}</strong>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;

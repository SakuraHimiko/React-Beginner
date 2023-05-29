import Blog from "./Blog";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const {
    data: posts,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="">
      {console.log(error)}
      {error && <div>{error}</div>}
      {pending && <div>Loading {[".", ".", ".", "."].join("")}</div>}
      {posts && <Blog blogs={posts} title={"Hey it's bad you kow?"} />}
    </div>
  );
};

export default Home;

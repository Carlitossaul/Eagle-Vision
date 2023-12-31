// CSS
import styles from "./Home.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";

// react
import { useState } from "react";

// components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      <h1>Check out our most recent posts</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Or search by tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn">Search</button>
      </form>
      <div className="post-list">
        {loading && <p>Loading...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>No posts were found</p>
            <Link to="/posts/create" className="btn">
              Create first post
            </Link>
          </div>
        )}
        {posts &&
          posts
            .slice(0, 30)
            .map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;

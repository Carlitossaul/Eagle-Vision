// CSS
import styles from "./Post.module.css";

// hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.containerPost}>
      <div className={styles.post_container}>
        {post && (
          <>
            <h1>{post.title}</h1>
            <img className={styles.image} src={post.image} alt={post.title} />
            <div className={styles.body}>
              {post.body.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <h3>This post is about:</h3>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <p key={tag}>
                  <span>#</span>
                  {tag}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;

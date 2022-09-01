import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";


const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <h3>{post.content.substring(0, 100)}</h3>
        </article>
    ))

  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList
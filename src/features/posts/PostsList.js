import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from "./postsSlice";
import { useEffect } from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


const PostsList = () => {
    const dispatch = useDispatch

    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <h3>{post.content.substring(0, 100)}</h3>
            <p className="postCredit" >
                <PostAuthor userid={post.userId} />
                <TimeAgo  timestamp={post.date}/>
            </p>
            <ReactionButtons post={post} />
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
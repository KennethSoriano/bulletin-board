import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
        <h3>{post.title}</h3>
        <h3>{post.content.substring(0, 100)}</h3>
        <p className="postCredit" >
            <PostAuthor userid={post.userId} />
            <TimeAgo  timestamp={post.date}/>
        </p>
        <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt

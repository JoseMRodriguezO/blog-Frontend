export function PostsShow(props) {
  return (
    <div>
      <h2>Title{props.post.title}</h2>
      <p>Boby:{props.post.body}</p>
    </div>
  );
}

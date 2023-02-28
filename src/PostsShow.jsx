export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Post information</h1>
      <h2>Title{props.post.title}</h2>
      <p>Boby:{props.post.body}</p>
      <p> Image:{props.post.image}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body
          <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}

export function PostsShow(props) {
  return (
    <div>
      <h1>Post information</h1>
      <h2>Title{props.post.title}</h2>
      <p>Boby:{props.post.body}</p>
      <p> Image:{props.post.image}</p>

      <form>
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

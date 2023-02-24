export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>

      <form></form>
      <div>
        Title: <input className="form-control" type="text" />
      </div>
      <div>
        Body: <input className="form-control" type="text" />
      </div>
      <div>
        Image: <input className="form-control" type="text" />
      </div>
      <button className="btn btn-primary mt-2" type="submit">
        Send new post
      </button>
    </div>
  );
}

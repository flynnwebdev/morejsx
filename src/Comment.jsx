function isBanned(text) {
  return text.match(/banana/);
}

const Comment = ({ avatar, author, date, text }) => {
  return !isBanned(text) ? (
      <article className="comment">
        <a href="/">
          <img src={avatar} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author || "Unknown"}
          </a>
          <p className="date">{date}</p>
          <p className="text">{text}</p>
        </div>
      </article>
    ) : (
      <h4>Comment banned!</h4>
    )
};

export default Comment;

import Card from "./Card";
import Comment from "./Comment";

const App = () => {
  return (
    <section className="comments">
      <Card>
        <h1>Comments</h1>
        <p>Hello</p>
      </Card>
      <Card>
        <Comment
          author="Mary Jones"
          date="11/12 6:00pm"
          text="This is cool!"
          avatar={"https://i.pravatar.cc/50?" + Math.random()}
        />
      </Card>
      <Card>
        <Comment
          author="Joe Bloggs"
          date="07/12 1:00pm"
          text="Love this blog!"
          avatar={"https://i.pravatar.cc/50?" + Math.random()}
        />
      </Card>
      <Card>
        <Comment
          author="Jill Smith"
          date="01/12 9:00am"
          text="I like banana !!!"
          avatar={"https://i.pravatar.cc/50?" + Math.random()}
        />
      </Card>
    </section>
  );
};

export default App;

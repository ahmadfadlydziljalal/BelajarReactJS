const reactCreateElement = React.createElement;

// Display a "Like" <button>

function LikeButton() {
  return reactCreateElement(
    "button",
    {
      onClick: () => alert("clicked"),
    },
    "Like This"
  );
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(reactCreateElement(LikeButton), domContainer);

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export function ItemsShow(props) {
  // const form = document.createElement("form");
  // const btn = document.createElement("button");
  // form.appendChild(btn);
  // btn.innerHTML = "Submit";
  // btn.addEventListener("click", () => {
  //   console.log("form submitted");
  // });
  // document.body.appendChild(form);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const params = new FormData(event.target);
  //   console.log("handleSubmit", params);
  //   props.OnCreateFavorite(params);
  //   event.target.reset();
  // };

  const handleAddClick = (event) => {
    // props.onAddToFavorite(props.post);
  };

  return (
    <>
      <div>
        <h1>Items Show</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <ul>
          <h3>Title: {props.item.name}</h3>
          <ul>
            <img src={props.item.image_url} width="300" />
            <br />
            Genre: {props.item.category}
          </ul>
          <ul>{props.item.description}</ul>
        </ul>
        {/* <input type="hidden" name="user_id" value={localStorage.user_id} />
        <input type="hidden" name="item_id" value={props.item.id} /> */}

        {/* <button type="submit">Add To Favorite</button>
        </form> */}
      </div>
    </>
  );
}

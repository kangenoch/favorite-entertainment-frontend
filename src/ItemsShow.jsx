/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export function ItemsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    //props.onUpdatePost(props.item.id, params);
    event.target.reset();
  };

  return (
    <>
      <div>
        <h1>Items Show</h1>
        <ul>
          <h3>Title: {props.item.name}</h3>
        </ul>
      </div>
    </>
  );
}

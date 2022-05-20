import React from "react";

export const Item = (props) => {
  // TODO: answer here
  const [item, setItem] = React.useState(0);

  const onClickButton = (type) => {
    switch (type) {
      case "plus":
        if (props.total < 10) {
          props.setTotal((total) => total + 1);
          setItem((prev) => prev + 1);
        } else props.showAlert(true);
        break;
      case "minus":
        // if (props.total > 0) {
        props.setTotal((total) => total - 1);
        setItem((prev) => prev - 1);
        // }
        break;
      default:
        break;
    }
  };

  return (
    <div className="each-box">
      <img src={props.image} alt="each-item" />
      <p>{props.title}</p>
      <div>
        <button
          aria-label={`minus-button-${props.id}`}
          onClick={() => {
            // TODO: answer here
            onClickButton("minus");
          }}
        >
          -
        </button>
        <input
          type="text"
          aria-label={`item-${props.id}`}
          className={`item-${props.id}`}
          value={item}
          disabled
        ></input>
        <button
          aria-label={`add-button-${props.id}`}
          onClick={() => {
            // TODO: answer here
            onClickButton("plus");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

function App() {
  //Add state for total
  // TODO: answer here
  const [total, setTotal] = React.useState(0);

  const dataDummy = [
    {
      id: "1",
      image: "https://picsum.photos/id/0/150/",
      title: "Laptop",
    },
    {
      id: "2",
      image: "https://picsum.photos/id/1010/150/",
      title: "Buku",
    },
    {
      id: "3",
      image: "https://picsum.photos/id/103/150/",
      title: "Sepatu",
    },
  ];

  const showAlert = (isShow, description = "Ups, udah kelebihan yaa") => {
    if (isShow) {
      alert(description);
    }
  };

  return (
    <div className="state-props-2" aria-label="AppRoot">
      <h3>Keranjang Belanja</h3>
      <div className="box-container">
        {dataDummy.map((element) => (
          // TODO: answer here
          <Item
            title={element?.title}
            image={element?.image}
            id={element?.id}
            total={total}
            setTotal={setTotal}
            showAlert={showAlert}
          />
        ))}
      </div>
      <div className="end-section">
        <h4>
          Kamu udah masukin&nbsp;
          <span className="total-item" aria-label="total-item">
            {total}
          </span>
          &nbsp; barang
        </h4>
      </div>
    </div>
  );
}

export default App;

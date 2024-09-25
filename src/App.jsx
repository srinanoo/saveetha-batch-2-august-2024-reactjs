function App() {
  let num = 10;
  let str = "Dinesh";
  let bool = false;
  let arr = [1, 2, 3, 4, 5];
  let obj = {
    "id": 1,
    "name": "Dinesh"
  };
  let menus = ["Home", "About", "Contact", "Blog"];

  let output = [];
  for(let i = 0; i < menus.length; i++) {
    output.push(<li key={i}>{menus[i]}</li>);
  }
  console.log(output);

  return (
    <div>
      <h1>Vite Project</h1>

      {/* <p>Number: {num}</p>
      <p>String: {str}</p>
      <p>Boolean: {bool.toString()}</p>
      <p>Array: {arr}</p>
      <p>Object: {obj.id}, {obj.name}</p> */}

      {/* <ul>
      {
        menus.map((v, i) => {
          return (
            <li key={i}>
              {v}
              <div>Something...</div>
              <p>something...</p>
            </li>
          )
        })
      }
      </ul>

      <ul>
      {
        menus.map((v, i) => <li key={i}>{v}</li>)
      }
      </ul>

      <ul>
        {output}
      </ul> */}

      {
        (bool)
          ?
            <>
              <p>satisfied</p>
              <p>satisfied</p>
            </>
          :
            <p>not satisfied</p>
      }

      {
        bool && <p>logically satisfied</p>
      }
    </div>
  )
}

export default App;
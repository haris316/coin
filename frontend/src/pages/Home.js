import React from "react";
import "./Home.css";

function Home() {
  const data = [
    {
      id: 1,
      coin_name: "Shiba Inu",
      total_holders: 100,
      market_cap: 100,
      price: 100,
      age: 10,
      image:
        "https://th.bing.com/th/id/OIP.2giWv7wSimavrw-8EVW-0QHaF7?pid=ImgDet&rs=1",
      votes: 10000,
    },
    {
      id: 2,
      coin_name: "Bitcoin",
      total_holders: 200,
      market_cap: 200,
      price: 200,
      age: 20,
      image:
        "https://th.bing.com/th/id/OIP.2giWv7wSimavrw-8EVW-0QHaF7?pid=ImgDet&rs=1",
      votes: "Promote",
    },
    {
      id: 3,
      coin_name: "Ethereum",
      total_holders: 5,
      market_cap: 2000000,
      price: 5000,
      age: 3566,
      image:
        "https://th.bing.com/th/id/OIP.2giWv7wSimavrw-8EVW-0QHaF7?pid=ImgDet&rs=1",
      votes: 200,
    },
    {
      id: 4,
      coin_name: "Dodge Coin",
      total_holders: 500,
      market_cap: 500,
      price: 500,
      age: 50,
      image:
        "https://th.bing.com/th/id/OIP.2giWv7wSimavrw-8EVW-0QHaF7?pid=ImgDet&rs=1",
      votes: 50000,
    },
    {
      id: 5,
      coin_name: "Benazir",
      total_holders: 3600,
      market_cap: 3600,
      price: 3600,
      age: 360,
      image:
        "https://th.bing.com/th/id/OIP.2giWv7wSimavrw-8EVW-0QHaF7?pid=ImgDet&rs=1",
      votes: 360000,
    },
  ];

  const listCoin = () => {
    return (
      <>
        <div className="one_coin_row" style={{ backgroundColor: "#212529" }}>
          <div className="one_coin_rowtop">Coin</div>
          <div className="one_coin_rowtop">Total Holders</div>
          <div className="one_coin_rowtop">Market Cap</div>
          <div className="one_coin_rowtop">Price</div>
          <div className="one_coin_rowtop">Age</div>
          <div className="one_coin_rowtop">Votes</div>
        </div>
        {data.map((item) => {
          return (
            <>
              <div
                className="one_coin_row"
                style={
                  item.id % 2 === 0
                    ? { backgroundColor: "#212529" }
                    : { backgroundColor: "#2c3034" }
                }
              >
                <div className="one_coin_item" style={{justifyContent:"left"}}>
                  <img className="one_coin_icon" src={item.image} />
                  {item.coin_name}
                </div>
                <div className="one_coin_item">{item.total_holders}</div>
                <div className="one_coin_item">{item.market_cap}</div>
                <div className="one_coin_item">{item.price}</div>
                <div className="one_coin_item">{item.age}</div>
                <div className="one_coin_item">
                  {" "}
                  <div
                    className="one_coin_votes"
                    style={
                      item.votes === "Promote"
                        ? { backgroundColor: "#e94b73", cursor:"pointer" }
                        : {}
                    }
                  >
                    {item.votes}{" "}
                  </div>{" "}
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="one_section">
          <div className="section_header">Promoted Coins</div>
          <div className="one_table">{listCoin()}</div>
        </div>
      </div>
    </>
  );
}

export default Home;

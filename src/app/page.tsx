"use client";

import { useSuiClient } from "@mysten/dapp-kit";
import { SuiObjectResponse } from "@mysten/sui/client";
import { useState } from "react";

export default function Home() {
  const [dataValue, setDataValue] = useState<SuiObjectResponse[]>([]);
  const client = useSuiClient();

  const someFunc = async () => {
    const data = await client.getOwnedObjects({
      owner:
        "0xacd8e7b8e4e500be3c528c54a7f717df00497d68f959fd3dc83c2d043a9b98bc",
    });

    console.log(data);
    setDataValue(data.data);
  };

  return (
    <div>
      <div className="m-20">
        <h1>Welcome Dwellir support individual</h1>

        <p>
          Open up your browser console and than click on the button to see the
          CORS error
        </p>

        <button onClick={someFunc} style={{ border: "3px solid black" }}>
          Click me
        </button>
      </div>
      {dataValue &&
        dataValue.map((item) => (
          <div key={item.data?.objectId}>
            <h2>Token id: {item.data?.objectId}</h2>
            <p>Token type: {item.data?.type}</p>
          </div>
        ))}
    </div>
  );
}

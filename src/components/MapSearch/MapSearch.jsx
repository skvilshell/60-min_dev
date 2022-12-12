import React, { useState } from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
const src =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const TOKEN = "d9be1b372acb04899e95d67f287374e142b7f56a";
export default function MapSearch() {
  const [value, setValue] = useState();
  return (
    <AddressSuggestions
      token="95710b352d08706bda4e292dce424683c801ab88"
      value={value}
      onChange={setValue}
    />
  );
}

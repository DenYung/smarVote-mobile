import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const actions = [
  {
    text: "add poll options field",
    name: "add",
    position: 1,
    icon: <Ionicons name="ios-options-outline" color="#fff" size="2rem" />,
  },
  {
    text: "view all polls",
    name: "view",
    position: 2,
    icon: <Ionicons name="analytics" color="#fff" size="2rem" />,
  },
];



export { actions };

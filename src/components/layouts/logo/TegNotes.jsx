import {  IconLicense } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const TegNotes = () => {
  return (
    <Link
      to={"/"}
      style={{
        display: "flex",
        textDecoration: "none",
        alignItems: "center",
        paddingRight: "25px",
        paddingLeft: "5px",
      }}
    >

      <IconLicense size={45} color="rgb(51, 154, 240)" stroke={2} />

      <span
        style={{
          marginLeft: "3px",
          fontWeight: "bolder",
          fontSize: 19,
          color: "rgb(51, 154, 240)",
        }}
      >
        TegNote
      </span>
    </Link>
  );
};

export default TegNotes;

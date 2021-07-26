import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonComponent({ onClick, content, className }) {
  return (
    <Button
      className={className}
      onClick={onClick}
      variant="contained"
      color="primary"
    >
      {content}
    </Button>
  );
}

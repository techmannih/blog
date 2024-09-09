import React from "react";
import { Button } from "@/components/ui/button";

const CustomButton = ({ onClick, type = "button", children, variant }) => {
  return (
    <Button onClick={onClick} type={type} variant={variant}>
      {children}
    </Button>
  );
};

export default CustomButton;

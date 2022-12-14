import { IStyles } from "src/common/interfaces";

const styles: IStyles = {
  modal: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    width: "300px",
    height: "200px",
    boxShadow: 24,
    outline: "none",
    borderRadius: 2,
  },
  innerContainer: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    position: "absolute",
    right: 4,
    top: 5,
  },
};

export default styles;

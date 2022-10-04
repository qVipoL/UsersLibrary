import { IStyles } from "src/common/interfaces";

const styles: IStyles = {
  modal: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    width: "20%",
    height: "20%",
    boxShadow: 24,
    outline: "none",
    borderRadius: 5,
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

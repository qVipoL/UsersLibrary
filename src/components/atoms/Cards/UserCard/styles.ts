import { IStyles } from "src/common/interfaces";

const styles: IStyles = {
  card: {
    m: 2,
    borderRadius: 5,
    maxWidth: "300px",
    minWidth: "300px",
    height: "330px",
    position: "relative",
  },
  avatar: {
    position: "absolute",
    top: 5,
    left: "33%",
    width: "100px",
    height: "100px",
  },
  cardContent: {
    mt: 5,
  },
  cardTitle: {
    fontSize: "18px",
    textAlign: "center",
    fontWeight: "600",
  },
  cardSubtitle: {
    fontSize: "16px",
    textAlign: "center",
    fontWeight: "500",
    color: "text.secondary",
  },
  cardBody: {
    mt: 2,
    fontSize: "17px",
    textAlign: "center",
    fontWeight: "500",
  },
  cardFooter: {
    mt: 1,
    fontSize: "12px",
    color: "text.secondary",
    textAlign: "center",
  },
  cardButton: {
    mt: 2,
  },
};

export default styles;

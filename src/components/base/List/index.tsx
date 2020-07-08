import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      overflow: "scroll",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    nested: {
      paddingLeft: theme.spacing(4),

      color: theme.palette.primary.main,
    },
  })
);

const NestedList: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {children}
    </List>
  );
};

export default NestedList;

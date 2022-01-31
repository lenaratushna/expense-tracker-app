import React, { useContext } from "react";
import {
  Avatar,
  IconButton,
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete, AttachMoney, MoneyOff } from "@material-ui/icons";

import { ExpenseTrackerContext } from "../../../context/context";
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                {(transaction.type === "Income" && <AttachMoney />) || <MoneyOff/>}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTransaction(transaction.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;

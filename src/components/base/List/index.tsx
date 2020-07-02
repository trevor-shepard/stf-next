import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			backgroundColor: theme.palette.background.paper,
			overflow: 'scroll'
		},
		nested: {
			paddingLeft: theme.spacing(4),
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			color: theme.palette.primary.main
		}
	})
);

export default function NestedList({children}) {
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
}

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
			paddingLeft: theme.spacing(4)
		}
	})
);

export default function NestedList({children, title}) {
	const classes = useStyles();
	return (
		<List
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader component="div" id="nested-list-subheader">
					{title}
				</ListSubheader>
			}
			className={classes.root}
		>
			{children}
		</List>
	);
}

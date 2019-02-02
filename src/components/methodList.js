import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
    root: {
        width: '100%',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        backgroundColor: theme.palette.background.paper,
    },
});


function methodList(props) {
    const { classes, content } = props;

    var contentList = content.map((item, index) => {
        return (
            
            <ListItem button key={index} >
                    <ListItemText primary={item} />
                </ListItem>
        )
    });

    return (
        <div className={classes.root} >
            
            <List component="nav">
                {contentList}
            </List>
        </div>
    );
}

methodList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(methodList);

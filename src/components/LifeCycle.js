import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { Consumer } from './context';
import MethodList from './methodList';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '100%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

function Mount(props) {
    const { classes, phase } = props;
    let path;

    const panel = (
        <Consumer>
            {
                (data) => {
                    
                    if(phase === 'mount'){
                        path = data.mount.methods;
                    } else if (phase === 'update') {
                        path = data.update.methods;
                    }else {
                        path = data.unmount.methods;
                    }
                    var panelList = path.map((item, index) => {

                        return (
                            <ExpansionPanel key={index}>

                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <div className={classes.column}>
                                        <Typography className={classes.heading}>{item.name}</Typography>
                                    </div>
                                    <div className={classes.column}>
                                        <Typography className={classes.secondaryHeading}>{item.times}</Typography>
                                    </div>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails className={classes.details}>
                                    {/* <div className={classes.column} /> */}
                                    <div className={classes.column}>
                                        <MethodList content={item.content} />
                                    </div>
                                    <div className={classNames(classes.column)}>
                                        <Card className={classes.card} style={{ width: '80%', 'margin':'0 12%'}}>
                                            <CardContent style={{padding:'0px'}}>
                                                <img src={process.env.PUBLIC_URL + item.img} alt="constructor" style={{ width: '100%', display: 'block'}}/>
                                            </CardContent>
                                        </Card>
                                        
                                    </div>  
                                </ExpansionPanelDetails>

                                <Divider />

                            </ExpansionPanel>
                        )

                    })
                    return panelList;
                }
            }
        </Consumer>
    );
    const mount = (<div style={{ margin: "20px auto", fontSize: '14px' }}>
                        A component mounts when it is created and first inserted into the DOM i.e when it is rendered for the first time. The methods that are available during this period are:
                    </div>);
    const update = (<div style={{ margin: "20px auto", fontSize: '14px' }}>
                        Components do not always remain in the same state after mounting. Sometimes the underlying props could change and the component has to be re-rendered. The updating lifecycle methods give you control over when and how this updating should take place.
                        There are five updating lifecycle methods and they are called in the order they appear below:
                    </div>);

    const unmount = (<div style={{ margin: "20px auto", fontSize: '14px' }}>
                        Components do not always stay in the DOM. Sometimes they have to be removed due to changes in state or something else. The unmounting method will help us handle unmounting of components. We say method because there is just one method as at React 16.
                    </div>);
    return (

        <div className={classes.root}>

            {
                phase === 'mount' ? mount :
                phase === 'update'? update :
                phase === 'unmount' &&  unmount 

            }
                
            {
                panel
            }
        </div>
    );
}

Mount.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mount);

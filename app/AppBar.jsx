import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

import DrawerUndocked from './AppDrawer.jsx';

const iconStyles = {
  marginRight: 24,
};

export default class AppBarReact extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    // let AppDrawerUn = () => {
    //   if (this.state.open) {
    //     return <DrawerUndocked open={true} />;
    //   }
    //   else {
    //     return <DrawerUndocked open={true} />;
    //   }
    // }

    return (
      <div>
        <AppBar
          title="HR Status"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementLeft={<IconButton iconClassName="fa fa-bars" onClick={() => this.setState({ open: !this.state.open })} />}
          />
        <Drawer open={this.state.open}>
          <AppBar onClick={() => this.setState({ open: !this.state.open })} title="HR Status" />
          <MenuItem onClick={() => this.setState({ open: !this.state.open })}>Menu Item</MenuItem>
          <MenuItem onClick={() => this.setState({ open: !this.state.open })}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

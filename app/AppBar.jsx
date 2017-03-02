import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import DrawerUndocked from './AppDrawer.jsx';

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
          iconElementLeft={<RaisedButton label="Open Drawer" onClick={() => this.setState({ open: true })} />}
          />
        <DrawerUndocked open={!this.state.open} />
      </div>
    );
  }
}

import React, { Component } from "react";
import { Div } from "../../assets/style";
import { Route, Switch, Redirect } from "react-router-dom";

//图标

import Frame from "../Frame/addFrame";
import FrameList from "../Frame/frameList";
import AddUser from "../User/addUser";
import UserList from "../User/userList";
import MachineNumber from "../MachineNumber/machineNumber";
import Work from "../Work/work";

import AddMine from "../AddMine/addMine";
import MineList from "../MineList/mineList";
import AmmeterLevel from "../AmmeterLevel/ammeterLevel";
import AmmeterList from "../AmmeterList/ammeterList";
import Recording from "../Recording/recording";
import RecordingList from "../RecordingList/recordingList";

class Home extends Component {
  render() {
    return (
      <Div>
        <Switch>
          <Route path="/addframe" component={Frame}></Route>
          <Route path="/adduser" component={AddUser}></Route>
          <Route path="/userlist" component={UserList}></Route>
          <Route path="/machinenumber" component={MachineNumber}></Route>
          <Route path="/work" component={Work}></Route>
          <Route path="/framelist" component={FrameList}></Route>

          <Route path="/addmine" component={AddMine} />
          <Route path="/minelist" component={MineList} />
          <Route path="/ammeterlevel" component={AmmeterLevel} />
          <Route path="/ammeterlist" component={AmmeterList} />
          <Route path="/recording" component={Recording} />
          <Route path="/recordinglist" component={RecordingList} />
          <Redirect to="/addframe" />
        </Switch>
      </Div>
    );
  }
}
export default Home;

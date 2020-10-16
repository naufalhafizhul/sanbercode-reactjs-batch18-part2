import React from "react";
import {
  BrowserRouter as Routes,
  Switch,
  Route,
} from "react-router-dom";
import Form from '../Tugas-9/tugas9'
import Tampil from '../Tugas-10/tugas10'
import Timer from '../Tugas-11/tugas11'
import TabelBuah from '../Tugas-12/tugas12'
import Tugas13 from '../Tugas-13/tugas13'
import Buah from '../Tugas-14/tugas14'


const Routes = () => {

    return (
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/Tugas-9">
          <Form />
        </Route>
        <Route path="/Tugas-10">
          <Tampil />
        </Route>
        <Route exact path="/Tugas-11">
          <Timer />
        </Route>
        <Route exact path="/Tugas-12">
          <TabelBuah />
        </Route>
        <Route exact path="/Tugas-13">
          <Tugas13 />
        </Route>
        <Route exact path="/Tugas-14">
          <Buah />
        </Route>
      </Switch>
    );
  };
  
  export default Routes;
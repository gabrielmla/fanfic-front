import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Grid padded>
          <Grid.Column floated="left">
            <Button
              icon
              color="purple"
              labelPosition="left"
              floated="left"
              color="violet"
            >
              <Icon name="book" />
              Ficcer
            </Button>
          </Grid.Column>
          <Grid.Column floated="right">
            <Button icon circular floated="right" primary>
              <Icon name="user" />
            </Button>
          </Grid.Column>
        </Grid>
        <Divider fitted />
      </div>
    );
  }
}

export default Navbar;

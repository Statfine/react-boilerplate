import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import styled from 'styled-components';

const Container = styled.div`
  width: 1200px;
  margin: 20px auto;
`;

const OverridesBtn = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border-radius: 13;
  border: 0;
  color: white;
  height: 48;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

export default class MaterialPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      select: '',
      tabValue: 0,
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleChangeTab = (event, value) => {
    this.setState({ tabValue: value });
  }
  render() {
    const { select, tabValue } = this.state;
    return (
      <Container>
        <div>1</div>
        <DeleteIcon />
        <Badge badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <OverridesBtn>
          Primary
        </OverridesBtn>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <FormControl>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={select}
            onChange={this.handleChange}
            inputProps={{
              name: 'select',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <div>
          <AppBar position="static">
            <Tabs value={tabValue} onChange={this.handleChangeTab}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" href="#basic-tabs" />
            </Tabs>
          </AppBar>
          {tabValue === 0 && <div>Item One</div>}
          {tabValue === 1 && <div>Item Two</div>}
          {tabValue === 2 && <div>Item Three</div>}
        </div>
      </Container>
    );
  }
}

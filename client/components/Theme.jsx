import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const colors = {
  black: '#444',
  white: '#FFF',
  lightGrey: '#F5F5F6',
  grey: '#E1E2E1',
  primary: '#c4c9e8',
  primaryLight: '#f7fcff',
  primaryDark: '#9398b6',
  secondary: '#5c6bc0',
  secondaryLight: '#8e99f3',
  secondaryDark: '#26418f',
};

const light = {
  palette: {
    textColor: colors.black,
    alternateTextColor: colors.black,
    canvasColor: colors.lightGrey,
    borderColor: colors.grey,
    primary1Color: colors.primary,
    primary2Color: colors.primaryDark,
    primary3Color: colors.primaryLight,
    accent1Color: colors.secondary,
    accent2Color: colors.secondaryLight,
    accent3Color: colors.secondaryDark,
  },
};

const Light = props => (
  <MuiThemeProvider muiTheme={getMuiTheme(light)}>
    <div className="light">{props.children}</div>
  </MuiThemeProvider>
);

Light.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]).isRequired,
};

export default Light;

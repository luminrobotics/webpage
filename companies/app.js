'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _MaterialUI = MaterialUI,
    Paper = _MaterialUI.Paper,
    Typography = _MaterialUI.Typography,
    Link = _MaterialUI.Link,
    Button = _MaterialUI.Button;


import data from './data.js';
import CompanyCard from './company_card.js';

var MAILTO = 'mailto:data@luminrobotics.com?subject=UV%20Robots%20list';

var styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '94vw'
  },
  cardWrapper: {
    flex: '0 0 auto',
    margin: '1em'
  },
  intro: {
    margin: '2em'
  },
  introText: {
    padding: '2em',
    marginTop: '1em'
  },
  controls: {
    margin: '1em'
  },
  add: {
    width: 300,
    height: 400,
    fontSize: '24px'
  },
  groupHeader: {
    width: '100%',
    margin: '0em 0em 0em 2em',
    padding: '0.5em',
    borderTop: '1px solid #e0e0e0'
  }
};

var Data = function Data(_ref) {
  var data = _ref.data,
      groupBy = _ref.groupBy;

  var grouped = groupBy ? _.groupBy(data, function (c) {
    return c[groupBy];
  }) : { 'All': data };

  return _.map(grouped, function (group, key) {
    return React.createElement(
      React.Fragment,
      null,
      key && React.createElement(
        'div',
        { style: styles.groupHeader },
        React.createElement(
          Typography,
          { variant: 'h6', gutterBottom: true },
          key
        )
      ),
      group.map(function (company, i) {
        return React.createElement(
          'div',
          { style: styles.cardWrapper },
          React.createElement(CompanyCard, Object.assign({}, company, { number: i + 1 }))
        );
      })
    );
  });
};

var App = function App() {
  // const [pressed, setPressed] = React.useState(false);
  //
  // if (pressed) {
  //   return 'pressed!';
  // }
  // <Button variant="contained" color="primary" onClick={() => setPressed(true)}>
  //   Like
  var _React$useState = React.useState('location'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      groupBy = _React$useState2[0],
      setGroupBy = _React$useState2[1];

  return React.createElement(
    'div',
    { style: styles.page },
    React.createElement(
      'div',
      { style: styles.intro },
      React.createElement(
        Link,
        { href: '/' },
        '\xAB back to homepage'
      ),
      React.createElement(
        Paper,
        { style: styles.introText },
        React.createElement(
          Typography,
          { variant: 'h4', gutterBottom: true },
          'UV Robots'
        ),
        React.createElement(
          Typography,
          { variant: 'body1', gutterBottom: true },
          'The COVID-19 pandemic has generated renewed interest in ultraviolet light (UV) for disinfection. UV-C light, and specifically UV-C in the 254nm range, has been used since the 1960\'s in hospitals to disinfect rooms after patient discharge. UV-C has shown to be effective against a long list of pathogens. The irradiance required to neutralize different pathogens varies widely, with bacteria, especially "super-bugs" like C.diff, requiring the most power and time. Fortunately single-stranded viruses like influenza and SARS-CoV-2 require relatively little power (around 6mJ/cm\xB2 for a 2-log reduction, i.e., 99% kill rate).'
        ),
        React.createElement(
          Typography,
          { variant: 'body1', gutterBottom: true },
          'To effectively disinfect in-door spaces like hotel rooms, warehouses, and schools it is essential to move the light source around in the space. This is necessary for effectiveness and efficiency: to avoid shadowing and because the intensity of the light reduces quadratically with distance. However, since UV-C light is harmful to humans, it is not possible to have a person push or carry the light source through the space. This is what gives rise to the idea of letting a robot perform this task.'
        ),
        React.createElement(
          Typography,
          { variant: 'body1', gutterBottom: true },
          'We are encouraged by the number of start-ups and existing companies that have stepped up to the challenge all around the world and put together a robotic UV solution in a very short amount of time. This is a shout-out to these companies whose images and links we maintain below. We will keep adding to this list as we hear about others. Some of these robots are just concepts, others are prototypes, and some are already in operation. But all of them pursue the same goal: make everyday places safer for people! '
        ),
        React.createElement(
          Typography,
          { variant: 'body1', gutterBottom: true },
          'If you know of others we are missing or if you are working at one of these companies and spot an error or would like to add more information about your solution, please email ',
          React.createElement(
            Link,
            {
              href: 'mailto:data@luminrobotics.com' },
            'data@luminrobotics.com'
          ),
          '. For all other questions about this list or to get in touch please email ',
          React.createElement(
            Link,
            { href: 'mailto:info@luminrobotics.com' },
            'info@luminrobotics.com'
          ),
          '.'
        )
      ),
      React.createElement(
        'div',
        { style: styles.controls },
        '(',
        data.length,
        ' total)'
      )
    ),
    React.createElement(
      'div',
      { style: styles.wrapper },
      React.createElement(Data, { data: data, groupBy: groupBy }),
      React.createElement('div', { style: styles.groupHeader }),
      React.createElement(
        'div',
        { style: styles.cardWrapper, className: 'add' },
        React.createElement(
          Button,
          { variant: 'outlined', style: styles.add,
            onClick: function onClick() {
              return location.href = MAILTO;
            } },
          '+ ',
          React.createElement('br', null),
          ' Add'
        )
      )
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.querySelector('#container'));
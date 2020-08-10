var _MaterialUI = MaterialUI,
    Card = _MaterialUI.Card,
    CardHeader = _MaterialUI.CardHeader,
    CardMedia = _MaterialUI.CardMedia,
    CardContent = _MaterialUI.CardContent,
    CardActions = _MaterialUI.CardActions,
    Collapse = _MaterialUI.Collapse,
    Avatar = _MaterialUI.Avatar,
    IconButton = _MaterialUI.IconButton,
    Typography = _MaterialUI.Typography,
    Link = _MaterialUI.Link;
// import { red } from '@material-ui/core/colors';

// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

var styles = {
  root: {
    width: 300
  },
  media: {
    height: 300,
    objectFit: 'contain'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto'
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: '#660000' //red[500],
  },
  location: {},
  status: {
    backgroundColor: '#00960d',
    padding: '0.5em',
    textAlign: 'center'
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    margin: 0
  }
};

export default (function (_ref) {
  var name = _ref.name,
      website = _ref.website,
      news = _ref.news,
      image = _ref.image,
      number = _ref.number,
      location = _ref.location,
      note = _ref.note,
      status = _ref.status;

  // const [expanded, setExpanded] = React.useState(false);
  //
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return React.createElement(
    Card,
    { style: styles.root },
    status && React.createElement(
      'div',
      { style: styles.status },
      React.createElement(
        Typography,
        { variant: 'body2', gutterBottom: true, style: styles.statusText },
        status
      )
    ),
    image && React.createElement(
      'a',
      { href: website || news, target: '_blank' },
      React.createElement(CardMedia, {
        component: 'img',
        style: styles.media,
        image: 'images/' + image,
        title: name
      })
    ),
    React.createElement(
      CardContent,
      null,
      React.createElement(
        Typography,
        { paragraph: true },
        React.createElement(
          Typography,
          { variant: 'body1', gutterBottom: true },
          name
        ),
        location && React.createElement(
          'div',
          { style: styles.location },
          React.createElement(
            Typography,
            { variant: 'caption', gutterBottom: true },
            location
          )
        ),
        website && React.createElement(
          'div',
          null,
          React.createElement(
            Link,
            { href: website, variant: 'body2', target: '_blank' },
            'Website'
          )
        ),
        news && React.createElement(
          'div',
          null,
          React.createElement(
            Link,
            { href: news, variant: 'body2', target: '_blank' },
            'In the news'
          )
        ),
        note && React.createElement(
          Typography,
          { variant: 'body2', gutterBottom: true },
          React.createElement('div', { dangerouslySetInnerHTML: { __html: note } })
        )
      )
    )
  );
});

// <CardActions disableSpacing>
//   <IconButton
//     style={styles.expand /* TODO: expanded */}
//     onClick={handleExpandClick}
//     aria-expanded={expanded}
//     aria-label="show more"
//   >
//     expand
//   </IconButton>
// </CardActions>
// <Collapse in={expanded} timeout="auto" unmountOnExit>
//   <CardContent>
//     <Typography paragraph>
//       No more details.
//     </Typography>
//   </CardContent>
// </Collapse>
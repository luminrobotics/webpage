const { Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Link } = MaterialUI;
// import { red } from '@material-ui/core/colors';

// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
  root: {
    width: 300,
  },
  media: {
    height: 300,
    objectFit: 'contain',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#660000'//red[500],
  },
  location: {
  }
};

export default ({name, website, news, image, number, location}) => {
  // const [expanded, setExpanded] = React.useState(false);
  //
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card style={styles.root}>
      { image && <a href={website || news} target='_blank'><CardMedia
        component="img"
        style={styles.media}
        image={`images/${image}`}
        title={name}
      /></a> }
      <CardContent>
        <Typography paragraph>
          <Typography variant="body1" gutterBottom>
            {name}
          </Typography>
          {location &&
            <div style={styles.location}>
              <Typography variant="caption" gutterBottom>
                {location}
              </Typography>
            </div>
          }
          { website && <div><Link href={website} variant="body2" target='_blank'>
              Website
            </Link></div>
          }
          { news && <div><Link href={news} variant="body2" target='_blank'>
              In the news
            </Link></div>
          }
        </Typography>
      </CardContent>
    </Card>
  );
}

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

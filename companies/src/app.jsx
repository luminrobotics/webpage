'use strict';

const { Paper,
  Typography,
  Link, Button } = MaterialUI;

import data from './data.js';
import CompanyCard from './company_card.js';

const MAILTO = 'mailto:data@luminrobotics.com?subject=UV%20Robots%20list';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '94vw',
  },
  cardWrapper: {
    flex: '0 0 auto',
    margin: '1em',
  },
  intro: {
    margin: '2em'
  },
  introText: {
    padding: '2em',
    marginTop: '1em'
  },
  controls: {
    margin: '1em',
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

const Data = ({data, groupBy}) => {
  const grouped = groupBy ? _.groupBy(data, c => c[groupBy]) : {'All': data};

  return _.map(grouped, (group, key) => <React.Fragment>
    { key &&
      <div style={styles.groupHeader}>
        <Typography variant="h6" gutterBottom>
          {key}
        </Typography>
      </div>
    }
    { group.map((company, i) =>
      <div style={styles.cardWrapper}>
        <CompanyCard {...company} number={i+1}/>
      </div>)
    }
  </React.Fragment>);
};



const App = () => {
  // const [pressed, setPressed] = React.useState(false);
  //
  // if (pressed) {
  //   return 'pressed!';
  // }
  // <Button variant="contained" color="primary" onClick={() => setPressed(true)}>
  //   Like
  // </Button>

  const [groupBy, setGroupBy] = React.useState('location');

  return (
    <div style={styles.page}>
      <div style={styles.intro}>
        <Link href="/">« back to homepage</Link>
        <Paper style={styles.introText}>
          <Typography variant="h4" gutterBottom>
            UV Robots
          </Typography>

          <Typography variant="body1" gutterBottom>
            The COVID-19 pandemic has generated renewed interest in
            ultraviolet light (UV) for disinfection. UV-C light, and
            specifically UV-C in the 254nm range, has been used since the
            1960's in hospitals to disinfect rooms after patient discharge.
            UV-C has shown to be effective against a long list of pathogens.
            The irradiance required to neutralize different pathogens varies
            widely, with bacteria, especially "super-bugs" like C.diff,
            requiring the most power and time. Fortunately single-stranded
            viruses like influenza and SARS-CoV-2 require relatively little
            power (around 6mJ/cm² for a 2-log reduction, i.e., 99% kill rate).
          </Typography>

          <Typography variant="body1" gutterBottom>
            To effectively disinfect in-door spaces like hotel rooms,
            warehouses, and schools it is essential to move the light source
            around in the space. This is necessary for
            effectiveness and efficiency: to avoid shadowing and because the
            intensity of the light reduces quadratically with distance.
            However, since UV-C light is harmful to humans, it is not possible
            to have a person push or carry the light source through the space.
            This is what gives rise to the idea of letting a robot perform this
            task.
          </Typography>

          <Typography variant="body1" gutterBottom>

            We are encouraged by the number of start-ups and existing companies
            that have stepped up to the challenge all around the world and put
            together a robotic UV solution in a very short amount of time. This
            is a shout-out to these companies, whose images and links we maintain
            below. We will keep adding to this list as we hear about others.
            Some of these robots are just concepts, others are prototypes, and
            some are already in operation. But all of them pursue the same goal:
            make everyday places safer for people! </Typography>

          <Typography variant="body1" gutterBottom>

            If you know of others we are missing or if you are working at one of
            these companies and spot an error or would like to add more
            information about your solution, please email <Link
            href='mailto:data@luminrobotics.com'>data@luminrobotics.com</Link>.

            For all other questions about this list or to get in touch please
            email <Link href='mailto:info@luminrobotics.com'>info@luminrobotics.com</Link>.
          </Typography>
        </Paper>

        <div style={styles.controls}>
          ({data.length} total)
        </div>
      </div>
      <div style={styles.wrapper}>
        <Data data={data} groupBy={groupBy} />
        <div style={styles.groupHeader}></div>
        <div style={styles.cardWrapper} className='add'>
          <Button variant="outlined" style={styles.add}
            onClick={() => location.href = MAILTO}>
            + <br /> Add
          </Button>
        </div>
    </div>
  </div>);
};

ReactDOM.render(<App />, document.querySelector('#container'));

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _MaterialUI = MaterialUI,
    Paper = _MaterialUI.Paper,
    Typography = _MaterialUI.Typography,
    Link = _MaterialUI.Link,
    Button = _MaterialUI.Button;


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

var data = [{
  name: 'UVD Robots',
  website: 'https://www.uvd-robots.com/',
  image: 'uvd-robots.png',
  location: 'Denmark',
  note: 'Part of <a href:"https:www.blue-ocean-robotics.com"="">Blue Ocean Robotics</a>'
}, { name: 'Sterilray',
  website: 'https://sterilray.com/landing-page/products/sterilray-autonomous-disinfection-vehicle-adv/',
  image: 'sterilray.png',
  location: 'USA'
}, { name: 'PrescientX',
  website: 'https://prescientx.com/',
  image: 'prescientx_crop.png',
  note: 'No product page yet?',
  location: 'Canada'
}, { name: 'YOUIBOT ARIS-K2',
  website: 'https://www.youibot.com/solution_antivirus',
  image: 'youibot.jpg',
  location: 'China',
  news: 'https://www.bbc.com/news/business-51914722'
}, { name: 'Akara Robotics: Violet',
  website: 'https://www.akara.ai/violet.html',
  image: 'akara.png',
  news: 'https://time.com/5825860/coronavirus-robot/',
  location: 'Ireland'
}, { name: 'TMiRob',
  website: 'http://www.tmirob.com/products?cate=3',
  note: '<a href="https://www.time-medical.com/intelligent-sterilization-robot">Distributor</a>',
  image: 'tmirob.png',
  location: 'China'
}, { name: 'Milagrow',
  website: 'https://milagrowhumantech.com/healthcare-robots/1105-robocop-indoor-disinfection-robot.html',
  image: 'milagrow.png',
  note: 'Price: Rs 3,999,990 ≅ $53,315',
  location: 'India'
}, { name: 'Digital Safety (DiSa)',
  news: 'https://www.msn.com/en-sg/news/singapore/singapore-firm-unveils-virus-slaying-robot-that-could-aid-covid-19-fight/ar-BB11CA0g',
  image: 'disa.png',
  location: 'Singapore'
}, { name: 'PBA Group: Sunburst UV Bots',
  news: 'https://www.straitstimes.com/singapore/uv-disinfecting-robots-to-be-deployed-in-fighting-covid-19',
  websites: 'https://www.pbarobotics.com/',
  image: 'sunburst.png',
  location: 'Singapore'
}, { name: 'SESTO HealthGUARD',
  website: 'https://www.sestorobotics.com/products/healthcare-robotics-solutions-sesto-healthguard/',
  image: 'sesto.png',
  location: 'Singapore'
}, { name: 'Marathon Targets',
  news: 'https://www.dailymail.co.uk/sciencetech/article-8261469/US-military-set-use-corona-killing-robots-disinfect-surfaces-just-MINUTES.html',
  website: 'https://marathon-targets.com/',
  image: 'marathon.jpg',
  location: 'Australia'
}, { name: 'H-Bots',
  news: 'https://telanganatoday.com/hyderabad-based-h-bots-developing-robot-for-hospitals-public-places',
  image: 'hbots.jpg',
  location: 'India'
}, { name: 'Keenon: Peanut',
  website: 'http://www.keenonrobot.com/EN/Index.html',
  image: 'keenon.png',
  location: 'China'
}, { name: 'Aitheon',
  website: 'https://aitheon.com/medical-robots',
  image: 'aitheon.webp',
  location: 'Ukraine',
  other: {
    Note: 'Not to be confused with Aethon.'
  }
}, { name: 'Amazon (Canvas Technologies)',
  news: 'https://www.cbsnews.com/news/amazon-workforce-safety-60-minutes-2020-05-10/',
  image: 'amazon.jpg',
  location: 'USA'
}, { name: 'DOF Robotics',
  website: 'https://www.dof.com.tr/healthcare/portfolio/robocare/',
  image: 'dof.jpg',
  location: 'Turkey'
}, { name: 'Rovenso',
  news: 'https://spectrum.ieee.org/automaton/robotics/industrial-robots/rovenso-uv-disinfection-robot',
  image: 'rovenso.jpeg',
  location: 'Switzerland'
}, { name: 'Geek+ Robotics',
  website: 'https://www.geekplus.com/news/geek-launches-two-new-disinfection-robots/',
  news: 'https://roboticsandautomationnews.com/2020/05/25/geek-launches-disinfection-robots-to-help-with-coronavirus-cleanup/32431/',
  image: 'geekplus.jpg',
  location: 'China'
}, { name: 'PAL Robotics',
  website: 'http://pal-robotics.com/',
  news: 'https://spectrum.ieee.org/news-from-around-ieee/the-institute/ieee-member-news/pal-robotics-customizable-bots-could-be-the-next-frontline-workers',
  image: 'pal.jpeg',
  location: 'Spain'
}, { name: 'SK Telecom',
  website: 'https://www.sktelecom.com/en/press/press_detail.do?idx=1461',
  image: 'sktelecom.jpg',
  news: 'https://www.zdnet.com/article/sk-telecom-develops-autonomous-disinfectant-robot/',
  location: 'South Korea'
}, { name: 'IPSoft and GlobalDWS',
  news: 'https://roboticsandautomationnews.com/2020/05/28/ipsoft-joins-forces-with-globaldws-to-launch-service-robots-powered-by-amelia/32554/',
  image: 'ipsoft.png',
  location: 'USA'
}, { name: 'ASTI Mobile Robotics',
  news: 'https://roboticsandautomationnews.com/2020/06/05/asti-mobile-robotics-and-boos-technical-lighting-develop-a-mobile-robot-to-fight-cronavirus/32843/',
  image: 'asti.jpg',
  website: 'https://www.astimobilerobotics.com/',
  location: 'Spain'
}, { name: 'Roborn Technologies: Unicorn',
  website: 'http://roborn.com/unicorn_en/',
  news: 'https://www.scmp.com/business/article/3087921/hong-kong-start-roborn-joins-race-pioneer-uv-light-disinfecting-robots',
  image: 'roborn.jpg',
  location: 'China'
}, { name: 'TRC Robotics',
  website: 'https://trcrobotics.com/',
  image: 'trcrobotics.jpeg',
  location: 'USA'
}, { name: 'Ava Robotics + MIT CSAIL',
  news: 'https://www.engadget.com/mit-robot-uvc-light-disinfects-coronavirus-040003303.html',
  image: 'ava.jpeg',
  location: 'USA'
}, { name: 'The Institute of Field roBOtics (FIBO) of King Mongkut\'s University of Technology Thonburi',
  news: 'https://www.bangkokpost.com/business/1946496/robots-to-the-rescue',
  image: 'fibo.jpg',
  location: 'Thailand'
}, { name: 'Smartguard UV (Fetch Robotics + PURO Lighting)',
  website: 'http://smartguarduv.com/',
  image: 'smartguarduv.png',
  location: 'USA'
}, { name: 'Techmetics Techi UV',
  website: 'https://www.techmetics-group.com/products/techi-uv-disinfection/',
  image: 'techmetics.png',
  location: 'USA'
}, { name: 'Omron Asia-Pacific: UVC-LD',
  news: 'https://www.mobihealthnews.com/news/asia-pacific/omron-launches-uvc-disinfection-robot-targeting-covid-19-virus',
  image: 'omron.png',
  location: 'Singapore'
}, { name: 'Safe Space Technologies',
  website: 'https://safe-space.us/',
  news: 'https://www.wtae.com/article/a-virus-killing-robot-may-be-the-answer-to-returning-to-the-classroom/33485136#',
  image: 'safespace.webp',
  location: 'USA'
}, { name: 'Jetbrain Robotics',
  website: 'https://jetbrain.ai/#uvid',
  news: 'http://ein.iconnect007.com/index.php/article/123968/solaris-acquires-jetbrain-to-aid-in-using-robots-to-fight-covid/123971/?skin=ein',
  image: 'jetbrain.png',
  location: 'India',
  status: 'Acquired',
  note: 'Acquired by <a href="https://solarislyt.com/the-lytbot/">Solaris</a>'
}, { name: 'Lumin Robotics',
  website: 'https://luminrobotics.com',
  image: 'lumin-hotel.png',
  location: 'USA',
  note: '(Disclaimer: This is us.)'
}, { name: 'uvclight.co.uk: Helios',
  website: 'https://www.uvclight.co.uk/helios-uvc-robot/',
  image: 'helios.jpg',
  location: 'UK'
}, {
  name: 'Addverb Technologies',
  website: 'https://addverb.com/product/decimator/',
  image: 'addverb.png',
  location: 'India'
}, {
  name: 'AV&T',
  website: 'https://avnt.co.in/uv-robot.html',
  image: 'avnt.jpg',
  location: 'India'
}, {
  name: 'VTRAC Robotics',
  website: 'https://www.vtracrobotics.com/product/uv-sterilizing-robot/',
  image: 'vtrac.png',
  location: 'Canada',
  note: 'Also distributed by <a href="http://www.allrwell.com/fully-automatic-uv-disinfection-and-sterilization-robot-intelligent-autonomous-navigation-automatic-uv-medical-disinfection-robot/">Allrwell</a>?'
}, {
  name: 'UVRobotics: UVR-bot',
  website: 'https://en.uvrobotics.com.ar/',
  image: 'uvrbot.webp',
  location: 'Argentina'
}, {
  name: 'OTSAW: O-RX',
  website: 'https://www.otsaw.com/disinfection-robot.php',
  news: 'https://www.biospectrumasia.com/news/26/16586/otsaw-tests-first-live-coronavirus-sample-successfully-.html',
  image: 'otsaw.png',
  location: 'Singapore'
}, {
  name: 'AutoBio Reduction: UV Ninja',
  image: 'autobio.png',
  news: 'https://www.wthr.com/article/news/local/purdue-couple-invents-robot-that-disinfects-with-uv-light/531-cb1fae25-0429-423d-8f1f-e978c055ba67',
  website: 'https://www.youtube.com/channel/UCkRRxcyVdVPSzk2VJDlnEow',
  location: 'USA'
}, {
  name: 'Resgreen Group International: Wanda',
  news: 'https://www.marketscreener.com/quote/stock/RESGREEN-GROUP-INTERNATIO-32042433/news/Resgreen-Group-Completes-Prototype-of-Disinfecting-Autonomous-Mobile-Robot-31307030/',
  image: 'wanda.png',
  location: 'USA'
}, {
  name: 'Ai Robot Pro 20',
  website: 'https://www.globalsources.com/UV-industrial/UV-Robot-Disinfection-Robot-UV-Sterilizer-1178075995p.htm#1178075995',
  image: 'airobotpro.jpg',
  location: 'China',
  note: 'Price: $9,900 - $28,600 USD'
}, {
  name: 'Milvus Robotics: SEIT-UV',
  website: 'https://milvusrobotics.com/products/seit-uv',
  image: 'seit-uv.png',
  location: 'Turkey'
}, {
  name: 'Altoros',
  website: 'https://www.altoros.com/solutions/uvc-disinfection-robot',
  image: 'altoros.png',
  location: 'USA'
}, {
  name: 'BlueBotics',
  news: 'http://www.tradearabia.com/news/IND_372591.html',
  image: 'bluebotics.jpg',
  location: 'Switzerland'
}, {
  name: 'UV Sterilizing Robot (UVC Robot)',
  website: 'https://www.magicwandcompany.com/product/uv-sterilizing-robot/',
  image: 'uvcrobot.png',
  location: 'USA',
  note: 'This seems to be a distributor.'
}, {
  name: 'Metra: Sterybot',
  website: 'https://www.metralabs.com/en/uv-c-disinfection-robot/',
  image: 'metra.png',
  location: 'Germany'
}, {
  name: 'Ateago',
  website: 'http://www.ateago.com/',
  image: 'ateago.png',
  location: 'China'
}, {
  name: 'Pudu Robotics: Puductor 2',
  news: 'http://www.itnewsonline.com/news/Pudu-Robotics-Launches-New-Generation-of-Disinfection-Robot-Puductor-2-to-Provide-Technical-Support-for-Global-Fight-against-the-Pandemic/2019',
  website: 'https://pudurobotics.uk/',
  image: 'pudu.png',
  location: 'China'
}, {
  name: 'Energy Focus: mUVe',
  news: 'https://www.cleveland.com/news/2020/11/attention-well-heeled-germaphobes-solon-company-creates-45000-robot-to-disinfect-for-covid-19.html',
  website: 'https://uvcd.energyfocus.com/',
  image: 'energyfocus.png',
  location: 'USA',
  note: 'Price: $45,000'
}, {
  name: 'LG',
  news: 'https://www.prnewswire.com/news-releases/lg-announces-autonomous-robot-with-disinfecting-uv-light-for-various-b2b-applications-301191799.html',
  image: 'lg.jpg',
  location: 'South Korea'
}];

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
          'List of UV Robots'
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
          'We are encouraged by the number of start-ups and existing companies that have stepped up to the challenge all around the world and put together a robotic UV solution in a very short amount of time. This is a shout-out to these companies, whose images and links we maintain below. Some of these robots are proof-of-concepts, others are prototypes, and some are already in operation. But all of them pursue the same goal: make everyday places safer for people!'
        ),
        React.createElement(
          Typography,
          { variant: 'body1', gutterBottom: true },
          'We will keep adding to this list as we hear about others. If you know of any we are missing or if you are working at one of these companies and spot an error or would like to add more information about your solution, please email ',
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
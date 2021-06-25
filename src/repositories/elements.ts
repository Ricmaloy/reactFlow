
export const initialNode = {
    backgroundColor: 'transparent', 
    border: 'none', 
    fontWeight: 700, 
    fontFamily: 'Poppins',
    fontSize: '24px'
}

export const primaryNode = {
    backgroundColor: '#FFFF00', 
    fontFamily: 'Poppins', 
    fontSize: '14px', 
    fontWeight: 500
}

export const secundaryNode = {
    backgroundColor: '#FFE599', 
    fontFamily: 'Poppins', 
    fontSize: '12px', 
    fontWeight: 500
}

export const tertiaryNode = {
    backgroundColor: '#D4D4D4', 
    fontFamily: 'Poppins', 
    fontSize: '14px', 
    fontWeight: 500
}

export const elements = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Front-End' },
      position: { x: 850, y: 25 },
      style: initialNode,
    },
    { id: 'e1-2', source: '1', target: '2'},
    {
      id: '2',
      type: 'default',
      data: { label: 'Internet' },
      position: { x: 800, y: 180 },
      style: primaryNode,
    },
    { id: 'e2-3', source: '2', target: '3' },
    {
        id: '3',
        type: 'default',
        data: { label: 'HTML' },
        position: { x: 850, y: 300 },
        style: primaryNode,
    },
    { id: 'e3-4', source: '3', target: '4' },
    {
        id: '4',
        type: 'default',
        data: { label: 'CSS' },
        position: { x: 850, y: 360 },
        style: primaryNode,
    },
    { id: 'e4-5', source: '4', target: '5' },
    {
        id: '5',
        type: 'default',
        data: { label: 'JavaScript' },
        position: { x: 850, y: 420 },
        style: primaryNode,
    },
    { id: 'e5-6', source: '5', target: '6' },
    {
        id: '6',
        type: 'default',
        data: { label: 'Version Control System' },
        position: { x: 780, y: 560 },
        style: primaryNode,
    },
    { id: 'e6-7', source: '6', target: '7', animated: true},
    {
        id: '7',
        type: 'default',
        data: { label: 'Basic Usage of Git' },
        position: { x: 670, y: 660 },
        style: primaryNode,
    },
    { id: 'e6-8', source: '6', target: '8', animated: true},
    {
        id: '8',
        type: 'default',
        data: { label: 'Repo hosting Services' },
        position: { x: 1050, y: 560 },
        style: primaryNode,
    },
    { id: 'e8-9', source: '8', target: '9', animated: true},
    {
        id: '9',
        type: 'default',
        data: { label: 'Github' },
        position: { x: 1050, y: 640 },
        style: primaryNode,
    },
    {
        id: '10',
        type: 'default',
        data: { label: 'Gitlab' },  
        position: { x: 1050, y: 700 },
        style: tertiaryNode,
    },
    {
        id: '101',
        type: 'default',
        data: { label: 'Bitbucket' },  
        position: { x: 1050, y: 760 },
        style: tertiaryNode,
    },
    { id: 'e6-11', source: '6', target: '11' },
    {
        id: '11',
        type: 'default',
        data: { label: 'Web Security Knowledge' },
        position: { x: 820, y: 800 },
        style: primaryNode,
    },
    { id: 'e11-12', source: '11', target: '12' },
    {
        id: '12',
        type: 'default',
        data: { label: 'Package Managers' },
        position: { x: 720, y: 940 },
        style: primaryNode,
    },
    { id: 'e12-13', source: '12', target: '13' },
    {
        id: '13',
        type: 'default',
        data: { label: 'CSS Architecure' },
        position: { x: 580, y: 1030 },
        style: primaryNode,
    },
    { id: 'e13-14', source: '13', target: '14' },
    {
        id: '14',
        type: 'default',
        data: { label: 'CSS Preprocessors' },
        position: { x: 850, y: 1030 },
        style: primaryNode,
    },
    { id: 'e14-15', source: '14', target: '15' },
    {
        id: '15',
        type: 'default',
        data: { label: 'Built Tools' },
        position: { x: 700, y: 1150 },
        style: primaryNode,
    },
    { id: 'e15-16', source: '15', target: '16' },
    {
        id: '16',
        type: 'default',
        data: { label: 'Pick a framework' },
        position: { x: 750, y: 1250 },
        style: primaryNode,
    },
    { id: 'e16-17', source: '16', target: '17' },
    {
        id: '17',
        type: 'default',
        data: { label: 'Modern CSS' },
        position: { x: 550, y: 1350 },
        style: primaryNode,
    },
    { id: 'e17-18', source: '17', target: '18' },
    {
        id: '18',
        type: 'default',
        data: { label: 'Web Components' },
        position: { x: 850, y: 1450 },
        style: primaryNode,
    },
    { id: 'e18-19', source: '18', target: '19' },
    {
        id: '19',
        type: 'default',
        data: { label: 'CSS Frameworks' },
        position: { x: 650, y: 1550 },
        style: primaryNode,
    },
    { id: 'e19-20', source: '19', target: '20' },
    {
        id: '20',
        type: 'default',
        data: { label: 'Testing your Apps' },
        position: { x: 650, y: 1620 },
        style: primaryNode,
    },
    { id: 'e20-21', source: '20', target: '21' },
    {
        id: '21',
        type: 'default',
        data: { label: 'Type Checkers' },
        position: { x: 840, y: 1700 },
        style: primaryNode,
    },
    { id: 'e21-200', source: '21', target: '200' },
    {
      id: '200',
      type: 'output',
      data: { label: 'Keep Learning' },
      position: { x: 730, y: 1850 },
    },
    { id: 'e2-22', source: '2', target: '22', animated: true },
    {
        id: '22',
        type: 'default',
        data: { label: 'How does the internet works?' },
        position: { x: 500, y: 100 },
        style: secundaryNode,
    },
    { id: 'e2-23', source: '2', target: '23' , animated: true},
    {
        id: '23',
        type: 'default',
        data: { label: 'What is HTTP?' },
        position: { x: 500, y: 165 },
        style: secundaryNode,
    },
    { id: 'e2-24', source: '2', target: '24' , animated: true},
    {
        id: '24',
        type: 'default',
        data: { label: 'Browsers and how they work?' },
        position: { x: 500, y: 215 },
        style: secundaryNode,
    },
    { id: 'e2-25', source: '2', target: '25', animated: true},
    {
        id: '25',
        type: 'default',
        data: { label: 'DNS and how it works?' , animated: true},
        position: { x: 1100, y: 100 },
        style: secundaryNode,
    },
    { id: 'e2-26', source: '2', target: '26', animated: true },
    {
        id: '26',
        type: 'default',
        data: { label: 'What is Domain Name ?' },
        position: { x: 1100, y: 150 },
        style: secundaryNode,
    },
    { id: 'e2-27', source: '2', target: '27' , animated: true},
    {
        id: '27',
        type: 'default',
        data: { label: 'What is hosting?' },
        position: { x: 1100, y: 200 },
        style: secundaryNode,
    },
    { id: 'e3-28', source: '3', target: '28' , animated: true},
    {
        id: '28',
        type: 'default',
        data: { label: 'Learn the basics' },
        position: { x: 570, y: 290 },
        style: secundaryNode,
    },
    { id: 'e3-29', source: '3', target: '29' , animated: true},
    {
        id: '29',
        type: 'default',
        data: { label: 'Writing Semantic HTML'},
        position: { x: 570, y: 340 },
        style: secundaryNode,
    },
    { id: 'e3-30', source: '3', target: '30' , animated: true},
    {
        id: '30',
        type: 'default',
        data: { label: 'Forms and Validations'},
        position: { x: 570, y: 390 },
        style: secundaryNode,
    },
    { id: 'e3-31', source: '3', target: '31' , animated: true},
    {
        id: '31',
        type: 'default',
        data: { label: 'Best Practices'},
        position: { x: 570, y: 440 },
        style: secundaryNode,
    },
    { id: 'e3-32', source: '3', target: '32' , animated: true},
    {
        id: '32',
        type: 'default',
        data: { label: 'Accessibility'},
        position: { x: 1060, y: 250 },
        style: secundaryNode,
    },
    { id: 'e3-33', source: '3', target: '33' , animated: true},
    {
        id: '33',
        type: 'default',
        data: { label: 'SEO basics'},
        position: { x: 1060, y: 300 },
        style: secundaryNode,
    },
    { id: 'e4-34', source: '4', target: '34' , animated: true},
    {
        id: '34',
        type: 'default',
        data: { label: 'Learn the basics'},
        position: { x: 1160, y: 350 },
        style: secundaryNode,
    },
    { id: 'e4-35', source: '4', target: '35' , animated: true},
    {
        id: '35',
        type: 'default',
        data: { label: 'Making Layouts'},
        position: { x: 1160, y: 400 },
        style: secundaryNode,
    },
    { id: 'e4-36', source: '4', target: '36' , animated: true},
    {
        id: '36',
        type: 'default',
        data: { label: 'Media Queries'},
        position: { x: 1160, y: 450 },
        style: secundaryNode,
    },
    { id: 'e5-37', source: '5', target: '37' , animated: true},
    {
        id: '37',
        type: 'default',
        data: { label: 'Syntax and Constructs'},
        position: { x: 450, y: 500 },
        style: secundaryNode,
    },
    { id: 'e5-38', source: '5', target: '38' , animated: true},
    {
        id: '38',
        type: 'default',
        data: { label: 'DOM Manipulation'},
        position: { x: 450, y: 550 },
        style: secundaryNode,
    },
    { id: 'e5-39', source: '5', target: '39' , animated: true},
    {
        id: '39',
        type: 'default',
        data: { label: 'Fetch API / AJAX'},
        position: { x: 450, y: 600 },
        style: secundaryNode,
    },
    { id: 'e5-40', source: '5', target: '40' , animated: true},
    {
        id: '40',
        type: 'default',
        data: { label: 'ES6+'},
        position: { x: 450, y: 650 },
        style: secundaryNode,
    },
    { id: 'e12-41', source: '12', target: '41' , animated: true},
    {
        id: '41',
        type: 'default',
        data: { label: 'yarn'},
        position: { x: 450, y: 850 },
        style: secundaryNode,
    },
    { id: 'e12-42', source: '12', target: '42' , animated: true},
    {
        id: '42',
        type: 'default',
        data: { label: 'npm'},
        position: { x: 450, y: 900 },
        style: secundaryNode,
    },
    { id: 'e11-43', source: '11', target: '43' , animated: true},
    {
        id: '43',
        type: 'default',
        data: { label: 'HTTPS'},
        position: { x: 1050, y: 900 },
        style: secundaryNode,
    },
    { id: 'e11-44', source: '11', target: '44' , animated: true},
    {
        id: '44',
        type: 'default',
        data: { label: 'CORS'},
        position: { x: 1050, y: 950 },
        style: secundaryNode,
    },
    { id: 'e11-45', source: '11', target: '45' , animated: true},
    {
        id: '45',
        type: 'default',
        data: { label: 'Security'},
        position: { x: 1230, y: 900 },
        style: secundaryNode,
    },
    { id: 'e11-46', source: '11', target: '46' , animated: true},
    {
        id: '46',
        type: 'default',
        data: { label: 'OWASP'},
        position: { x: 1230, y: 950 },
        style: secundaryNode,
    },
    { id: 'e13-47', source: '13', target: '47' , animated: true},
    {
        id: '47',
        type: 'default',
        data: { label: 'BEM'},
        position: { x: 330, y: 1000 },
        style: secundaryNode,
    },
    { id: 'e13-48', source: '13', target: '48' , animated: true},
    {
        id: '48',
        type: 'default',
        data: { label: 'OOCSS'},
        position: { x: 330, y: 1050 },
        style: tertiaryNode,
    },
    { id: 'e13-49', source: '13', target: '49' , animated: true},
    {
        id: '49',
        type: 'default',
        data: { label: 'SMACSS'},
        position: { x: 330, y: 1100 },
        style: tertiaryNode,
    },
    { id: 'e14-50', source: '14', target: '50' , animated: true},
    {
        id: '50',
        type: 'default',
        data: { label: 'SASS'},
        position: { x: 1150, y: 1030 },
        style: primaryNode,
    },
    { id: 'e14-51', source: '14', target: '51' , animated: true},
    {
        id: '51',
        type: 'default',
        data: { label: 'PostCSS'},
        position: { x: 1150, y: 1080 },
        style: secundaryNode,
    },
    { id: 'e14-52', source: '14', target: '52' , animated: true},
    {
        id: '52',
        type: 'default',
        data: { label: 'Less'},
        position: { x: 1150, y: 1130 },
        style: tertiaryNode,
    },
    { id: 'e15-53', source: '15', target: '53' , animated: true},
    {
        id: '53',
        type: 'default',
        data: { label: 'Task Runners'},
        position: { x: 450, y: 1200 },
        style: primaryNode,
    },
    { id: 'e53-54', source: '53', target: '54' , animated: true},
    {
        id: '54',
        type: 'default',
        data: { label: 'npm Scripts'},
        position: { x: 250, y: 1170 },
        style: primaryNode,
    },
    { id: 'e53-55', source: '53', target: '55' , animated: true},
    {
        id: '55',
        type: 'default',
        data: { label: 'Gulp'},
        position: { x: 250, y: 1220 },
        style: tertiaryNode,
    },
    { id: 'e15-56', source: '15', target: '56' , animated: true},
    {
        id: '56',
        type: 'default',
        data: { label: 'linters and formatters'},
        position: { x: 1050, y: 1200 },
        style: primaryNode,
    },
    { id: 'e56-57', source: '56', target: '57' , animated: true},
    {
        id: '57',
        type: 'default',
        data: { label: 'Prettier'},
        position: { x: 1400, y: 1140 },
        style: primaryNode,
    },
    { id: 'e56-58', source: '56', target: '58' , animated: true},
    {
        id: '58',
        type: 'default',
        data: { label: 'ESLint'},
        position: { x: 1400, y: 1190 },
        style: primaryNode,
    },
    { id: 'e56-59', source: '56', target: '59' , animated: true},
    {
        id: '59',
        type: 'default',
        data: { label: 'StandardJS'},
        position: { x: 1400, y: 1240 },
        style: tertiaryNode,
    },
    { id: 'e16-60', source: '16', target: '60' , animated: true},
    {
        id: '60',
        type: 'default',
        data: { label: 'ReactJS'},
        position: { x: 1120, y: 1320 },
        style: primaryNode,
    },
    { id: 'e16-61', source: '16', target: '61' , animated: true},
    {
        id: '61',
        type: 'default',
        data: { label: 'Angular'},
        position: { x: 1120, y: 1390 },
        style: secundaryNode,
    },
    { id: 'e16-62', source: '16', target: '62' , animated: true},
    {
        id: '62',
        type: 'default',
        data: { label: 'VueJS'},
        position: { x: 1120, y: 1460 },
        style: secundaryNode,
    },
    { id: 'e60-63', source: '60', target: '63' , animated: true},
    {
        id: '63',
        type: 'default',
        data: { label: 'Redux'},
        position: { x: 1400, y: 1300 },
        style: primaryNode,
    },
    { id: 'e60-64', source: '60', target: '64' , animated: true},
    {
        id: '64',
        type: 'default',
        data: { label: 'MobX'},
        position: { x: 1400, y: 1350 },
        style: secundaryNode,
    },
    { id: 'e61-65', source: '61', target: '65' , animated: true},
    {
        id: '65',
        type: 'default',
        data: { label: 'RxJS'},
        position: { x: 1400, y: 1400 },
        style: primaryNode,
    },
    { id: 'e61-66', source: '61', target: '66' , animated: true},
    {
        id: '66',
        type: 'default',
        data: { label: 'NgRx'},
        position: { x: 1400, y: 1450 },
        style: primaryNode,
    },
    { id: 'e62-67', source: '62', target: '67' , animated: true},
    {
        id: '67',
        type: 'default',
        data: { label: 'VueX'},
        position: { x: 1400, y: 1500 },
        style: primaryNode,
    },
    { id: 'e17-68', source: '17', target: '68' , animated: true},
    {
        id: '68',
        type: 'default',
        data: { label: 'Styled Components'},
        position: { x: 270, y: 1300 },
        style: primaryNode,
    },
    { id: 'e17-69', source: '17', target: '69' , animated: true},
    {
        id: '69',
        type: 'default',
        data: { label: 'CSS Modules'},
        position: { x: 270, y: 1350 },
        style: primaryNode,
    },
    { id: 'e17-70', source: '17', target: '70' , animated: true},
    {
        id: '70',
        type: 'default',
        data: { label: 'Styled JSX'},
        position: { x: 270, y: 1400 },
        style: secundaryNode,
    },
    { id: 'e17-71', source: '17', target: '71' , animated: true},
    {
        id: '71',
        type: 'default',
        data: { label: 'Emotion'},
        position: { x: 270, y: 1450 },
        style: secundaryNode,
    },
    { id: 'e17-72', source: '17', target: '72' , animated: true},
    {
        id: '72',
        type: 'default',
        data: { label: 'Radium'},
        position: { x: 270, y: 1500 },
        style: tertiaryNode,
    },
    { id: 'e17-73', source: '17', target: '73' , animated: true},
    {
        id: '73',
        type: 'default',
        data: { label: 'Glamorous'},
        position: { x: 270, y: 1550 },
        style: tertiaryNode,
    },
    { id: 'e18-74', source: '18', target: '74' , animated: true},
    {
        id: '74',
        type: 'default',
        data: { label: 'HTML Templates'},
        position: { x: 900, y: 1550 },
        style: tertiaryNode,
    },
    { id: 'e18-75', source: '18', target: '75' , animated: true},
    {
        id: '75',
        type: 'default',
        data: { label: 'Custom ELements'},
        position: { x: 1080, y: 1550 },
        style: tertiaryNode,
    },
    { id: 'e18-76', source: '18', target: '76' , animated: true},
    {
        id: '76',
        type: 'default',
        data: { label: 'Shadow DOM'},
        position: { x: 1260, y: 1550 },
        style: tertiaryNode,
    },
    { id: 'e19-77', source: '19', target: '77' , animated: true},
    {
        id: '77',
        type: 'default',
        data: { label: 'Reactstrap'},
        position: { x: 440, y: 1620 },
        style: primaryNode,
    },
    { id: 'e19-78', source: '19', target: '78' , animated: true},
    {
        id: '78',
        type: 'default',
        data: { label: 'MaterialUI'},
        position: { x: 440, y: 1670 },
        style: primaryNode,
    },
    { id: 'e19-79', source: '19', target: '79' , animated: true},
    {
        id: '79',
        type: 'default',
        data: { label: 'Tailwind CSS'},
        position: { x: 440, y: 1720 },
        style: primaryNode,
    },
    { id: 'e19-80', source: '19', target: '80' , animated: true},
    {
        id: '80',
        type: 'default',
        data: { label: 'Chakra UI'},
        position: { x: 440, y: 1770 },
        style: primaryNode,
    },
    { id: 'e20-81', source: '20', target: '81' , animated: true},
    {
        id: '81',
        type: 'default',
        data: { label: 'Jest'},
        position: { x: 1240, y: 1630 },
        style: primaryNode,
    },
    { id: 'e20-82', source: '20', target: '82' , animated: true},
    {
        id: '82',
        type: 'default',
        data: { label: 'react-testing-library'},
        position: { x: 1240, y: 1680 },
        style: primaryNode,
    },
    { id: 'e20-83', source: '20', target: '83' , animated: true},
    {
        id: '83',
        type: 'default',
        data: { label: 'Cypress'},
        position: { x: 1240, y: 1730 },
        style: primaryNode,
    },
    { id: 'e20-84', source: '20', target: '84' , animated: true},
    {
        id: '84',
        type: 'default',
        data: { label: 'Enzyme'},
        position: { x: 1240, y: 1780 },
        style: primaryNode,
    },
  ];
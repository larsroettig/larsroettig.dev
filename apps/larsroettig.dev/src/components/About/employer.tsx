/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Grid, Text } from '@theme-ui/components';

/** @todo should move from theme in site folder  */
const employerList = [
  {
    company_name: 'TechDivision GmbH',
    title: 'Senior Software Engineer E-Commerce',
    tech_stack: 'Magento 2, PHP, React, JavaScript',
    start_date: '2020-09',
    end_date: 'now',
  },
  {
    company_name: 'TechDivision GmbH',
    title: 'Software Engineer E-Commerce',
    tech_stack: 'Magento 2, PHP, React, JavaScript',
    start_date: '2015-09',
    end_date: '2020-08',
  },
  {
    company_name: 'TechDivision GmbH',
    title: 'Junior Software Engineer',
    tech_stack: 'PHP, Magento',
    start_date: '2013-09',
    end_date: '2015-08',
  },
  {
    company_name: 'SportIdent GmbH',
    title: 'Training as IT specialist for application development',
    tech_stack: 'PHP, C#, C++',
    start_date: '2010',
    end_date: '2013',
  },
];

const Employer = () => {
  const employerElements = [...employerList].map((employer) => {
    const key = `${employer.company_name}--${employer.start_date}`;
    return (
      <Grid key={key} sx={{ gridTemplateColumns: '70% 30%' }}>
        <Box>
          <Text sx={{ fontSize: [2], fontWeight: '300' }}>
            {employer.company_name}
          </Text>
          <Text sx={{ padding: '4px 0' }}>{employer.title}</Text>
          <Text sx={{ opacity: 0.8 }}>Tech stack: {employer.tech_stack}</Text>
        </Box>
        <Box>
          <Text sx={{ padding: '4px 0', opacity: 0.8 }}>
            {employer.start_date} - {employer.end_date}
          </Text>
        </Box>
      </Grid>
    );
  });

  return <Grid>{employerElements}</Grid>;
};

export default Employer;

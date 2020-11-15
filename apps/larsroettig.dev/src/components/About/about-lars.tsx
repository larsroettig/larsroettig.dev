/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Box, Grid } from '@theme-ui/components';
import Container from '../container';
import { StaticImage } from 'gatsby-plugin-image';

const Employer = React.lazy(() => import('./employer'));

const About = () => (
  <div id={'about-me'}>
    <div sx={{ backgroundColor: 'about' }}>
      <Container>
        <Grid
          sx={{
            gridColumnGap: '2rem',
            gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
          }}
        >
          <Box>
            <h3> About me </h3>
            <p>
              Over 9 years of development experience working with different
              clients over the world. I develop Magento Projects as Software
              Engineer at TechDivision GmbH.
            </p>
            <p>
              As Magento PWA Studio Maintainer i try help with any problem or
              feature request.
            </p>
            <p>
              In my free time I really like to bask in nature’s glory right here
              in the south of Bavaria. I also like cycling, hiking or sometimes
              just relax somewhere to free the mind and gain new ideas.
            </p>

            <h4> Certifications and Awards </h4>
            <Grid
              sx={{
                gridColumnGap: '1rem',
                gridTemplateColumns: ['1fr 1fr'],
              }}
            >
              <Box>
                <StaticImage
                  layout="fluid"
                  maxWidth={200}
                  src="Adobe_Certified_Expert_Magento_Commerce_Developer_Badge.png"
                  alt="T-Rex"
                />
              </Box>
              <a
                rel="noopener noreferrer nofollow"
                data-a11y="false"
                href={
                  'https://magento.com/blog/technical/thank-you-top-50-contributors-2017'
                }
              >
                <Box>
                  <StaticImage
                    layout="fluid"
                    maxWidth={200}
                    src="top50.png"
                    alt="T-Rex"
                  />
                </Box>
              </a>
            </Grid>
          </Box>
          <Box>
            <h3>Work Experience</h3>
            <Employer />
          </Box>
        </Grid>
      </Container>
    </div>
  </div>
);

export default About;

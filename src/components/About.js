import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import book1 from '../assets/books/oil_power_and_war.jpg';
import book2 from '../assets/books/loving_what_is.png';
import book3 from '../assets/books/foundation_and_empire.jpg';

const books = [book1, book2, book3]

function About() {
  return (
    <Container
      id='about'
      maxWidth='none'
      sx={{
        mx: 'auto',
        mb: '25vh',
        width: '75%',
      }}
    >
      <Typography variant='h2' textAlign='center'>About</Typography>
      <Box>
        <Typography color='#e1e1e1' align="center">
          Full-stack software developer with strong foundations in scientific computing, combining expertise in
          JavaScript/TypeScript, React, Python, and C++ to deliver high-performance solutions. Experience architecting cloud
          applications using AWS services and working with both SQL and NoSQL databases. Focused on delivering
          maintainable, type-safe code while effectively communicating technical solutions to stakeholders.
        </Typography>
      </Box>
      <Box>
        {/* Books */}
        <Typography
          variant='h3'
          textAlign='center'
          sx={{ mt: '5vh' }}
        >
          Currently Reading
        </Typography>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          marginTop='32px'
        >
          {books.map((book, index) => {
            return (
              <div
                style={{
                  padding: '24px',
                  background: '#292929',
                  margin: '0 12px',
                }}
              >
                <Box
                  key={index}
                  component='img'
                  src={book}
                  alt=''
                  sx={{
                    height: '18vw',
                    width: '12vw',
                    mx: 2,
                  }}
                />
              </div>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default About
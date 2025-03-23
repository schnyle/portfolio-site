import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// technology logos
// import aws_img from '../assets/technologies/aws.png'
// import bash_img from '../assets/technologies/bash.png'
// import c_img from '../assets/technologies/c.png'
// import cmake_img from '../assets/technologies/cmake.png'
import cpp_img from '../assets/technologies/cpp.png'
import css_img from '../assets/technologies/css.png'
import dynamodb_img from '../assets/technologies/dynamodb.png'
import github_img from '../assets/technologies/github2.png';
import html_img from '../assets/technologies/html.png';
// import javascript_img from '../assets/technologies/javascript.png';
import lambda_img from '../assets/technologies/lambda.png'
import matplotlib_img from '../assets/technologies/matplotlib.png'
import numpy_img from '../assets/technologies/numpy.png';
// import oop_img from '../assets/technologies/oop.png'
import pandas_img from '../assets/technologies/pandas.png';
import postgresql_img from '../assets/technologies/postgresql.png'
import postman_img from '../assets/technologies/postman.png'
import python_img from '../assets/technologies/python.png';
import rds_img from '../assets/technologies/rds.png'
import react_img from '../assets/technologies/react.png';
import redux_img from '../assets/technologies/redux.png'
// import s3_img from '../assets/technologies/s3.png'
import typescript_img from "../assets/technologies/typescript.png"
import vscode_img from '../assets/technologies/vscode.png'
import node_img from '../assets/technologies/node.png'
import cloudformation_img from '../assets/technologies/cloudformation.png'
import sql_img from '../assets/technologies/database.png'
import nosql_img from '../assets/technologies/nosql.png'
import linux_img from '../assets/technologies/linux.png'
import tmux_img from '../assets/technologies/tmux.png'
import scipy_img from '../assets/technologies/scipy.png'
import chartjs_img from '../assets/technologies/chartjs.png'

const gridItem = (name, path) => {
  return (
    <Container
      sx={{
        width: '15rem',
        height: '8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#292929',
        m: 'auto',
        p: 1,
        borderRadius: '10px',
        transition: '0.5s',
        '&:hover': { transform: 'scale(1.05)' }
      }}
    >
      <Box
        component='img'
        src={path}
        alt={`${name} logo`}
        height='5rem'
        mr={2}
      />
      <Typography color='#e1e1e1'>{name}</Typography>
    </Container>
  );
};

const gridElements = [
  // frontend
  { label: "TypeScript", img: typescript_img },
  { label: "React", img: react_img },
  { label: "Redux", img: redux_img },
  { label: "HTML", img: html_img },
  { label: "CSS", img: css_img },
  // backend
  { label: "NodeJS", img: node_img },
  { label: "Python", img: python_img },
  { label: "C++", img: cpp_img },
  { label: "AWS Lambda", img: lambda_img },
  { label: "AWS Cloudformation", img: cloudformation_img },
  // databases
  { label: "PostgreSQL", img: postgresql_img },
  { label: "DynamoDB", img: dynamodb_img },
  { label: "RDS", img: rds_img },
  { label: "SQL", img: sql_img },
  { label: "NoSQL", img: nosql_img },
  // dev tools
  { label: "Git", img: github_img },
  { label: "VS Code", img: vscode_img },
  { label: "Linux", img: linux_img },
  { label: "Tmux", img: tmux_img },
  { label: "Postman", img: postman_img },
  // data analysis
  { label: "NumPy", img: numpy_img },
  { label: "SciPy", img: scipy_img },
  { label: "Pandas", img: pandas_img },
  { label: "Matplotlib", img: matplotlib_img },
  { label: "ChartJS", img: chartjs_img }
];

function Skills() {
  return (
    <Container
      maxWidth='none'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '75%',
        mx: 'auto',
        mb: '25vh'
      }}
    >
      <Typography
        id='skills'
        variant='h2'
        my={4}
      >
        Skills
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={4}>
          {gridElements.map(ele => {
            return (
              <Grid item xs={2.4}>
                {gridItem(ele.label, ele.img)}
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default Skills;

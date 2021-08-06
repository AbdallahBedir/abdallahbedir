import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "../components/box";
import Line from "../components/line";
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles,
} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const progressHeight = {
  xl: 45,
  lg: 40,
  md: 35,
  sm: 30,
  xs: 25,
};
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: progressHeight.lg,
    [theme.breakpoints.up("xl")]: {
      height: progressHeight.xl,
    },
    [theme.breakpoints.only("md")]: {
      height: progressHeight.md,
    },
    [theme.breakpoints.only("sm")]: {
      height: progressHeight.sm,
    },
    [theme.breakpoints.only("xs")]: {
      height: progressHeight.xs,
    },
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.main,
  },
  bar: {
    borderRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}))(LinearProgress);

const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(10),
    },
    skill: {
      marginBottom: theme.spacing(2),
    },
    caption: {
      color: "#CCCCCC",
      fontSize: "13px",
    },
    level: {
      marginBottom: theme.spacing(1),
      letterSpacing: "2px",
      textTransform: "capitalize",
      fontSize: "1.35rem",
      fontWeight: 600,
    },
    progressWrapper: {
      position: "relative",
    },
    progressLabel: {
      position: "absolute",
      color: "#fff",
      zIndex: 3,
      lineHeight: `${progressHeight.lg}px`,
      fontWeight: 600,
      fontSize: "15px",
      [theme.breakpoints.up("xl")]: {
        lineHeight: `${progressHeight.xl}px`,
      },
      [theme.breakpoints.only("md")]: {
        lineHeight: `${progressHeight.md}px`,
      },
      [theme.breakpoints.only("sm")]: {
        lineHeight: `${progressHeight.sm}px`,
      },
      [theme.breakpoints.only("xs")]: {
        lineHeight: `${progressHeight.xs}px`,
      },
    },
  });

interface Props extends WithStyles<typeof styles> {}

const Skills: React.FC<Props> = ({ classes }) => {
  const levels = [
    {
      name: "professional",
      skills: [
        { name: "DataStructure/Problem Solving", percentage: 90 },
        { name: "React.js", percentage: 97 },
        { name: "Typescript", percentage: 94 },
        { name: "Redux(react-redux/ngrx)", percentage: 93 },
        { name: "Microservices/Micro front-end", percentage: 88 },
        { name: "Docker", percentage: 95 },
        { name: "AWS/Kubernetes", percentage: 88 },
        { name: "TypeScript/ECMAScript 6 /JavaScript", percentage: 97 },
        { name: "GraphQl/ApolloGraphql", percentage: 92 },
        { name: "Git/Ubuntu/Scrum", percentage: 96 },
        { name: "NodeJs/ExpressJs/MongoDb (MEAN)", percentage: 85 },
        { name: "SSR/SSG(next.js/nuxt.js)", percentage: 95 },
        { name: "Angular9/VueJs", percentage: 96 },
        { name: "Linux", percentage: 90 },
        { name: "React-native/Ionic4", percentage: 95 },
        { name: "Automation Testing/Jest/Enzyme", percentage: 90 },
        { name: "Material-UI/Angular Material", percentage: 97 },
        { name: "HTML4/HTML5", percentage: 97 },
        { name: "CSS3/SASS/CSS Modules/Bem/JSS", percentage: 94 },
        { name: "Webpack", percentage: 92 },
        { name: "Jquery", percentage: 98 },
        {
          name: (
            <Link href="https://datatables.net/" color="inherit">
              datatables.net
            </Link>
          ),
          percentage: 97,
        },
        { name: "Bootstrap4", percentage: 97 },
        {
          name: (
            <React.Fragment>
              <Link href="https://socket.io/" color="inherit">
                Socket.io
              </Link>
              &nbsp;/&nbsp;
              <Link href="https://talkjs.com/" color="inherit">
                Talkjs
              </Link>
            </React.Fragment>
          ),
          percentage: 94,
        },
        { name: "SVG", percentage: 90 },
      ],
    },
    {
      name: "intermediate",
      skills: [
        { name: "C#", percentage: 55 },
        { name: "ASP.NET MVC", percentage: 50 },
        { name: "Sql Server", percentage: 65 },
        { name: "PHP", percentage: 65 },
      ],
    },
    {
      name: "beginner",
      skills: [{ name: "Photoshop", percentage: 25 }],
    },
  ];
  return (
    <section id="skills" className={classes.root}>
      <Box>
        <Typography className="box-title" variant="h5">
          SKILLS
        </Typography>
        {levels.map((level) => (
          <React.Fragment key={level.name}>
            <Typography className={classes.level} variant="h5">
              {level.name}
            </Typography>
            <Line />
            {level.skills.map((skill, index) => (
              <div className={classes.skill} key={index}>
                <Typography
                  className={classes.caption}
                  variant="caption"
                  display="block"
                  gutterBottom
                >
                  {skill.name}
                </Typography>
                <div className={classes.progressWrapper}>
                  <div
                    className={classes.progressLabel}
                    style={{ left: `calc(${skill.percentage}% -  50px )` }}
                  >
                    <span>{skill.percentage}%</span>
                  </div>
                  <BorderLinearProgress
                    value={skill.percentage}
                    variant="determinate"
                  ></BorderLinearProgress>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </Box>
    </section>
  );
};

export default withStyles(styles)(Skills);

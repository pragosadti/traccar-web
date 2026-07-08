import { useTheme, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  image: {
    alignSelf: 'center',
    maxWidth: '1000px',
    maxHeight: '1200px',
    width: 'auto',
    height: 'auto',
    margin: theme.spacing(2),
  },
}));

const LogoImage = ({ color }) => {
  const theme = useTheme();
  const { classes } = useStyles();

  const expanded = !useMediaQuery(theme.breakpoints.down('lg'));
  const darkMode = theme.palette.mode === 'dark';
  const logo = useSelector((state) => state.session.server?.attributes?.logo);
  const logoInverted = useSelector((state) => state.session.server?.attributes?.logoInverted);
  const inverted = Boolean(logoInverted);

  const regularDefaultSrc = expanded ? '/pragosaLogo.svg' : (darkMode ? '/hlogoInverted.svg' : '/hlogo.svg');
  const regularSrc = logo || regularDefaultSrc;
  const invertedDefaultSrc = expanded ? '/logoInvertedExpanded.svg' : '/logoInverted.svg';
  const invertedSrc = logoInverted || invertedDefaultSrc;
  const src = inverted ? invertedSrc : regularSrc;
  const fallbackSrc = inverted ? regularSrc : regularDefaultSrc;

  return (
    <img
      className={classes.image}
      src={src}
      alt=""
      style={{ color: !expanded ? theme.palette.primary.main : color }}
      onError={(event) => {
        const img = event.currentTarget;
        if (img.dataset.fallbackApplied === 'true' || img.src.endsWith(fallbackSrc)) {
          return;
        }
        img.dataset.fallbackApplied = 'true';
        img.src = fallbackSrc;
      }}
    />
  );
};

export default LogoImage;

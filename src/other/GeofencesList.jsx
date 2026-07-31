import { Fragment } from 'react';
import { List, ListItemButton, ListItemText, Divider } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import CollectionActions from '../settings/components/CollectionActions';

const useStyles = makeStyles()(() => ({
  list: {
    flex: 1,
    overflow: 'auto',
    minHeight: 0,
  },
}));

const GeofencesList = ({ geofences = [], selectedGeofenceId, onGeofenceSelected }) => {
  const { classes } = useStyles();
  return (
    <List className={classes.list}>
      {geofences.map((item, index, list) => (
        <Fragment key={item.id}>
          <ListItemButton
            selected={item.id === selectedGeofenceId}
            onClick={() => onGeofenceSelected(item.id)}
          >
            <ListItemText primary={item.name} />
            <CollectionActions
              itemId={item.id}
              editPath="/settings/geofence"
              endpoint="geofences"
              setTimestamp={() => {}}
            />
          </ListItemButton>
          {index < list.length - 1 ? <Divider /> : null}
        </Fragment>
      ))}
    </List>
  );
};

export default GeofencesList;

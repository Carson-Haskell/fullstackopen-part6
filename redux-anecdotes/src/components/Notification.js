import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from '../reducers/notificationReducer';

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  if (notification) {
    setTimeout(() => dispatch(removeNotification()), 2000);
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return <>{notification ? <div style={style}>{notification}</div> : null}</>;
};

export default Notification;

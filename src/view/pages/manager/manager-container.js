import { connect } from 'react-redux';
import { getManager } from '../../../service/action/managerAction';
import Manager from './manager';

const mapDispatchToProps = (dispatch) => ({
  getManager: (response) => dispatch(getManager(response)),
});

const mapStateToProps = (state) => ({
  managers: state.manager.managers,
  meta: state.manager.meta,
});

export default connect(mapStateToProps, mapDispatchToProps)(Manager);

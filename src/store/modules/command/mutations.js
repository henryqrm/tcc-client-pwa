export const CHANGE_COMMAND = 'CHANGE_COMMAND';

export default {
  CHANGE_COMMAND(state, playload) {
    /* eslint-disable */
    state.command = playload;
  },
};

import { GOT_USER } from './Constants';

export const gotUser = data => ({
  type: GOT_USER,
  data: data
});

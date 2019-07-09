// combine epic
import { combineEpics } from 'redux-observable';
// counter
import {counterEpic} from './counter' 

// compbine
export const rootEpic = combineEpics(
  counterEpic,
);
  
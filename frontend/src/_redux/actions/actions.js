import { 
  SET_TOKEN,
  SET_USER,
  ERROR,

  wordToMusicActions,
  sequenceMakerActions,
  scoreKeeperActions
} from "./actionTypes";
import ArtBuddyApi from "../../api";

// Actions for authentication
export const signup = (user) => {
  return async (dispatch) => {
    try {
      const token = await ArtBuddyApi.signup(user);
      dispatch(setToken(token));
      dispatch(setUser(user));
    } catch (e) {
      dispatch(gotError());
      dispatch()
    }
  }
}

export const login = (user) => {
  return async (dispatch) => {
    try {
      const token = await ArtBuddyApi.login(user);
      dispatch(setToken(token));
      dispatch(setUser(user));
    } catch (e) {
      dispatch(gotError());
      dispatch();
    }
  }
}

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
});

export const setUser = (user) => ({
  type: SET_USER,
  user
})

export const gotError = () => ({
  type: ERROR
})

///////////////////////////////////////
// Actions for Word to Music Decoder //
///////////////////////////////////////
export const createWord = (wordInput, wordId) => ({
  type: wordToMusicActions.CREATE_WORD,
  wordInput,
  wordId
});

export const addWord = () => ({
  type: wordToMusicActions.ADD_WORD
})

export const fillLetter = (letter, note) => ({
  type: wordToMusicActions.FILL_LETTER,
  letter,
  note
});

export const playMelody = (word) => ({
  type: wordToMusicActions.PLAY_MELODY,
  word
})

export const changeScale = (scale, sound) => ({
  type: wordToMusicActions.CHANGE_SCALE,
  scale,
  sound
})

export const changeSound = (scale, sound) => ({
  type: wordToMusicActions.CHANGE_SOUND,
  scale,
  sound
})

////////////////////////////////
// Actions for Sequence Maker //
////////////////////////////////

export const changeCategory = (category) => ({
  type: sequenceMakerActions.CHANGE_CATEGORY,
  category
});

export const addToSequence = (sound) => ({
  type: sequenceMakerActions.ADD_TO_SEQUENCE,
  sound
});

export const removeFromSequence = (id) => ({
  type: sequenceMakerActions.REMOVE_FROM_SEQUENCE,
  id
});

export const addBlock = () => ({
  type: sequenceMakerActions.ADD_BLOCK
});

export const removeBlock = () => ({
  type: sequenceMakerActions.REMOVE_BLOCK
});

export const playSequence = () => ({
  type: sequenceMakerActions.PLAY_SEQUENCE
})

export const playAllSequence = () => ({
  type: sequenceMakerActions.PLAY_ALL_SEQUENCE
})

export const resetSequence = () => ({
  type: sequenceMakerActions.RESET_SEQUENCE
})

export const setPitch = (id, pitch) => ({
  type: sequenceMakerActions.SET_PITCH,
  id,
  pitch
})

//////////////////////////////
// Actions for Score Keeper //
//////////////////////////////

export const addStudent = ({name, color}) => ({
  type: scoreKeeperActions.ADD_STUDENT,
  name,
  color
});

export const removeStudent = (name) => ({
  type: scoreKeeperActions.REMOVE_STUDENT,
  name
});

export const addPoint = (name) => ({
  type: scoreKeeperActions.ADD_POINT,
  name
})

export const removePoint = (name) => ({
  type: scoreKeeperActions.REMOVE_POINT,
  name
})

export const changeMaxScore = (maxScore) => ({
  type: scoreKeeperActions.CHANGE_MAX_SCORE,
  maxScore
})

export const resetScores = () => ({
  type: scoreKeeperActions.RESET_SCORES
})
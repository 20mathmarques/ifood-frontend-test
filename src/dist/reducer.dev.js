"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  user: null,
  playlists: [],
  //playing:false,
  item: null,
  token: null
};
exports.initialState = initialState;

var reducer = function reducer(state, action) {
  console.log(action); //Action ->type, [payload]

  switch (action.type) {
    case 'SET_USER':
      return _objectSpread({}, state, {
        user: action.user
      });

    case 'SET_TOKEN':
      return _objectSpread({}, state, {
        token: action.token
      });

    case 'SET_PLAYLISTS':
      return _objectSpread({}, state, {
        playlists: action.playlists
      });

    case 'SET_MUSICS':
      return _objectSpread({}, state, {
        musics: action.musics
      });

    case 'SET_LISTS':
      return _objectSpread({}, state, {
        lists: action.lists
      });

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;
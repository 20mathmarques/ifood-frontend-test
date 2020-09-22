"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accessUrl = exports.getTokenFromResponse = exports.authEndpoint = void 0;
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
var authEndpoint = "https://accounts.spotify.com/pt-BR/authorize"; // Replace with your app's client ID, redirect URI and desired scopes

exports.authEndpoint = authEndpoint;
var clientId = "0516191a016a4c9599006936f92b6ab8";
var clientSecret = "be38765e1e3643bf82c1c6f9b518c4ce";
var redirectUri = "http://localhost:3000/";
var scopes = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state"];

var getTokenFromResponse = function getTokenFromResponse() {
  var hashParams = {};
  var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  e = r.exec(q);

  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
  }

  return hashParams;
};

exports.getTokenFromResponse = getTokenFromResponse;
var accessUrl = "".concat(authEndpoint, "?client_id=").concat(clientId, "&redirect_uri=").concat(redirectUri, "&scope=").concat(scopes.join("%20"), "&response_type=token&show_dialog=true");
exports.accessUrl = accessUrl;
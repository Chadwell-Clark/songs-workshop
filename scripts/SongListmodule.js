import { songData } from "./SongDataProviderModule.js";
import {songHTMLRepresentation} from "./SongHTMLmodule.js";

// find DOM location to put all songs as HTML
// iterate songs
const DOMTarget = document.querySelector("#all-songs");

export const songList = () => {};
let allSongs = songData();
let allSongHTMLRepresentation = "";
for (const song of allSongs) {
  // make HTML for each song
  allSongHTMLRepresentation += songHTMLRepresentation(song);
  // insert HTML into DOM location
}
DOMTarget.innerHTML += allSongHTMLRepresentation;

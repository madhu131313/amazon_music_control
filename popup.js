"use strict";

let prevSong = document.getElementById("prevSong");
let togglePlay = document.getElementById("togglePlay");
let nextSong = document.getElementById("nextSong");
let favorite = document.getElementById("favorite");
let deleteSong = document.getElementById("delete");

prevSong.onclick = function(element) {
  chrome.tabs.query({ url: "*://music.amazon.in/*" }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code:
        'var x = document.getElementsByClassName("previousButton");x[0].click()'
    });
  });
};

nextSong.onclick = function(element) {
  chrome.tabs.query({ url: "*://music.amazon.in/*" }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'var x = document.getElementsByClassName("nextButton");x[0].click()'
    });
  });
};

var favoriteCode = `var x = document.querySelectorAll('[aria-label="Add to My Music"]');x[0].click()`;

favorite.onclick = function(element) {
  chrome.tabs.query({ url: "*://music.amazon.in/*" }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: favoriteCode
    });
  });
};

deleteSong.onclick = function(element) {
  chrome.tabs.query({ url: "*://music.amazon.in/*" }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `var x = document.querySelectorAll('[aria-label="Remove from My Music"]');x[0].click()`
    });
  });
};

togglePlay.onclick = function(element) {
  chrome.tabs.query({ url: "*://music.amazon.in/*" }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `var x= document.getElementsByClassName('playButton');x[0].click()`
    });
  });
};

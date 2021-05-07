var elementChannelList = document.querySelector(
    "#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div > div > div.sidebar-2K8pFh"
  ),
  styleChannelList = window.getComputedStyle(elementChannelList),
  channelListStat = styleChannelList.getPropertyValue("display");

var elementServerList = document.querySelector(
    "#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > nav"
  ),
  styleServerList = window.getComputedStyle(elementServerList),
  serverListStat = styleServerList.getPropertyValue("display");

var serverList =
  "#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > nav";
var channelList =
  "#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div > div > div.sidebar-2K8pFh";
function toggler(panelName, command) {
  document.querySelector(panelName).style.display = command;
}

console.log("test ");
if (channelListStat === "flex" && serverListStat === "flex") {
  console.log("toggle 1");
  toggler(channelList, "none");
} else if (channelListStat === "none" && serverListStat === "flex") {
  toggler(serverList, "none");
} else if (channelListStat === "none" && serverListStat === "none") {
  toggler(channelList, "flex");
} else if (channelListStat === "flex" && serverListStat === "none") {
  toggler(serverList, "flex");
}

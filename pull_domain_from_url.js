//Given a url address as a parameter, create a function that removes all excessive characters and leave the domain name only

function domainName(url){
  //Three different prefix to remove
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  //Split the string into an array at the '.' at the end of the domain name
  //Return the first element in the array
  return url.split('.')[0];
};

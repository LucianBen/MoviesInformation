function processSubject(subject) {
  //电影名
  var title = subject.title;
  //导演
  var directors = subject.directors;
  var directorStr = "";
  for (var index in directors) {
    directorStr = directorStr + directors[index].name + " / ";
  }
  if (directorStr != "") {
    directorStr = directorStr.substring(0, directorStr.length - 2);
  }
  //演员
  var casts = subject.casts;
  var castsStr = "";
  for (var index in casts) {
    castsStr = castsStr + casts[index].name + " / ";
  }
  if (castsStr != "") {
    castsStr = castsStr.substring(0, castsStr.length - 2);
  }
  //类型 
  var genres = subject.genres;
  var genresStr = "";
  for (var index in genres) {
    genresStr = genresStr + genres[index] + " / ";
  }
  if (genresStr != "") {
    genresStr = genresStr.substring(0, genresStr.length - 2);
  }
  //年份
  var year = subject.mainland_pubdate;
  //拼接字符串
  var text = "电影名：" + title + "\n导演：" + directorStr + "\n主演：" + castsStr + "\n类型：" + genresStr + "\n上映时间：" + year + "（中国大陆）";
  subject.text = text;
}

function processSubjects(subjects) {
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.processSubject(subject);
  }
}

module.exports={
  processSubject:processSubject,
  processSubjects:processSubjects
}

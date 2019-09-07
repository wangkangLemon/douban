var Mock=require("mockjs");
Mock.mock("/shouye","get",require("./json/heads.json"))
Mock.mock("/seach","get",require("./json/seach.json"))
Mock.mock("/movie","get",require("./json/movie.json"))
Mock.mock("/books","get",require("./json/books.json"))
Mock.mock("/group","get",require("./json/group.json"))
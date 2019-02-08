var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);

function Course(title, instructor, level, published, views){
    this.title = title;
    //property anonymous fucnion
    this.updateViews = function(){
        return ++views;
    }
}

var courses = [new Course("hello", "my", 1, true, 1), course]

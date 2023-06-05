import Course from "./Course";

function Courses({ courses,removeCourse }) {
  return <div className="courses">
    {
        courses.map((course) => {
            return(
                <Course key={course.id} course={course} removeCourses={removeCourse}/>
                //eğer istenirse aşşağıdaki şekilde de gönderilebilir
                //<Course key={course.id} {...course}
                //bu şekilde kullanımda spread ile direk açıp yollamış oluruz ve propslarını direkt 
                //title,id vs diye yazıp ilgili yerlere de bu şekilde yazabiliriz
            )
        })
    }
  </div>;
}

export default Courses;

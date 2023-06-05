function Course({course,removeCourses}) {
    return ( <div className="course">
        <h2>{course.title}</h2>
        <p>{course.content}</p>
        <div className="remove-btn">
        <span>Price: {course.price}</span>
        <button onClick={() => removeCourses(course.id)}>Sil</button>
        </div>


    </div> );
}

export default Course;
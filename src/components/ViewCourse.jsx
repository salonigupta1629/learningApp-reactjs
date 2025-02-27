import { useParams } from "react-router";
import Category from "./category";
import Sidebar from "./sidebar";
import { courses } from "./data";

 const ViewCourse = () =>{
    const {id} = useParams();
    console.log(id);
    
    const course = courses.find((c)=> c.id === parseInt(id));
    console.log(course);
    
    return(
        <div className="flex flex-col ">
            <Category/>
           <div className="w-1/3">
           <Sidebar chapters={course.chapters}/>
           </div>
<div className="w-2/3">
<h1>{course.name}</h1>
</div>
        </div>
    )
}
export default ViewCourse;
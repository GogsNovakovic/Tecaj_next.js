import Link from "next/link";
import CoursesCatalogClient from "./courses-catalog-client";
import { getAllCourses, getCourseCategories } from "@/lib/data";

export default function Courses() {

    const courses = getAllCourses();
    const categories = getCourseCategories();

    return(
        <section className="pad-section">
            <div className="container">
                <div className="stack">
                    <div className="section-head">
                        <span className="eyebrow">Catalog</span>
                        <h2 className="title-page">All courses</h2>
                        <p className="title=page">Browse every course in catalog</p>
                    </div>

                    <CoursesCatalogClient 
                    courses={courses}
                    categories={categories}
                    />

                </div>
            </div>

        </section>
    );
};

import { getCourseBySlug, getInstructorBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function CourseDetailPage ({
    params
}: {
    params: Promise<{ slug: string }>;   
}) {
    const { slug } = await params;

    const course = getCourseBySlug(slug);

    if (!course) notFound();

    const instructor = getInstructorBySlug(course.instructorSlug);    

    return (
        <section className="pad-section">
        <div className="container">
            <Link href="/courses> Back to Courses</div>"></Link>

            <nav className="back-nav">
                <Link href="/courses">Back to Courses</Link>
            </nav>

            <div className="course-layout">
                <div>
                    <div className="badge-row">
                        <span className="badge badge--brand"></span>
                        <span className="badge"></span>
                        <span className="badge badge--success"></span>
                    </div>
                </div>

                <h1 className="title-display"></h1>
                <p className="course-lede"></p>

                <div className="text-block"></div>

                <div className="lesson-block"></div>

            </div>

        </div>
        </section>
        
    )
}
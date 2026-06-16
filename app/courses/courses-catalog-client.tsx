"use client";

import { type Course } from "@/lib/data";
import Link from "next/link";

export default function CoursesCatalogClient({ courses, categories }:{
    courses: Course[];
    categories: string[];
}) {
  return (
    <div className="stack-md">
      <div className="grid-cards">

        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.slug}`}
            className="card-link"
          >
            <div className="badge-row">
                <span className="badge badge--brand">{course.category}</span>
                <span className="badge">{course.level}</span>
            </div>


          </Link>
        ))}

            <Link href="#" className="card-link">
            <div className="badge-row">
                <span className="badge badge--brand">Web Development</span>
                <span className="badge">Beginner</span>
            </div>
            <h3 className="card-link-title">HTML, CSS course</h3>
            <p className="card-link-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <dl className="card-meta">
                <div>
                    <dt>Lessons</dt>
                    <dd>12</dd>
                </div>
                <div>
                    <dt>Duration</dt>
                    <dd>23 hours</dd>
                </div>

            </dl>


            </Link>
      </div>
    </div>
)
};
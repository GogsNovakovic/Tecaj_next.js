import { NextResponse } from "next/server";
import { getAllCourses } from "@/lib/data";

export async function GET (request: Request) {
    const {searchParams} = new URL (request.url);
    const q = searchParams.get("q")?.trim() ?? ""; 

    if(q) {
        const needle = q.toLowerCase();
        courses = courses.filter(
            (c) => c.title.toLowerCase().includes(needle)
        )
    }

    return NextResponse.json ({
        count: courses.lenght,
        courses
    })
}


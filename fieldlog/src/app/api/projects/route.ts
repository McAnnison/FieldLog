import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Fetch projects from database
  const projects = [
    { id: "1", name: "Urban Biodiversity Mapping", status: "Active", responses: 240 },
    { id: "2", name: "Rural Healthcare Access", status: "Active", responses: 112 },
    { id: "3", name: "Digital Literacy Survey '26", status: "In Review", responses: 890 },
  ];

  return NextResponse.json({ projects });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, location, targetResponses } = body;

    if (!name) {
      return NextResponse.json({ error: "Project name is required" }, { status: 400 });
    }

    // TODO: Save to database
    const project = {
      id: Date.now().toString(),
      name,
      description,
      location,
      targetResponses,
      status: "Draft",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
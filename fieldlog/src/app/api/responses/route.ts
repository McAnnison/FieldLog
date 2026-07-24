import { NextResponse } from "next/server";

export async function GET() {
  const responses = [
    { id: "1", respondent: "RES-001", project: "Urban Biodiversity", date: "2026-07-22", status: "Complete" },
    { id: "2", respondent: "RES-002", project: "Urban Biodiversity", date: "2026-07-22", status: "Complete" },
    { id: "3", respondent: "RES-003", project: "Healthcare Access", date: "2026-07-21", status: "Partial" },
  ];
  return NextResponse.json({ responses });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = {
      id: Date.now().toString(),
      ...body,
      submittedAt: new Date().toISOString(),
    };
    return NextResponse.json({ response }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to save response" }, { status: 500 });
  }
}
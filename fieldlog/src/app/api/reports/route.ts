import { NextResponse } from "next/server";

export async function GET() {
  const reports = [
    { id: "1", title: "Urban Biodiversity Summary", generatedAt: "2026-07-22", responses: 240 },
    { id: "2", title: "Healthcare Access Report", generatedAt: "2026-07-20", responses: 112 },
  ];
  return NextResponse.json({ reports });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const report = {
      id: Date.now().toString(),
      ...body,
      generatedAt: new Date().toISOString(),
      accessCode: Math.random().toString(36).substring(2, 8).toUpperCase(),
    };
    return NextResponse.json({ report }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to generate report" }, { status: 500 });
  }
}
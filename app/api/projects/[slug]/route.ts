import { getProjectBySlug } from '@/utils/projects';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  
  // Get the project
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return new NextResponse(null, { status: 404 });
  }
  
  return NextResponse.json(project);
} 
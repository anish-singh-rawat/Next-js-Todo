import { connectMongoDB } from '@/lib/mongodb';
import { Topic } from '@/model/Topic';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { title, description } = await request.json();
        await connectMongoDB();
        await Topic.findByIdAndUpdate(id, { title, description });
        return NextResponse.json({ message: 'Successfully updated' }, { status: 200 });
    } catch (error) {
        console.error(error, 'dddddddddddd', { error: error });
        return NextResponse.json({ message: 'Error updating topic' }, { status: 500 });
    }
}
export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
}
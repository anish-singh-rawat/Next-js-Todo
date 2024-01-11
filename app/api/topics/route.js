import { connectMongoDB } from "@/lib/mongodb";
import { Topic } from "@/model/Topic";
import { NextResponse } from "next/server";

export async function POST (request){
    try {
    const {title, description} = await request.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({message : "OK"},{status : 201});
    } catch (error) {
        console.log(error);
    }
}

export async function GET (){
    await connectMongoDB();
    const topic = await Topic.find();
    return NextResponse.json({topic})
}

export async function DELETE (request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Delete" }, {status : 200})
}
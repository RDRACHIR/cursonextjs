import { NextResponse } from "next/server";

export async function GET() {
  // extract params
  // query database
  // communite with other services
  console.log(process.env.TOKEN);

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json(res);
  //console.log(data);

  return NextResponse.json({
    message: "obteniendo datos!",
    data: data,
  });
}

export async function POST(request) {
  const data = await requestAnimationFrame.json();
  console.log(data);

  return NextResponse.json({
    message: "creando datos!",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "actualizando dato!",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "eliminando datos!",
  });
}

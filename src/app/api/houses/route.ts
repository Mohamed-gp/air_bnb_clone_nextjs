import { NextRequest } from "next/server";

const POST = async (req: NextRequest) => {
  const body = await req.json();
  return Response.json({ messsage: "Hell" }, { status: 200 });
};

export { POST };

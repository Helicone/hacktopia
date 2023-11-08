import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const json = await request.json();
  console.log("JSON", json);
  try {
    const result = await sql`
      INSERT INTO emails (email, first_name, last_name, company, title)
      VALUES (${json.email}, ${json.first_name}, ${json.last_name}, ${json.company}, ${json.title})
      ON CONFLICT (email) DO NOTHING
      RETURNING *`;
    // Check if a row was inserted
    if (result.rowCount === 0) {
      // No rows inserted, meaning there was a duplicate email
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { result, message: "Signed up successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

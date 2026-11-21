
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  const { count, error } = await supabaseAdmin
    .from("participants")
    .select("*", { count: "exact", head: true });

  if (error) {
    return NextResponse.json(
      { error: "Не удалось получить количество участников" },
      { status: 500 }
    );
  }

  return NextResponse.json({ count: count ?? 0 });
}

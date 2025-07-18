import { supabase } from "../../../../lib/supabaseClient";

export async function GET() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        return Response.json({
            status: 'error',
            message: error.message
        }, { status: 500 })
    }

    return Response.json({ status: 'ok', session: data.session })
}
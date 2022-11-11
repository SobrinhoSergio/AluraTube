import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://fbuqlzbzeqhmskttvjcx.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZidXFsemJ6ZXFobXNrdHR2amN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzUzNDYsImV4cCI6MTk4Mzc1MTM0Nn0.9lapV491-PW4AQAQYdJqaTNKIloxb7rv4afAqFB-lUo";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}
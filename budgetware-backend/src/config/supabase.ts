import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'postgresql://postgres.poympjgbaqciyfrdmfzw:[japierdole1]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres';
const supabaseKey = 'japierdole1';

export const supabase = createClient(supabaseUrl, supabaseKey);

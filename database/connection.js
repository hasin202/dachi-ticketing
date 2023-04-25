const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://eqorewzxwkcgeawvldtn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxb3Jld3p4d2tjZ2Vhd3ZsZHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0MzY3NzMsImV4cCI6MTk5ODAxMjc3M30.BWjlFikMwO98hHWTD03EJ8rE9PNEucsD9OrW-ehnriE"
);

module.exports = supabase;
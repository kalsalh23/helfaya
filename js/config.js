/* ============================================================
   إعدادات Supabase العامة — دليل حلفايا الطبي
   مفتاح anon مفتاح «عام» مصمم للاستخدم في الواجهة — آمن نشره.
   لا تضع هنا أبداً مفاتيح service_role أو التوكنات الخاصة.
   ============================================================
   ⚠️ أمن: مفتاح anon هذا عام ويُمكن نشره علنياً.
   لا تضع أبداً مفتاح service_role أو signing secret هنا.
   Supabase يُستخدم RLS لحماية البيانات — لا تُعطله.
   ============================================================ */

window.SUPABASE_CONFIG = {
  url: "https://jsbjhspnukuusmordein.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzYmpoc3BudWt1dXNtb3JkZWluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQyMjc0MzcsImV4cCI6MjEwOTgwMzQzN30.pIVDkDEt0a2grrngDFWYxvPZbLBGwYINecwtG5QWf9g",
};
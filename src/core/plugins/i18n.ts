import { createI18n } from "vue-i18n/index";

const messages = {
  en: {
    create_account: "Create Account",
    create_invoice: "Create Invoice",
    updates: "Updates",
    my_profile: "My Profile",
    my_invoices: "My Invoices",
    my_customers: "My Customers",
    language: "Language",
    account_settings: "Account Settings",
    signOut: "Sign Out",
    accountType: "Account Type",
    accountInfo: "Account Info",
    complete: "Complete",
    choose_account_type: "Choose Account Type",
    personalAccount: "Personal Account",
    corporateAccount: "Corporate Account",
    establishmentDetails: "Establishment Details",
    establishmentName: "Establishment Name",
    
  },
  ar: {
    create_account: "إنشاء حساب",
    create_invoice: "إنشاء فاتورة",
    updates: "التحديثات",
    my_profile: "ملفي الشخصي",
    my_invoices: "فواتيري",
    my_customers: "عملائي",
    language: "اللغة",
    account_settings: "إعدادات الحساب",
    signOut: "تسجيل الخروج",
    accountType: "نوع الحساب",
    accountInfo: "معلومات الحساب",
    complete: "مكتمل",
    choose_account_type: "اختر نوع الحساب",
    personalAccount: "حساب شخصي",
    corporateAccount: "حساب شركة",
    establishmentDetails: "تفاصيل المؤسسة",
    establishmentName: "اسم المؤسسة",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages,
});

export default i18n;

import { createI18n } from "vue-i18n/index";

const messages = {
  en: {
    signIn: "Sign in",
    signUp: "Sign up",
    create_account: "Create Account",
    create_invoice: "Create Invoice",
    updates: "Updates",
    my_profile: "My Profile",
    my_invoices: "My Invoices",
    invoices: "Invoices",
    my_customers: "My Customers",
    language: "Language",
    account_settings: "Account Settings",
    signOut: "Sign Out",
    accountType: "Account Type",
    accountInfo: "Account Info",
    chooseAccountType: "Choose Account Type",
    complete: "Complete",
    choose_account_type: "Choose Account Type",
    personalAccount: "Personal Account",
    corporateAccount: "Corporate Account",
    enterpriseDetails: "Enterprise Details",
    enterpriseName: "Enterprise Name",
    enterprise_name_required: "Enterprise Name is required",
    enterpriseAddress: "Enterprise Address",
    enterpriseTaxNumber: "Enterprise Tax Number",
    enterpriseRecordNumber: "Enterprise Record Number",
    numberOfTheEnterprise: "Number Of The Enterprise",
    enterpriseWebsite: "Enterprise Website",
    enterpriseEmail: "Enterprise Email",
    enterprisePhone: "Enterprise Phone",
    enterpriseLogo: "Enterprise Logo",
    commercial_number: "Commercial Number",
    standard_number: "Standard Number",
    back: "Back",
    continue: "Continue",
    submit: "Submit",
    pleaseWait: "Please wait...",
    invoiceType: "Invoice Type",
    invoiceInfo: "Invoice Info",
    chooseInvoiceType: "Choose Invoice Type",
    fastInvoice: "Fast Invoice",
    mediumInvoice: "Medium Invoice",
    fullInvoice: "Full Invoice",
    specifyInvoiceDate: "Specify Invoice Date",
    specifyInvoiceDueDate: "Specify Invoice Due Date",
    date: "Date",
    dueDate: "Due Date",
    selectDate: "Select Date",
    enterInvoiceNumber: "Enter Invoice Number",
    invoice: "Invoice",
    billFrom: "Bill From",
    billTo: "Bill To",
    name: "Name",
    email: "Email",
    item: "Item",
    addItem: "Add Item",
    quantity: "QTY",
    price: "Price",
    total: "Total",
    amount: "Amount",
    action: "Action",
    itemName: "Item Name",
    description: "Description",
    addDiscount: "Add Discount",
    subTotal: "Sub Total",
    discount: "Discount",
    tax: "Tax",
    noItems: "No Items",
    paymentMethod: "Payment Method",
    paymentUrl: "Payment Url",
    notes: "Notes",
    yourNotesHere: "Your Notes Here...",
    sendInvoice: "Send Invoice",
    home: "Home",
    overview: "Overview",
    account: "Account",
    settings: "Settings",
    upgradePlanToPro: "Upgrade Plan To Pro",
    profileDetails: "Profile Details",
    editProfile: "Edit Profile",
    fullname: "Fullname",
    phone: "Phone",
    password: "Password",
    profileImage: "Profile Image",
    currency: "Currency",
    saveChanges: "Save Changes",
    discard: "Discard",
    resetPassword: "Reset Password",
    updatePassword: "Update Password",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmNewPassword: "Confirm New Password",
    cancel: "Cancel",
    confirm: "Confirm",
    signInToFatora: "Sign In To Fatora",
    returnHome: "Return Home",
    seems_nothing_here: "Seems there is nothing here",
    newHere: "New Here?",
    forgetPassword: "Forget Password?",
    or: "Or",
    enterEmailToResetPassword: "Enter your email to reset your password.",
    ifYouHaveAccount: "If you have account, please",
    cloudAccount: "Cloud Account",
    customAccount: "Custom Account",
    checkItOut: "If you need more info, please check it out",
    createCorpAccount: "Create corporate account to mane users",
    specify_invoice_size: "Specify Invoices Number",
    other: "Other",
    uploadLogo: "Upload Logo",
    email_exist: "This Email address is already registered",
    phone_exist: "This Phone number is already registered",
    no_invoices_found: "No Invoices Found",
    INVOICE: "INVOICE",
    TOTAL_AMOUNT: "TOTAL AMOUNT",
    INVOICE_TO: "INVOICE TO",
    INVOICE_NO: "INVOICE NO",
    view: "View",
    delete: "Delete",
    customerID: "Customer ID",
    customerEmail: "Customer Email",
    customerAddress: "Customer Address",
    customerName: "Customer Name",
    customerPhone: "Customer Phone",
    taxID: "Tax ID",
  },
  ar: {
    signIn: "تسجيل الدخول",
    signUp: "تسجيل",
    create_account: "إنشاء حساب",
    create_invoice: "إنشاء فاتورة",
    updates: "التحديثات",
    my_profile: "ملفي الشخصي",
    my_invoices: "فواتيري",
    invoices: "فواتير",
    my_customers: "عملائي",
    language: "اللغة",
    account_settings: "إعدادات الحساب",
    signOut: "تسجيل الخروج",
    accountType: "نوع الحساب",
    accountInfo: "معلومات الحساب",
    chooseAccountType: "اختر نوع الحساب",
    complete: "مكتمل",
    choose_account_type: "اختر نوع الحساب",
    personalAccount: "حساب شخصي",
    corporateAccount: "حساب شركة",
    enterpriseDetails: "تفاصيل المؤسسة",
    enterpriseName: "اسم المؤسسة",
    enterprise_name_required: "اسم المؤسسة مطلوب",
    enterpriseAddress: "عنوان المؤسسة",
    enterpriseTaxNumber: "رقم الضريبي للمؤسسة",
    enterpriseRecordNumber: "رقم السجل للمؤسسة",
    numberOfTheEnterprise: "الرقم الموحد للمؤسسة",
    enterpriseWebsite: "موقع المؤسسة",
    enterpriseEmail: "البريد الإلكتروني للمؤسسة",
    enterprisePhone: "هاتف المؤسسة",
    enterpriseLogo: "شعار المؤسسة",
    commercial_number: "رقم التجاري",
    standard_number: "الرقم الموحد",
    back: "رجوع",
    continue: "متابعة",
    submit: "إرسال",
    pleaseWait: "يرجى الانتظار...",
    invoiceType: "نوع الفاتورة",
    invoiceInfo: "معلومات الفاتورة",
    chooseInvoiceType: "اختر نوع الفاتورة",
    fastInvoice: "فاتورة سريعة",
    mediumInvoice: "فاتورة متوسطة",
    fullInvoice: "فاتورة كاملة",
    specifyInvoiceDate: "تحديد تاريخ الفاتورة",
    specifyInvoiceDueDate: "تحديد تاريخ إستحقاق الفاتورة",
    date: "التاريخ",
    dueDate: "تاريخ الاستحقاق",
    selectDate: "اختر التاريخ",
    enterInvoiceNumber: "أدخل رقم الفاتورة",
    invoice: "فاتورة",
    billFrom: "فاتورة من",
    billTo: "فاتورة إلى",
    name: "الاسم",
    email: "البريد الإلكتروني",
    item: "العنصر",
    addItem: "إضافة عنصر",
    quantity: "كمية",
    price: "السعر",
    total: "المجموع",
    amount: "المبلغ",
    action: "الإجراء",
    itemName: "اسم العنصر",
    description: "الوصف",
    addDiscount: "إضافة خصم",
    subTotal: "المجموع الفرعي",
    discount: "خصم",
    tax: "ضريبة القيمة المضافة",
    noItems: "لا توجد عناصر",
    paymentMethod: "طريقة الدفع",
    paymentUrl: "رابط الدفع",
    notes: "ملاحظات",
    yourNotesHere: "ملاحظاتك هنا...",
    sendInvoice: "إرسال الفاتورة",
    home: "الرئيسية",
    overview: "نظرة عامة",
    account: "الحساب",
    settings: "الإعدادات",
    upgradePlanToPro: "ترقية الخطة إلى برو",
    profileDetails: "تفاصيل الملف الشخصي",
    editProfile: "تعديل الملف الشخصي",
    fullname: "الاسم الكامل",
    phone: "رقم الهاتف",
    password: "كلمة المرور",
    profileImage: "صورة الملف الشخصي",
    currency: "العملة",
    saveChanges: "حفظ التغييرات",
    discard: "تجاهل",
    resetPassword: "إعادة تعيين كلمة المرور",
    updatePassword: "تحديث كلمة المرور",
    currentPassword: "كلمة المرور الحالية",
    newPassword: "كلمة المرور الجديدة",
    confirmNewPassword: "تأكيد كلمة المرور الجديدة",
    cancel: "إلغاء",
    confirm: "تأكيد",
    signInToFatora: "تسجيل الدخول إلى فاتورة",
    returnHome: "العودة إلى الصفحة الرئيسية",
    seems_nothing_here: "لا يبدو أن هناك شيئا",
    newHere: "جديد هنا؟",
    forgetPassword: "نسيت كلمة المرور؟",
    or: "أو",
    enterEmailToResetPassword: "أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور",
    ifYouHaveAccount: "إذا كنت تملك حسابا",
    cloudAccount: "حساب سحابي",
    customAccount: "حساب مخصص",
    checkItOut: "إذا كنت بحاجة إلى مزيد من المعلومات ، يرجى التحقق منها",
    createCorpAccount: "إنشاء حساب الشركة لإدارة المستخدمين",
    specify_invoice_size: "حدد عدد الفواتير",
    other: "آخر",
    uploadLogo: "تحميل شعار",
    email_exist: "البريد الإلكتروني مسجل بالفعل",
    phone_exist: "رقم الهاتف مسجل بالفعل",
    no_invoices_found: "لم يتم العثور على فواتير",
    INVOICE: "فاتورة",
    TOTAL_AMOUNT: "المبلغ الإجمالي",
    INVOICE_TO: "فاتورة إلى",
    INVOICE_NO: "رقم الفاتورة",
    view: "عرض",
    delete: "حذف",
    customerID: "رقم المستخدم",
    customerEmail: "بريد المستخدم",
    customerAddress: "عنوان المستخدم",
    customerName: "اسم المستخدم",
    customerPhone: "رقم المستخدم",
    taxID: "رقم الضريبة",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ar",
  globalInjection: true,
  messages,
});

export default i18n;

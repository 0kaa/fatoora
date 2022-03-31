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
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    addressRequired: "Address is required",
    phoneRequired: "Phone is required",
    taxNumberRequired: "Tax Number is required",
    // validation messages
    nameMin: "Name must be at least 3 characters",
    nameMax: "Name must be less than 50 characters",
    passwordMinLength: "Password must be at least 8 characters",
    passwordMaxLength: "Password must be less than 32 characters",
    passwordRequired: "Password is required",
    phoneNumberInvalid: "Phone number is invalid",
    phoneNumberMinLength: "Phone number must be at least 10 characters",
    phoneNumberRequired: "Phone number is required",
    emailInvalid: "Email is invalid",
    market_name_required: "Market name is required",
    market_name_min: "Market name must be at least 3 characters",
    market_name_max: "Market name must be less than 50 characters",
    market_address_required: "Market address is required",
    market_phone_invalid: "Market phone number is invalid",
    market_phone_min_length:
      "Market phone number must be at least 10 characters",
    market_phone_required: "Market phone number is required",
    market_email_invalid: "Market email is invalid",
    market_email_required: "Market email is required",
    market_tax_number_required: "Market tax number is required",
    market_tax_number_min_length:
      "Market tax number must be at least 8 characters",
    market_tax_number_max_length:
      "Market tax number must be less than 15 characters",
    market_tax_number_digits_only: "Tax number must be digits only",
    market_commercial_number_required: "Market commercial number is required",
    market_standard_number_required: "Market standard number is required",
    market_standard_number_digits_only: "Standard number must be digits only",
    market_standard_number_min_length:
      "Standard number must be at least 8 characters",
    market_standard_number_max_length:
      "Standard number must be less than 15 characters",
    market_site_url_invalid: "Market site url is invalid",
    market_site_url_required: "Market site url is required",

    standardNumberRequired: "Standard Number is required",
    commercialNumberRequired: "Commercial Number is required",
    siteUrlRequired: "Website is required",
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
    market_email_exist: "This Market Email address is already registered",
    market_phone_exist: "This Market Phone number is already registered",
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
    deleteCustomer: "Delete Customer",
    taxID: "Tax ID",
    edit: "Edit",
    details: "Details",
    editCustomer: "Edit Customer",
    otherInfo: "Other Information",
    customers: "Customers",
    site_url: "Site Url",
    selectBankType: "Select Bank Type",
    ok: "Ok",
    error_occured: "Error Occured",
    register_success: "Register Success",
    tryAgain: "Try Again",
    paymentMethods: "Payment Methods",
    select_customer: "Select Customer",
    paidInvoice: "Paid Invoice",
    addNewCustomer: "Add New Customer",
    creatingAccount: "Creating Account",
    selectMethodType: "Select Payment Method Type",
    selectShippingCompany: "Select Shipping Company",
    discount_amount: "Discount Amount",
    percentage: "Percentage",
    fixed: "Fixed",
    api_key: "API Key",
    api_key_required: "API Key is required",
    shippingMethods: "Shipping Methods",
    bank: "Bank",
    account_name: "Account Name",
    account_number: "Account Number",
    iban: "IBAN",
    choose_a_bank: "Choose a bank",
    enter_account_name: "Enter account name",
    enter_account_number: "Enter account number",
    enter_iban: "Enter iban",
    currency_required: "Currency is required",
    by: "by",
    allLogs: "All Logs",
    view_updates: "View Updates",
    logs: "Logs",
    market_commercial_number_min_length:
      "Market commercial number must be at least 8 characters",
    market_commercial_number_max_length:
      "Market commercial number must be less than 15 characters",
    market_commercial_number_digits_only:
      "Market commercial number must be digits only",
    add: "Add",
    taxNumberLength: "Tax number must be 15 characters",
    commercialNumberLength: "Commercial number must be 10 characters",
    pleaseEnterBank: "Please enter bank",
    account_name_is_required: "Account name is required",
    account_number_is_required: "Account number is required",
    iban_is_required: "IBAN is required",
    release_date_is_required: "Release date is required",
    due_date_is_required: "Due date is required",
    due_date_must_be_after_release_date: "Due date must be after release date",
    product_name_is_required: "Product name is required",
    product_quantity_is_required: "Product quantity is required",
    product_price_is_required: "Product price is required",
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
    nameRequired: "الاسم مطلوب",
    emailRequired: "البريد الإلكتروني مطلوب",
    addressRequired: "العنوان مطلوب",
    phoneRequired: "رقم الهاتف مطلوب",
    taxNumberRequired: "رقم الضريبة مطلوب",
    // validation messages
    nameMin: "الاسم يجب أن يكون أكثر من 3 أحرف",
    nameMax: "الاسم يجب أن يكون أقل من 50 حرف",
    passwordMinLength: "كلمة المرور يجب أن تكون أكثر من 6 أحرف",
    passwordMaxLength: "كلمة المرور يجب أن تكون أقل من 20 حرف",
    passwordRequired: "كلمة المرور مطلوبة",
    phoneNumberInvalid: "رقم الهاتف غير صحيح",
    phoneNumberMinLength: "رقم الهاتف يجب أن يكون أكثر من 10 أرقام",
    phoneNumberRequired: "رقم الهاتف مطلوب",
    emailInvalid: "البريد الإلكتروني غير صحيح",
    market_name_required: "اسم السوق مطلوب",
    market_name_min: "اسم السوق يجب أن يكون أكثر من 3 أحرف",
    market_name_max: "اسم السوق يجب أن يكون أقل من 50 حرف",
    market_address_required: "عنوان السوق مطلوب",
    market_phone_invalid: "رقم الهاتف غير صحيح",
    market_phone_min_length: "رقم الهاتف يجب أن يكون أكثر من 10 أرقام",
    market_phone_required: "رقم الهاتف مطلوب",
    market_email_invalid: "البريد الإلكتروني غير صحيح",
    market_email_required: "البريد الإلكتروني مطلوب",
    market_tax_number_required: "رقم الضريبة مطلوب",
    market_tax_number_min_length: "رقم الضريبة يجب أن يكون أكثر من 10 أرقام",
    market_tax_number_max_length: "رقم الضريبة يجب أن يكون أقل من 15 أرقام",
    market_tax_number_digits_only: "رقم الضريبة يجب أن يكون أرقام فقط",
    market_commercial_number_required: "رقم التجاري مطلوب",
    market_standard_number_required: "الرقم الموحد مطلوب",
    market_standard_number_digits_only: "الرقم الموحد يجب أن يكون أرقام فقط",
    market_standard_number_min_length:
      "الرقم الموحد يجب أن يكون أكثر من 8 أرقام",
    market_standard_number_max_length:
      "الرقم الموحد يجب أن يكون أقل من 15 أرقام",
    market_site_url_invalid: "رابط الموقع غير صحيح",
    market_site_url_required: "رابط الموقع مطلوب",

    standardNumberRequired: "الرقم الموحد مطلوب",
    commercialNumberRequired: "الرقم التجاري مطلوب",
    siteUrlRequired: "رابط الموقع مطلوب",
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
    market_email_exist: "البريد الإلكتروني الخاص بالمتجر مسجل بالفعل",
    market_phone_exist: "رقم الهاتف الخاص بالمتجر مسجل بالفعل",
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
    deleteCustomer: "حذف المستخدم",
    taxID: "رقم الضريبة",
    edit: "تعديل",
    details: "تفاصيل",
    editCustomer: "تعديل المستخدم",
    otherInfo: "معلومات أخرى",
    customers: "العملاء",
    site_url: "رابط الموقع",
    selectBankType: "حدد نوع البنك",
    ok: "حسنا",
    error_occured: "حدث خطأ",
    register_success: "تم التسجيل بنجاح",
    tryAgain: "حاول مرة أخرى",
    paymentMethods: "طرق الدفع",
    select_customer: "حدد العميل",
    paidInvoice: "فاتورة مدفوعة",
    addNewCustomer: "إضافة عميل جديد",
    creatingAccount: "جاري إنشاء حساب",
    selectMethodType: "حدد طريقة الدفع",
    selectShippingCompany: "اختار شركة الشحن",
    discount_amount: "قيمة الخصم",
    percentage: "نسبة مئوية",
    fixed: "ثابت",
    api_key: "مفتاح API",
    api_key_required: "مفتاح API مطلوب",
    shippingMethods: "طرق الشحن",
    bank: "بنك",
    account_name: "اسم الحساب",
    account_number: "رقم الحساب",
    iban: "IBAN",
    choose_a_bank: "اختر بنك",
    enter_account_name: "أدخل اسم الحساب",
    enter_account_number: "أدخل رقم الحساب",
    enter_iban: "أدخل IBAN",
    currency_required: "العملة مطلوبة",
    by: "بواسطة",
    allLogs: "كل السجلات",
    view_updates: "عرض التحديثات",
    logs: "سجلات",
    market_commercial_number_min_length:
      "رقم السجل التجاري يجب أن يكون أكبر من 8 أحرف",
    market_commercial_number_max_length:
      "رقم السجل التجاري يجب أن يكون أقل من 15 أحرف",
    market_commercial_number_digits_only:
      "رقم السجل التجاري يجب أن يكون أرقام فقط",
    add: "إضافة",
    taxNumberLength: "رقم الضريبة يجب أن يكون أكبر من 15 أحرف",
    commercialNumberLength: "رقم السجل التجاري يجب أن يكون أكبر من 8 أحرف",
    pleaseEnterBank: "يرجى إدخال بنك",
    account_name_is_required: "اسم الحساب مطلوب",
    account_number_is_required: "رقم الحساب مطلوب",
    iban_is_required: "IBAN مطلوب",
    release_date_is_required: "تاريخ الإصدار مطلوب",
    due_date_is_required: "تاريخ الاستحقاق مطلوب",
    due_date_must_be_after_release_date:
      "تاريخ الاستحقاق يجب أن يكون بعد تاريخ الإصدار",
    product_name_is_required: "اسم المنتج مطلوب",
    product_quantity_is_required: "الكمية مطلوبة",
    product_price_is_required: "سعر المنتج مطلوب",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ar",
  globalInjection: true,
  messages,
});

export default i18n;

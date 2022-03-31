/* eslint-disable no-unused-vars */
enum Actions {
  // action types
  ADD_BODY_CLASSNAME = "addBodyClassName",
  REMOVE_BODY_CLASSNAME = "removeBodyClassName",
  ADD_BODY_ATTRIBUTE = "addBodyAttribute",
  REMOVE_BODY_ATTRIBUTE = "removeBodyAttribute",
  ADD_CLASSNAME = "addClassName",
  // User actions
  VERIFY_AUTH = "verifyAuth",
  LOGIN = "login",
  LOGOUT = "logout",
  REGISTER = "register",
  CONTACT_FORM = "contactForm",
  UPDATE_USER = "updateUser",
  FORGOT_PASSWORD = "forgotPassword",
  SET_NEW_PASSWORD = "setNewPassword",
  GET_PAYMENT_METHODS = "getPaymentMethods",
  GET_BANKS = "getBanks",
  GET_SHIPPING_COMPANIES = "getShippingCompanies",
  GET_CURRENCIES = "getCurrencies",
  // Invoice actions
  GET_INVOICES = "getInvoices",
  GET_INVOICE = "getInvoice",
  CREATE_INVOICE = "createInvoice",
  // UPDATE_INVOICE = "updateInvoice",
  // DELETE_INVOICE = "deleteInvoice",
  // Customer actions
  CREATE_CUSTOMER = "createCustomer",
  UPDATE_CUSTOMER = "updateCustomer",
  GET_CUSTOMERS = "getCustomers",
  GET_CUSTOMER = "getCustomer",
  DELETE_CUSTOMER = "deleteCustomer",
  SET_BREADCRUMB_ACTION = "setBreadcrumbAction",
  GET_LOGS = "getLogs",
  GET_ALL_LOGS = "getAllLogs",
}

enum Mutations {
  // mutation types
  SET_CLASSNAME_BY_POSITION = "appendBreadcrumb",
  PURGE_AUTH = "logOut",
  SET_AUTH = "setAuth",
  SET_USER = "setUser",
  SET_TOKEN = "setToken",
  SET_ERROR = "setError",
  SET_LANG = "setLang",
  SET_BANKS = "setBanks",
  SET_CURRENCY = "setCurrency",
  SET_SHIPPING_COMPANIES = "setShippingCompanies",
  SET_PAYMENT_METHODS = "setPaymentMethods",
  SET_LOGS = "setLogs",
  SET_CUSTOMERS = "setCustomers",
  SET_INVOICES = "setInvoices",
  SET_BREADCRUMB_MUTATION = "setBreadcrumbMutation",
  SET_LAYOUT_CONFIG = "setLayoutConfig",
  RESET_LAYOUT_CONFIG = "resetLayoutConfig",
  OVERRIDE_LAYOUT_CONFIG = "overrideLayoutConfig",
  OVERRIDE_PAGE_LAYOUT_CONFIG = "overridePageLayoutConfig",
}

export { Actions, Mutations };

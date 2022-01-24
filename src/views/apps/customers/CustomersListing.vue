<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="/media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Customers"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="checkedCustomers.length === 0"
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_customers_export_modal"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="/media/icons/duotune/arrows/arr078.svg" />
            </span>
            Export
          </button>
          <!--end::Export-->
          <!--begin::Add customer-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_create_account"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="/media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Add Customer
          </button>
          <!--end::Add customer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span class="me-2">{{ checkedCustomers.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span
              class="me-2"
              data-kt-customer-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-customer-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0" v-if="tableData.length">
      <Datatable
        :table-data="tableData"
        :table-header="tableHeader"
        :enable-items-per-page-dropdown="true"
      >
        <template v-slot:cell-checkbox="{ row: customer }">
          <div
            class="form-check form-check-sm form-check-custom form-check-solid"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="customer.id"
              v-model="checkedCustomers"
            />
          </div>
        </template>
        <template v-slot:cell-name="{ row: customer }">
          {{ customer.name }}
        </template>
        <template v-slot:cell-email="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.email }}
          </a>
        </template>
        <template v-slot:cell-account_type="{ row: customer }">
          {{ customer.account_type }}
        </template>
        <template v-slot:cell-phone="{ row: customer }">
          {{ customer.phone }}
        </template>
        <template v-slot:cell-created_at="{ row: customer }">
          {{ customer.created_at }}
        </template>
        <template v-slot:cell-actions="{ row: customer }">
          <router-link
            :to="{
              name: 'customers-details',
              params: { id: customer.id },
            }"
            class="btn btn-sm btn-light btn-active-light-primary"
          >
            {{ $t("view") }}
          </router-link>
        </template>
      </Datatable>
    </div>
  </div>

  <ExportCustomerModal></ExportCustomerModal>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
// import jsPDF from "jspdf";

interface ICustomer {
  id: number;
  name: string;
  email: string;
  phone: string;
  account_type: string;
}

export default defineComponent({
  name: "customers-listing",
  components: {
    Datatable,
    ExportCustomerModal,
  },
  setup() {
    const checkedCustomers = ref([]);
    const store = useStore();
    const tableHeader = ref([
      {
        key: "checkbox",
        sortable: false,
      },
      {
        name: "Customer Name",
        key: "name",
        sortable: true,
      },
      {
        name: "Email",
        key: "email",
        sortable: true,
      },
      {
        name: "Account Type",
        key: "account_type",
        sortable: true,
      },
      {
        name: "Phone",
        key: "phone",
        sortable: true,
      },
      {
        name: "Created Date",
        key: "created_at",
        sortable: true,
      },
      {
        name: "Actions",
        sortable: false,
        key: "actions",
      },
    ]);
    const tableData = ref<Array<ICustomer>>([]);
    const initCustomers = ref<Array<ICustomer>>([]);

    // const createPDF = () => {
    //   const pdf = new jsPDF();
    //   const data = tableData.value.map((customer: ICustomer) => {
    //     return {
    //       id: customer.id.toString(),
    //       name: customer.name,
    //       email: customer.email,
    //       company: customer.company,
    //       date: customer.date,
    //     };
    //   });

    //   const header = ["id", "name", "email", "company", "date"];
    //   pdf.table(10, 10, data, header, {
    //     autoSize: true,
    //   });
    //   pdf.save("pdf.pdf");
    // };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Customers Listing", ["Customers"]);

      store
        .dispatch(Actions.GET_CUSTOMERS)
        .then((res) => {
          tableData.value = res;
        })
        .then(() => {
          initCustomers.value = [...tableData.value];
        });
    });

    const deleteFewCustomers = () => {
      checkedCustomers.value.forEach((item) => {
        deleteCustomer(item);
      });
      checkedCustomers.value.length = 0;
    };

    const deleteCustomer = (id) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          store.dispatch(Actions.DELETE_CUSTOMER, id).then((res) => {
            tableData.value.splice(i, 1);
            console.log(res);
          });
        }
      }
    };

    const search = ref<string>("");

    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initCustomers.value);
      if (search.value !== "") {
        let results: Array<ICustomer> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      } else {
        tableData.value.splice(
          0,
          tableData.value.length,
          ...initCustomers.value
        );
      }
    };

    const searchingFunc = (obj, value): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    return {
      tableData,
      tableHeader,
      deleteCustomer,
      search,
      initCustomers,
      // createPDF,
      searchItems,
      checkedCustomers,
      deleteFewCustomers,
    };
  },
});
</script>

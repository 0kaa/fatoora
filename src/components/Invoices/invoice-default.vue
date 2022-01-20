<template>
  <!--begin::Invoice-->
  <div class="post d-flex flex-column-fluid" id="kt_post" ref="root">
    <!--begin::Container-->
    <div id="kt_content_container" class="container-xxl">
      <!-- begin::Invoice 1-->
      <div class="card">
        <!-- begin::Body-->
        <div class="card-body py-20">
          <!-- begin::Wrapper-->
          <div class="mw-lg-950px mx-auto w-100">
            <!-- begin::Header-->
            <div
              class="d-flex justify-content-between flex-column flex-sm-row mb-19"
            >
              <h4 class="fw-boldest text-gray-800 fs-2qx pe-5 pb-7">INVOICE</h4>
              <!--end::Logo-->
              <div class="text-sm-end">
                <!--begin::Text-->
                <div class="text-sm-end fw-bold fs-4 text-muted mt-7">
                  <div>Cecilia Chapman, 711-2880 Nulla St, Mankato</div>
                  <div>Mississippi 96522</div>
                </div>
                <!--end::Text-->
              </div>
            </div>
            <!--end::Header-->
            <!--begin::Body-->
            <div class="border-bottom pb-12">
              <!--begin::Wrapper-->
              <div
                class="d-flex justify-content-between flex-column flex-md-row"
              >
                <!--begin::Content-->
                <div class="flex-grow-1 pt-8 mb-13">
                  <!--begin::Table-->
                  <div class="table-responsive border-bottom mb-14">
                    <table class="w-100">
                      <thead>
                        <tr
                          class="border-bottom fs-6 fw-bolder text-muted text-uppercase"
                        >
                          <th class="min-w-175px pb-9">Item name</th>
                          <th class="min-w-70px pb-9 text-end">Qty</th>
                          <th class="min-w-100px pe-lg-6 pb-9 text-end">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="fw-bolder text-gray-700 fs-5 text-end">
                          <td class="d-flex align-items-center pt-11">
                            <div>Creative Design</div>
                          </td>
                          <td class="pt-11">80</td>
                          <td class="pt-11 fs-5 pe-lg-6 text-dark fw-boldest">
                            $3200.00
                          </td>
                        </tr>
                        <tr class="fw-bolder text-gray-700 fs-5 text-end">
                          <td class="d-flex align-items-center">
                            <div>Logo Design</div>
                          </td>
                          <td>120</td>
                          <td class="fs-5 text-dark fw-boldest pe-lg-6">
                            $4800.00
                          </td>
                        </tr>

                        <tr class="fw-bolder text-gray-700 fs-5 text-end">
                          <td class="d-flex align-items-center">
                            <div>Creative Design</div>
                          </td>
                          <td class="">80</td>
                          <td class="fs-5 pe-lg-6 text-dark fw-boldest">
                            $3200.00
                          </td>
                        </tr>
                        <tr class="fw-bolder text-gray-700 fs-5 text-end">
                          <td class="d-flex align-items-center">
                            <div>Logo Design</div>
                          </td>
                          <td>120</td>
                          <td class="fs-5 text-dark fw-boldest pe-lg-6">
                            $4800.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--end::Table-->
                  <!--begin::Section-->
                  <div class="d-flex flex-column mw-md-300px w-100">
                    <!--begin::Label-->
                    <div class="fw-bold fs-5 mb-3 text-dark00">
                      BANK TRANSFER
                    </div>
                    <!--end::Label-->
                    <!--begin::Item-->
                    <div class="d-flex flex-stack text-gray-800 mb-3 fs-6">
                      <!--begin::Accountname-->
                      <div class="fw-bold pe-5">Account Name:</div>
                      <!--end::Accountname-->
                      <!--begin::Label-->
                      <div class="text-end fw-norma">Barclays UK</div>
                      <!--end::Label-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex flex-stack text-gray-800 mb-3 fs-6">
                      <!--begin::Accountnumber-->
                      <div class="fw-bold pe-5">Account Number:</div>
                      <!--end::Accountnumber-->
                      <!--begin::Number-->
                      <div class="text-end fw-norma">1234567890934</div>
                      <!--end::Number-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="d-flex flex-stack text-gray-800 fs-6">
                      <!--begin::Code-->
                      <div class="fw-bold pe-5">Code:</div>
                      <!--end::Code-->
                      <!--begin::Label-->
                      <div class="text-end fw-norma">BARC0032UK</div>
                      <!--end::Label-->
                    </div>
                    <!--end::Item-->
                  </div>
                  <!--end::Section-->
                </div>
                <!--end::Content-->
                <!--begin::Separator-->
                <div class="border-end d-none d-md-block mh-450px mx-9"></div>
                <!--end::Separator-->
                <!--begin::Content-->
                <div class="text-end pt-10">
                  <!--begin::Total Amount-->
                  <div class="fs-3 fw-bolder text-muted mb-3">TOTAL AMOUNT</div>
                  <div class="fs-xl-2x fs-2 fw-boldest">
                    {{ invoice.total_price + " " + $store.state.currency }}
                  </div>
                  <div class="text-muted fw-bold">Taxes included</div>
                  <!--end::Total Amount-->
                  <div class="border-bottom w-100 my-7 my-lg-16"></div>
                  <!--begin::Invoice To-->
                  <div class="text-gray-600 fs-6 fw-bold mb-3">INVOICE TO.</div>
                  <div class="fs-6 text-gray-800 fw-bold mb-8">
                    Iris Watson. <br />Fredrick Nebraska 20620
                  </div>
                  <!--end::Invoice To-->
                  <!--begin::Invoice No-->
                  <div class="text-gray-600 fs-6 fw-bold mb-3">INVOICE NO.</div>
                  <div class="fs-6 text-gray-800 fw-bold mb-8">56758</div>
                  <!--end::Invoice No-->
                  <!--begin::Invoice Date-->
                  <div class="text-gray-600 fs-6 fw-bold mb-3">DATE</div>
                  <div class="fs-6 text-gray-800 fw-bold">12 May, 2020</div>
                  <!--end::Invoice Date-->
                </div>
                <!--end::Content-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Body-->
            <!-- begin::Footer-->
            <div
              class="d-flex flex-stack flex-wrap mt-lg-20 pt-13"
              v-if="!printing"
            >
              <!-- begin::Actions-->
              <div class="my-1 me-5">
                <!-- begin::Action-->
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_invoice"
                  class="btn btn-primary my-1 me-12"
                >
                  Create Invoice
                </button>
                <!-- end::Action-->
                <!-- begin::Download-->
                <button
                  type="button"
                  @click.prevent="createPDF"
                  class="btn btn-light-primary my-1"
                >
                  Download
                </button>
                <!-- end::Download-->
              </div>
              <!-- end::Actions-->
            </div>
            <!-- end::Footer-->
          </div>
          <!-- end::Wrapper-->
        </div>
        <!-- end::Body-->
      </div>
      <!-- end::Invoice 1-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Post-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import jsPDF from "jspdf";
export default defineComponent({
  name: "invoice-default",
  props: {
    invoice: Object,
  },
  setup() {
    const root = ref();
    const printing = ref(false);
    const createPDF = () => {
      var doc = new jsPDF("l", "mm", [1200, 1210]);
      printing.value = true;
      doc.html(root.value, {
        callback: function (doc) {
          printing.value = false;
          doc.save("output.pdf");
        },
        x: 0,
        y: 0,
      });
    };
    return {
      createPDF,
      root,
      printing,
    };
  },
});
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  margin-bottom: 1rem;
  color: #181c32;
  vertical-align: top;
  border-color: #eff2f5;
  & > :not(caption) > * > * {
    padding: 0.75rem 0.75rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
  }
  tbody {
    vertical-align: top;
  }
  tr,
  th,
  td {
    border-color: inherit;
    border-width: inherit;
    border-style: inherit;
    text-transform: inherit;
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    height: inherit;
    min-height: inherit;
  }
}
</style>

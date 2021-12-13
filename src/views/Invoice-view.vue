<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Content-->
    <div class="flex-lg-row-fluid">
      <!--begin::Post-->
      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
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
                      <h4 class="fw-boldest text-gray-800 fs-2qx pe-5 pb-7">
                        INVOICE
                      </h4>
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
                            <table class="table">
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
                                <tr
                                  class="fw-bolder text-gray-700 fs-5 text-end"
                                >
                                  <td class="d-flex align-items-center pt-11">
                                    <div>Creative Design</div>
                                  </td>
                                  <td class="pt-11">80</td>
                                  <td
                                    class="pt-11 fs-5 pe-lg-6 text-dark fw-boldest"
                                  >
                                    $3200.00
                                  </td>
                                </tr>
                                <tr
                                  class="fw-bolder text-gray-700 fs-5 text-end"
                                >
                                  <td class="d-flex align-items-center">
                                    <div>Logo Design</div>
                                  </td>
                                  <td>120</td>
                                  <td class="fs-5 text-dark fw-boldest pe-lg-6">
                                    $4800.00
                                  </td>
                                </tr>
                                <tr
                                  class="fw-bolder text-gray-700 fs-5 text-end"
                                >
                                  <td class="d-flex align-items-center pb-10">
                                    <div>Web Development</div>
                                  </td>
                                  <td>210</td>
                                  <td class="fs-5 text-dark fw-boldest pe-lg-6">
                                    $12600.00
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
                            <div
                              class="d-flex flex-stack text-gray-800 mb-3 fs-6"
                            >
                              <!--begin::Accountname-->
                              <div class="fw-bold pe-5">Account Name:</div>
                              <!--end::Accountname-->
                              <!--begin::Label-->
                              <div class="text-end fw-norma">Barclays UK</div>
                              <!--end::Label-->
                            </div>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <div
                              class="d-flex flex-stack text-gray-800 mb-3 fs-6"
                            >
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
                        <div
                          class="border-end d-none d-md-block mh-450px mx-9"
                        ></div>
                        <!--end::Separator-->
                        <!--begin::Content-->
                        <div class="text-end pt-10">
                          <!--begin::Total Amount-->
                          <div class="fs-3 fw-bolder text-muted mb-3">
                            TOTAL AMOUNT
                          </div>
                          <div class="fs-xl-2x fs-2 fw-boldest">$20,600.00</div>
                          <div class="text-muted fw-bold">Taxes included</div>
                          <!--end::Total Amount-->
                          <div class="border-bottom w-100 my-7 my-lg-16"></div>
                          <!--begin::Invoice To-->
                          <div class="text-gray-600 fs-6 fw-bold mb-3">
                            INVOICE TO.
                          </div>
                          <div class="fs-6 text-gray-800 fw-bold mb-8">
                            Iris Watson. <br />Fredrick Nebraska 20620
                          </div>
                          <!--end::Invoice To-->
                          <!--begin::Invoice No-->
                          <div class="text-gray-600 fs-6 fw-bold mb-3">
                            INVOICE NO.
                          </div>
                          <div class="fs-6 text-gray-800 fw-bold mb-8">
                            56758
                          </div>
                          <!--end::Invoice No-->
                          <!--begin::Invoice Date-->
                          <div class="text-gray-600 fs-6 fw-bold mb-3">
                            DATE
                          </div>
                          <div class="fs-6 text-gray-800 fw-bold">
                            12 May, 2020
                          </div>
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
                        <!-- begin::Pint-->
                        <button
                          type="button"
                          class="btn btn-success my-1 me-12"
                          onclick="window.print();"
                        >
                          Print Invoice
                        </button>
                        <!-- end::Pint-->
                        <!-- begin::Download-->
                        <button
                          type="button"
                          @click.prevent="createPDF"
                          class="btn btn-light-success my-1"
                        >
                          Download
                        </button>
                        <!-- end::Download-->
                      </div>
                      <!-- end::Actions-->
                      <!-- begin::Action-->
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_create_invoice"
                        class="btn btn-primary my-1"
                      >
                        Create Invoice
                      </button>
                      <!-- end::Action-->
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
        </section>
      </vue-html2pdf>
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import jsPDF from "jspdf";
import VueHtml2pdf from "vue-html2pdf";

export default defineComponent({
  name: "invoice-view",
  components: {
    VueHtml2pdf,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Customer Details", ["Invoices", "1"]);
    });

    const root = ref();
    const html2Pdf = ref();
    const printing = ref(false);
    const generateReport = () => {
      html2Pdf.value.generatePdf();
    };
    const createPDF = () => {
      var doc = new jsPDF("l", "mm", [1200, 1210]);
      printing.value = true;
      console.log(root.value);
      doc.html(root.value, {
        callback: function (doc) {
          doc.save("output.pdf");
          printing.value = false;
        },
        x: 10,
        y: 10,
      });
    };
    return {
      createPDF,
      root,
      html2Pdf,
      printing,
    };
  },
});
</script>

import {
  getBasePrice,
  type BusinessType,
  type PackageType,
} from "@/data/calculatorPrice";

export interface PriceCalculationParams {
  businessType: BusinessType;
  packageType: PackageType;

  employees?: number;
  vat?: boolean;
  documents?: number;
  bankAccounts?: number;

  hasImport?: boolean;
  hasExport?: boolean;
  hasProduction?: boolean;

  grantProjects?: number;
  charityProjects?: number;

  hr?: boolean;
  payroll?: boolean;
  financialReporting?: boolean;
  managementReporting?: boolean;
}

export interface PriceCalculationResult {
  basePrice: number;

  employeesPrice: number;
  vatPrice: number;
  documentsPrice: number;
  bankAccountsPrice: number;

  importPrice: number;
  exportPrice: number;
  productionPrice: number;

  grantProjectsPrice: number;
  charityProjectsPrice: number;

  hrPrice: number;
  payrollPrice: number;
  financialReportingPrice: number;
  managementReportingPrice: number;

  additionalPrice: number;
  totalPrice: number;
}

/**
 * Розрахунок вартості бухгалтерського супроводу.
 *
 * Базова ціна пакета завжди береться
 * із src/data/calculatorPrice.ts.
 */
export function calculatePrice({
  businessType,
  packageType,
  employees = 0,
  vat = false,
  documents = 50,
  bankAccounts = 1,
  hasImport = false,
  hasExport = false,
  hasProduction = false,
  grantProjects = 0,
  charityProjects = 0,
  hr = false,
  payroll = false,
  financialReporting = false,
  managementReporting = false,
}: PriceCalculationParams): PriceCalculationResult {
  /* =====================================================
     БАЗОВА ЦІНА ПАКЕТА
  ===================================================== */

  const basePrice = getBasePrice(
    businessType,
    packageType
  );

  /* =====================================================
     ПРАЦІВНИКИ
     
     До 2 працівників — входить у базову вартість.

     3–5   → +500
     6–10  → +1000
     11–20 → +2000
     21+   → +3000
  ===================================================== */

  let employeesPrice = 0;

  if (employees >= 3 && employees <= 5) {
    employeesPrice = 500;
  } else if (employees >= 6 && employees <= 10) {
    employeesPrice = 1000;
  } else if (employees >= 11 && employees <= 20) {
    employeesPrice = 2000;
  } else if (employees > 20) {
    employeesPrice = 3000;
  }

  /* =====================================================
     ПДВ
  ===================================================== */

  const vatPrice = vat ? 1500 : 0;

  /* =====================================================
     ПЕРВИННІ ДОКУМЕНТИ

     До 50 — входить у базовий пакет.

     51–100   → +500
     101–200  → +1000
     201–300  → +1500
     301+     → +2500
  ===================================================== */

  let documentsPrice = 0;

  if (documents > 50 && documents <= 100) {
    documentsPrice = 500;
  } else if (documents > 100 && documents <= 200) {
    documentsPrice = 1000;
  } else if (documents > 200 && documents <= 300) {
    documentsPrice = 1500;
  } else if (documents > 300) {
    documentsPrice = 2500;
  }

  /* =====================================================
     БАНКІВСЬКІ РАХУНКИ

     1 рахунок — входить.

     Кожен наступний → +300
  ===================================================== */

  const bankAccountsPrice =
    bankAccounts > 1
      ? (bankAccounts - 1) * 300
      : 0;

  /* =====================================================
     ІМПОРТ
  ===================================================== */

  const importPrice = hasImport ? 1000 : 0;

  /* =====================================================
     ЕКСПОРТ
  ===================================================== */

  const exportPrice = hasExport ? 1000 : 0;

  /* =====================================================
     ВИРОБНИЦТВО
  ===================================================== */

  const productionPrice = hasProduction
    ? 2500
    : 0;

  /* =====================================================
     ГРАНТОВІ ПРОЄКТИ
  ===================================================== */

  const grantProjectsPrice =
    grantProjects > 0
      ? grantProjects * 1000
      : 0;

  /* =====================================================
     БЛАГОДІЙНІ ПРОЄКТИ
  ===================================================== */

  const charityProjectsPrice =
    charityProjects > 0
      ? charityProjects * 700
      : 0;

  /* =====================================================
     ДОДАТКОВІ ПОСЛУГИ

     Ці значення використовуються тільки тоді,
     коли послуга реально обрана як додаткова.
  ===================================================== */

  const hrPrice = hr ? 1000 : 0;

  const payrollPrice = payroll ? 1000 : 0;

  const financialReportingPrice =
    financialReporting ? 1000 : 0;

  const managementReportingPrice =
    managementReporting ? 1500 : 0;

  /* =====================================================
     ДОДАТКОВА ВАРТІСТЬ
  ===================================================== */

  const additionalPrice =
    employeesPrice +
    vatPrice +
    documentsPrice +
    bankAccountsPrice +
    importPrice +
    exportPrice +
    productionPrice +
    grantProjectsPrice +
    charityProjectsPrice +
    hrPrice +
    payrollPrice +
    financialReportingPrice +
    managementReportingPrice;

  /* =====================================================
     ЗАГАЛЬНА ВАРТІСТЬ
  ===================================================== */

  const totalPrice =
    basePrice + additionalPrice;

  return {
    basePrice,

    employeesPrice,
    vatPrice,
    documentsPrice,
    bankAccountsPrice,

    importPrice,
    exportPrice,
    productionPrice,

    grantProjectsPrice,
    charityProjectsPrice,

    hrPrice,
    payrollPrice,
    financialReportingPrice,
    managementReportingPrice,

    additionalPrice,
    totalPrice,
  };
}

/**
 * Форматування ціни.
 */
export function formatCalculatedPrice(
  price: number
): string {
  return `${price.toLocaleString("uk-UA")} грн`;
}

/**
 * Отримати ціну конкретного пакета.
 */
export function getPackagePrice(
  businessType: BusinessType,
  packageType: PackageType
): number {
  return getBasePrice(
    businessType,
    packageType
  );
}

/**
 * Мінімальна ціна для типу клієнта.
 */
export function getMinimumPrice(
  businessType: BusinessType
): number {
  return getBasePrice(
    businessType,
    "start"
  );
}


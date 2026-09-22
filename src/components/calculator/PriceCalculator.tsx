"use client";

import { useMemo, useState, type ReactNode } from "react";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Check,
  FileText,
  HeartHandshake,
  Landmark,
  Globe,
  Factory,
} from "lucide-react";

import {
  calculatorPrices,
  type BusinessType,
  type PackageType,
} from "@/data/calculatorPrice";

import {
  calculatePrice,
} from "@/lib/calculatePrice";

type ClientType =
  | "fop"
  | "tov"
  | "ngo"
  | "charity";

type TaxSystem =
  | "Загальна система"
  | "Єдиний податок"
  | "Неприбуткова організація";

type FopGroup =
  | "1 група"
  | "2 група"
  | "3 група";

type ExtraService =
  | "hr"
  | "payroll"
  | "financial"
  | "management";

const clientTypes: {
  id: ClientType;
  businessType: BusinessType;
  title: string;
  description: string;
  icon: typeof Building2;
}[] = [
  {
    id: "tov",
    businessType: "tov",
    title: "ТОВ",
    description:
      "Товариство з обмеженою відповідальністю",
    icon: Building2,
  },
  {
    id: "fop",
    businessType: "fop",
    title: "ФОП",
    description:
      "Фізична особа-підприємець",
    icon: BriefcaseBusiness,
  },
  {
    id: "ngo",
    businessType: "ngo",
    title: "ГО",
    description:
      "Громадська організація",
    icon: Landmark,
  },
  {
    id: "charity",
    businessType: "charity",
    title: "БФ",
    description:
      "Благодійний фонд",
    icon: HeartHandshake,
  },
];

const extraServices: {
  id: ExtraService;
  title: string;
  description: string;
  price: number;
}[] = [
  {
    id: "hr",
    title: "Кадровий облік",
    description:
      "Кадрові документи та супровід працівників",
    price: 1000,
  },
  {
    id: "payroll",
    title: "Зарплатний облік",
    description:
      "Нарахування зарплати, податків та звітності",
    price: 1000,
  },
  {
    id: "financial",
    title: "Фінансова звітність",
    description:
      "Підготовка та подання фінансової звітності",
    price: 1000,
  },
  {
    id: "management",
    title: "Управлінська звітність",
    description:
      "Додаткові звіти та аналітика для керівника",
    price: 1500,
  },
];

export default function PriceCalculator() {
  /* =====================================================
     ОСНОВНІ ПАРАМЕТРИ
  ===================================================== */

  const [clientType, setClientType] =
    useState<ClientType>("tov");

  const [packageType, setPackageType] =
    useState<PackageType>("start");

  const [taxSystem, setTaxSystem] =
    useState<TaxSystem>("Загальна система");

  const [fopGroup, setFopGroup] =
    useState<FopGroup>("3 група");

  const [vat, setVat] = useState(false);

  const [employees, setEmployees] =
    useState(0);

  const [documents, setDocuments] =
    useState(50);

  const [bankAccounts, setBankAccounts] =
    useState(1);

  const [hasImport, setHasImport] =
    useState(false);

  const [hasExport, setHasExport] =
    useState(false);

  const [hasProduction, setHasProduction] =
    useState(false);

  const [grantProjects, setGrantProjects] =
    useState(0);

  const [charityProjects, setCharityProjects] =
    useState(0);

  const [selectedServices, setSelectedServices] =
    useState<ExtraService[]>([]);

  /* =====================================================
     ПОТОЧНИЙ ТИП БІЗНЕСУ
  ===================================================== */

  const currentClient = clientTypes.find(
    (item) => item.id === clientType
  );

  const businessType =
    currentClient?.businessType ?? "tov";

  const businessData =
    calculatorPrices.find(
      (item) => item.id === businessType
    );

  /* =====================================================
     ПАКЕТИ
  ===================================================== */

  const packages =
    businessData?.packages ?? [];

  const currentPackage =
    packages.find(
      (item) => item.id === packageType
    ) ?? packages[0];

  /* =====================================================
     РОЗРАХУНОК
  ===================================================== */

  const calculation = useMemo(() => {
    return calculatePrice({
      businessType,
      packageType,

      employees,
      vat,
      documents,
      bankAccounts,

      hasImport,
      hasExport,
      hasProduction,

      grantProjects,
      charityProjects,

      hr: selectedServices.includes("hr"),
      payroll:
        selectedServices.includes("payroll"),
      financialReporting:
        selectedServices.includes("financial"),
      managementReporting:
        selectedServices.includes(
          "management"
        ),
    });
  }, [
    businessType,
    packageType,
    employees,
    vat,
    documents,
    bankAccounts,
    hasImport,
    hasExport,
    hasProduction,
    grantProjects,
    charityProjects,
    selectedServices,
  ]);

  /* =====================================================
     ФОРМАТУВАННЯ
  ===================================================== */

  const formatPrice = (price: number) =>
    `${price.toLocaleString("uk-UA")} грн`;

  /* =====================================================
     ПАКЕТИ: ЩО ВЖЕ ВХОДИТЬ
  ===================================================== */

  function isServiceIncluded(
    service: ExtraService
  ) {
    if (!currentPackage) {
      return false;
    }

    const features =
      currentPackage.features.map(
        (item) => item.toLowerCase()
      );

    if (service === "hr") {
      return features.some(
        (item) =>
          item.includes("кадров")
      );
    }

    if (service === "payroll") {
      return features.some(
        (item) =>
          item.includes("зарплат") ||
          item.includes("заробіт")
      );
    }

    if (service === "financial") {
      return features.some(
        (item) =>
          item.includes(
            "фінансов"
          )
      );
    }

    if (service === "management") {
      return features.some(
        (item) =>
          item.includes(
            "управлін"
          )
      );
    }

    return false;
  }

  /* =====================================================
     ПЕРЕРАХУНОК ДОДАТКОВИХ ПОСЛУГ

     Якщо послуга вже входить у пакет,
     її не можна оплачувати повторно.
  ===================================================== */

  const includedServiceIds =
    extraServices
      .filter((service) =>
        isServiceIncluded(service.id)
      )
      .map((service) => service.id);

  const paidSelectedServices =
    selectedServices.filter(
      (id) =>
        !includedServiceIds.includes(id)
    );

  const includedServicesPrice =
    selectedServices
      .filter((id) =>
        includedServiceIds.includes(id)
      )
      .reduce(
        (sum, id) => {
          const service =
            extraServices.find(
              (item) => item.id === id
            );

          return (
            sum + (service?.price ?? 0)
          );
        },
        0
      );

  const paidServicesPrice =
    paidSelectedServices.reduce(
      (sum, id) => {
        const service =
          extraServices.find(
            (item) => item.id === id
          );

        return (
          sum + (service?.price ?? 0)
        );
      },
      0
    );

  /*
   * calculatePrice вже включає
   * додаткові послуги.
   *
   * Тому якщо послуга входить у пакет,
   * потрібно відняти її з розрахунку,
   * якщо користувач випадково її вибрав.
   */

  const correctedTotalPrice =
    calculation.totalPrice -
    includedServicesPrice;

  /* =====================================================
     ДОДАТКОВА ЦІНА БЕЗ ПАКЕТА
  ===================================================== */

  const additionalPrice =
    correctedTotalPrice -
    calculation.basePrice;

  void paidServicesPrice;
  void additionalPrice;

  /* =====================================================
     СКИДАННЯ ДАНИХ ПРИ ЗМІНІ ТИПУ
  ===================================================== */

  function changeClientType(
    type: ClientType
  ) {
    setClientType(type);

    /*
     * При зміні типу клієнта
     * повертаємо START,
     * щоб користувач бачив
     * базову ціну нового типу.
     */

    setPackageType("start");

    setSelectedServices([]);

    setVat(false);

    setEmployees(0);

    setDocuments(50);

    setBankAccounts(1);

    setHasImport(false);

    setHasExport(false);

    setHasProduction(false);

    setGrantProjects(0);

    setCharityProjects(0);

    if (type === "fop") {
      setTaxSystem(
        "Єдиний податок"
      );
    } else if (
      type === "ngo" ||
      type === "charity"
    ) {
      setTaxSystem(
        "Неприбуткова організація"
      );
    } else {
      setTaxSystem(
        "Загальна система"
      );
    }
  }

  /* =====================================================
     TOGGLE ДОДАТКОВОЇ ПОСЛУГИ
  ===================================================== */

  function toggleService(
    id: ExtraService
  ) {
    setSelectedServices(
      (current) =>
        current.includes(id)
          ? current.filter(
              (item) => item !== id
            )
          : [...current, id]
    );
  }

  /* =====================================================
     ЗМІНА КІЛЬКОСТІ ПРАЦІВНИКІВ
  ===================================================== */

  const employeeOptions = [
    {
      value: 0,
      label: "Немає",
    },
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 20,
      label: "20+",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.07)]">
        <div className="border-b border-[var(--color-border)] px-5 py-5 md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
              <Calculator size={21} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--color-primary)]">
                Розрахунок вартості
              </h2>
              <p className="text-sm text-[var(--color-text-light)]">
                Оберіть параметри — калькулятор покаже орієнтовну вартість.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="p-5 md:p-7">
            <div className="space-y-7">

              <section>
                <SectionLabel number="01" title="Тип клієнта" />
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {clientTypes.map((item) => {
                    const Icon = item.icon;
                    const active = clientType === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => changeClientType(item.id)}
                        className={`rounded-xl border px-3 py-3.5 text-left transition-all ${
                          active
                            ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-md"
                            : "border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:border-[var(--color-secondary)]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <Icon
                            size={20}
                            className={
                              active
                                ? "text-[var(--color-secondary)]"
                                : "text-[var(--color-primary)]"
                            }
                          />
                          {active && (
                            <Check
                              size={16}
                              className="text-[var(--color-secondary)]"
                            />
                          )}
                        </div>
                        <div className="mt-2 font-bold">{item.title}</div>
                        <div
                          className={`mt-0.5 text-xs ${
                            active
                              ? "text-white/70"
                              : "text-[var(--color-text-light)]"
                          }`}
                        >
                          {item.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section>
                <SectionLabel number="02" title="Пакет обслуговування" />
                <div className="grid gap-2.5 md:grid-cols-3">
                  {packages.map((item) => {
                    const active = packageType === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPackageType(item.id)}
                        className={`relative rounded-xl border p-4 text-left transition-all ${
                          active
                            ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-md"
                            : "border-[var(--color-border)] bg-white hover:border-[var(--color-secondary)]"
                        }`}
                      >
                        {item.id === "business" && (
                          <span className="absolute -top-2.5 right-3 rounded-full bg-[var(--color-secondary)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                            Популярний
                          </span>
                        )}
                        <div
                          className={`text-xs font-bold tracking-[0.12em] ${
                            active
                              ? "text-[var(--color-secondary)]"
                              : "text-[var(--color-primary)]"
                          }`}
                        >
                          {item.name}
                        </div>
                        <div
                          className={`mt-2 text-2xl font-black ${
                            active ? "text-white" : "text-[var(--color-primary)]"
                          }`}
                        >
                          {formatPrice(item.price)}
                        </div>
                        <div
                          className={`mt-1 text-xs leading-5 ${
                            active
                              ? "text-white/70"
                              : "text-[var(--color-text-light)]"
                          }`}
                        >
                          {item.description}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {currentPackage && (
                  <div className="mt-2.5 rounded-xl bg-[var(--color-background)] px-4 py-3">
                    <div className="mb-2 text-xs font-bold text-[var(--color-primary)]">
                      У пакет входить
                    </div>
                    <div className="grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
                      {currentPackage.features.slice(0, 8).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-xs leading-5 text-[var(--color-text-light)]"
                        >
                          <Check
                            size={14}
                            className="mt-0.5 shrink-0 text-[var(--color-secondary)]"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              <section>
                <SectionLabel number="03" title="Основні параметри" />
                <div className="grid gap-3 md:grid-cols-2">
                  <CompactSelect
                    label="Система оподаткування"
                    value={taxSystem}
                    options={
                      clientType === "fop"
                        ? ["Єдиний податок", "Загальна система"]
                        : clientType === "ngo" || clientType === "charity"
                          ? ["Неприбуткова організація"]
                          : ["Загальна система", "Єдиний податок"]
                    }
                    onChange={(value) => setTaxSystem(value as TaxSystem)}
                  />

                  {clientType === "fop" ? (
                    <CompactSelect
                      label="Група ФОП"
                      value={fopGroup}
                      options={["1 група", "2 група", "3 група"]}
                      onChange={(value) => setFopGroup(value as FopGroup)}
                    />
                  ) : (
                    <CompactToggle
                      label="Платник ПДВ"
                      value={vat}
                      price="+1 500 грн"
                      onClick={() => setVat(!vat)}
                    />
                  )}

                  {clientType === "fop" && (
                    <CompactToggle
                      label="Платник ПДВ"
                      value={vat}
                      price="+1 500 грн"
                      onClick={() => setVat(!vat)}
                    />
                  )}

                  <CompactSelect
                    label="Працівники"
                    value={employees === 0 ? "Немає" : String(employees)}
                    options={employeeOptions.map((item) => item.label)}
                    onChange={(value) => {
                      const found = employeeOptions.find(
                        (item) => item.label === value
                      );
                      setEmployees(found?.value ?? 0);
                    }}
                  />

                  <CompactSelect
                    label="Документи на місяць"
                    value={documents === 500 ? "500+" : `до ${documents}`}
                    options={["до 50", "до 100", "до 200", "до 300", "500+"]}
                    onChange={(value) => {
                      const map: Record<string, number> = {
                        "до 50": 50,
                        "до 100": 100,
                        "до 200": 200,
                        "до 300": 300,
                        "500+": 500,
                      };
                      setDocuments(map[value] ?? 50);
                    }}
                  />

                  <CompactSelect
                    label="Банківські рахунки"
                    value={bankAccounts === 5 ? "5+" : String(bankAccounts)}
                    options={["1", "2", "3", "4", "5+"]}
                    onChange={(value) =>
                      setBankAccounts(value === "5+" ? 5 : Number(value))
                    }
                  />
                </div>
              </section>

              <section>
                <SectionLabel number="04" title="Специфіка діяльності" />
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  <CompactToggle
                    label="Імпорт"
                    value={hasImport}
                    price="+1 000 грн"
                    icon={<Globe size={18} />}
                    onClick={() => setHasImport(!hasImport)}
                  />
                  <CompactToggle
                    label="Експорт"
                    value={hasExport}
                    price="+1 000 грн"
                    icon={<Globe size={18} />}
                    onClick={() => setHasExport(!hasExport)}
                  />
                  <CompactToggle
                    label="Виробництво"
                    value={hasProduction}
                    price="+2 500 грн"
                    icon={<Factory size={18} />}
                    onClick={() => setHasProduction(!hasProduction)}
                  />
                </div>

                {(clientType === "ngo" || clientType === "charity") && (
                  <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
                    {clientType === "ngo" && (
                      <CompactSelect
                        label="Грантові проєкти"
                        value={grantProjects === 0 ? "Немає" : String(grantProjects)}
                        options={["Немає", "1", "2", "3", "5+"]}
                        onChange={(value) =>
                          setGrantProjects(value === "Немає" ? 0 : value === "5+" ? 5 : Number(value))
                        }
                      />
                    )}
                    {clientType === "charity" && (
                      <CompactSelect
                        label="Благодійні проєкти"
                        value={charityProjects === 0 ? "Немає" : String(charityProjects)}
                        options={["Немає", "1", "2", "3", "5+"]}
                        onChange={(value) =>
                          setCharityProjects(value === "Немає" ? 0 : value === "5+" ? 5 : Number(value))
                        }
                      />
                    )}
                  </div>
                )}
              </section>

              <section>
                <SectionLabel number="05" title="Додаткові послуги" />
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {extraServices.map((service) => {
                    const selected = selectedServices.includes(service.id);
                    const included = isServiceIncluded(service.id);

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                          selected
                            ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                            : "border-[var(--color-border)] bg-white hover:border-[var(--color-secondary)]"
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                              selected
                                ? "bg-white/10 text-[var(--color-secondary)]"
                                : "bg-[var(--color-background)] text-[var(--color-primary)]"
                            }`}
                          >
                            {selected ? <Check size={17} /> : <FileText size={17} />}
                          </div>
                          <div className="min-w-0">
                            <div
                              className={`text-sm font-bold ${
                                selected ? "text-white" : "text-[var(--color-primary)]"
                              }`}
                            >
                              {service.title}
                            </div>
                            <div
                              className={`text-xs ${
                                selected ? "text-white/65" : "text-[var(--color-text-light)]"
                              }`}
                            >
                              {included ? "Входить у пакет" : service.description}
                            </div>
                          </div>
                        </div>
                        <span
                          className={`shrink-0 text-xs font-bold ${
                            selected
                              ? "text-[var(--color-secondary)]"
                              : "text-[var(--color-primary)]"
                          }`}
                        >
                          {included ? "Включено" : `+${service.price.toLocaleString("uk-UA")} грн`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>

          <aside className="border-t border-[var(--color-border)] bg-[var(--color-primary)] p-5 text-white lg:border-l lg:border-t-0 md:p-6">
            <div className="lg:sticky lg:top-6">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">
                Ваш розрахунок
              </div>

              <div className="mt-2 text-xl font-bold text-white">
                {currentClient?.title} · {currentPackage?.name}
              </div>

              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <div className="text-sm text-white/65">Орієнтовна вартість</div>
                <div className="mt-1 text-4xl font-black text-white">
                  {formatPrice(correctedTotalPrice)}
                </div>
                <div className="mt-1 text-xs text-white/55">на місяць</div>
              </div>

              <div className="mt-5 space-y-0.5">
                <ResultRow label="Базовий пакет" price={calculation.basePrice} />
                <ResultRow label="Працівники" price={calculation.employeesPrice} />
                <ResultRow label="ПДВ" price={calculation.vatPrice} />
                <ResultRow label="Документи" price={calculation.documentsPrice} />
                <ResultRow label="Рахунки" price={calculation.bankAccountsPrice} />
                <ResultRow label="Імпорт" price={calculation.importPrice} />
                <ResultRow label="Експорт" price={calculation.exportPrice} />
                <ResultRow label="Виробництво" price={calculation.productionPrice} />
                {clientType === "ngo" && (
                  <ResultRow label="Грантові проєкти" price={calculation.grantProjectsPrice} />
                )}
                {clientType === "charity" && (
                  <ResultRow label="Благодійні проєкти" price={calculation.charityProjectsPrice} />
                )}
              </div>

              <a
                href="/contacts"
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  backgroundColor: "#ffffff",
                  color: "#304b34",
                  border: "2px solid #ffffff",
                  borderRadius: "12px",
                  padding: "14px 20px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
                className="mt-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span style={{ color: "#304b34" }}>
                  Отримати консультацію
                </span>

                <ArrowRight
                  size={18}
                  style={{ color: "#304b34" }}
                />
              </a>

              <p className="mt-4 text-xs leading-5 text-white/55">
                Розрахунок орієнтовний. Остаточна вартість визначається після аналізу
                обсягу операцій та специфіки бізнесу.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <span className="text-[10px] font-bold tracking-[0.14em] text-[var(--color-secondary)]">
        {number}
      </span>
      <h3 className="text-lg font-bold text-[var(--color-primary)]">
        {title}
      </h3>
      <div className="h-px flex-1 bg-[var(--color-border)]" />
    </div>
  );
}

function CompactSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block rounded-xl border border-[var(--color-border)] bg-white px-4 py-3">
      <span className="block text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-text-light)]">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full bg-transparent text-sm font-bold text-[var(--color-primary)] outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function CompactToggle({
  label,
  value,
  price,
  icon,
  onClick,
}: {
  label: string;
  value: boolean;
  price: string;
  icon?: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
        value
          ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
          : "border-[var(--color-border)] bg-white text-[var(--color-primary)] hover:border-[var(--color-secondary)]"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
              value
                ? "bg-white/10 text-[var(--color-secondary)]"
                : "bg-[var(--color-background)] text-[var(--color-primary)]"
            }`}
          >
            {icon}
          </div>
        )}
        <div>
          <div className="text-sm font-bold">{label}</div>
          <div
            className={`text-xs ${
              value ? "text-white/65" : "text-[var(--color-text-light)]"
            }`}
          >
            {price}
          </div>
        </div>
      </div>

      <div
        className={`flex h-6 w-10 items-center rounded-full p-0.5 ${
          value ? "bg-[var(--color-secondary)]" : "bg-gray-200"
        }`}
      >
        <span
          className={`h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
            value ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
}

function ResultRow({
  label,
  price,
}: {
  label: string;
  price: number;
}) {
  if (price === 0) return null;

  return (
    <div className="flex items-center justify-between border-b border-white/10 px-1 py-2">
      <span className="text-xs !text-white/70">{label}</span>
      <span className="text-xs font-semibold !text-white">
        +{price.toLocaleString("uk-UA")} грн
      </span>
    </div>
  );
}



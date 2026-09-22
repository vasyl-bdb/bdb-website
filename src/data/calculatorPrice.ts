export type BusinessType = "fop" | "tov" | "ngo" | "charity";

export type PackageType = "start" | "business" | "pro";

export interface CalculatorPackage {
  id: PackageType;
  name: string;
  description: string;
  price: number;
  features: string[];
}

export interface CalculatorBusinessType {
  id: BusinessType;
  name: string;
  shortName: string;
  packages: CalculatorPackage[];
}

export const calculatorPrices: CalculatorBusinessType[] = [
  {
    id: "fop",
    name: "Фізична особа-підприємець",
    shortName: "ФОП",
    packages: [
      {
        id: "start",
        name: "START",
        price: 1500,
        description: "Базовий бухгалтерський супровід ФОП",
        features: [
          "Ведення бухгалтерського обліку",
          "Податковий облік",
          "Підготовка та подання звітності",
          "Контроль податкових строків",
          "Консультації з поточних питань",
        ],
      },
      {
        id: "business",
        name: "BUSINESS",
        price: 2500,
        description: "Розширений супровід ФОП",
        features: [
          "Все зі START",
          "Розширений бухгалтерський супровід",
          "Контроль первинних документів",
          "Підготовка додаткових розрахунків",
          "Розширені консультації",
          "Постійна комунікація з бухгалтером",
        ],
      },
      {
        id: "pro",
        name: "PRO",
        price: 4000,
        description: "Комплексний супровід ФОП",
        features: [
          "Все з BUSINESS",
          "Повний бухгалтерський супровід",
          "Кадровий супровід",
          "Нарахування заробітної плати",
          "Розширений податковий супровід",
          "Підготовка управлінської інформації",
          "Пріоритетна підтримка",
        ],
      },
    ],
  },

  {
    id: "tov",
    name: "Товариство з обмеженою відповідальністю",
    shortName: "ТОВ",
    packages: [
      {
        id: "start",
        name: "START",
        price: 4500,
        description: "Базовий бухгалтерський супровід ТОВ",
        features: [
          "Ведення бухгалтерського обліку",
          "Податковий облік",
          "Підготовка та подання звітності",
          "Контроль податкових строків",
          "Обробка первинних документів",
          "Бухгалтерські консультації",
        ],
      },
      {
        id: "business",
        name: "BUSINESS",
        price: 7000,
        description: "Розширений бухгалтерський супровід ТОВ",
        features: [
          "Все зі START",
          "Повний супровід первинних документів",
          "Нарахування заробітної плати",
          "Кадровий облік",
          "Податковий супровід",
          "Підготовка фінансової звітності",
          "Регулярні консультації керівника",
        ],
      },
      {
        id: "pro",
        name: "PRO",
        price: 10000,
        description: "Комплексний супровід ТОВ",
        features: [
          "Все з BUSINESS",
          "Повний бухгалтерський супровід",
          "Комплексний податковий супровід",
          "Кадровий та зарплатний облік",
          "Фінансова звітність",
          "Управлінська звітність",
          "Аналіз бухгалтерського обліку",
          "Пріоритетна підтримка",
        ],
      },
    ],
  },

  {
    id: "ngo",
    name: "Громадська організація",
    shortName: "ГО",
    packages: [
      {
        id: "start",
        name: "START",
        price: 3500,
        description: "Базовий бухгалтерський супровід ГО",
        features: [
          "Ведення бухгалтерського обліку",
          "Облік членських та інших надходжень",
          "Облік витрат",
          "Підготовка звітності",
          "Контроль строків подання звітності",
          "Бухгалтерські консультації",
        ],
      },
      {
        id: "business",
        name: "BUSINESS",
        price: 5500,
        description: "Розширений супровід громадської організації",
        features: [
          "Все зі START",
          "Повний супровід первинних документів",
          "Облік цільового фінансування",
          "Контроль використання коштів",
          "Зарплата та кадровий облік",
          "Фінансова звітність",
          "Податковий супровід",
        ],
      },
      {
        id: "pro",
        name: "PRO",
        price: 8000,
        description: "Комплексний супровід ГО",
        features: [
          "Все з BUSINESS",
          "Комплексний бухгалтерський супровід",
          "Облік грантового фінансування",
          "Контроль цільового використання коштів",
          "Повний кадровий та зарплатний облік",
          "Фінансова та податкова звітність",
          "Підготовка документів для перевірок",
          "Пріоритетна підтримка",
        ],
      },
    ],
  },

  {
    id: "charity",
    name: "Благодійний фонд",
    shortName: "БФ",
    packages: [
      {
        id: "start",
        name: "START",
        price: 4000,
        description: "Базовий бухгалтерський супровід БФ",
        features: [
          "Ведення бухгалтерського обліку",
          "Облік благодійних надходжень",
          "Облік витрат",
          "Підготовка звітності",
          "Контроль строків звітності",
          "Бухгалтерські консультації",
        ],
      },
      {
        id: "business",
        name: "BUSINESS",
        price: 6500,
        description: "Розширений супровід благодійного фонду",
        features: [
          "Все зі START",
          "Повний супровід первинних документів",
          "Облік цільового фінансування",
          "Облік благодійної допомоги",
          "Контроль використання коштів",
          "Зарплата та кадровий облік",
          "Фінансова та податкова звітність",
        ],
      },
      {
        id: "pro",
        name: "PRO",
        price: 9000,
        description: "Комплексний бухгалтерський супровід БФ",
        features: [
          "Все з BUSINESS",
          "Повний бухгалтерський супровід",
          "Грантовий та донорський облік",
          "Облік цільового фінансування",
          "Контроль цільового використання коштів",
          "Повний кадровий та зарплатний облік",
          "Фінансова та податкова звітність",
          "Підготовка документів для перевірок",
          "Пріоритетна підтримка",
        ],
      },
    ],
  },
];

/**
 * Отримати тип організації за ID
 */
export function getBusinessType(
  id: BusinessType
): CalculatorBusinessType | undefined {
  return calculatorPrices.find((item) => item.id === id);
}

/**
 * Отримати пакет за типом організації та ID пакета
 */
export function getCalculatorPackage(
  businessType: BusinessType,
  packageType: PackageType
): CalculatorPackage | undefined {
  const business = getBusinessType(businessType);

  return business?.packages.find(
    (item) => item.id === packageType
  );
}

/**
 * Форматування ціни для відображення на сайті
 */
export function formatPrice(price: number): string {
  return `${price.toLocaleString("uk-UA")} грн`;
}

/**
 * Базова ціна конкретного пакета
 */
export function getBasePrice(
  businessType: BusinessType,
  packageType: PackageType
): number {
  return getCalculatorPackage(businessType, packageType)?.price ?? 0;
}

export default calculatorPrices;


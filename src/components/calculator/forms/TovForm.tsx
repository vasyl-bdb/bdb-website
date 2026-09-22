interface Props {
  vat: boolean;
  setVat: (value: boolean) => void;

  employees: number;
  setEmployees: (value: number) => void;

  documents: number;
  setDocuments: (value: number) => void;

  bankAccounts: number;
  setBankAccounts: (value: number) => void;

  hasImport: boolean;
  setHasImport: (value: boolean) => void;

  hasExport: boolean;
  setHasExport: (value: boolean) => void;

  hasProduction: boolean;
  setHasProduction: (value: boolean) => void;
}

export default function TovForm({
  vat,
  setVat,

  employees,
  setEmployees,

  documents,
  setDocuments,

  bankAccounts,
  setBankAccounts,

  hasImport,
  setHasImport,

  hasExport,
  setHasExport,

  hasProduction,
  setHasProduction,
}: Props) {
  return (
    <div className="space-y-10">

      {/* ПДВ */}

      <div>
        <label className="mb-3 block text-lg font-semibold">
          Платник ПДВ
        </label>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setVat(true)}
            className={`rounded-xl px-6 py-3 ${
              vat
                ? "bg-[var(--color-primary)] text-white"
                : "border"
            }`}
          >
            Так
          </button>

          <button
            type="button"
            onClick={() => setVat(false)}
            className={`rounded-xl px-6 py-3 ${
              !vat
                ? "bg-[var(--color-primary)] text-white"
                : "border"
            }`}
          >
            Ні
          </button>
        </div>
      </div>

      {/* Працівники */}

      <div>
        <div className="mb-2 flex justify-between">
          <span>Працівників</span>
          <strong>{employees}</strong>
        </div>

        <input
          type="range"
          min={0}
          max={150}
          value={employees}
          onChange={(e) => setEmployees(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Документи */}

      <div>
        <div className="mb-2 flex justify-between">
          <span>Документів</span>
          <strong>{documents}</strong>
        </div>

        <input
          type="range"
          min={0}
          max={1000}
          value={documents}
          onChange={(e) => setDocuments(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Банківські рахунки */}

      <div>
        <label className="mb-3 block font-semibold">
          Банківських рахунків
        </label>

        <select
          value={bankAccounts}
          onChange={(e) => setBankAccounts(Number(e.target.value))}
          className="w-full rounded-xl border p-4"
        >
          <option value={1}>1 рахунок</option>
          <option value={2}>2 рахунки</option>
          <option value={3}>3 рахунки</option>
          <option value={4}>4+</option>
        </select>
      </div>

      {/* Додаткові особливості */}

      <div className="grid gap-4">

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={hasImport}
            onChange={(e) => setHasImport(e.target.checked)}
          />
          Імпорт
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={hasExport}
            onChange={(e) => setHasExport(e.target.checked)}
          />
          Експорт
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={hasProduction}
            onChange={(e) => setHasProduction(e.target.checked)}
          />
          Виробництво
        </label>

      </div>

    </div>
  );
}


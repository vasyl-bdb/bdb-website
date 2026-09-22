interface Props {
  documents: number;
  setDocuments: (value: number) => void;

  employees: number;
  setEmployees: (value: number) => void;

  vat: boolean;
  setVat: (value: boolean) => void;

  group: string;
  setGroup: (value: string) => void;
}

export default function FopForm({
  documents,
  setDocuments,
  employees,
  setEmployees,
  vat,
  setVat,
  group,
  setGroup,
}: Props) {
  return (
    <div className="space-y-10">
      {/* Група */}

      <div>
        <label className="mb-3 block text-lg font-semibold">
          Група оподаткування
        </label>

        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="w-full rounded-xl border border-[var(--color-border)] p-4"
        >
          <option>2 група</option>
          <option>3 група</option>
          <option>Загальна система</option>
        </select>
      </div>

      {/* ПДВ */}

      <div>
        <label className="mb-3 block text-lg font-semibold">
          Платник ПДВ
        </label>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setVat(true)}
            className={`rounded-xl px-6 py-3 transition ${
              vat
                ? "bg-[var(--color-primary)] text-white"
                : "border border-[var(--color-border)]"
            }`}
          >
            Так
          </button>

          <button
            type="button"
            onClick={() => setVat(false)}
            className={`rounded-xl px-6 py-3 transition ${
              !vat
                ? "bg-[var(--color-primary)] text-white"
                : "border border-[var(--color-border)]"
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
          max={20}
          value={employees}
          onChange={(e) => setEmployees(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Документи */}

      <div>
        <div className="mb-2 flex justify-between">
          <span>Документів на місяць</span>

          <strong>{documents}</strong>
        </div>

        <input
          type="range"
          min={0}
          max={300}
          value={documents}
          onChange={(e) => setDocuments(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}


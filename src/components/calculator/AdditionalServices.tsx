interface Service {
  id: string;
  title: string;
  price: number;
}

interface AdditionalServicesProps {
  services: Service[];
  selected: string[];
  onChange: (id: string) => void;
}

export default function AdditionalServices({
  services,
  selected,
  onChange,
}: AdditionalServicesProps) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-bold text-[var(--color-primary)]">
        Додаткові послуги
      </h3>

      <div className="space-y-4">
        {services.map((service) => {
          const active = selected.includes(service.id);

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onChange(service.id)}
              className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                active
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                  : "border-[var(--color-border)] bg-white hover:shadow-md"
              }`}
            >
              <div>
                <div className="font-semibold">
                  {service.title}
                </div>

                <div className={active ? "text-white/80" : "text-gray-500"}>
                  + {service.price.toLocaleString("uk-UA")} грн
                </div>
              </div>

              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                  active ? "border-white" : "border-gray-300"
                }`}
              >
                {active ? "✓" : ""}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}


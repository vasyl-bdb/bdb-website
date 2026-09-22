type SectionTitleProps = {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="inline-flex rounded-full bg-[#EEF5F0] px-4 py-2 text-sm font-semibold text-[#2F4B3A]">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold text-[#2F4B3A] lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}


type StatCardProps = {
  value: string;
  title: string;
};

export default function StatCard({
  value,
  title,
}: StatCardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-[0_15px_35px_rgba(0,0,0,.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(0,0,0,.10)]">
      <div className="text-5xl font-bold text-[#2F4B3A]">
        {value}
      </div>

      <div className="mt-3 text-gray-600">
        {title}
      </div>
    </div>
  );
}


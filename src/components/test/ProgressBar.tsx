interface Props {
  answered: number;
  total: number;
}

export default function ProgressBar({ answered, total }: Props) {
  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;

  return (
    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#1a3a5c] rounded-full transition-all duration-300"
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-valuenow={answered}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${answered} of ${total} answered`}
      />
    </div>
  );
}

export default function VerifiedBadge() {
  return (
    <span
      className="inline-flex items-center justify-center animate-badge-pulse ml-1.5"
      title="Verified"
    >
      <span className="relative flex items-center justify-center">
        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-blue-400/25 blur-md" />
        {/* Badge */}
        <span className="relative flex items-center justify-center size-7 rounded-full bg-[#1877F2] shadow-md shadow-blue-400/30">
          <svg
            viewBox="0 0 24 24"
            className="size-4 text-white"
            fill="currentColor"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </span>
      </span>
    </span>
  );
}

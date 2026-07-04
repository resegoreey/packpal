export const ui = {
  rounded: "rounded-xl",

  transition: "transition-all duration-200",

  shadow: {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  },

  focus:
    "focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2",

  disabled:
    "disabled:pointer-events-none disabled:opacity-60",

  border:
    "border border-[var(--border)]",

  input:
    "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-muted)] transition-all duration-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-60",

  card:
    "rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-sm",

  label:
    "mb-2 block text-sm font-medium text-[var(--text)]",

  helper:
    "mt-1 text-sm text-[var(--text-muted)]",

  error:
    "mt-1 text-sm text-[var(--danger)]",
};
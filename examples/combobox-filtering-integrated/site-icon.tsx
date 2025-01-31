export default function Icon() {
  return (
    <svg viewBox="0 0 128 128" width={128} height={128}>
      <foreignObject width={128} height={128}>
        <div className="h-full overflow-hidden">
          <div className="ml-6 mt-6 flex w-40 flex-col gap-3">
            <div className="flex h-10 w-full items-center gap-1 rounded-md border border-black/30 bg-white px-4 py-2 dark:border-white/30 dark:bg-black">
              <div className="h-2.5 w-6 bg-blue-600 dark:bg-blue-500" />
              <div className="h-full w-[2px] bg-black/70 dark:w-px dark:bg-white" />
            </div>
            <div className="flex h-40 w-full flex-col gap-4 rounded-md border border-black/20 bg-white p-1 shadow dark:border-white/10 dark:bg-white/10 dark:shadow-dark">
              <div className="h-6 w-full rounded bg-blue-600 dark:bg-blue-500" />
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}

export default function BlogCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-[#1B1B1B] rounded-2xl overflow-hidden">
        <div className="w-full h-[220px] md:h-[240px] bg-[#2A2A2A]" />
        <div className="p-6 flex flex-col flex-grow">
          <div className="h-6 bg-[#2A2A2A] rounded w-3/4 mb-3" />
          <div className="h-4 bg-[#2A2A2A] rounded w-full mb-2" />
          <div className="h-4 bg-[#2A2A2A] rounded w-2/3 mb-4" />
          <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2A] mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2A2A2A]" />
              <div>
                <div className="h-3 bg-[#2A2A2A] rounded w-20 mb-1" />
                <div className="h-3 bg-[#2A2A2A] rounded w-16" />
              </div>
            </div>
            <div>
              <div className="h-3 bg-[#2A2A2A] rounded w-14 mb-1" />
              <div className="h-3 bg-[#2A2A2A] rounded w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
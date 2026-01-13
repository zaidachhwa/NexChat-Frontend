import ProtectedRoute from "@/components/ProtectedRoute";

const Page = () => {
  return (
    <ProtectedRoute>
      <div className="flex w-full h-full flex-col gap-5 items-center justify-center">
        <h3 className="text-3xl font-semibold">Download NexChat for Windows</h3>
        <p className="w-1/2 text-center">
          Make chats, share your screen and get a faster experience when you
          download the Windows app.
        </p>
        <button className="bg-icongreen text-darkgreen p-2 px-4 rounded-full shadow cursor-pointer">
          Download
        </button>
      </div>
    </ProtectedRoute>
  );
};

export default Page;

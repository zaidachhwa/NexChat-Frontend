import ProtectedRoute from "@/components/ProtectedRoute";

const Page = () => {
  return (
    <ProtectedRoute>
      <div>This is the chat page</div>
    </ProtectedRoute>
  );
};

export default Page;

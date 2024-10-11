import React from "react";

interface SubmitButtonProps {
  loading: boolean;
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading, label }) => (
  <button
    type="submit"
    disabled={loading}
    className="bg-violet-500 hover:bg-violet-700 text-white text-sm py-3 rounded-lg w-full mt-10"
  >
    {loading ? "Loading..." : label}
  </button>
);

export default SubmitButton;

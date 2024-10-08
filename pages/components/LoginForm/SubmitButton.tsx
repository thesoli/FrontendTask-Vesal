import React from 'react';

interface SubmitButtonProps {
  loading: boolean;
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading, label }) => (
  <button
    type="submit"
    disabled={loading}
    className="bg-violet-500 hover:bg-violet-700 text-white text-md font-extrabold py-5 rounded-lg w-full"
  >
    {loading ? "Loading..." : label}
  </button>
);

export default SubmitButton;
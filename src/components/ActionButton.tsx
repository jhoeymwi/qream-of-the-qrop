function ActionButton({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <button
        className="bg-tertiary py-2 px-24 rounded-3xl shadow-md text-2xl font-semibold hover:bg-onPrimary"
        onClick={onClick}
      >
        Submit
      </button>
    </>
  );
}

export default ActionButton;

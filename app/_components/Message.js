function Message({ message }) {
  return (
    <div className="flex h-48 w-full items-center justify-center rounded-lg shadow-lg">
      <p className="text-xl font-semibold">{message}</p>
    </div>
  );
}

export default Message;

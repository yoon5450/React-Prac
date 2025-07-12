function PrintError({ children }: { children: string }) {
  return (
    <p role="alert" className="PrintErrror">
      {children}
    </p>
  );
}
export default PrintError;

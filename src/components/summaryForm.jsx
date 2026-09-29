function SummaryForm({ summary, setSummary }) {
  return (
    <div className="form-field">
      <label htmlFor="">Summary</label>
      <input
        type="text"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </div>
  );
}

export default SummaryForm;
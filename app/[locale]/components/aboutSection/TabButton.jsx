const TabButton = ({ active, selectedTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-[#BED250]"
    : "text-[#ADB78E]"
  return (
    <button
      onClick={selectedTab}
      className={`${buttonClasses} font-semibold text-base`}
    >
      <p className="">{children}</p>
    </button>
  )
}

export default TabButton

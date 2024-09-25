const SingleItemCardStyles = ({ children, ...props }) => {
  const rest = { ...props }
  return (
    <div className="w-[200px] h-[300px] bg-slate-100 rounded">{children}</div>
  )
}
export default SingleItemCardStyles

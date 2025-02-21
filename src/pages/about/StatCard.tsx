interface StatCardProps {
  number: number | string,
  label: string
}

const StatCard : React.FC<StatCardProps> = ({number, label}) => {
  return (
    <div className="p-8">
      <div className="text-4xl font-bold text-rose-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default StatCard

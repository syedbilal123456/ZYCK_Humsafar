interface TeamMemberProps {
  name: string,
  image: string,
  role: string
}

const TeamMember : React.FC<TeamMemberProps> = ({name, image, role}) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}

export default TeamMember

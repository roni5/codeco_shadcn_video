

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Danny Bailey',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Danny Bailey',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Danny Bailey',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Danny Bailey',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Danny Bailey',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Danny Bailey',
    role: 'CEO & Founder',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
]

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-indigo-950  text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm mb-4 tracking-wider">
            Lorem ipsum
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Lorem ipsum dolor sit amet
            <br />
            consectutar domor
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque massa
            <br />
            nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(member => (
            <div
              key={member.id}
              className="group relative bg-linear-to-br from-purple-900/40 to-purple-950/40 rounded-3xl p-8 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-600/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative flex flex-col items-center text-center space-y-4">
                {/* Avatar */}
                <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-2xl font-semibold text-white">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection

'use client'

interface TeamMember {
  id: number
  name: string
  title: string
  bio: string
  image: string
}

// Static team data - edit this array to add/remove members
const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    title: 'Lead Architect',
    bio: 'Specializing in scalable cloud infrastructure and serverless solutions.',
    image: 'https://placehold.co/100x100/3b82f6/ffffff?text=AJ',
  },
  {
    id: 2,
    name: 'Bob Smith',
    title: 'Full Stack Engineer',
    bio: '17 years of experience in React, Next.js, and complex Postgres schemas.',
    image: 'https://placehold.co/100x100/10b981/ffffff?text=BS',
  },
  {
    id: 3,
    name: 'Charlie Doe',
    title: 'Data Specialist',
    bio: 'Expert in Drizzle-ORM and performance tuning of relational databases.',
    image: 'https://placehold.co/100x100/f59e0b/ffffff?text=CD',
  },
  {
    id: 4,
    name: 'Dana White',
    title: 'UI/UX Designer',
    bio: 'Focuses on responsive design and modern, accessible user interfaces.',
    image: 'https://placehold.co/100x100/ef4444/ffffff?text=DW',
  },
]

interface TeamMemberCardProps {
  member: TeamMember
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://placehold.co/100x100/cccccc/333333?text=N/A'
  }

  return (
    <div className=" bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] cursor-pointer">
      <img
        className="w-28 h-28 rounded-full mx-auto object-cover mb-4 ring-4 ring-blue-500/30"
        src={member.image}
        alt={`Profile of ${member.name}`}
        onError={handleError}
      />
      <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-blue-600 font-medium uppercase tracking-wider text-center mb-3">
        {member.title}
      </p>
      <p className="text-gray-500 text-center text-sm">{member.bio}</p>
    </div>
  )
}

export default function TeamMembers() {
  return (
    <div className=" bg-linear-to-br from-slate-900 to-indigo-950 py-8 px-4 mt-28 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Meet Our Team
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
            Talented people building great things.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4  group relative bg-linear-to-br from-purple-900/40 to-purple-950/40 rounded-3xl p-8 border border-purple-800/30 hover:border-purple-600/50 ">
          {TEAM_MEMBERS.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}
type Event = {
    title: string
    description: string
    date?: string
    id: string
}

type Project = {
    title: string
    description: string
    id: string
}

type TeamMember = {
    name: string
    role: string
    id: string
}

type FAQItem = {
    question: string
    answer: string
    id: string
}

type SocialLink = {
    label: string
    link: string
}

export const EVENTS: Event[] = [
    {
        title: 'New Events Coming Soon',
        description: 'Stay tuned for our upcoming events!',
        id: 'event-coming-soon'
    }
]

export const PROJECTS: Project[] = [
    {
        title: 'Project 1',
        description: 'Example AI/ML project with faculty collaboration',
        id: 'project1'
    },
    {
        title: 'Project 2',
        description: 'Example startup partnership project',
        id: 'project2'
    },
    {
        title: 'Project 3',
        description: 'Example student-led research project',
        id: 'project3'
    }
]

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Jonah Bernman',
        role: 'President',
        id: 'member1'
    },
    {
        name: 'Alex Safayan',
        role: 'Executive Member',
        id: 'member2'
    },
    {
        name: 'James Carlin',
        role: 'Executive Member',
        id: 'member3'
    },
    {
        name: 'Jonah Berman',
        role: 'Executive Member',
        id: 'member4'
    }
]

export const FAQ_ITEMS: FAQItem[] = [
    {
        question: 'Who can join?',
        answer: 'Any Northwestern undergrad interested in AI—technical or not.',
        id: 'faq1'
    },
    {
        question: 'Do I need prior experience?',
        answer: 'No! We have roles and learning opportunities for all skill levels.',
        id: 'faq2'
    },
    {
        question: 'What\'s the time commitment?',
        answer: 'For members, attendance is required at weekly club meetings and events. Participation in projects is not required.',
        id: 'faq3'
    },
    {
        question: 'How do I propose a project or speak at an event?',
        answer: 'Email us directly at northwesternaiclub@gmail.com',
        id: 'faq4'
    }
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: 'LinkedIn',
        link: '#'
    },
    {
        label: 'Instagram',
        link: '#'
    },
    {
        label: 'X/Twitter',
        link: '#'
    }
]

export const EMAIL = 'northwesternaiclub@gmail.com'
